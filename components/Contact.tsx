"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { ContactForm } from "./ContactForm";
import { useLanguage } from "./LanguageProvider";

const pressable =
  "no-underline border-[3px] border-navy px-[26px] py-4 font-display text-[14px] uppercase shadow-[6px_6px_0_#12224C] transition-[transform,box-shadow] duration-[180ms] ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#12224C]";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const [highlight, setHighlight] = useState(false);
  const [ringing, setRinging] = useState(false);
  // depois do envio o cartão de confirmação é mais baixo: o telefone desce para não cobrir o texto
  const [sent, setSent] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  };

  // "Começar uma conversa": leva até o formulário, foca o 1º campo e pisca a sombra em amarelo
  const focusForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const field = firstFieldRef.current;
    if (!field) return; // formulário já enviado: deixa a âncora rolar normalmente
    e.preventDefault();
    field.closest("form")?.scrollIntoView({ behavior: "smooth", block: "center" });
    field.focus({ preventScroll: true });
    setHighlight(true);
    later(() => setHighlight(false), 700);
  };

  // no toque (sem hover), o telefone toca por alguns segundos
  const ring = () => {
    setRinging(true);
    later(() => setRinging(false), 2400);
  };

  return (
    <section id="contato" className="px-[clamp(12px,3vw,36px)] pt-[clamp(26px,5vw,64px)]">
      <div data-reveal className="relative w-full overflow-hidden border-[3px] border-navy bg-red p-[clamp(22px,4vw,56px)] shadow-[14px_14px_0_#12224C] max-sm:shadow-[8px_8px_0_#12224C] lg:min-h-[719px]">
        {/* decoração */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -right-10 h-[200px] w-[200px] opacity-55"
          style={{
            backgroundImage: "radial-gradient(#12224C 22%, transparent 24%)",
            backgroundSize: "16px 16px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute left-[38%] top-[-30px] h-[230px] w-[230px] opacity-30"
          style={{
            backgroundImage: "radial-gradient(#12224C 1.8px, transparent 1.9px)",
            backgroundSize: "11px 11px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute right-[clamp(14px,3vw,44px)] top-[clamp(14px,3vw,34px)] h-[66px] w-[66px] animate-spin-slow bg-gold"
        />

        <div className="relative flex flex-wrap items-start gap-[clamp(24px,4vw,56px)]">
          {/* ---------- texto ---------- */}
          <div className="min-w-[min(280px,100%)] flex-[1_1_420px]">
            <span className="font-mono text-[10px] uppercase tracking-[.2em] text-cream">06. {c.kicker}</span>
            <h2 className="m-0 mt-3 max-w-[20ch] text-pretty font-display text-[clamp(28px,6vw,72px)] uppercase leading-[.9] text-cream">
              {c.title}
            </h2>
            <p className="m-0 mt-4 max-w-[44ch] text-pretty font-display text-[clamp(15px,1.7vw,20px)] leading-[1.3] text-gold">
              {c.lead}
            </p>
            <p className="m-0 mt-3 max-w-[52ch] text-pretty text-[16px] leading-[1.65] text-white">{c.text}</p>
            <div className="mt-6 flex flex-wrap gap-[10px]">
              <a href="#form-contato" onClick={focusForm} className={cn(pressable, "bg-gold text-navy")}>
                {c.primaryCta}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className={cn(pressable, "bg-navy text-cream")}
              >
                {c.linkedinCta}
              </a>
            </div>
          </div>

          {/* ---------- formulário + telefone ---------- */}
          <div
            onMouseEnter={() => setRinging(true)}
            onMouseLeave={() => setRinging(false)}
            className="relative flex min-w-[min(290px,100%)] flex-[1_1_380px] flex-col justify-center self-stretch pb-[clamp(40px,7vw,96px)]"
          >
            <ContactForm firstFieldRef={firstFieldRef} highlight={highlight} onSentChange={setSent} />

            <button
              type="button"
              onClick={ring}
              aria-label={c.phoneLabel}
              className={cn(
                "relative z-[4] -mr-[clamp(6px,2vw,26px)] w-[clamp(220px,28vw,306px)] -rotate-[7deg] cursor-pointer self-end border-0 bg-transparent p-0",
                sent ? "mt-4" : "-mt-3 md:-mt-[clamp(48px,7vw,86px)]",
                ringing && "animate-ring",
              )}
            >
              {/* fitas adesivas */}
              <span
                aria-hidden="true"
                className="absolute left-[14%] top-[22%] z-[5] h-4 w-[clamp(40px,15%,58px)] -rotate-[16deg] border border-navy/35 bg-cream/[.82] shadow-[1px_2px_0_rgba(18,34,76,.22)]"
              />
              <span
                aria-hidden="true"
                className="absolute right-[11%] top-[56%] z-[5] h-[15px] w-[clamp(36px,14%,52px)] rotate-12 border border-navy/35 bg-cream/[.82] shadow-[1px_2px_0_rgba(18,34,76,.22)]"
              />
              <Image
                src="/telefone-90.png"
                alt={c.phoneAlt}
                width={1536}
                height={1024}
                sizes="(min-width: 1100px) 306px, 240px"
                className="block aspect-[306/240] h-auto w-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
