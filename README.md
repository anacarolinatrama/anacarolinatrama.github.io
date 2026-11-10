# anacarolinatrama

Portfólio de **Ana Carolina Trama** — UX/UI · Product Designer.
Identidade "Bloco 90": blocos de cor chapada, contornos navy, sombras deslocadas e tipografia pesada. Bilíngue PT/EN.

Feito com **Next.js (App Router) + React + Tailwind CSS**, a partir do protótipo de design `V2-Bloco-90-v2` (pasta `v2/` do handoff).

## Rodando localmente

Precisa do [Node.js](https://nodejs.org) 20.9 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Outros comandos: `npm run build` (build de produção), `npm run start` (serve o build), `npm run typecheck`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Todos os textos em português | `content/pt.ts` |
| Todos os textos em inglês | `content/en.ts` |
| WhatsApp, e-mail, LinkedIn e fotos | `content/site.ts` |
| Cores, fontes, sombras, animações | `tailwind.config.ts` e `app/globals.css` |
| Título/descrição da aba e redes sociais | `app/layout.tsx` (usa `meta` de `content/pt.ts`) |

### Fotos

Ficam em `public/photos/`:

- `perfil.webp` — retrato vertical 4:5 da seção "Sobre mim"
- `polaroid-1.webp` … `polaroid-4.webp` — fotos da câmera do hero, na ordem das legendas (Expressão, Detalhes, Conexão, Natureza)

Para trocar, substitua o arquivo mantendo o nome (ou aponte outro caminho em `content/site.ts`).
A descrição de cada foto para leitores de tela fica em `hero.camera.captions[].alt` (`content/pt.ts` / `content/en.ts`).

### Experiências

Ficam em `exp.items` (`content/pt.ts` / `content/en.ts`), do mais recente (01) para o mais antigo.
Para esconder um item sem apagar o texto, adicione `hidden: true` nele.

### Projetos

Cada projeto tem o link, a cor da prévia e (opcional) um print em `content/projects.ts`;
o tipo, a descrição, o papel e as tags ficam em `projects.items` (`content/pt.ts` / `content/en.ts`), com o mesmo `id`.
Os cards usam prints reais da primeira dobra de cada site (`public/projects/*.webp`, 800×500, 16:10), apontados em `image`.
Para atualizar, substitua o arquivo mantendo o nome. Sem `image`, o card mostra uma prévia desenhada em CSS.
No hover/foco (só com mouse e sem "reduzir movimento"), o print da página inteira (`public/projects/*-full.jpg`, 960 px de largura,
capturado a 1440 px e cortado entre seções em ~6000 px) rola dentro da moldura; ele só é baixado no primeiro hover.
Aponte em `fullImage` e registre a altura do arquivo em `fullHeight` (define a duração da rolagem).

### Currículo (/cv)

Página `/cv` com o currículo no visual do site, em PT/EN (`/cv?lang=pt` ou `/cv?lang=en`).
O botão "Baixar PDF" abre a impressão do navegador já formatada em A4 — é só escolher "Salvar como PDF".
Experiências e competências vêm do mesmo conteúdo do portfólio; resumo, ferramentas, formação e idiomas ficam em `content/cv.ts`.

### Formulário de contato

Ao clicar em "Enviar mensagem", o site monta um texto com os campos preenchidos (nome, e-mail, celular formatado e contexto)
e abre o WhatsApp da Ana com a mensagem pronta — a pessoa só toca em enviar.
O número fica em `site.whatsapp` (`content/site.ts`, só dígitos com DDI + DDD) e os rótulos da mensagem em `contact.whatsapp` (`content/pt.ts` / `content/en.ts`).

## Deploy na Vercel

1. Suba este repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório `anacarolinatrama`.
3. A Vercel detecta Next.js sozinha — é só clicar em **Deploy**.
4. (Opcional) Configure um domínio próprio em *Settings → Domains*.

Cada `git push` na branch `main` publica uma nova versão automaticamente.

## Estrutura

```
app/
  layout.tsx          fontes (next/font) + metadata
  page.tsx            composição das seções
  cv/page.tsx         página do currículo (components/cv/CvPage.tsx)
  globals.css         base + keyframes + reduced-motion
  icon.svg            favicon "AT"
components/
  Header.tsx          header fixo + troca PT/EN
  hero/Hero.tsx       hero: nome + cargo em destaque, câmera polaroid (hero/PolaroidCamera.tsx)
  Ribbon.tsx          faixa vermelha rolando
  About.tsx           01. Sobre mim (+ CityScape.tsx)
  Projects.tsx        02. Projetos no ar (links: content/projects.ts; textos: `projects` em pt/en)
  Experience.tsx      03. Trajetória (+ bloco Formação)
  AiSection.tsx       04. IA no processo — onde usa / não usa + caso real (content: `ai`)
  Skills.tsx          05. Competências — mural (skills/: StickyNotes, Toolbox, Mascot)
  Contact.tsx         06. Contato (+ ContactForm.tsx)
  Footer.tsx
  ScrollFx.tsx        revelação das seções ao rolar (`data-reveal`; estilos em globals.css)
  LanguageProvider.tsx  idioma atual (lembrado no navegador)
  ui/                 SectionKicker, Marquee, PhotoSlot
content/              textos PT/EN + links/fotos
public/               telefone-90.png, photos/ (perfil + polaroid), projects/ (prints dos sites)
```
