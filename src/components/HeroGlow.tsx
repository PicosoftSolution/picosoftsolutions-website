export default function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#1b2431]">
      {/* background image */}
      <img
        src="/images/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* left vignette so your headline/buttons stay readable on top */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#151c26_0%,rgba(21,28,38,0.85)_28%,rgba(21,28,38,0)_58%)]" />

      {/* bottom fade so the stats row sits on a clean surface */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,#12181f_100%)]" />
    </div>
  );
}