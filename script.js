/* EDITE AQUI: troque links, textos, tecnologias e imagens dos projetos. */
const projects = [
  {
    title: "Redirecionador e Encurtador de Links & Event-Driven Data Lake",
    category: "infraestrutura",
    filtros: ["Dev Full Stack", "Engenharia de Dados", "NoSQL Database"],
    url: "https://redirecionador-fdet.onrender.com?utm_source=portfolio&utm_medium=pagina-web",
    description: [
      "Microserviço backend em TypeScript e Node.js/Express para redirecionamento inteligente de links com injeção dinâmica de metadados Open Graph (1200x630px) para robôs do LinkedIn e WhatsApp.",
      "Arquitetura de Ingestão de Dados Orientada a Eventos: separação automática entre tráfego humano e crawlers, capturando parâmetros UTM, IP, Referer e User-Agent sem impacto na latência do usuário (non-blocking I/O).",
      "Data Lake Serverless: envio assíncrono dos eventos em tempo real para o Supabase Storage estruturado com particionamento temporal Hive Partitioning (raw/ano=YYYY/mes=MM/dia=DD/).",
      "DevOps & FinOps: hospedagem no Render.com integrada a robô keep-alive no cron-job.org para disponibilidade 24/7 sem custos de infraestrutura.",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Supabase Storage",
      "Data Lake (Hive Partitioning)",
      "render.com",
      "cron-job.org",
    ],
    image: "img/redirecionador.png",
    theme: "project-coral",
  },
  {
    title: "GarimpaTrip — Inteligência Turística & Agregador de Viagens",
    category: "produtividade",
    filtros: ["Dev Full Stack", "Engenharia de Dados"],
    url: "https://redirecionador-fdet.onrender.com/garimpatrip?utm_source=site-portfolio&utm_medium=pagina-web",
    description: [
      "Plataforma responsiva desenvolvida com Next.js 16 (App Router), TypeScript e React 19, utilizando Server Components (SEO) e Client Components reativos.",
      "Arquitetura BFF via Route Handlers (/api/*) para consumo assíncrono paralelo de 8+ APIs externas (voos, câmbio, clima) com controle de concorrência e middleware na borda (proxy.ts).",
      "Banco relacional Supabase (PostgreSQL 15 com JSONB) com regras de Row Level Security (RLS), Stored Procedures (RPCs) e autenticação Google OAuth 2.0.",
      "Pipeline de dados em Python/DuckDB orquestrado via GitHub Actions para processamento de séries temporais e carga no Google BigQuery.",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (PostgreSQL)",
      "Python",
      "DuckDB",
      "Google BigQuery",
      "Github Actions",
      "Vercel",
    ],
    image: "img/garimpatrip.png",
    theme: "project-sun",
  },

  {
    title: "Sem Papas — Web Chat Realtime & Salas Efêmeras",
    category: "produtividade",
    filtros: ["Dev Full Stack", "NoSQL Database"],
    url: "https://redirecionador-fdet.onrender.com/sem-papas?utm_source=site-portfolio&utm_medium=pagina-web",
    description: [
      "App de mensageria instantânea com React 19, TypeScript e Firebase Cloud Firestore NoSQL, com ouvintes bidirecionais em tempo real (onSnapshot).",
      "Salas temporárias efêmeras (duração de 3h e até 25 usuários) via QR Code sem necessidade de login, e salas privadas permanentes com autenticação.",
      "Segurança defensiva via Firebase Auth (verificação obrigatória de e-mail) e regras de permissão granulares no Firestore (Security Rules).",
      "Automação serverless agendada via GitHub Actions + Node.js Admin SDK para expurgo e retenção efêmera de dados a custo zero.",
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Firebase (Firestore & Auth)",
      "Tailwind CSS",
      "Google Cloud Platform",
      "Github Actions",
      "QrCode",
    ],
    image: "img/sem-papas.png",
    theme: "project-mint",
  },
  {
    title: "Scrumbão — Gestão Ágil Scrum & Multi-Tenant",
    category: "Gestão de Projetos",
    filtros: ["Dev Full Stack", "Gestão de Projetos"],
    url: "https://redirecionador-fdet.onrender.com/scrumbao?utm_source=site-portfolio&utm_medium=pagina-web",
    description: [
      "Aplicação Full-Stack reativa (React 19 SPA, TypeScript, Vite) para governança e treinamento prático em metodologia Scrum/Kanban.",
      "Demonstração pública interativa em memória local (sem cadastro) e workspaces privados com convites seguros por e-mail e link direto.",
      "Banco de dados Supabase (PostgreSQL 15) com Row Level Security (RLS) para isolamento multi-tenant e Stored Procedures (RPCs) para validação de cotas.",
      "Esteira DevOps com GitHub Actions (Cron Jobs) executando rotinas SQL diárias em nuvem para remoção de contas e workspaces inativos.",
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase (PostgreSQL, RLS, RPC)",
      "Github Actions",
      "Vercel",
    ],
    image: "img/scrumbao.png",
    theme: "project-coral",
  },
  {
    title: "Kambão — Kanban Colaborativo & Supabase Storage",
    category: "produtividade",
    filtros: ["Dev Full Stack"],
    url: "https://redirecionador-fdet.onrender.com/kambao?utm_source=site-portfolio&utm_medium=pagina-web",
    description: [
      "Sistema de gestão de fluxo de trabalho estilo Kanban colaborativo desenvolvido com Next.js 16 (App Router), TypeScript e React 19.",
      "Quadros privados multi-tenant (até 4 participantes), CRUD completo de tarefas, gestão de membros e controle de permissões por grupo.",
      "Upload e download seguro de anexos com gestão de mídias via Supabase Storage (validação de tamanho/quantidade).",
      "Arquitetura de segurança nativa no banco PostgreSQL utilizando políticas rigorosas de Row Level Security (RLS).",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (PostgreSQL & Storage)",
      "Vercel",
    ],
    image: "img/kambao.png",
    theme: "project-sun",
  },
  {
    title: "Grafana Cloud — Observabilidade & Dashboard-as-Code",
    category: "monitoramento",
    filtros: ["Engenharia de Dados", "DevOps / SRE"],
    url: "https://redirecionador-fdet.onrender.com/grafana-monitoramento-sites?utm_source=site-portfolio&utm_medium=pagina-web",
    description: [
      "Painel de observabilidade declarativo via código (Dashboard-as-Code em JSON versionado) conectado ao Google BigQuery (Camada Gold).",
      "Monitoramento de disponibilidade 24/7 (Synthetic Monitoring) com sondas regionais (São Paulo) para análise de SLA, Uptime e latência/ping HTTP.",
      "Real User Monitoring (RUM via Grafana Faro) capturando Core Web Vitals, erros em runtime client-side e telemetria de navegação em tempo real.",
      "Governança FinOps para controle estrito de consumo de cotas gratuitas de APIs e saúde da infraestrutura (Vercel, Supabase, GCP e GitHub Actions).",
    ],
    tech: [
      "Grafana Cloud",
      "Dashboard-as-Code (JSON)",
      "Google BigQuery",
      "Grafana Faro (RUM)",
      "Synthetic Monitoring",
      "FinOps",
      "Google Cloud Platform",
    ],
    image: "img/grafana.png",
    theme: "project-mint",
  },
  {
    title: "Data App Python — Painel Analítico Comercial",
    category: "Business Intelligence",
    filtros: ["Análise de Dados", "Engenharia de Dados"],
    url: "https://redirecionador-fdet.onrender.com/python-streamlit-report1?utm_source=site-portfolio&utm_medium=pagina-web",
    description: [
      "Análise Exploratória de Dados (EDA) e cálculo de KPIs comerciais em tempo real sobre volumosas bases operacionais.",
      "Processamento analítico em alta velocidade utilizando Python e DuckDB como motor OLAP em memória.",
      "Visualizações gráficas dinâmicas com Plotly e exportação parametrizada de relatórios.",
      "Deploy serverless de aplicação de dados interativa via Streamlit Cloud.",
    ],
    tech: ["Python", "Pandas", "DuckDB", "Plotly", "Streamlit Cloud"],
    image: "img/streamlit.PNG",
    theme: "project-coral",
  },
  {
    title: "Painel Financeiro — Excel Online & Office Scripts",
    category: "Business Intelligence",
    filtros: ["Automação", "Análise de Dados"],
    url: "https://redirecionador-fdet.onrender.com/excel-relatorio1?utm_source=site-portfolio&utm_medium=pagina-web",
    description: [
      "Modernização de fluxos corporativos: migração de macros legadas em VBA para Office Scripts em TypeScript executáveis na Web.",
      "Desenvolvimento de dashboard financeiro/operacional completo na suíte Microsoft 365 Web com Power Query e filtros dinâmicos.",
      "Automação de rotinas de consolidação de dados e geração de visão analítica gerencial.",
    ],
    tech: ["Excel Web", "Office Scripts (TypeScript)", "Power Query", "VBA"],
    image: "img/excel.PNG",
    theme: "project-sun",
  },
];
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/* EDITE AQUI: adicione certificados em image: "img/certificado.jpg". */
const skills = [
  {
    name: "HTML5 & CSS3",
    image: "img/logos/html-css.png",
    level: "Avançando",
    description: [
      "Crio páginas semânticas, acessíveis e bem estruturadas, pensando em SEO e em diferentes dispositivos.",
      "Desenvolvo layouts responsivos com Flexbox, Grid e Media Queries; animações suaves e estilos organizados.",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Tailwind CSS",
    image: "img/logos/tailwind-logo.png",
    level: "Praticando",
    description: [
      "Utilizo classes utilitárias e sistemas de design para construir interfaces consistentes com agilidade.",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "JavaScript",
    image: "img/logos/javascript-logo.png",
    level: "Avançando",
    description: [
      "Manipulação do DOM, formulários e validações. Funções e consumo de APIs. ",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "React",
    image: "img/logos/react.png",
    level: "Praticando",
    description: [
      "Aplicações com React 19 utilizando componentes, JSX, props, eventos, gerenciamento de estado e Hooks (useState, useEffect, useReducer, useContext, use e useRef). ",
      "Criação de componentes reutilizáveis, formulários com validação, consumo de APIs e aplicações com React Router.",
      "Gerenciamento de estado com Context API, Zustand e Redux Toolkit.",
      "Desenvolvimento de Custom Hooks e otimização de aplicações com useMemo, useCallback, lazy loading e Suspense.",
      "Testes de componentes e interações com Jest e React Testing Library.",
    ],
    certificates: [
      {
        name: "Curso de React-19 contendo mais de 200 videolaulas apenas de react",
        image: "",
        link: "",
        tools: [
          "Props",
          "conditional rendering",
          "useState",
          "useReducer",
          "useContext",
          "useRef & forwardRef",
          "useEffect",
          "fetch API",
          "Redux",
          "Zustand",
        ],
      },
    ],
    info_extra: "",
  },
  {
    name: "Next.js",
    image: "img/logos/nextjs.png",
    level: "Estudando",
    description: [
      "Aplicações com Next.js 16 utilizando App Router, layouts, Server Components e Client Components.",
      "Conhecimentos em SSR, SSG e ISR, Server Actions, API Routes e integração com bancos de dados.",
      "Implementação de autenticação, autorização e rotas protegidas, incluindo JWT, middleware e login social.",
      "Validação de dados, paginação, tratamento de erros e atualização de dados em tempo real com Server-Sent Events (SSE).",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Excel",
    image: "img/logos/excel.png",
    level: "Avançado",
    description: [
      "Excel Avançado para análise de dados, relatórios gerenciais e automação de processos.",
      "Funções de pesquisa, estatística, matemática e financeira.",
      "Power Query, Power Pivot, Tabelas Dinâmicas, Gráficos Dinâmicos e Dashboards. ",
      "Desenvolvimento de macros utilizando VBA. E macros online com OfficeScripts.",
      "Criação de filtros avançados com OfficeScripts(typescript) no Excel online.",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Typescript",
    image: "img/logos/typescript-logo.png",
    level: "Avançado",
    description: [
      "Tipagem estática, interfaces, type aliases, generics e utility types.",
      "Aplicação na construção de rotas, componentes tipados em React/Next.js",
      "integração segura com APIs/Supabase e automação web via OfficeScripts.",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Figma",
    image: "img/logos/figma.png",
    level: "Praticando",
    description: [
      "Criação de protótipos de baixa e alta fidelidade para aplicações web e mobile. ",
      "Desenvolvimento de wireframes, fluxos de navegação e interfaces focadas em experiência do usuário (UX/UI).",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Salesforce",
    image: "img/logos/salesforce.png",
    level: "Estudando",
    description: [
      "Gestão de contas, contatos, leads e oportunidades.",
      "Relatórios, dashboards e acompanhamento de pipeline comercial.",
      "Qualificação e conversão de leads.",
      "Acompanhamento de leads e oportunidades utilizando Kanban.",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "SQL e Banco de Dados",
    image: "img/logos/postgres.png",
    level: "Praticando",
    description: [
      "Consultas SQL para extração, manipulação e consolidação de dados.",
      "Joins, subqueries, CTEs, funções analíticas (window functions) e tratamento de dados.",
      "Criação e manutenção de Views, Stored Procedures, Triggers e Jobs.",
      "Modelagem e análise de dados para geração de indicadores e relatórios.",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Power BI",
    image: "img/logos/powerBI-logo.png",
    level: "Avançado",
    description: [
      "Extração, transformação e modelagem de dados com Power Query.",
      "Desenvolvimento de medidas, colunas calculadas e KPIs utilizando DAX. ",
      "Criação de dashboards interativos e publicação de relatórios no Power BI Service.",
    ],
    certificates: [
      {
        name: "Power BI",
        image: "",
        link: "",
        tools: [],
      },
    ],
    info_extra: "",
  },
  {
    name: "Python",
    image: "img/logos/python-logo.png",
    level: "Praticando",
    description: [
      "Análise Exploratória de Dados (EDA), manipulação e tratamento de grandes volumes de dados com Pandas e DuckDB.",
      "Construção de gráficos interativos com Plotly e criação e deploy de Data Apps web interativos na nuvem via Streamlit.",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Supabase",
    image: "img/logos/supabase-logo.png",
    level: "Praticando",
    description: [
      "Integração de banco de dados PostgreSQL com Supabase.",
      "Implementação de autenticação de usuários, armazenamento e gestão de arquivos (Storage) com validações",
      "configuração de políticas de segurança e controle de acesso a nível de linha (Row Level Security - RLS)",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Firebase",
    image: "img/logos/firebase-logo.png",
    level: "Praticando",
    description: [
      "Arquitetura Serverless & BaaS (Backend-as-a-Service)",
      "Autenticação e Gestão de Identidade (Firebase Auth)",
      "Banco de Dados Não-Relacional (Cloud Firestore)",
    ],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Node.Js",
    image: "img/logos/node-js-logo.png",
    level: "Praticando",
    description: [],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Express.Js",
    image: "img/logos/express-js-logo.png",
    level: "Praticando",
    description: [],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Grafana",
    image: "img/logos/grafana-logo.png",
    level: "Praticando",
    description: [],
    certificates: [],
    info_extra: "",
  },
  {
    name: "Streamlit",
    image: "img/logos/streamlit-logo.png",
    level: "Praticando",
    description: [],
    certificates: [],
    info_extra: "",
  },
];

const projectsGrid = document.querySelector("#projects-grid");
const projectFilters = document.querySelector("#project-filters");
const skillsGrid = document.querySelector("#skills-grid");
const modal = document.querySelector("#skill-modal");
const closeButton = document.querySelector(".close-button");
let lastFocusedSkill;

const availableFilters = [
  ...new Set(projects.flatMap((project) => project.filtros || [])),
].sort((first, second) => first.localeCompare(second, "pt-BR"));

function renderProjects(selectedFilter = "todos") {
  const visibleProjects =
    selectedFilter === "todos"
      ? projects
      : projects.filter((project) =>
          (project.filtros || []).includes(selectedFilter),
        );

  projectsGrid.innerHTML = visibleProjects
    .map(
      (project) => `
  <article class="project-card">
    <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-preview ${project.theme}" aria-label="Abrir ${project.title} em nova aba">
      <span class="project-number">${String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
      ${
        project.image
          ? `<div class="project-image-frame"><img src="${project.image}" alt="Miniatura do projeto ${project.title}"></div>`
          : `<div class="mock-browser"><strong>${project.title}</strong><span>${project.category}</span><p>Design · código · experiência</p></div>`
      }
      <span class="project-open">↗</span>
    </a>
    <div class="project-info">
      <span>${project.category}</span>
      <h3>${project.title}</h3>
      <div>${project.description.map((item) => `<p class="descritivo">${item}</p>`).join("")}</div>
      <div class="tags">${project.tech.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
  </article>`,
    )
    .join("");
}

projectFilters.innerHTML = ["todos", ...availableFilters]
  .map(
    (filter, index) => `
      <button
        class="project-filter${index === 0 ? " active" : ""}"
        type="button"
        data-filter="${filter}"
        aria-pressed="${index === 0}">
        ${filter === "todos" ? "Mostrar tudo" : filter}
      </button>`,
  )
  .join("");

projectFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  projectFilters.querySelectorAll("[data-filter]").forEach((filterButton) => {
    const isActive = filterButton === button;
    filterButton.classList.toggle("active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });

  renderProjects(button.dataset.filter);
});

renderProjects();

skillsGrid.innerHTML = skills
  .map(
    (skill, index) => `
  <button class="skill-card" type="button" data-skill="${index}" aria-label="Ver detalhes sobre ${skill.name}">
    <span class="skill-logo-frame"><img src="${skill.image}" alt="Logotipo ${skill.name}" loading="lazy"></span>
    <strong>${skill.name}</strong><h6>${skill.level}</h6><span class="skill-arrow">↗</span>
  </button>`,
  )
  .join("");

function openSkill(index, button) {
  const skill = skills[index];
  if (!skill) return;
  lastFocusedSkill = button;
  const logo = document.querySelector("#modal-logo");
  logo.src = skill.image;
  logo.alt = `Logotipo ${skill.name}`;
  document.querySelector("#modal-title").textContent = skill.name;
  document.querySelector("#modal-description").innerHTML = `
  <ul>
    ${skill.description.map((item) => `<li>${item}</li>`).join("")}
  </ul> `;
  document.querySelector("#info-extra").textContent = skill.info_extra;
  // document.querySelector("#certificate-grid").innerHTML = skill.certificates
  //   .map(
  //     (certificate, position) => `
  //     <article class="certificates">
  //       ${
  //         certificate.image
  //           ? `<img src="${certificate.image}" alt="Certificado: ${certificate.name}">`
  //           : `<div class="certificate-placeholder"><b>☆</b><span>CERTIFICADO ${position + 1}</span></div>`
  //       }
  //       <h3>${certificate.name}</h3>
  //       ${certificate.tools && `<div class="tags">${certificate.tools.map((item) => `<span>${item}</span>`).join("")}</div>`}
  //       <small>${certificate.link && `<a href="${certificate.link}">acesse aqui</a>`}</small>

  //     </article>`,
  //   )
  //   .join("");
  modal.hidden = false;
  document.body.classList.add("modal-open");
  closeButton.focus();
}

function closeSkill() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedSkill?.focus();
}

skillsGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-skill]");
  if (button) openSkill(Number(button.dataset.skill), button);
});
closeButton.addEventListener("click", closeSkill);
modal.addEventListener("mousedown", (event) => {
  if (event.target === modal) closeSkill();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeSkill();
});

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
menuButton.addEventListener("click", () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  menuButton.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
mobileNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  mobileNav.hidden = true;
  menuButton.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});

const navLinks = [...document.querySelectorAll(".desktop-nav a")];
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        navLinks.forEach((link) =>
          link.classList.toggle("active", link.hash === `#${entry.target.id}`),
        );
    }),
  { rootMargin: "-40% 0px -50%" },
);
document
  .querySelectorAll("main section[id]")
  .forEach((section) => observer.observe(section));

/* Envio do formulário de contato sem sair da página */
/* TROQUE pela URL do seu app da Web do Google Apps Script */
const FORM_URL =
  "https://script.google.com/macros/s/AKfycbzF9x3ZkmNYiwJulRbKp5NE8OxcjtIFv_9ZMhK7Zt5sYzcO7GptqudfZ_XY2igXnb65/exec";

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const botao = contactForm.querySelector("button[type=submit]");
  botao.disabled = true;
  formStatus.textContent = "Enviando...";

  const dados = Object.fromEntries(new FormData(contactForm).entries());

  try {
    await fetch(FORM_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(dados),
    });
    formStatus.textContent = "Mensagem enviada! Obrigada pelo contato 💛";
    contactForm.reset();
  } catch (erro) {
    formStatus.textContent =
      "Não foi possível enviar. Tente pelo WhatsApp ou linkedin.";
  } finally {
    botao.disabled = false;
  }
});
