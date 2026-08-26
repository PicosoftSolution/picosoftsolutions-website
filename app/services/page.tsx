import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon, { IconName } from "@/components/Icon";
import { services, process } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | PicoSoft Solutions",
  description:
    "Engineering across the full product lifecycle — web, mobile, cloud, data, modernisation and product strategy.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Engineering across the full product lifecycle."
        description="From a first prototype to a platform serving thousands of users, we cover the strategy, design and engineering needed to ship and keep shipping."
      />

      <section className="bg-[#05080f]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={0.06 * (i % 3)}>
                <div className="card-surface h-full rounded-2xl p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <Icon name={service.icon as IconName} size={19} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50">
                    {service.summary}
                  </p>
                  <div className="mt-5 border-t border-white/[0.08] pt-4">
                    <ul className="space-y-1.5">
                      {service.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 text-sm text-white/45"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-teal" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-[#080d17]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <p className="eyebrow">HOW WE WORK</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              A process built for momentum, not paperwork.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={0.08 * i}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <p className="font-display text-sm font-semibold text-teal">
                    {step.step}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#05080f]">
        <div className="mx-auto max-w-page px-6 py-24 text-center lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Tell us what you&rsquo;re building.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mx-auto mt-4 max-w-md text-white/50">
              A short conversation is usually enough to shape scope, timeline
              and budget.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link href="/contact" className="btn-primary mt-8">
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
