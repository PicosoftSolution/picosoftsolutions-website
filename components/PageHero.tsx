import HeroGlow from "./HeroGlow";
import Reveal from "./Reveal";
import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative border-b border-white/[0.06] overflow-hidden">
      <HeroGlow />
      <div className="relative mx-auto max-w-page px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
            {description}
          </p>
        </Reveal>
        {children && (
          <Reveal delay={0.24} className="mt-8">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
