"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import "./liquid-glass.css";

export interface LiquidGlassOptions {
  radius?: number;
  scale?: number;
  chroma?: number;
  blur?: number;
}

export interface LiquidGlassProps extends LiquidGlassOptions {
  children?: React.ReactNode;
  className?: string;
  enabled?: boolean;
}

const SVG_NS = "http://www.w3.org/2000/svg";

/**
 * Feature-detect real backdrop-filter SVG-reference support (Chromium) vs
 * engines that only understand the plain filter functions (Safari/Firefox).
 * We set a syntactically valid `url()` value and read the property back —
 * browsers that can't parse a filter function reference in backdrop-filter
 * silently drop the declaration, leaving the computed value empty.
 */
function supportsBackdropFilterUrl(): boolean {
  if (typeof document === "undefined") return false;
  const probe = document.createElement("div");
  probe.style.cssText = "backdrop-filter: url(#lg-support-probe); -webkit-backdrop-filter: url(#lg-support-probe);";
  const value = probe.style.backdropFilter || (probe.style as unknown as { webkitBackdropFilter: string }).webkitBackdropFilter;
  return Boolean(value);
}

function roundRectPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

/**
 * Builds the displacement map: a neutral (no-displacement) gray field with a
 * red left→right gradient and a blue top→bottom gradient blended in via
 * "difference", then masked to a blurred, slightly-inset rounded rect so the
 * refraction eases in toward the glass edge instead of distorting evenly
 * across the whole pane (which is how real beveled glass reads).
 */
function buildDisplacementDataUrl(width: number, height: number, radius: number): string {
  const w = Math.max(1, Math.round(width));
  const h = Math.max(1, Math.round(height));

  const base = document.createElement("canvas");
  base.width = w;
  base.height = h;
  const ctx = base.getContext("2d");
  if (!ctx) return "";

  ctx.fillStyle = "rgb(128,128,128)";
  ctx.fillRect(0, 0, w, h);

  ctx.globalCompositeOperation = "difference";
  const gradX = ctx.createLinearGradient(0, 0, w, 0);
  gradX.addColorStop(0, "#000000");
  gradX.addColorStop(1, "#ff0000");
  ctx.fillStyle = gradX;
  ctx.fillRect(0, 0, w, h);

  const gradY = ctx.createLinearGradient(0, 0, 0, h);
  gradY.addColorStop(0, "#000000");
  gradY.addColorStop(1, "#0000ff");
  ctx.fillStyle = gradY;
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = "source-over";

  // Blur the field, then clip it down to an inset rounded rect (destination-in)
  // so it fades to transparent outside the glass shape.
  const inset = document.createElement("canvas");
  inset.width = w;
  inset.height = h;
  const ictx = inset.getContext("2d");
  if (ictx) {
    ictx.filter = "blur(6px)";
    ictx.drawImage(base, 0, 0);
    ictx.filter = "none";
    ictx.globalCompositeOperation = "destination-in";
    roundRectPath(ictx, 1, 1, w - 2, h - 2, radius);
    ictx.fillStyle = "#000";
    ictx.fill();
  }

  // Composite the inset/blurred field over a fully neutral background, so
  // anything outside the rounded rect resolves to "no displacement".
  const final = document.createElement("canvas");
  final.width = w;
  final.height = h;
  const fctx = final.getContext("2d");
  if (!fctx) return base.toDataURL();
  fctx.fillStyle = "rgb(128,128,128)";
  fctx.fillRect(0, 0, w, h);
  fctx.drawImage(inset, 0, 0);
  return final.toDataURL();
}

/**
 * Builds the SVG filter: feImage(displacement map) → three feDisplacementMap
 * passes at slightly staggered scales (one per colour channel) → recombined
 * with feBlend "screen", producing a subtle chroma fringe at the edges like
 * real glass refraction instead of a flat monochrome warp.
 */
function buildFilterSvg(id: string, dataUrl: string, width: number, height: number, scale: number, chroma: number): SVGSVGElement {
  const svg = document.createElementNS(SVG_NS, "svg") as SVGSVGElement;
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.style.position = "absolute";
  svg.style.overflow = "hidden";
  svg.setAttribute("aria-hidden", "true");

  const filter = document.createElementNS(SVG_NS, "filter");
  filter.setAttribute("id", id);
  filter.setAttribute("x", "-20%");
  filter.setAttribute("y", "-20%");
  filter.setAttribute("width", "140%");
  filter.setAttribute("height", "140%");
  filter.setAttribute("color-interpolation-filters", "sRGB");

  const feImage = document.createElementNS(SVG_NS, "feImage");
  feImage.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", dataUrl);
  feImage.setAttribute("href", dataUrl);
  feImage.setAttribute("x", "0");
  feImage.setAttribute("y", "0");
  feImage.setAttribute("width", String(width));
  feImage.setAttribute("height", String(height));
  feImage.setAttribute("result", "map");
  filter.appendChild(feImage);

  const channelScales = [scale * (1 + chroma / 200), scale, scale * (1 - chroma / 200)];
  channelScales.forEach((chScale, i) => {
    const disp = document.createElementNS(SVG_NS, "feDisplacementMap");
    disp.setAttribute("in", "SourceGraphic");
    disp.setAttribute("in2", "map");
    disp.setAttribute("xChannelSelector", "R");
    disp.setAttribute("yChannelSelector", "B");
    disp.setAttribute("scale", String(chScale));
    disp.setAttribute("result", `disp${i}`);
    filter.appendChild(disp);
  });

  const keepMatrices = [
    "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0",
    "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0",
    "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0",
  ];
  keepMatrices.forEach((values, i) => {
    const cm = document.createElementNS(SVG_NS, "feColorMatrix");
    cm.setAttribute("in", `disp${i}`);
    cm.setAttribute("type", "matrix");
    cm.setAttribute("values", values);
    cm.setAttribute("result", `chan${i}`);
    filter.appendChild(cm);
  });

  const blend1 = document.createElementNS(SVG_NS, "feBlend");
  blend1.setAttribute("in", "chan0");
  blend1.setAttribute("in2", "chan1");
  blend1.setAttribute("mode", "screen");
  blend1.setAttribute("result", "blend1");
  filter.appendChild(blend1);

  const blend2 = document.createElementNS(SVG_NS, "feBlend");
  blend2.setAttribute("in", "blend1");
  blend2.setAttribute("in2", "chan2");
  blend2.setAttribute("mode", "screen");
  filter.appendChild(blend2);

  svg.appendChild(filter);
  return svg;
}

export function liquidGlass(el: HTMLElement, opts: LiquidGlassOptions = {}) {
  const { radius = 24, scale = 40, chroma = 4, blur = 10 } = opts;

  if (!supportsBackdropFilterUrl()) {
    el.classList.add("lg-fallback");
    el.style.backdropFilter = `blur(${blur}px) saturate(1.4)`;
    (el.style as unknown as { webkitBackdropFilter: string }).webkitBackdropFilter = el.style.backdropFilter;
    return {
      destroy() {
        el.classList.remove("lg-fallback");
        el.style.backdropFilter = "";
        (el.style as unknown as { webkitBackdropFilter: string }).webkitBackdropFilter = "";
      },
    };
  }

  const id = `liquid-glass-filter-${Math.random().toString(36).slice(2)}`;
  let svgEl: SVGSVGElement | null = null;

  const rebuild = () => {
    const rect = el.getBoundingClientRect();
    const width = rect.width || 1;
    const height = rect.height || 1;
    const dataUrl = buildDisplacementDataUrl(width, height, radius);
    const nextSvg = buildFilterSvg(id, dataUrl, width, height, scale, chroma);
    if (svgEl) svgEl.remove();
    svgEl = nextSvg;
    document.body.appendChild(svgEl);
    const value = `url(#${id}) blur(${blur}px) saturate(1.5)`;
    el.style.backdropFilter = value;
    (el.style as unknown as { webkitBackdropFilter: string }).webkitBackdropFilter = value;
  };

  rebuild();

  const ro = new ResizeObserver(() => rebuild());
  ro.observe(el);

  return {
    destroy() {
      ro.disconnect();
      if (svgEl) svgEl.remove();
      el.style.backdropFilter = "";
      (el.style as unknown as { webkitBackdropFilter: string }).webkitBackdropFilter = "";
    },
  };
}

export function LiquidGlass({ children, className, radius = 24, scale = 40, chroma = 4, blur = 10, enabled = true }: LiquidGlassProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    const instance = liquidGlass(ref.current, { radius, scale, chroma, blur });
    return () => instance.destroy();
  }, [enabled, radius, scale, chroma, blur]);

  return (
    <div ref={ref} className={cn(enabled && "liquid-glass", className)}>
      {children}
    </div>
  );
}
