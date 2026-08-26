"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-teal/60";

  return (
    <div className="card-surface rounded-2xl p-7 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-white">
        Send us a message
      </h3>
      <p className="mt-1.5 text-sm text-white/45">
        We reply within one business day.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/50">
              Name
            </label>
            <input
              className={inputClass}
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/50">
              Email
            </label>
            <input
              className={inputClass}
              placeholder="you@company.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/50">
              Company
            </label>
            <input
              className={inputClass}
              placeholder="Company name"
              {...register("company")}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/50">
              Budget range
            </label>
            <input
              className={inputClass}
              placeholder="Optional"
              {...register("budget")}
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/50">
            Message
          </label>
          <textarea
            rows={5}
            className={inputClass}
            placeholder="Tell us about the product, the problem or the deadline."
            {...register("message", { required: "Please add a short message" })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full justify-center disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending&hellip;
            </>
          ) : (
            <>
              Send message <ArrowRight size={16} />
            </>
          )}
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 text-sm text-teal">
            <CheckCircle2 size={16} /> Thanks &mdash; your message is on its
            way. We&rsquo;ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-red-400">
            <AlertCircle size={16} /> Something went wrong. Please email us
            directly at info@picosoftsolutions.com.
          </p>
        )}
      </form>
    </div>
  );
}
