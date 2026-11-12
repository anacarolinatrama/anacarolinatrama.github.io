import type { Copy } from "./types";

// Espelho de content/pt.ts. Onde o texto em PT é o mesmo do protótipo, segue a tradução do
// i18n.js (v2/); onde o PT mudou depois do i18n, a tradução foi refeita a partir do PT atual.
export const en: Copy = {
  htmlLang: "en",
  meta: {
    title: "Ana Carolina Trama — UX/UI & Product Designer",
    description:
      "Ana Carolina Trama, UX/UI & Product Designer. 8 years designing digital products for banking, media and retail — currently at Banco do Brasil.",
  },
  header: { home: "Ana Trama — back to top", langLabel: "language /", navLabel: "Sections" },
  nav: [
    { label: "Home", href: "#inicio" },
    { label: "About", href: "#sobre" },
    { label: "Projects", href: "#projetos" },
    { label: "Experience", href: "#exp" },
    { label: "AI", href: "#ia" },
    { label: "Skills", href: "#comp" },
    { label: "Contact", href: "#contato" },
  ],

  hero: {
    hello: "Hello, stranger.",
    firstName: "Ana Carolina",
    lastName: "Trama.",
    role: "UX/UI & Product Designer",
    badge: "Complex? Good.",
    intro:
      "For 8 years I've designed digital products in rule-heavy contexts like banking, media, retail and transit. My job is to make all of that feel simple for the people using it.",
    marquee:
      "✦ Product Design — UX Strategy — AI + Design — Research — Accessibility — Complex Systems — ✦",
    cta: "Explore my work",
    cvCta: "View résumé",
    nowLabel: "Currently",
    now: ["Banco do Brasil, via Cast group", "São Paulo, Brazil"],
    clientsLabel: "I've designed for",
    clients: ["Banco do Brasil", "Itaú Unibanco", "UOL", "Via Varejo", "CPFL", "DER"],
    camera: {
      speech: "How about pressing the red button? :)",
      shutterLabel: "Fire the camera and switch the photo",
      brand: "Land 1000",
      model: "sx-70 ✦ light",
      photoPlaceholder: "Photo",
      captions: [
        {
          title: "Expression",
          text: "The more I express myself, the more I connect.",
          alt: "Ana smiling, wearing glasses, a striped top and colorful necklaces",
        },
        {
          title: "Details",
          text: "Whenever I can, I look up at the sky.",
          alt: "Ana in sunglasses, photographed from below against a blue sky with clouds",
        },
        {
          title: "Connection",
          text: "New sounds are also new ways of seeing the world.",
          alt: "Ana wearing headphones, smiling at the camera",
        },
        {
          title: "Nature",
          text: "Stepping out of routine changes my perspective too.",
          alt: "Ana outdoors, with mountains and sky in the background",
        },
      ],
    },
    links: [
      { n: "01", label: "About me", href: "#sobre" },
      { n: "02", label: "Projects", href: "#projetos", arrow: true },
      { n: "03", label: "Experience", href: "#exp" },
      { n: "04", label: "How I use AI", href: "#ia" },
      { n: "05", label: "Skills", href: "#comp" },
      { n: "06", label: "Contact", href: "#contato", arrow: true },
    ],
  },

  ribbon:
    "qual & quant research ✦ benchmark ✦ journey ✦ heuristic analysis ✦ prototype ✦ design system ✦ accessibility ✦ handoff ✦",

  about: {
    kicker: "About me",
    title: "Design is a conversation before it is a screen",
    p1: "I started in graphic design, went through consulting, a news portal, retail and energy, and today I work on digital products in banking. Along the way, I learned that the most important part of my work happens before Figma.",
    p2: "I like to start with the boring questions: who uses it, where it gets stuck and what the business rule actually requires. That's where the flow comes from, and it's why it reaches development with less back-and-forth.",
    traits: ["Creative", "Communicative", "Curious", "In love with experiences"],
    facts: [
      { k: "Experience", v: "8 years" },
      { k: "Industries", v: "Banking, media & retail" },
      { k: "Non-negotiable", v: "Accessibility" },
      { k: "I deliver", v: "From flow to handoff" },
    ],
    photoHint: "your photo — vertical portrait",
    photoAlt: "Portrait of Ana Carolina Trama",
    fileTag: "profile_photo.png",
    note: "Good experiences need a foundation: rules understood, flows validated, components documented. The screen is the last part.",
  },

  exp: {
    kicker: "Experience",
    title: "Where the work happened",
    educationTitle: "Education",
    items: [
      {
        role: "UX/UI & Product Designer",
        co: "Cast group — Banco do Brasil project",
        period: "2023 — now",
        desc: "On the Banco do Brasil account, I design journeys and interfaces for digital products used by millions of customers, balancing business rules, security and simplicity. In Figma, I build flows, high-fidelity prototypes and components aligned with the design system, with accessibility built in from the start. I work side by side with POs, business and engineering in agile squads, from discovery to delivery.",
        tags: ["Banco do Brasil", "Figma", "applied AI", "design system", "accessibility"],
        learn: "In banking, clarity is security too.",
      },
      {
        role: "UX/UI & Product Designer",
        co: "NTT DATA Europe & Latam",
        period: "2021 — 2023",
        desc: "On projects for Itaú Unibanco, Via Varejo and CPFL, I delivered app and website flows, web and mobile prototypes and design system components. One rule I set for the team: no flow went to development before being tested with users and reviewed with the developers.",
        tags: ["Itaú Unibanco", "Via Varejo", "CPFL", "design system", "agile"],
        learn: "A hypothesis only becomes a solution after it meets the user.",
      },
      {
        role: "UX/UI Designer",
        co: "PeoplePRO — UOL project",
        period: "2020",
        desc: "Allocated to UOL (Universo Online), I designed interfaces, products and services around users' needs: navigation maps, prototypes, layouts and input on the copy. I ran customer research and competitor analysis to find improvements, and created and rolled out UOL's visual language across its products, with styleguides and libraries aligned to the master guide. I also followed layout implementation and presented and defended concepts to internal clients.",
        tags: ["UOL", "styleguide", "prototypes", "customer research"],
        learn: "Visual consistency is what makes a big product feel like one.",
      },
      {
        role: "UX/UI Designer",
        co: "Certsys — DER",
        period: "2020 — 2021",
        desc: "I designed critical flows for a traffic app with millions of sessions, where every screen carried a rule from the agency. My most important deliverable was a record of flow decisions: the team and the client stopped re-debating what had already been settled.",
        tags: ["traffic app", "onboarding", "design system"],
        learn: "A documented decision beats a perfect prototype.",
      },
      {
        role: "UX/UI Analyst",
        co: "Duratex — Internship",
        period: "2019 — 2020",
        desc: "As an intern, I created graphic pieces for major clients, marketing emails, website layouts and art for product campaigns. It's where I learned to work with brand guidelines and tight deadlines at the same time.",
        tags: ["graphic design", "email marketing", "web layouts", "campaigns"],
        learn: "Every lesson is one more step toward discovering what we need.",
      },
      {
        role: "Graphic Designer",
        co: "Tech Viking — Digital Consultancy",
        period: "2018 — 2019",
        desc: "Consulting for small and mid-sized companies, I mapped customer journeys and proposed usability improvements for digital products. That's where I realized the problem is almost never just on the screen.",
        tags: ["discovery", "prototyping", "handoff", "accessibility"],
        learn: "Every product deserves good usability and every customer a good experience.",
      },
    ],
  },

  projects: {
    kicker: "Portfolio",
    title: "Live projects",
    intro:
      "Published sites you can open right now — made with Avellen, the design and technology consultancy I'm part of.",
    visit: "Visit site",
    roleLabel: "My role",
    items: [
      {
        id: "avellen",
        type: "Company website",
        desc: "Website for our design and technology consultancy. I organized the services, the website plans (Essential, Professional and Business), the projects and the FAQ so visitors get to the contact step without detours.",
        role: "UX/UI design",
        tags: ["information architecture", "pricing plans", "conversion"],
      },
      {
        id: "castherm",
        type: "B2B catalog · client",
        desc: "Website for a reseller of measuring instruments (Kestrel, Fluke, Dwyer). A catalog you can browse by category and by industry, featured products and fast quote requests via WhatsApp.",
        role: "UX/UI design",
        tags: ["catalog", "WhatsApp quotes", "B2B"],
      },
      {
        id: "cabeloliso",
        type: "Hair salon · Permanent hair straightening",
        desc: "The site presents the salon's permanent straightening method, with clients' before-and-after photos, result videos and booking via WhatsApp.",
        role: "Design: Ana · Development: Cezar",
        tags: ["before and after", "WhatsApp booking", "videos"],
      },
      {
        id: "cezar",
        type: "Portfolio",
        desc: "Portfolio of a software engineer focused on frontend, cloud and AI. A dark, “cyber maximalist” look designed to present technical work with personality.",
        role: "UX/UI design",
        tags: ["portfolio", "dark mode", "visual direction"],
      },
      {
        id: "viny",
        type: "Personal portfolio",
        desc: "UX/UI portfolio for Viny, a designer in training. Its visual identity connects his roots in Minas Gerais with an urban outlook through research, interfaces and street culture.",
        role: "UX/UI design",
        tags: ["visual identity", "storytelling", "interactions"],
      },
    ],
  },

  ai: {
    kicker: "My process",
    title: "AI speeds things up. I make the call.",
    intro:
      "I use AI as a work tool, not as an author. It comes in where the work is repetitive or exploratory; reading, deciding and owning the result stay with me.",
    use: {
      label: "I use it to",
      items: [
        "generate microcopy variations to test",
        "summarize and organize research notes",
        "explore alternatives before designing",
        "review copy for clarity and accessibility",
      ],
    },
    avoid: {
      label: "I don't use it to",
      items: [
        "decide priority or scope",
        "replace testing with users",
        "enter customer data into unapproved tools",
      ],
    },
    example: {
      file: "real_case.txt",
      eyebrow: "Real case · banking app",
      steps: [
        {
          label: "Context",
          text: "The error messages in a flow of the bank's app were confusing to the people using it.",
        },
        {
          label: "What AI did",
          text: "Generated dozens of copy variations from the flow's rules and the voice & tone guide.",
        },
        {
          label: "What I did",
          text: "Kept what was true to the rule, cut what sounded robotic and took three options to user testing.",
        },
      ],
      result: "The version we chose wasn't the most creative one: it was the clearest.",
    },
  },

  skills: {
    kicker: "Skills",
    badge: "Mixtape",
    loading: "Loading...",
    stickers: ["← ask first.", "Error! pretty isn't enough."],
    groups: [
      {
        t: "Research & data",
        items: [
          "UX Research",
          "Quantitative & qualitative research",
          "Heuristic analysis",
          "Benchmarking",
          "Usability testing",
          "Metrics & hypotheses",
        ],
      },
      {
        t: "Strategy",
        items: ["UX Strategy", "Problem framing", "Journey analysis", "Business rules", "Prioritization"],
      },
      {
        t: "Product design",
        items: [
          "Product Design",
          "Interaction Design",
          "Information Architecture",
          "User Flows",
          "UI Design",
          "Prototyping",
        ],
      },
      {
        t: "Systems & quality",
        items: ["Design Systems", "Componentization", "Accessibility", "Usability", "Documentation", "Handoff"],
      },
    ],
    highlight: "rule ↔ screen. design translates.",
    figjamNote: "this made sense in FigJam.",
    toolbox: {
      title: "Toolbox.exe",
      lines: ["Figma · FigJam", "AI Tools · Prototyping"],
      minimize: "Minimize Toolbox",
      close: "Close Toolbox",
      open: "Open Toolbox",
    },
    memo: "memo.",
    ctrlz: "ctrl + z is self-care.",
    notes: [
      "RULE #01 — Never assume.",
      "RULE #02 — Ask “why?” Then ask again.",
      "testing > guessing",
    ],
    notesHint: "Draggable sticky note. Use the arrow keys to move it.",
    dragHint: {
      lead: "Psst!",
      mouse: "The sticky notes on this board move — click and drag them around.",
      touch: "The sticky notes on this board move — tap and drag them around.",
    },
    mascot: "Waving mascot",
    year: "1998 ★",
    todo: { title: "to-do:", items: ["✓ ask", "✓ test"] },
    fileTag: "final_version_for_real_03.fig",
    boardEnd: "</board>",
    bazinga: "Bazinga!",
  },

  contact: {
    kicker: "Contact",
    title: "Tell me what's stuck.",
    lead: "A confusing flow, a rule nobody understands, a product that needs to get off the ground: you don't need a finished brief.",
    text: "I start by asking. Then I organize, test and design until it makes sense for the people who'll use it.",
    primaryCta: "Start a conversation →",
    linkedinCta: "Connect on LinkedIn ↗",
    form: {
      title: "Lines are open ★",
      code: "form. 06",
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      context: "Brief context",
      placeholder:
        "Tell me a bit about the project, opportunity or problem — it doesn't have to be tidy :)",
      submit: "Send message →",
      note: "Opens WhatsApp with your message ready.",
    },
    whatsapp: {
      greeting: "Hi, Ana! I found you through your portfolio.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      context: "Context",
    },
    sent: {
      title: "Almost there. ★",
      text: "I opened WhatsApp with your message ready — just tap send. I answer humans, I promise.",
      retry: "WhatsApp didn't open? Click here",
      again: "Write another message",
    },
    phoneAlt: "Transparent 90s landline phone",
    phoneLabel: "Make the phone ring",
  },

  footer: {
    text: "Handmade, with research. © 2026 Ana Carolina Trama",
    end: "You've reached the end. ★",
    top: "[ back to top ↑ ]",
  },
};
