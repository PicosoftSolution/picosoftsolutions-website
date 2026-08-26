import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work | PicoSoft Solutions",
  description:
    "Work that moved the numbers — case studies across logistics, field services, retail, healthcare, manufacturing and finance.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="CASE STUDIES"
        title="Work that moved the numbers."
        description="We've built experience across a wide range of industries, bringing valuable insight to every new engagement. Here is a selection of the problems we've solved."
      />

      <section className="bg-[#05080f]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.title} delay={0.06 * (i % 2)}>
                <div className="card-surface h-full rounded-2xl p-7">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="eyebrow text-[11px]">{cs.category}</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/45">
                      {cs.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">
                    {cs.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50">
                    {cs.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
                    {cs.stats.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-white/55"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-[#080d17]">
        <div className="mx-auto max-w-page px-6 py-24 text-center lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Your project could be next.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mx-auto mt-4 max-w-md text-white/50">
              Share the problem and we&rsquo;ll come back with an approach,
              not a sales deck.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link href="/contact" className="btn-primary mt-8">
              Contact us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
