import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const NAVIGATE = [
  { href: "/services", label: "Services" },
  { href: "/company", label: "Company" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 11.94 2S1.88 6.5 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.85c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.35h-1.2c-1.18 0-1.55.74-1.55 1.5v1.8h2.64l-.42 2.91h-2.22V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/pico-soft-solutions-1a0297230",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61556809764877",
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/picosoftsolutions/",
    label: "Instagram",
    icon: InstagramIcon,
  },
];

function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className="h-7 w-7 shrink-0"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="7" fill="#14E0C9" />
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="inherit"
        fontWeight="700"
        fontSize="13"
        fill="#05080f"
      >
        P
      </text>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();

  return (
    <footer className="border-t border-white/[0.06] bg-[#05080f]">
      <div className="mx-auto max-w-page px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-base font-semibold text-white">
                PicoSoft <span className="text-teal">Solutions</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Empower. Encourage. Create. We engineer high-quality, agile
              business products and platforms that deliver measurable value.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/50 transition-colors hover:border-teal/40 hover:text-teal"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAVIGATE.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`text-sm transition-colors ${
                        isActive
                          ? "text-teal font-medium"
                          : "text-white/50 hover:text-teal"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
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
                +91 90101 30777 +91 90107 30777
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