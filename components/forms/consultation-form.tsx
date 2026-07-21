"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Input, Textarea, Label } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { whatsappLink, mailtoLink } from "@/config/site";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  companyName: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(8, "Enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about your project"),
});

type FormValues = z.infer<typeof schema>;

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit(data: FormValues) {
    // Frontend-only build: no backend to receive this. We hand off to
    // WhatsApp/email so the inquiry still reaches the team directly.
    const summary = `New inquiry from ${data.fullName}\nCompany: ${data.companyName || "-"}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nBudget: ${data.budget || "-"}\nDetails: ${data.message}`;
    window.open(whatsappLink(summary), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-success" />
        <h3 className="mt-4 text-xl font-semibold text-text">Success! We&apos;ll contact you soon.</h3>
        <p className="mt-2 max-w-sm text-[15px] text-text-muted">
          Your inquiry has been prepared. If WhatsApp didn&apos;t open automatically, you can also
          reach us directly via email.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            Send Another Inquiry
          </Button>
          <Button variant="ghost" asChild>
            <a href={mailtoLink("New Consultation Request")}>Email Us Instead</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-[var(--radius-xl)] border border-neutral-200 bg-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" aria-invalid={!!errors.fullName} {...register("fullName")} />
          {errors.fullName ? <p className="mt-1 text-sm text-error">{errors.fullName.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" {...register("companyName")} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" aria-invalid={!!errors.email} {...register("email")} />
          {errors.email ? <p className="mt-1 text-sm text-error">{errors.email.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" aria-invalid={!!errors.phone} {...register("phone")} />
          {errors.phone ? <p className="mt-1 text-sm text-error">{errors.phone.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="service">Service Interested In</Label>
          <Select id="service" aria-invalid={!!errors.service} defaultValue="" {...register("service")}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </Select>
          {errors.service ? <p className="mt-1 text-sm text-error">{errors.service.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="budget">Budget (optional)</Label>
          <Select id="budget" defaultValue="" {...register("budget")}>
            <option value="">Select a range</option>
            <option value="Under ₹25,000">Under ₹25,000</option>
            <option value="₹25,000 - ₹75,000">₹25,000 - ₹75,000</option>
            <option value="₹75,000 - ₹2,00,000">₹75,000 - ₹2,00,000</option>
            <option value="₹2,00,000+">₹2,00,000+</option>
          </Select>
        </div>
      </div>
      <div className="mt-5">
        <Label htmlFor="message">Project Details</Label>
        <Textarea id="message" rows={5} aria-invalid={!!errors.message} {...register("message")} />
        {errors.message ? <p className="mt-1 text-sm text-error">{errors.message.message}</p> : null}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" disabled={isSubmitting} className="sm:w-auto">
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Submit Inquiry
        </Button>
        <Button type="button" variant="secondary" size="lg" asChild>
          <a href={whatsappLink("Hi ShreeFX Digitals, I'd like to schedule a call.")} target="_blank" rel="noopener noreferrer">
            Schedule a Call
          </a>
        </Button>
      </div>
    </form>
  );
}
