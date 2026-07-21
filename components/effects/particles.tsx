const PALETTE = ["#f18029", "#f1a519", "#c600a8", "#cc3d41", "#cf833e", "#f2b048", "#f6d2a6"];

function buildParticles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const seed = i * 37.5;
    const left = (Math.sin(seed) * 0.5 + 0.5) * 100;
    const top = (Math.cos(seed * 1.7) * 0.5 + 0.5) * 100;
    const size = 3 + (i % 5);
    const duration = 14 + (i % 9) * 2;
    const delay = -(i * 2.3);
    const drift = (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 6);
    const color = PALETTE[i % PALETTE.length];
    return { left, top, size, duration, delay, drift, color };
  });
}

const particles = buildParticles(20);

export function Particles() {
  return (
    <div className="liquid-particles" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          style={
            {
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              "--duration": `${p.duration}s`,
              "--delay": `${p.delay}s`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
