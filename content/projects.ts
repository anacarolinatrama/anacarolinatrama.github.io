/**
 * Projetos no ar (seção "Projetos"): dados que não mudam com o idioma.
 * Os textos (tipo, descrição, tags) ficam em content/pt.ts e content/en.ts → projects.items,
 * ligados pelo mesmo `id`.
 *
 * `image`: print real da primeira dobra do site (1280×800 reduzido para 800×500, 16:10) em /public/projects.
 * Sem `image`, o card mostra uma prévia desenhada em CSS.
 *
 * `fullImage` + `fullHeight`: print da página inteira (capturado a 1440 px, reduzido para FULL_SHOT_WIDTH
 * de largura, JPG) que rola dentro da moldura no hover/foco. `fullHeight` é a altura do arquivo em px:
 * define a proporção da imagem e a duração da rolagem. Sem eles, o card fica só com o print fixo.
 */
export const FULL_SHOT_WIDTH = 960;

export type ProjectMeta = {
  id: string;
  name: string;
  url: string;
  /** Cor de fundo do site (usada na prévia) */
  bg: string;
  /** Cor de destaque da moldura/prévia, da paleta do portfólio */
  accent: "gold" | "red" | "cream";
  image?: string;
  /** Print da página inteira, rolado no hover (ex.: /projects/castherm-full.jpg) */
  fullImage?: string;
  /** Altura do arquivo de `fullImage` em px (largura = FULL_SHOT_WIDTH) */
  fullHeight?: number;
};

export const projects: ProjectMeta[] = [
  { id: "avellen", name: "Avellen", url: "https://avellen.com.br/pt", bg: "#060E1B", accent: "gold", image: "/projects/avellen.webp", fullImage: "/projects/avellen-full.jpg", fullHeight: 3375 },
  { id: "castherm", name: "Castherm", url: "https://castherm.com.br/", bg: "#0A1428", accent: "red", image: "/projects/castherm.webp", fullImage: "/projects/castherm-full.jpg", fullHeight: 3569 },
  { id: "cabeloliso", name: "Cabeloliso.com", url: "https://cabeloliso.com/", bg: "#050505", accent: "gold", image: "/projects/cabeloliso.webp", fullImage: "/projects/cabeloliso-full.jpg", fullHeight: 4021 },
  { id: "cezar", name: "Cezar Bononi", url: "https://cezarbononi.github.io/", bg: "#060608", accent: "cream", image: "/projects/cezar.webp", fullImage: "/projects/cezar-full.jpg", fullHeight: 3883 },
];
