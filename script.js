/* EDITE AQUI: troque links, textos, tecnologias e imagens dos projetos. */
const projects = [
  {
    title: "Joguinho: Baiacu vs Água-viva",
    category: "games",
    url: "https://caroline-suhvary.github.io/baiacu-vs-aguaviva/",
    description: [
      "Game onde o baiacu precisa matar as águas-vivas para não ser queimado.",
      "Use as teclas W/S ou as setas ↑/↓ para nadar e tecla de Espaço para atirar veneno.",
      "Feito com HTML, CSS e Javascript puro.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "img/baiacu-vs-aguaviva.PNG",
    theme: "project-coral",
  },
  {
    title: "Landing Page Responsiva",
    category: "Site comercial",
    url: "https://caroline-suhvary.github.io/simples-pagina-responsiva/",
    description: [
      "Página web com menu e totalmente responsiva.",
      "Feita apenas com HTML e CSS",
    ],
    tech: ["HTML", "CSS"],
    image: "img/pagina-responsiva.PNG",
    theme: "project-mint",
  },
  {
    title: "Jogo de cartas - Tarot do Dia",
    category: "Site comercial",
    url: "https://caroline-suhvary.github.io/tarot-do-dia/",
    description: [
      "Jogo de tarot; Clique no botão para misturar as cartas e selecione uma carta.",
      "Feito com html, css e javascript puro; As cartas foram criadas apenas com CSS.",
    ],
    tech: ["HTML", "CSS", "Javascript"],
    image: "img/tarot-do-dia.PNG",
    theme: "project-sun",
  },
  {
    title: "Joguinho: Block Puzzle - Quadradinhos Coloridos",
    category: "games",
    url: "https://caroline-suhvary.github.io/quadradinhos-coloridos/",
    description: [
      "Utilize as teclas ← → para mover a peça para os lados",
      "↓ acelera a queda, ↑ ou Espaço trocam a ordem das cores.",
      "No celular, utilize os botões que aparecem abaixo.",
      "Feito com html, css responsivo e javascript puro.",
    ],
    tech: ["HTML", "CSS", "Javascript"],
    image: "img/quadrados-coloridos.PNG",
    theme: "project-coral",
  },
  {
    title: "Landing Page do livro 'A biblioteca da Meia Noite' ",
    category: "Site comercial",
    url: "https://caroline-suhvary.github.io/sinopse-livro/",
    description: [
      "Landing Page contendo a Sinopse do livro A biblioteca da Meia-Noite, de Matt Haig",
      "Página responsiva feita com html e css.",
    ],
    tech: ["HTML", "CSS"],
    image: "img/livro-biblioteca.PNG",
    theme: "project-mint",
  },
  {
    title: "Joguinho de TETRIS clássico",
    category: "games",
    url: "https://caroline-suhvary.github.io/tetris/",
    description: [
      "← → movem a peça, ↓ acelera a queda, ↑ ou Espaço giram a peça",
      "No celular, use os botões abaixo.",
      "Feito com HTML, CSS responsivo e Javascript puro.",
    ],
    tech: ["html", "CSS", "Javascript"],
    image: "img/tetris.PNG",
    theme: "project-sun",
  },
];
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/* EDITE AQUI: adicione certificados em image: "img/certificado.jpg". */
const skills = [
  {
    name: "HTML5 & CSS3",
    image: "img/html-css.png",
    level: "Avançando",
    description: [
      "Crio páginas semânticas, acessíveis e bem estruturadas, pensando em SEO e em diferentes dispositivos.",
      "Desenvolvo layouts responsivos com Flexbox, Grid e Media Queries; animações suaves e estilos organizados.",
    ],
    certificates: [
      {
        name: "Playlist de HTML e CSS do Otavio Miranda",
        image: "img/certificados/playlist-html-css-otavio-miranda.png",
        link: "https://www.youtube.com/@otaviomiranda/playlists",
        tools: [],
      },
      {
        name: "Playlist de HTML e CSS do Bro (em inglês)",
        image: "img/certificados/playlist-html-css-bro.png",
        link: "https://www.youtube.com/@brocodez/playlists",
        tools: [],
      },
    ],
    info_extra:
      "Nem todos os cursos que eu fiz geram certificados, então aqui eu também estou acrescentando playlists do youtube que eu assisti e recomendo; e alguns projetinhos que eu fiz, mas são projetos dos cursos, em que eu apenas escrevia os códigos enquanto assistia os videos.",
  },
  {
    name: "Tailwind CSS",
    image: "img/tailwind.png",
    level: "Praticando",
    description: [
      "Utilizo classes utilitárias e sistemas de design para construir interfaces consistentes com agilidade.",
    ],
    certificates: [
      {
        name: "Curso com 207 videoaulas de React cuja maioria dos projetos foi feito utilizando TailwindCSS",
        image: "img/certificados/react19-next16-certificate.PNG",
        link: "",
        tools: [],
      },
    ],
    info_extra: "",
  },
  {
    name: "JavaScript",
    image: "img/javascript.png",
    level: "Avançando",
    description: [
      "Manipulação do DOM, formulários e validações. Funções e consumo de APIs. ",
    ],
    certificates: [
      {
        name: "Playlist de Javascript do Bro (em inglês)",
        image: "",
        link: "https://www.youtube.com/watch?v=lfmg-EJ8gm4&list=PLZPZq0r_RZOPP5Yjt6IqgytMRY5uLt4y3&index=2",
        tools: [],
      },
      {
        name: "Projetinho: relógio digital",
        image: "img/certificados/relogio-digital-bro.PNG",
        link: "https://caroline-suhvary.github.io/relogio/",
        tools: [],
      },
      {
        name: "Projetinho: cronômetro",
        image: "img/certificados/cronometro-bro.PNG",
        link: "https://caroline-suhvary.github.io/cronometro/",
        tools: [],
      },
      {
        name: "Projetinho: temperatura das cidades",
        image: "img/certificados/temperatura-cidades-bro.PNG",
        link: "https://caroline-suhvary.github.io/temperatura-cidades/",
        tools: [],
      },
      {
        name: "Projetinho: calculadora",
        image: "img/certificados/calculadora-bro.PNG",
        link: "https://caroline-suhvary.github.io/calculadora/",
        tools: [],
      },
    ],
    info_extra:
      "Nem todos os cursos que eu fiz geram certificados, então aqui eu também estou acrescentando playlists do youtube que eu assisti e recomendo; e alguns projetinhos que eu fiz, mas são projetos dos cursos, em que eu apenas escrevia os códigos enquanto assistia os videos.",
  },
  {
    name: "React",
    image: "img/react.png",
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
        image: "img/certificados/react19-next16-certificate.PNG",
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
    image: "img/nextjs.png",
    level: "Estudando",
    description: [
      "Aplicações com Next.js 16 utilizando App Router, layouts, Server Components e Client Components.",
      "Conhecimentos em SSR, SSG e ISR, Server Actions, API Routes e integração com bancos de dados.",
      "Implementação de autenticação, autorização e rotas protegidas, incluindo JWT, middleware e login social.",
      "Validação de dados, paginação, tratamento de erros e atualização de dados em tempo real com Server-Sent Events (SSE).",
    ],
    certificates: [
      {
        name: "Next.Js",
        image: "",
        link: "",
        tools: [],
      },
    ],
    info_extra: "",
  },
  {
    name: "Excel",
    image: "img/excel.png",
    level: "Avançado",
    description: [
      "Excel Avançado para análise de dados, relatórios gerenciais e automação de processos.",
      "Funções de pesquisa, estatística, matemática e financeira.",
      "Power Query, Power Pivot, Tabelas Dinâmicas, Gráficos Dinâmicos e Dashboards. ",
      "Desenvolvimento de macros e soluções utilizando VBA.",
    ],
    certificates: [
      {
        name: "Excel",
        image: "",
        link: "",
        tools: [],
      },
    ],
    info_extra: "",
  },
  {
    name: "Figma",
    image: "img/figma.png",
    level: "Praticando",
    description: [
      "Criação de protótipos de baixa e alta fidelidade para aplicações web e mobile. ",
      "Desenvolvimento de wireframes, fluxos de navegação e interfaces focadas em experiência do usuário (UX/UI).",
    ],
    certificates: [
      {
        name: "Figma",
        image: "",
        link: "",
        tools: [],
      },
    ],
    info_extra: "",
  },
  {
    name: "Salesforce",
    image: "img/salesforce.png",
    level: "Estudando",
    description: [
      "Gestão de contas, contatos, leads e oportunidades.",
      "Relatórios, dashboards e acompanhamento de pipeline comercial.",
      "Qualificação e conversão de leads.",
      "Acompanhamento de leads e oportunidades utilizando Kanban.",
    ],
    certificates: [
      {
        name: "Salesforce na prátice: curso hands-on para administradores",
        image: "img/certificados/certificado_salesforce_administrador.jpg",
        link: "",
        tools: [],
      },
      {
        name: "Salesforce Essentials: Mastering CRM for Business Success",
        image: "img/certificados/certificado_salesforce_administrator.jpg",
        link: "",
        tools: [],
      },
    ],
    info_extra: "",
  },
  {
    name: "SQL e Banco de Dados",
    image: "img/postgres.png",
    level: "Praticando",
    description: [
      "Consultas SQL para extração, manipulação e consolidação de dados.",
      "Joins, subqueries, CTEs, funções analíticas (window functions) e tratamento de dados.",
      "Criação e manutenção de Views, Stored Procedures, Triggers e Jobs.",
      "Modelagem e análise de dados para geração de indicadores e relatórios.",
    ],
    certificates: [
      {
        name: "Banco de Dados",
        image: "",
        link: "",
        tools: [],
      },
    ],
    info_extra: "",
  },
  {
    name: "Power BI",
    image: "img/powerbi.png",
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
];

const projectsGrid = document.querySelector("#projects-grid");
const skillsGrid = document.querySelector("#skills-grid");
const modal = document.querySelector("#skill-modal");
const closeButton = document.querySelector(".close-button");
let lastFocusedSkill;

projectsGrid.innerHTML = projects
  .map(
    (project, index) => `
  <article class="project-card">
    <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-preview ${project.theme}" aria-label="Abrir ${project.title} em nova aba">
      <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
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
  document.querySelector("#certificate-grid").innerHTML = skill.certificates
    .map(
      (certificate, position) => `
      <article class="certificates">
        ${
          certificate.image
            ? `<img src="${certificate.image}" alt="Certificado: ${certificate.name}">`
            : `<div class="certificate-placeholder"><b>☆</b><span>CERTIFICADO ${position + 1}</span></div>`
        }
        <h3>${certificate.name}</h3>
        ${certificate.tools && `<div class="tags">${certificate.tools.map((item) => `<span>${item}</span>`).join("")}</div>`}
        <small>${certificate.link && `<a href="${certificate.link}">acesse aqui</a>`}</small>
        
      </article>`,
    )
    .join("");
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
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  formStatus.textContent = "Enviando...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Falha no envio");

    formStatus.textContent = "Mensagem enviada! Obrigada pelo contato. ✨";
    contactForm.reset();
  } catch (error) {
    formStatus.textContent =
      "Não foi possível enviar. Tente novamente ou me chame no WhatsApp.";
  } finally {
    submitButton.disabled = false;
  }
});
