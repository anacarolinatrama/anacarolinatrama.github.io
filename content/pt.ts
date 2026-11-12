import type { Copy } from "./types";

export const pt: Copy = {
  htmlLang: "pt-BR",
  meta: {
    title: "Ana Carolina Trama — UX/UI & Product Designer",
    description:
      "Ana Carolina Trama, UX/UI & Product Designer. Há 8 anos desenha produtos digitais para banco, mídia e varejo — hoje, no Banco do Brasil.",
  },
  header: { home: "Ana Trama — voltar ao início", langLabel: "idioma /", navLabel: "Seções" },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Quem sou", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Trajetória", href: "#exp" },
    { label: "IA", href: "#ia" },
    { label: "O que faço", href: "#comp" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    hello: "Hello, stranger.",
    firstName: "Ana Carolina",
    lastName: "Trama.",
    role: "UX/UI & Product Designer",
    badge: "Complex? Good.",
    intro:
      "Há 8 anos desenho produtos digitais em contextos cheios de regra, como banco, mídia, varejo e trânsito. Meu trabalho é fazer isso parecer simples para quem usa.",
    marquee:
      "✦ Product Design — UX Strategy — AI + Design — Research — Accessibility — Complex Systems — ✦",
    cta: "Explore meu trabalho",
    cvCta: "Ver currículo",
    nowLabel: "Atualmente",
    now: ["Banco do Brasil, pela Cast group", "São Paulo, Brasil"],
    clientsLabel: "Já desenhei para",
    clients: ["Banco do Brasil", "Itaú Unibanco", "UOL", "Via Varejo", "CPFL", "DER"],
    camera: {
      speech: "Que tal pressionar o botão vermelho? :)",
      shutterLabel: "Disparar a câmera e trocar a fotografia",
      brand: "Land 1000",
      model: "sx-70 ✦ light",
      photoPlaceholder: "Foto",
      captions: [
        {
          title: "Expressão",
          text: "Quanto mais me expresso, mais me conecto.",
          alt: "Ana sorrindo, de óculos, blusa listrada e colares coloridos",
        },
        {
          title: "Detalhes",
          text: "Sempre que posso, olho para o céu.",
          alt: "Ana de óculos escuros, fotografada de baixo com o céu azul e nuvens ao fundo",
        },
        {
          title: "Conexão",
          text: "Novos sons também são novas formas de enxergar o mundo.",
          alt: "Ana de fone de ouvido, sorrindo para a câmera",
        },
        {
          title: "Natureza",
          text: "Sair da rotina também muda minha perspectiva.",
          alt: "Ana ao ar livre, com montanhas e o céu ao fundo",
        },
      ],
    },
    links: [
      { n: "01", label: "Quem sou", href: "#sobre" },
      { n: "02", label: "Projetos", href: "#projetos", arrow: true },
      { n: "03", label: "Trajetória", href: "#exp" },
      { n: "04", label: "Como uso IA", href: "#ia" },
      { n: "05", label: "O que faço", href: "#comp" },
      { n: "06", label: "Contato", href: "#contato", arrow: true },
    ],
  },

  ribbon:
    "pesquisa quali e quanti ✦ benchmark ✦ jornada ✦ análise heurística ✦ protótipo ✦ design system ✦ acessibilidade ✦ handoff ✦",

  about: {
    kicker: "Sobre mim",
    title: "Design é conversa antes de ser tela",
    p1: "Comecei no design gráfico, passei por consultoria, portal de notícias, varejo e energia, e hoje trabalho com produto digital em banco. No caminho, aprendi que a parte mais importante do meu trabalho acontece antes do Figma.",
    p2: "Gosto de começar pelas perguntas chatas: quem usa, onde trava e o que a regra de negócio realmente exige. É daí que sai o fluxo, e é por isso que ele chega ao desenvolvimento com menos idas e vindas.",
    traits: ["Criativa", "Comunicativa", "Curiosa", "Apaixonada por experiências"],
    facts: [
      { k: "Experiência", v: "8 anos" },
      { k: "Setores", v: "Banco, mídia e varejo" },
      { k: "Inegociável", v: "Acessibilidade" },
      { k: "Entrego", v: "Do fluxo ao handoff" },
    ],
    photoHint: "sua foto — retrato vertical",
    photoAlt: "Retrato de Ana Carolina Trama",
    fileTag: "foto_de_perfil.png",
    note: "Boas experiências precisam de fundação: regra entendida, fluxo validado, componente documentado. A tela é a última parte.",
  },

  exp: {
    kicker: "Trajetória",
    title: "Minhas experiências",
    educationTitle: "Formação",
    items: [
      {
        role: "UX/UI & Product Designer",
        co: "Cast group — projeto Banco do Brasil",
        period: "2023 — hoje",
        desc: "Alocada no Banco do Brasil, desenho jornadas e interfaces de produtos digitais usados por milhões de clientes, equilibrando regras de negócio, segurança e simplicidade. No Figma, construo fluxos, protótipos de alta fidelidade e componentes alinhados ao design system, com acessibilidade desde o início. Trabalho lado a lado com PO, negócio e desenvolvimento em squads ágeis, do discovery à entrega.",
        tags: ["Banco do Brasil", "Figma", "IA aplicada", "design system", "acessibilidade"],
        learn: "Em banco, clareza também é segurança.",
      },
      {
        role: "UX/UI & Product Designer",
        co: "NTT DATA Europe & Latam",
        period: "2021 — 2023",
        desc: "Em projetos para Itaú Unibanco, Via Varejo e CPFL, entreguei fluxos de apps e sites, protótipos web e mobile e componentes de design system. Uma regra que adotei no time: nenhum fluxo ia para o desenvolvimento sem antes passar por teste com usuários e por uma revisão técnica com os devs.",
        tags: ["Itaú Unibanco", "Via Varejo", "CPFL", "design system", "ágil"],
        learn: "Hipótese só vira solução depois de passar pelo usuário.",
      },
      {
        role: "UX/UI Designer",
        co: "PeoplePRO — projeto UOL",
        period: "2020",
        desc: "Alocada no UOL (Universo Online), projetei interfaces, produtos e serviços com foco nas necessidades de quem usa: mapas de navegação, protótipos, layouts e participação na definição dos textos. Fiz pesquisas com clientes e análises de concorrentes em busca de melhorias, e criei e implementei a linguagem visual do UOL nos produtos, com styleguides e bibliotecas alinhados ao guia geral. Também acompanhei a montagem dos layouts e apresentei e defendi os conceitos para os clientes internos.",
        tags: ["UOL", "styleguide", "protótipos", "pesquisa com clientes"],
        learn: "Consistência visual é o que faz um produto grande parecer um só.",
      },
      {
        role: "UX/UI Designer",
        co: "Certsys — DER",
        period: "2020 — 2021",
        desc: "Desenhei fluxos críticos de um aplicativo de trânsito com milhões de acessos, em que cada tela carregava uma regra do órgão. Minha entrega mais importante foi o registro das decisões de fluxo: time e cliente pararam de rediscutir o que já estava resolvido.",
        tags: ["app de trânsito", "onboarding", "design system"],
        learn: "Decisão documentada vale mais que protótipo perfeito.",
      },
      {
        role: "Analista de UX/UI",
        co: "Duratex — Estágio",
        period: "2019 — 2020",
        desc: "No estágio, criei peças gráficas para grandes clientes, e-mails marketing, layouts de sites e artes para campanhas de produto. Foi onde aprendi a trabalhar com guia de marca e prazo curto ao mesmo tempo.",
        tags: ["peças gráficas", "e-mail marketing", "layouts web", "campanhas"],
        learn: "Todo aprendizado é mais uma etapa para descobrir o que precisamos.",
      },
      {
        role: "Designer Gráfico",
        co: "Tech Viking — Consultoria Digital",
        period: "2018 — 2019",
        desc: "Em consultoria para pequenas e médias empresas, mapeei a jornada dos clientes e propus melhorias de usabilidade em produtos digitais. Foi ali que percebi que o problema quase nunca está só na tela.",
        tags: ["descoberta", "prototipação", "handoff", "acessibilidade"],
        learn: "Todo produto merece uma boa usabilidade e todo cliente uma boa experiência.",
      },
    ],
  },

  projects: {
    kicker: "Portfólio",
    title: "Projetos no ar",
    intro:
      "Sites publicados que você pode abrir agora — feitos com a Avellen, a consultoria de design e tecnologia da qual faço parte.",
    visit: "Visitar site",
    roleLabel: "Meu papel",
    carousel: "carrossel de projetos",
    previous: "Projetos anteriores",
    next: "Próximos projetos",
    pageStatus: "Página {current} de {total}",
    items: [
      {
        id: "avellen",
        type: "Site institucional",
        desc: "Site da nossa consultoria de design e tecnologia. Organizei a apresentação dos serviços, os planos de site (Essencial, Profissional e Business), os projetos e as perguntas frequentes para levar a pessoa até o contato sem rodeio.",
        role: "UX/UI design",
        tags: ["arquitetura da informação", "planos", "conversão"],
      },
      {
        id: "castherm",
        type: "Catálogo B2B · cliente",
        desc: "Site de uma revenda de instrumentos de medição (Kestrel, Fluke, Dwyer). Catálogo navegável por categoria e por setor, destaques de produtos e pedido de orçamento rápido pelo WhatsApp.",
        role: "UX/UI design",
        tags: ["catálogo", "orçamento via WhatsApp", "B2B"],
      },
      {
        id: "cabeloliso",
        type: "Salão de beleza · Alisamento definitivo",
        desc: "O site apresenta o método de alisamento definitivo do salão, com antes e depois de clientes, vídeos de resultados e agendamento pelo WhatsApp.",
        role: "Design: Ana · Desenvolvimento: Cezar",
        tags: ["antes e depois", "agendamento via WhatsApp", "vídeos"],
      },
      {
        id: "cezar",
        type: "Portfólio",
        desc: "Portfólio de um engenheiro de software focado em frontend, cloud e IA. Visual escuro e “cyber maximalista”, pensado para apresentar projetos técnicos com personalidade.",
        role: "UX/UI design",
        tags: ["portfólio", "dark mode", "direção visual"],
      },
      {
        id: "viny",
        type: "Portfólio pessoal",
        desc: "Portfólio de UX/UI do Viny, designer em formação. A identidade visual conecta suas raízes mineiras ao olhar urbano, com pesquisa, interfaces e cultura de rua.",
        role: "UX/UI design",
        tags: ["identidade visual", "narrativa", "interações"],
      },
    ],
  },

  ai: {
    kicker: "Meu processo",
    title: "IA acelera. Quem decide sou eu.",
    intro:
      "Uso IA como ferramenta de trabalho, não como autora. Ela entra onde o trabalho é repetitivo ou exploratório; a leitura, a decisão e a responsabilidade continuam comigo.",
    use: {
      label: "Uso para",
      items: [
        "gerar variações de microcopy para testar",
        "resumir e organizar anotações de pesquisa",
        "explorar alternativas antes de desenhar",
        "revisar clareza e acessibilidade de textos",
      ],
    },
    avoid: {
      label: "Não uso para",
      items: [
        "decidir prioridade ou escopo",
        "substituir teste com usuário",
        "inserir dados de clientes em ferramentas não aprovadas",
      ],
    },
    // ⚠ Caso de exemplo escrito a partir do trabalho no Banco do Brasil — a Ana deve confirmar
    //   ou trocar pelos detalhes reais (a estrutura contexto → IA → eu → resultado se mantém).
    example: {
      file: "caso_real.txt",
      eyebrow: "Caso real · app bancário",
      steps: [
        {
          label: "Contexto",
          text: "As mensagens de erro de um fluxo do app do banco estavam confusas para quem usava.",
        },
        {
          label: "O que a IA fez",
          text: "Gerou dezenas de variações de texto a partir das regras do fluxo e do guia de linguagem.",
        },
        {
          label: "O que eu fiz",
          text: "Filtrei o que era fiel à regra, cortei o que soava robótico e levei três opções para teste com usuários.",
        },
      ],
      result: "A versão escolhida não foi a mais criativa: foi a mais clara.",
    },
  },

  skills: {
    kicker: "Competências",
    badge: "Mixtape",
    loading: "Loading...",
    stickers: ["← pergunte primeiro.", "Error! bonito não basta."],
    groups: [
      {
        t: "Pesquisa & dados",
        items: [
          "UX Research",
          "Pesquisa quantitativa e qualitativa",
          "Análise heurística",
          "Benchmarking",
          "Teste de usabilidade",
          "Métricas & hipóteses",
        ],
      },
      {
        t: "Estratégia",
        items: ["UX Strategy", "Problem framing", "Análise de jornada", "Regras de negócio", "Priorização"],
      },
      {
        t: "Design de produto",
        items: [
          "Product Design",
          "Interaction Design",
          "Arquitetura da informação",
          "User Flows",
          "UI Design",
          "Prototipação",
        ],
      },
      {
        t: "Sistemas & qualidade",
        items: ["Design Systems", "Componentização", "Acessibilidade", "Usabilidade", "Documentação", "Handoff"],
      },
    ],
    highlight: "regra ↔ tela. design traduz.",
    figjamNote: "isso fazia sentido no FigJam.",
    toolbox: {
      title: "Toolbox.exe",
      lines: ["Figma · FigJam", "AI Tools · Prototyping"],
      minimize: "Minimizar Toolbox",
      close: "Fechar Toolbox",
      open: "Abrir Toolbox",
    },
    memo: "memo.",
    ctrlz: "ctrl + z é autocuidado.",
    notes: [
      "REGRA #01 — Nunca presuma.",
      "REGRA #02 — Pergunte “por quê?” Depois pergunte de novo.",
      "testar > adivinhar",
    ],
    notesHint: "Post-it arrastável. Use as setas do teclado para mover.",
    dragHint: {
      lead: "Psiu!",
      mouse: "Os post it's desse mural saem do lugar, clique e interaja para encontrar o mascote escondido.",
      touch: "Os post it's desse mural saem do lugar, clique e interaja para encontrar o mascote escondido.",
    },
    mascot: "Mascote acenando",
    year: "1998 ★",
    todo: { title: "to-do:", items: ["✓ perguntar", "✓ testar"] },
    fileTag: "versão_final_agora_vai_03.fig",
    boardEnd: "</board>",
    bazinga: "Bazinga!",
  },

  contact: {
    kicker: "Contato",
    title: "Me conta o que está travando.",
    lead: "Fluxo confuso, regra que ninguém entende, produto que precisa sair do papel: não precisa chegar com briefing pronto.",
    text: "Eu começo perguntando. Depois organizo, testo e desenho até fazer sentido para quem vai usar.",
    primaryCta: "Começar uma conversa →",
    linkedinCta: "Conectar no LinkedIn ↗",
    form: {
      title: "Linha aberta ★",
      code: "form. 06",
      name: "Nome",
      email: "E-mail",
      phone: "Celular (opcional)",
      context: "Breve contexto",
      placeholder:
        "Me conta um pouco sobre o projeto, oportunidade ou problema — não precisa estar organizado :)",
      submit: "Enviar mensagem →",
      note: "Abre o WhatsApp com a sua mensagem pronta.",
    },
    whatsapp: {
      greeting: "Olá, Ana! Vim pelo seu portfólio.",
      name: "Nome",
      email: "E-mail",
      phone: "Celular",
      context: "Contexto",
    },
    sent: {
      title: "Quase lá. ★",
      text: "Abri o WhatsApp com a sua mensagem pronta — é só tocar em enviar. Respondo humanos, prometo.",
      retry: "O WhatsApp não abriu? Clique aqui",
      again: "Escrever outra mensagem",
    },
    phoneAlt: "Telefone fixo transparente dos anos 90",
    phoneLabel: "Fazer o telefone tocar",
  },

  footer: {
    text: "Feito à mão, com pesquisa. © 2026 Ana Carolina Trama",
    end: "You've reached the end. ★",
    top: "[ voltar ao topo ↑ ]",
  },
};
