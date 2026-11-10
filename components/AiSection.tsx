"use client";

import { cn } from "@/lib/cn";
import { useLanguage } from "./LanguageProvider";
import { SectionKicker } from "./ui/SectionKicker";

/** Cor de cada etapa do caso: contexto (cream) → IA (navy) → Ana (gold). */
const STEP_THEMES = [
  { box: "bg-cream text-navy", num: "text-red", label: "text-navy/70" },
  { box: "bg-navy text-cream", num: "text-gold", label: "text-gold" },
  { box: "bg-gold text-navy", num: "text-red", label: "text-navy/75" },
];

/** Fita adesiva translúcida (mesma do mural de competências). */
const tape = "absolute h-5 w-[78px] border border-navy/35 bg-cream/[.85]";

/**
 * 04. IA no processo — o único lugar do site que explica como a Ana usa IA:
 * princípio, onde usa / não usa e um caso real em formato de janela retrô.
 */
export function AiSection() {
  const { t } = useLanguage();
  const a = t.ai;

  return (
    <section
      id="ia"
      className="relative overflow-hidden px-[clamp(12px,3vw,36px)] pb-[clamp(20px,3vw,40px)] pt-[clamp(30px,5vw,72px)]"
      style={{
        // papel quadriculado bem suave, para diferenciar do mural logo abaixo
        backgroundImage:
          "linear-gradient(rgba(18,34,76,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18,34,76,.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <SectionKicker number="04" label={a.kicker} className="mb-[clamp(20px,2.6vw,32px)]" />

      <div className="grid items-start gap-[clamp(24px,3.4vw,48px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* ---------- princípio + onde uso / não uso ---------- */}
        <div data-reveal className="flex min-w-0 flex-col gap-5">
          <h2 className="m-0 max-w-[16ch] text-balance font-display text-[clamp(28px,4.2vw,52px)] uppercase leading-[.95] text-navy">
            {a.title}
          </h2>
          <p className="m-0 max-w-[52ch] text-pretty text-[16px] leading-[1.65] text-navy">{a.intro}</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <UseList
              label={a.use.label}
              items={a.use.items}
              icon="✓"
              className="bg-gold shadow-[5px_5px_0_#12224C]"
            />
            <UseList
              label={a.avoid.label}
              items={a.avoid.items}
              icon="✕"
              className="bg-paper shadow-[5px_5px_0_#C6362A]"
            />
          </div>
        </div>

        {/* ---------- caso real ---------- */}
        <figure data-reveal style={{ "--i": 2 } as React.CSSProperties} className="relative m-0 min-w-0">
          <span aria-hidden="true" className={`${tape} left-[40px] top-[-11px] z-[3] -rotate-3`} />
          <span aria-hidden="true" className={`${tape} right-[48px] top-[-11px] z-[3] rotate-[2.5deg]`} />

          <div className="border-[3px] border-navy bg-paper shadow-[10px_10px_0_#C6362A] max-sm:shadow-[6px_6px_0_#C6362A]">
            <div className="flex items-center justify-between gap-2 border-b-[3px] border-navy bg-steel px-[7px] py-1">
              <span className="font-mono text-[10px] uppercase tracking-[.1em] text-navy">{a.example.file}</span>
              <span aria-hidden="true" className="flex gap-1">
                <span className="grid h-[14px] w-[14px] place-items-center border border-navy bg-cream font-mono text-[9px] leading-none text-navy">
                  _
                </span>
                <span className="grid h-[14px] w-[14px] place-items-center border border-navy bg-red font-mono text-[9px] leading-none text-cream">
                  ×
                </span>
              </span>
            </div>

            <div className="flex flex-col gap-5 p-[clamp(16px,2.4vw,28px)]">
              <figcaption className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-red">
                <span aria-hidden="true" className="h-[9px] w-[9px] animate-blink bg-red" />
                {a.example.eyebrow}
              </figcaption>

              <ol className="m-0 grid list-none gap-[26px] p-0 md:grid-cols-3 md:gap-[18px]">
                {a.example.steps.map((step, i) => {
                  const th = STEP_THEMES[i % STEP_THEMES.length];
                  const last = i === a.example.steps.length - 1;
                  return (
                    <li
                      key={step.label}
                      className={cn("relative flex flex-col gap-2 border-2 border-navy p-4", th.box)}
                    >
                      <span className="flex items-baseline gap-2">
                        <span className={cn("font-display text-[22px] leading-none", th.num)}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className={cn("font-mono text-[10px] uppercase tracking-[.14em]", th.label)}>
                          {step.label}
                        </span>
                      </span>
                      <span className="text-pretty text-[14px] leading-[1.5]">{step.text}</span>

                      {/* seta para a próxima etapa */}
                      {!last && (
                        <span
                          aria-hidden="true"
                          className="absolute z-[2] grid h-7 w-7 place-items-center rounded-full border-2 border-navy bg-gold font-display text-[13px] leading-none text-navy max-md:-bottom-[23px] max-md:left-1/2 max-md:-ml-[14px] max-md:rotate-90 md:-right-[23px] md:top-1/2 md:-mt-[14px]"
                        >
                          →
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>

              <p className="m-0 flex items-center gap-[9px] bg-red px-3 py-[10px]">
                <span aria-hidden="true" className="h-3 w-3 flex-none bg-cream" />
                <span className="font-display text-[13px] uppercase leading-[1.3] text-white">{a.example.result}</span>
              </p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

function UseList({
  label,
  items,
  icon,
  className,
}: {
  label: string;
  items: string[];
  icon: string;
  className: string;
}) {
  return (
    <div className={cn("border-[3px] border-navy p-4", className)}>
      <h3 className="m-0 mb-3 font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-navy">{label}</h3>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {items.map((it) => (
          <li key={it} className="flex gap-2 text-[14px] leading-[1.45] text-navy">
            <span aria-hidden="true" className="flex-none font-display text-red">
              {icon}
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
