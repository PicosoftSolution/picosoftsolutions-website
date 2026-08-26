export default function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-teal/10 blur-[120px]" />
      <svg
        className="absolute inset-x-0 top-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 1280 640"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        <path
          d="M-100 420 C 220 300, 380 520, 640 380 S 1100 200, 1380 300"
          stroke="url(#g1)"
          strokeWidth="1.5"
        />
        <path
          d="M-100 300 C 260 180, 420 420, 700 260 S 1140 90, 1380 180"
          stroke="url(#g1)"
          strokeWidth="1"
        />
        <path
          d="M-100 500 C 260 460, 500 560, 760 460 S 1160 340, 1380 420"
          stroke="url(#g1)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2dd4c8" stopOpacity="0" />
            <stop offset="50%" stopColor="#2dd4c8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#05080f_100%)]" />
    </div>
  );
}
