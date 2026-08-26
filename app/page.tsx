import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, Quote } from "lucide-react";
import HeroGlow from "@/components/HeroGlow";
import Reveal from "@/components/Reveal";
import Icon, { IconName } from "@/components/Icon";
import { services, testimonials, caseStudies, stats } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <HeroGlow />
        <div className="relative mx-auto max-w-page px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-28">
          <Reveal>
            <p className="eyebrow">EMPOWER &middot; ENCOURAGE &middot; CREATE</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-[1.08] text-white sm:text-6xl">
              Software that <span className="text-gradient">drives your business</span> forward.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Pico Soft Solutions builds high-quality, creative and agile
              business products &mdash; web applications, mobile apps and web
              services engineered to deliver measurable value to your
              customers.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Let&rsquo;s build your app <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/[0.08] pt-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-white/45">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-white/[0.06] bg-[#05080f]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="eyebrow">WHAT WE DO</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Drive your business with our agile solutions.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <Reveal key={service.title} delay={0.08 * i}>
                <div className="card-surface group h-full rounded-2xl p-7 transition-colors duration-300 hover:border-teal/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <Icon name={service.icon as IconName} size={19} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50">
                    {service.homeSummary}
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-transform group-hover:translate-x-0.5"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pico Soft Solutions */}
      <section className="border-b border-white/[0.06] bg-[#080d17]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
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

            <div>
              <Reveal>
                <p className="eyebrow">WHY PICO SOFT SOLUTIONS</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Dedicated, driven and intuitive engineering partners.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-base leading-relaxed text-white/55">
                  Our team takes pride in creating solutions that help
                  businesses reach their goals. High-quality, robust products
                  make a real difference &mdash; and delivering true value to
                  our customers has always been our measure of success.
                </p>
              </Reveal>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: "Rocket" as IconName,
                    title: "Agile and detail-oriented",
                    text: "Two-week increments, demoable outcomes and no surprises at the end of a milestone.",
                  },
                  {
                    icon: "Sparkles" as IconName,
                    title: "Innovative and highly intuitive",
                    text: "We interrogate the problem before writing code, then design the simplest system that solves it.",
                  },
                  {
                    icon: "ShieldCheck" as IconName,
                    title: "Built to last",
                    text: "Tested, documented and maintainable systems your team can own long after launch.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={0.16 + i * 0.06}>
                    <div className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                        <Icon name={item.icon} size={17} />
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-white/50">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.36}>
                <Link href="/company" className="btn-secondary mt-8">
                  About our company
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Client voices */}
      <section className="border-b border-white/[0.06] bg-[#05080f]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="eyebrow">CLIENT VOICES</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
              What our clients say about us.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={0.1 * i}>
                <div className="card-surface h-full rounded-2xl p-8">
                  <Quote className="text-teal" size={26} />
                  <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                    {t.quote}
                  </p>
                  <div className="mt-6 border-t border-white/[0.08] pt-4 text-sm">
                    <span className="font-semibold text-white">{t.name}</span>
                    <span className="text-white/40"> &mdash; {t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest case studies */}
      <section className="border-b border-white/[0.06] bg-[#080d17]">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow">LATEST CASE STUDIES</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Experience across a wide range of industries.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/work" className="btn-secondary">
                View all projects
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((cs, i) => (
              <Reveal key={cs.title} delay={0.08 * i}>
                <div className="card-surface h-full rounded-2xl p-7">
                  <p className="eyebrow text-[11px]">{cs.category}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {cs.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50">
                    {cs.homeSummary}
                  </p>
                  <Link
                    href="/work"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal"
                  >
                    Read case study <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#05080f]">
        <div className="mx-auto max-w-page px-6 py-24 text-center lg:px-10">
          <Reveal>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
              <Layers size={22} />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              We carry more than just good coding skills
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
              Let&rsquo;s build your app.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <Link href="/contact" className="btn-primary mt-8">
              Contact us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
