import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | PicoSoft Solutions",
  description:
    "Tell us about the product, the problem or the deadline. We'll come back with a clear view of scope, sequence and cost.",
};

const DETAILS = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "support@picosoftsolutions.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 93905 00486",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "#907, Tower 9, MyHome Tridasa, Radial Road 7, Tellapur, Hyderabad, Telangana 502032",
  },
  {
    icon: Clock,
    label: "RESPONSE TIME",
    value: "Within one business day",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's build your app."
        description="Tell us about the product, the problem or the deadline. We'll come back with a clear view of scope, sequence and cost."
      />

      <section className="bg-[#05080f]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex justify-center">
            <Reveal>
              <div className="w-full max-w-[372px]">
                <h3 className="font-display text-lg font-semibold text-white">
                  Contact details
                </h3>

                <div className="mt-5 space-y-4">
                  {DETAILS.map((d) => (
                    <div
                      key={d.label}
                      className="card-surface flex items-center gap-4 rounded-xl p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                        <d.icon size={17} />
                      </div>

                      <div>
                        <p className="text-[11px] tracking-wide text-white/40">
                          {d.label}
                        </p>

                        <p className="text-sm font-medium text-white">
                          {d.value}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="card-surface rounded-xl p-5">
                    <h4 className="font-display text-sm font-semibold text-white">
                      Prefer a working session?
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      We&rsquo;re happy to run a free 45-minute discovery call
                      to pressure-test scope and sequencing before any
                      commitment.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}