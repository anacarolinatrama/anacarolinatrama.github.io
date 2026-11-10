import { cn } from "@/lib/cn";

type Props = {
  number: string;
  label: string;
  /** "light": texto navy + régua amarela com contorno. "dark": texto gold + régua vermelha (fundo navy). */
  tone?: "light" | "dark";
  className?: string;
  /** Elementos extras depois da régua (ex.: selos). */
  children?: React.ReactNode;
};

/** Abertura de seção: "NN. TÍTULO" + régua que preenche o resto da linha. */
export function SectionKicker({ number, label, tone = "light", className, children }: Props) {
  return (
    <div data-reveal className={cn("flex items-baseline gap-[10px]", className)}>
      <span
        className={cn(
          "font-display text-[clamp(22px,3.4vw,40px)] uppercase",
          tone === "light" ? "text-navy" : "text-gold",
        )}
      >
        {number}. {label}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "kick-rule h-[6px] flex-1",
          tone === "light" ? "border-y-2 border-navy bg-gold" : "bg-red",
        )}
      />
      {children}
    </div>
  );
}
