import { useState, type FormEvent, type ChangeEvent } from "react";
import { X } from "lucide-react";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxfC-WeLzCsvumeB2y-8IAt3IGCZEX9GeSlUkthe7hDTdNgdFv3xIsUB3_Aeh0OehoEbg/exec";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  if (!open) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0f19] p-7">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/50 hover:text-white"
        >
          <X size={20} />
        </button>

        <h3 className="font-display text-2xl font-semibold text-white">
          Let's build your app
        </h3>
        <p className="mt-2 text-sm text-white/50">
          Fill this out and we'll get back to you.
        </p>

        {status === "success" ? (
          <p className="mt-6 text-teal">
  Thank you! We've received your message — our team will reach out to you shortly.
</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text" name="name" placeholder="Your name" required
              value={form.name} onChange={handleChange}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder:text-white/30"
            />
            <input
              type="email" name="email" placeholder="Email address" required
              value={form.email} onChange={handleChange}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder:text-white/30"
            />
            <textarea
              name="message" placeholder="Tell us about your project" required rows={4}
              value={form.message} onChange={handleChange}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder:text-white/30"
            />
            <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center">
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong, try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}