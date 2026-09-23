import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/company", label: "Company" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
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

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[#05080f]/90 backdrop-blur-md border-white/10"
          : "bg-[#05080f] border-white/[0.06]"
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5">
                      <LogoMark />
                      <span className="font-display text-base font-semibold text-white">
                        PicoSoft <span className="text-teal">Solutions</span>
                      </span>
                    </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <button onClick={() => setShowModal(true)} className="btn-primary">
            Start a project
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#05080f] px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-lg px-3 py-2.5 text-sm ${
                    active ? "bg-white/5 text-white" : "text-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary mt-4 w-full justify-center"
          >
            Start a project <ArrowRight size={16} />
          </button>
        </div>
      )}

      <ContactModal open={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}