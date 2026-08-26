import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const NAVIGATE = [
  { href: "/services", label: "Services" },
  { href: "/company", label: "Company" },
  { href: "/work", label: "Case studies" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] bg-[#05080f]">
      <div className="mx-auto max-w-page px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt="PicoSoft Solutions logo"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="font-display text-base font-semibold text-white">
                PicoSoft <span className="text-teal">Solutions</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Empower. Encourage. Create. We engineer high-quality, agile
              business products and platforms that deliver measurable value.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAVIGATE.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 transition-colors hover:text-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail size={15} className="text-teal shrink-0" />
                support@picosoftsolutions.com
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone size={15} className="text-teal shrink-0" />
                +91 93905 00486
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <MapPin size={15} className="text-teal shrink-0" />
                Remote-first, serving clients worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Pico Soft Solutions. All rights reserved.</p>
          <p className="tracking-[0.16em]">EMPOWER &middot; ENCOURAGE &middot; CREATE</p>
        </div>
      </div>
    </footer>
  );
}
