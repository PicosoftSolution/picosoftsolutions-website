import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { values, milestones } from "@/lib/data";
import Icon, { IconName } from "@/components/Icon";


export const metadata: Metadata = {
  title: "Company | PicoSoft Solutions",
  description:
    "Empower. Encourage. Create. A senior team that treats your product like its own.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR COMPANY"
        title="Empower. Encourage. Create."
        description="We are dedicated, driven and intuitive. Our team has always taken pride in creating solutions that help businesses reach their goals — and delivering true value has always been our goal."
      />

      <section className="bg-[#05080f]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="eyebrow">WHO WE ARE</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  A senior team that treats your product like its own.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-base leading-relaxed text-white/55">
                  Pico Soft Solutions brings together engineers, designers
                  and product thinkers who have shipped software in
                  regulated, high-traffic and operationally complex
                  environments. We understand that high-quality, robust
                  products bring a real difference to our customers.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 text-base leading-relaxed text-white/55">
                  We stay deliberately small so that the people who scope
                  your project are the people who build it &mdash; no
                  handovers, no diluted context.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <Link href="/contact" className="btn-primary mt-8">
                  Work with us
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="pb-6 lg:pb-0">
                <Image
                  src="/images/team-workspace.png"
                  alt="The Pico Soft Solutions team collaborating around code on a laptop and monitor"
                  width={640}
                  height={534}
                  className="h-auto w-full max-w-[560px]"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
  <section className="border-t border-white/[0.06] bg-[#080d17]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <p className="eyebrow">WHAT WE VALUE</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
              Principles that shape every engagement.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <Icon name={v.icon as IconName} size={18} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-[#05080f]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <p className="eyebrow">MILESTONES</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
              Our journey so far.
            </h2>
          </Reveal>

          <div className="relative mt-12 max-w-2xl border-l border-white/[0.1] pl-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={0.08 * i}>
                <div className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[2.32rem] top-1 h-3 w-3 rounded-full border-2 border-[#05080f] bg-teal" />
                  <p className="font-display text-sm font-semibold text-teal">
                    {m.year}
                  </p>
                  <p className="mt-1.5 text-white/60">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
