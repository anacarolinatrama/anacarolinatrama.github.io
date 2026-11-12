"use client";

import { useLanguage } from "./LanguageProvider";
import { Mascot } from "./skills/Mascot";
import { StickyNotes } from "./skills/StickyNotes";
import { Toolbox } from "./skills/Toolbox";
import { SectionKicker } from "./ui/SectionKicker";

/** Bolinha "tachinha" usada nos enfeites do mural. */
function Dot({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute h-[13px] w-[13px] rounded-full border-2 border-navy shadow-[2px_2px_0_rgba(18,34,76,.35)] ${className}`}
    />
  );
}

/** Fita adesiva translúcida. */
const tape = "absolute h-5 w-[78px] border border-navy/35 bg-cream/[.85]";

/** 05. Competências — mural com o repertório, a Toolbox e os post-its. */
export function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section
      id="comp"
      className="relative overflow-hidden px-[clamp(12px,3vw,36px)] pb-[clamp(20px,3vw,40px)] pt-[clamp(30px,5vw,72px)]"
    >
      {/* ---------- enfeites do mural ---------- */}
      <div aria-hidden="true" className="pointer-events-none">
        <div
          className="absolute -left-10 top-[18%] h-[220px] w-[220px] opacity-[.16]"
          style={{
            backgroundImage: "radial-gradient(#12224C 1.6px, transparent 1.7px)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="absolute -right-[30px] bottom-[8%] h-[180px] w-[180px] rounded-full border-[3px] border-red opacity-25" />
        <span className="absolute bottom-[16%] left-[2%] -rotate-[14deg] text-[34px] leading-none text-gold [text-shadow:2px_2px_0_#12224C]">
          ★
        </span>
        <span className="absolute right-[4%] top-[44%] -rotate-[8deg] text-[26px] leading-none text-navy">☆</span>
        <Dot className="left-[5%] top-[9%] bg-red" />
        <Dot className="left-[66%] top-[4%] bg-gold" />
        <Dot className="bottom-[9%] left-[30%] bg-navy" />
        <Dot className="bottom-[24%] right-[8%] bg-red" />
        <span className="absolute left-[1.5%] top-[32%] -rotate-[7deg] border-2 border-navy bg-gold px-[6px] py-[3px] font-mono text-[9px] tracking-[.14em] text-navy">
          {s.fileTag}
        </span>
        <span className="absolute bottom-[5%] right-[12%] -rotate-[3deg] font-mono text-[10px] tracking-[.14em] text-red">
          {s.boardEnd}
        </span>
        <span className="absolute left-[76%] top-[58%] h-[34px] w-[34px] rotate-[14deg] border-2 border-dashed border-navy opacity-30" />
      </div>

      <SectionKicker number="05" label={s.kicker} className="mb-[18px]">
        <span
          aria-hidden="true"
          className="inline-block -rotate-[4deg] border-2 border-navy bg-red px-[6px] py-[3px] font-mono text-[8px] uppercase tracking-[.14em] text-cream"
        >
          {s.badge}
        </span>
        <span aria-hidden="true" className="font-mono text-[10px] uppercase tracking-[.18em] text-red">
          {s.loading}
        </span>
      </SectionKicker>

      {/* aviso: os post-its são arrastáveis */}
      <p className="relative m-0 mb-[18px] flex max-w-none items-start gap-[10px] font-mono text-[12px] leading-[1.5] text-navy">
        <span
          aria-hidden="true"
          className="grid h-7 w-7 flex-none -rotate-6 place-items-center border-2 border-navy bg-gold text-[15px] leading-none text-navy shadow-[2px_2px_0_#12224C]"
        >
          ✥
        </span>
        <span className="pt-[4px]">
          <strong className="font-semibold text-red">{s.dragHint.lead}</strong>{" "}
          <span className="[@media(pointer:coarse)]:hidden">{s.dragHint.mouse}</span>
          <span className="hidden [@media(pointer:coarse)]:inline">{s.dragHint.touch}</span>
        </span>
      </p>

      <div className="mb-[14px] flex flex-wrap items-center gap-[10px]">
        <span className="inline-block -rotate-[1.5deg] bg-gold px-2 py-1 font-mono text-[12px] text-navy">
          {s.stickers[0]}
        </span>
        <span className="inline-block -rotate-2 border-2 border-navy bg-red px-[9px] py-[5px] font-display text-[11px] uppercase tracking-[.14em] text-cream">
          {s.stickers[1]}
        </span>
      </div>

      <div className="relative flex flex-wrap items-start gap-[clamp(14px,2.6vw,28px)]">
        {/* ---------- quadro do repertório ---------- */}
        <div className="relative min-w-0 flex-[1_1_520px]">
          <div aria-hidden="true">
            <span className={`${tape} left-[34px] top-[-11px] z-[3] -rotate-3`} />
            <span className={`${tape} right-[44px] top-[-11px] z-[3] rotate-[2.5deg]`} />
            <span className="absolute -left-[14px] top-[34%] z-[4] h-[11px] w-[11px] rounded-full border-2 border-navy bg-gold shadow-[2px_2px_0_rgba(18,34,76,.3)]" />
            <span className="absolute -right-[14px] bottom-[20%] z-[4] h-[11px] w-[11px] rounded-full border-2 border-navy bg-navy" />
            <span className="absolute -left-[18px] bottom-[-14px] z-[4] h-[18px] w-16 rotate-[4deg] border border-navy/35 bg-cream/[.85]" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] overflow-hidden rounded-[12px] border-[3px] border-navy bg-paper">
            {s.groups.map((g) => (
              <div key={g.t} className="border-b-2 border-r-2 border-navy p-5">
                <h3 className="m-0 mb-3 font-display text-[14px] font-normal uppercase text-red">{g.t}</h3>
                <ul className="m-0 flex list-none flex-col gap-[6px] p-0">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="border-b-2 border-dotted border-navy/40 py-[7px] text-[14px] font-medium text-navy transition-colors hover:bg-gold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="mt-12 flex flex-wrap items-center gap-[7px]">
            <span className="text-[15px] text-gold [text-shadow:1.5px_1.5px_0_#12224C]">★</span>
            <span className="bg-[linear-gradient(transparent_55%,#E5A81E_55%)] font-mono text-[12px] text-navy">
              {s.highlight}
            </span>
            <span className="relative inline-block max-w-[150px] rotate-[2.5deg] border-2 border-navy bg-cream px-[11px] pb-3 pt-[10px] font-mono text-[11px] leading-[1.35] text-navy shadow-[3px_3px_0_rgba(18,34,76,.3)]">
              {s.figjamNote}
              <span className="absolute left-1/2 top-[-8px] -ml-[6px] h-[11px] w-[11px] rounded-full border-2 border-navy bg-red" />
            </span>
          </div>
        </div>

        {/* ---------- coluna lateral: toolbox + memo + post-its ---------- */}
        <div className="relative flex min-w-[210px] flex-[0_1_240px] flex-col gap-4">
          <Toolbox
            title={s.toolbox.title}
            lines={s.toolbox.lines}
            labels={{ minimize: s.toolbox.minimize, close: s.toolbox.close, open: s.toolbox.open }}
          />

          <div aria-hidden="true" className="flex flex-wrap items-center gap-2">
            <span className="h-3 w-3 rounded-full border-2 border-navy bg-red shadow-[2px_2px_0_rgba(18,34,76,.3)]" />
            <span className="h-3 w-3 rounded-full border-2 border-navy bg-gold shadow-[2px_2px_0_rgba(18,34,76,.3)]" />
            <span className="h-0 flex-1 border-t-2 border-dashed border-navy/35" />
            <span className="font-mono text-[9px] tracking-[.16em] text-red">{s.memo}</span>
          </div>
          <span className="font-mono text-[12px] text-navy">{s.ctrlz}</span>

          <div className="relative min-h-[186px]">
            <Mascot label={s.mascot} className="absolute left-[26px] top-[170px] z-[1] h-[84px] w-[78px]" />
            <StickyNotes notes={s.notes} hint={s.notesHint} />
            <span aria-hidden="true" className="text-[15px]">
              ✥
            </span>
          </div>

          <div aria-hidden="true" className="relative flex items-start gap-2">
            <div className="relative flex h-[60px] w-[86px] -rotate-3 items-end border-2 border-navy bg-cream p-[5px] shadow-[3px_3px_0_rgba(18,34,76,.28)]">
              <span className="absolute left-1/2 top-[-8px] -ml-[6px] h-[11px] w-[11px] rounded-full border-2 border-navy bg-red" />
              <span className="font-mono text-[8px] tracking-[.12em] text-navy">{s.year}</span>
            </div>
            <div
              className="h-[60px] w-[66px] rotate-[4deg] border-2 border-navy opacity-55"
              style={{ background: "repeating-linear-gradient(0deg, #12224C 0 3px, #F3E7C8 3px 6px)" }}
            />
            <div className="flex flex-col gap-1 pt-[6px]">
              <span className="font-mono text-[9px] tracking-[.1em] text-navy">{s.todo.title}</span>
              {s.todo.items.map((it) => (
                <span key={it} className="font-mono text-[9px] text-red">
                  {it}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* enfeites soltos (só em telas largas, onde cabem) */}
        <span
          aria-hidden="true"
          className="absolute left-[calc(100%-48px)] top-[277px] hidden rotate-6 border-2 border-navy bg-navy px-[7px] py-1 font-mono text-[9px] tracking-[.16em] text-cream lg:block"
        >
          {s.bazinga}
        </span>
        <span
          aria-hidden="true"
          className="absolute left-[30%] top-[279px] hidden rotate-12 text-[22px] leading-none text-red lg:block"
        >
          ✦
        </span>
      </div>
    </section>
  );
}
