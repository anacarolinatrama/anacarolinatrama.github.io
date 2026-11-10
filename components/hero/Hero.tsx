"use client";

import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/cn";
import { useLanguage } from "../LanguageProvider";
import { PolaroidCamera } from "./PolaroidCamera";

export function Hero() {
  const { lang, t } = useLanguage();
  const h = t.hero;

  return (
    <section id="inicio" className="relative px-[clamp(12px,3vw,36px)] pt-[clamp(20px,4vw,44px)]">
      <div className="relative overflow-hidden border-[3px] border-navy bg-navy p-[clamp(20px,4vw,48px)] shadow-[12px_12px_0_#E5A81E] max-sm:shadow-[8px_8px_0_#E5A81E]">
        {/* xadrez decorativo */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-[44%] opacity-90"
          style={{
            backgroundImage: "repeating-conic-gradient(#1B3072 0% 25%, #12224C 0% 50%)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative flex flex-wrap items-start justify-between gap-[clamp(28px,5vw,64px)]">
          {/* ---------- coluna de texto ---------- */}
          <div className="hero-in flex min-w-[min(280px,100%)] max-w-[620px] flex-[1_1_380px] flex-col gap-[clamp(14px,2vw,22px)]">
            <div className="flex flex-wrap items-center gap-[10px]">
              <span className="inline-block bg-gold px-[10px] py-[5px] font-mono text-[10px] uppercase tracking-[.2em] text-navy">
                {h.hello}
              </span>
              <span aria-hidden="true" className="text-[15px] text-red">
                ★
              </span>
            </div>

            <div className="flex flex-wrap items-end gap-[14px]">
              <h1 className="m-0 max-w-[15ch] font-display text-[clamp(34px,6.6vw,82px)] uppercase leading-[.86] tracking-[-.03em] text-cream">
                {h.firstName}
                <br />
                <span className="text-gold">{h.lastName}</span>
              </h1>
              <span className="mb-[10px] inline-flex -rotate-[4deg] items-center gap-[6px] whitespace-nowrap rounded-[3px] border-2 border-navy bg-red px-[9px] py-[5px] font-mono text-[10px] uppercase tracking-[.14em] text-cream shadow-[3px_3px_0_#12224C]">
                {h.badge} <span className="text-gold">→</span>
              </span>
            </div>

            {/* cargo em destaque */}
            <p className="m-0 inline-block self-start border-2 border-navy bg-gold px-[14px] py-2 font-display text-[clamp(15px,2vw,24px)] uppercase leading-none tracking-[.01em] text-navy shadow-[5px_5px_0_#C6362A]">
              {h.role}
            </p>

            <p className="m-0 max-w-[46ch] text-pretty text-[clamp(14px,1.5vw,18px)] leading-[1.5] text-mist">
              {h.intro}
            </p>

            <div className="flex flex-col items-start gap-4">
              <div
                className="w-full overflow-hidden border-y border-slate py-[7px]"
                style={{
                  maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
                  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
                }}
              >
                <Marquee
                  text={h.marquee}
                  trackClassName="animate-marquee"
                  className="pr-[22px] font-mono text-[10px] uppercase tracking-[.18em] text-cream"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projetos"
                  className="group inline-flex items-center gap-2 rounded-[6px] border-2 border-navy bg-gold px-[14px] py-[9px] font-display text-[12px] uppercase tracking-[.1em] text-navy no-underline shadow-[4px_4px_0_#12224C] transition-colors hover:bg-red hover:text-cream max-md:min-h-[44px]"
                >
                  {h.cta}{" "}
                  <span className="font-mono text-[13px] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href={`/cv?lang=${lang}`}
                  className="inline-flex items-center gap-2 rounded-[6px] border-2 border-gold px-[14px] py-[9px] font-display text-[12px] uppercase tracking-[.1em] text-gold no-underline transition-colors hover:bg-gold hover:text-navy max-md:min-h-[44px]"
                >
                  {h.cvCta} <span className="font-mono text-[13px]">↓</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-[6px] border-t-2 border-gold pt-[14px]">
              <span className="font-mono text-[10px] uppercase tracking-[.2em] text-gold">{h.nowLabel}</span>
              <span className="text-[13px] leading-[1.5] text-cream">
                {h.now.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </span>
              <span className="mt-[10px] font-mono text-[10px] uppercase tracking-[.2em] text-gold">
                {h.clientsLabel}
              </span>
              <ul className="m-0 flex list-none flex-wrap gap-[6px] p-0">
                {h.clients.map((c) => (
                  <li
                    key={c}
                    className="border border-cream/35 px-2 py-1 font-mono text-[10px] uppercase tracking-[.08em] text-cream"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- selo giratório: fica sobre a borda do xadrez, no vão entre as colunas (só em telas largas) ---------- */}
          <div
            aria-hidden="true"
            className="hero-stamp pointer-events-none absolute left-[calc(56%-64px)] top-[36%] hidden h-[140px] w-[140px] -rotate-[8deg] place-items-center rounded-full border-[3px] border-navy bg-gold shadow-[5px_5px_0_#C6362A] min-[1400px]:grid"
          >
            <svg viewBox="0 0 140 140" className="absolute inset-0 h-full w-full animate-spin-slow">
              <defs>
                <path id="hero-stamp-path" d="M70 70 m-50 0 a50 50 0 1 1 100 0 a50 50 0 1 1 -100 0" />
              </defs>
              <text className="fill-navy font-display text-[12px] uppercase" textLength="306" lengthAdjust="spacing">
                <textPath href="#hero-stamp-path">{h.stamp}</textPath>
              </text>
            </svg>
            <span className="grid h-[58px] w-[58px] place-items-center rounded-full border-[3px] border-navy bg-navy font-display text-[26px] leading-none text-gold">
              ★
            </span>
          </div>

          {/* ---------- coluna da câmera ---------- */}
          <div className="hero-in-late flex min-w-[min(240px,100%)] flex-[0_1_clamp(240px,32vw,400px)] flex-col gap-[clamp(16px,2.4vw,26px)]">
            <PolaroidCamera />

            <div className="flex flex-col gap-[2px]">
              {h.links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "flex items-baseline gap-[10px] border-t border-slate py-2 font-display text-[13px] uppercase tracking-[.08em] text-cream no-underline transition-colors hover:text-gold max-md:py-3",
                    i === h.links.length - 1 && "border-b",
                  )}
                >
                  <span className="font-mono text-red">{l.n}</span>— {l.label}
                  {l.arrow && <span className="text-gold">↗</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
