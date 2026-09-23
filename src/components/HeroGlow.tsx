export default function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#071522]">

      {/* Background image */}
      <img
        src="/images/hero-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Soft dark overlay for text readability */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,30,0.72)_0%,rgba(7,18,30,0.45)_25%,rgba(7,18,30,0.15)_55%,rgba(7,18,30,0)_100%)]" />

      {/* Very soft bottom fade */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_75%,rgba(5,15,25,0.35)_100%)]" />

    </div>
  );
}