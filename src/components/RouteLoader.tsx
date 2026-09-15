import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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

export default function RouteLoader() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05080f]/90 backdrop-blur-sm">
      <div className="relative h-14 w-14 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-[#14E0C9]/20 border-t-[#14E0C9] animate-spin" />
        <LogoMark />
      </div>
    </div>
  );
}