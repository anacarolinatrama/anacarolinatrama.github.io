export type Lang = "pt" | "en";

export type NavItem = { label: string; href: string };

export type Experience = {
  role: string;
  co: string;
  period: string;
  desc: string;
  /** Pode ficar vazio: a lista de tags some. */
  tags: string[];
  /** Opcional: sem texto, a faixa vermelha de aprendizado não aparece. */
  learn?: string;
  /** Oculta o item no site sem apagar o conteúdo. */
  hidden?: boolean;
};

export type SkillGroup = { t: string; items: string[] };

export type Copy = {
  htmlLang: string;
  meta: { title: string; description: string };
  header: { home: string; langLabel: string; navLabel: string };
  nav: NavItem[];
  hero: {
    hello: string;
    firstName: string;
    lastName: string;
    /** Cargo em destaque logo abaixo do nome */
    role: string;
    badge: string;
    intro: string;
    marquee: string;
    cta: string;
    /** Link para a página /cv */
    cvCta: string;
    nowLabel: string;
    now: string[];
    /** Prova rápida: empresas/projetos por onde a Ana passou */
    clientsLabel: string;
    clients: string[];
    camera: {
      speech: string;
      shutterLabel: string;
      brand: string;
      model: string;
      photoPlaceholder: string;
      /** title/text = legenda da polaroid; alt = descrição da foto para leitores de tela */
      captions: { title: string; text: string; alt: string }[];
    };
    links: { n: string; label: string; href: string; arrow?: boolean }[];
  };
  ribbon: string;
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    traits: string[];
    facts: { k: string; v: string }[];
    photoHint: string;
    photoAlt: string;
    fileTag: string;
    note: string;
  };
  exp: {
    kicker: string;
    title: string;
    items: Experience[];
    /** Título do bloco de formação (os cursos ficam em content/cv.ts → education) */
    educationTitle: string;
  };
  /** 02. Projetos no ar — metadados (url, cores) em content/projects.ts, ligados por `id` */
  projects: {
    kicker: string;
    title: string;
    intro: string;
    visit: string;
    roleLabel: string;
    items: { id: string; type: string; desc: string; role: string; tags: string[] }[];
  };
  /** 04. Meu processo — único lugar do site que explica o uso de IA */
  ai: {
    kicker: string;
    title: string;
    intro: string;
    use: { label: string; items: string[] };
    avoid: { label: string; items: string[] };
    example: {
      file: string;
      eyebrow: string;
      steps: { label: string; text: string }[];
      result: string;
    };
  };
  skills: {
    kicker: string;
    badge: string;
    loading: string;
    stickers: [string, string];
    groups: SkillGroup[];
    highlight: string;
    figjamNote: string;
    toolbox: { title: string; lines: string[]; minimize: string; close: string; open: string };
    memo: string;
    ctrlz: string;
    notes: string[];
    notesHint: string;
    /** Aviso abaixo do título de que os post-its são arrastáveis (texto muda entre mouse e toque). */
    dragHint: { lead: string; mouse: string; touch: string };
    mascot: string;
    year: string;
    todo: { title: string; items: string[] };
    fileTag: string;
    boardEnd: string;
    bazinga: string;
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    text: string;
    primaryCta: string;
    linkedinCta: string;
    form: {
      title: string;
      code: string;
      name: string;
      email: string;
      phone: string;
      context: string;
      placeholder: string;
      submit: string;
      /** Aviso curto abaixo do botão (o envio abre o WhatsApp). */
      note: string;
    };
    /** Rótulos da mensagem montada para o WhatsApp. */
    whatsapp: { greeting: string; name: string; email: string; phone: string; context: string };
    sent: { title: string; text: string; retry: string; again: string };
    phoneAlt: string;
    phoneLabel: string;
  };
  footer: { text: string; end: string; top: string };
};
