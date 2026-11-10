"use client";

import { site } from "@/content/site";
import { CityScape } from "./CityScape";
import { useLanguage } from "./LanguageProvider";
import { PhotoSlot } from "./ui/PhotoSlot";
import { SectionKicker } from "./ui/SectionKicker";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="sobre" className="px-[clamp(12px,3vw,36px)] py-[clamp(26px,5vw,64px)]">
      <SectionKicker number="01" label={a.kicker} className="mb-[18px]" />

      <div className="grid grid-cols-1 items-start gap-[14px] lg:grid-cols-3">
        {/* retrato */}
        <div data-reveal className="relative aspect-[4/5] w-full border-[3px] border-navy bg-navy shadow-[10px_10px_0_#E5A81E] max-lg:max-w-[440px]">
          <PhotoSlot
            src={site.photos.profile}
            alt={a.photoAlt}
            placeholder={a.photoHint}
            sizes="(min-width: 1024px) 33vw, 440px"
          />
          <span className="absolute -left-[10px] bottom-4 -rotate-[4deg] border-2 border-navy bg-red px-[10px] py-[6px] font-mono text-[10px] uppercase tracking-[.14em] text-white">
            {a.fileTag}
          </span>
        </div>

        {/* texto */}
        <div className="flex min-w-0 flex-col gap-[14px] self-stretch lg:col-span-2">
          <h2 data-reveal style={{ "--i": 1 } as React.CSSProperties} className="m-0 max-w-[22ch] text-pretty font-display text-[clamp(26px,4.4vw,54px)] uppercase leading-[.98] text-navy">
            {a.title}
          </h2>

          <div data-reveal style={{ "--i": 2 } as React.CSSProperties} className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-3">
            <p className="m-0 border-[3px] border-navy bg-white p-[18px] text-[15px] leading-[1.65]">{a.p1}</p>
            <p className="m-0 border-[3px] border-navy bg-gold p-[18px] text-[15px] leading-[1.65]">{a.p2}</p>
          </div>

          <ul data-reveal className="m-0 flex list-none flex-wrap gap-2 p-0">
            {a.traits.map((tr) => (
              <li
                key={tr}
                className="-rotate-2 bg-navy px-[15px] py-[9px] font-display text-[12px] uppercase text-cream"
              >
                {tr}
              </li>
            ))}
          </ul>

          <dl data-reveal className="m-0 flex flex-wrap border-[3px] border-navy">
            {a.facts.map((f) => (
              <div
                key={f.k}
                className="min-w-0 flex-auto border-r-2 border-navy bg-cream px-4 py-[14px] last:border-r-0"
              >
                <dt className="font-mono text-[9px] uppercase tracking-[.16em] text-red">{f.k}</dt>
                <dd className="m-0 mt-[5px] whitespace-nowrap font-display text-[16px] text-navy">{f.v}</dd>
              </div>
            ))}
          </dl>

          {/* skyline + recado */}
          <div className="relative -mb-[10px] flex min-h-[150px] flex-auto items-end justify-end overflow-visible border-b-4 border-navy">
            <p className="absolute bottom-[46px] left-0 z-[2] m-0 w-[min(468px,100%)] -rotate-[1.5deg] text-pretty border-2 border-navy bg-cream px-[11px] py-2 font-mono text-[10px] leading-[1.45] tracking-[.01em] text-navy shadow-[4px_4px_0_#E5A81E]">
              {a.note}
            </p>
            <CityScape className="block h-full max-h-[133px] w-auto max-w-full overflow-visible" />
          </div>
        </div>
      </div>
    </section>
  );
}
