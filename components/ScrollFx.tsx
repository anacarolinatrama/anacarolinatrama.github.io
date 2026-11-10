"use client";

import { useEffect } from "react";

/**
 * Revelação ao rolar: elementos com `data-reveal` entram (sobem + aparecem) quando chegam à tela.
 * Estilos em app/globals.css ("revelação ao rolar"). `--i` no style do elemento escalona a entrada.
 *
 * Sem JS ou com "reduzir movimento", nada fica escondido: o estado inicial só vale depois que
 * este componente põe a classe `fx` no <html>. Ao terminar, os atributos saem do elemento,
 * para não interferir nos hovers/transições que ele já tem.
 */
export function ScrollFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.setAttribute("data-shown", "");
          const delay = Number(el.style.getPropertyValue("--i") || 0) * 80;
          timers.push(
            window.setTimeout(() => {
              el.removeAttribute("data-reveal");
              el.removeAttribute("data-shown");
            }, 1300 + delay),
          );
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    root.classList.add("fx");
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      root.classList.remove("fx");
    };
  }, []);

  return null;
}
