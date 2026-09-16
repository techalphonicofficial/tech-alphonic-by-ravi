"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Send,
} from "lucide-react";
import { contactData } from "@/config/contactData ";


export default function ContactForm({
  services = contactData.services,
  onSubmit,
  submitText = contactData.form.submitText,
  compact = false,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serviceFocused, setServiceFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a little about your project.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Contact form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-primary/15 bg-gradient-to-b from-primary/5 to-white px-5 py-12 text-center transition-all duration-500">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm transition-transform duration-500 hover:scale-105">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Message Sent
        </span>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-dark sm:text-3xl">
          Thanks for reaching out!
        </h3>

        <p className="mt-4 max-w-md text-sm leading-6 text-muted">
          We&apos;ve received your enquiry. Our team will review your
          requirements and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-3xl border border-primary/15 bg-white/70 p-6 shadow-sm shadow-primary/5 backdrop-blur-sm transition-all duration-500 sm:p-8"
    >
      {/* FORM HEADER */}
      {!compact && (
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {contactData.form.badge || "START YOUR PROJECT"}
          </span>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-dark sm:text-3xl">
            {contactData.form.title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
            {contactData.form.description}
          </p>
        </div>
      )}

      {/* FIELDS */}
      <div className="space-y-6">
        {/* NAME + EMAIL */}
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Full Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />

          <FormField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>

        {/* PHONE + SERVICE */}
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />

          {/* SERVICE */}
          <div className="relative">
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setServiceFocused(true)}
                onBlur={() => setServiceFocused(false)}
                className={`peer h-12 w-full appearance-none rounded-xl border bg-white/80 px-4 pr-11 pt-3 text-sm text-dark outline-none transition-all duration-300 ease-out focus:bg-white focus:ring-4 ${
                  errors.service
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-primary/20 hover:border-black/40 focus:border-black focus:ring-black/10"
                }`}
              >
                <option value="" hidden />

                {services.map((service) => (
                  <option
                    key={
                      typeof service === "string"
                        ? service
                        : service.value
                    }
                    value={
                      typeof service === "string"
                        ? service
                        : service.value
                    }
                  >
                    {typeof service === "string"
                      ? service
                      : service.label}
                  </option>
                ))}
              </select>

              {/* LABEL */}
              <label
                htmlFor="service"
                className={`pointer-events-none absolute left-4 bg-white px-1 transition-all duration-200 ease-out ${
                  formData.service || serviceFocused
                    ? "top-0 -translate-y-1/2 text-xs font-semibold text-primary"
                    : "top-1/2 -translate-y-1/2 bg-transparent text-sm text-muted"
                }`}
              >
                Service <span className="text-cta">*</span>
              </label>

              {/* DROPDOWN ICON */}
              <ChevronDown
                className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary transition-transform duration-300 ${
                  serviceFocused ? "rotate-180" : ""
                }`}
              />
            </div>

            {errors.service && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {errors.service}
              </p>
            )}
          </div>
        </div>

        {/* MESSAGE */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={compact ? 4 : 6}
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full resize-none rounded-xl border bg-white/80 px-4 pb-3 pt-5 text-sm leading-6 text-dark outline-none transition-all duration-300 ease-out placeholder-transparent focus:bg-white focus:ring-4 ${
              errors.message
                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                : "border-primary/20 hover:border-black/40 focus:border-black focus:ring-black/10"
            }`}
          />

          <label
            htmlFor="message"
            className="pointer-events-none absolute left-4 top-0 -translate-y-1/2 bg-white px-1 text-xs font-semibold text-primary transition-all duration-200 ease-out peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-muted peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary"
          >
            Tell Us About Your Project{" "}
            <span className="text-cta">*</span>
          </label>

          {errors.message && (
            <p className="mt-1.5 text-xs font-medium text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative inline-flex min-h-12 w-50 items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {/* DIAGONAL CTA ANIMATION */}
            <span className="absolute inset-0 translate-x-[-105%] skew-x-[-18deg] bg-cta transition-transform duration-500 ease-out group-hover:translate-x-[-5%]" />

            <span className="relative flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-6" />
                  {submitText}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </span>
          </button>
        </div>

        {/* PRIVACY */}
        {/* <p className="text-center text-xs leading-5 text-muted">
          Your information is safe with us. We&apos;ll only use it to respond
          to your enquiry.
        </p> */}
      </div>
    </form>
  );
}

/* =========================================================
   REUSABLE FLOATING LABEL INPUT
========================================================= */

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  error,
  required = false,
}) {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer h-12 w-full rounded-xl border bg-white/80 px-4 pt-3 text-sm text-dark outline-none transition-all duration-300 ease-out placeholder-transparent focus:bg-white focus:ring-4 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-primary/20 hover:border-black/40 focus:border-black focus:ring-black/10"
        }`}
      />

      {/* FLOATING LABEL */}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-4 top-0 -translate-y-1/2 bg-white px-1 text-xs font-semibold text-primary transition-all duration-200 ease-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-muted peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary"
      >
        {label} {required && <span className="text-cta">*</span>}
      </label>

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}