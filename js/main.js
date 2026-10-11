const {
  HERO_HIGHLIGHTS,
  NAV_ITEMS,
  SERVICES,
  CATEGORIES,
  PRODUCTS,
  PIECE_TYPES_OPTIONS,
  MODELING_OPTIONS,
  WHATSAPP_LINK,
} = window.HR_PRINTS_DATA;
const productCollection = "assets/product-collection.jpg";
const logo = "assets/logo.png";
const customSculpture = "assets/custom-sculpture.jpg";
const ownerPhoto = "assets/owners/owners.jpg";
const ownerPhoto2 = "assets/owners/owners2.jpg";

const app = document.querySelector("#app");
const state = {
  activeSection: "inicio",
  mobileMenuOpen: false,
  category: "Todos",
  productSelected: null,
};

const iconPaths = {
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  circleCheck: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  externalLink: '<path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  fileBox: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  gem: '<path d="M6 3h12l4 6-10 13L2 9l4-6Z"/><path d="M11 3 8 9l4 13 4-13-3-6M2 9h20"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
  packageCheck: '<path d="m16 16 2 2 4-4"/><path d="M21 10V7l-9-5-9 5v10l9 5 3-1.67"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 22a10 10 0 1 1 10-10c0 1.1-.9 2-2 2h-1.8a2 2 0 0 0-1.7 3.1l.3.5a2 2 0 0 1-1.7 3H12Z"/>',
  ruler: '<path d="M21.3 8.7 15.3 2.7a2.4 2.4 0 0 0-3.4 0l-9.2 9.2a2.4 2.4 0 0 0 0 3.4l6 6a2.4 2.4 0 0 0 3.4 0l9.2-9.2a2.4 2.4 0 0 0 0-3.4Z"/><path d="m7.5 10.5 2 2m1-5 2 2m1-5 2 2m-1 7 2 2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  sparkles: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14ZM5 2l.8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2Z"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
  zap: '<path d="m13 2-3 8h8L11 22l3-9H6l7-11Z"/>',
  x: '<path d="m18 6-12 12M6 6l12 12"/>',
};

function icon(name, className = "") {
  return `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || ""}</svg>`;
}

function heading(eyebrow, title, description = "", extraClass = "") {
  return `<div class="max-w-2xl ${extraClass}"><p class="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary"><span class="h-px w-8 bg-primary"></span>${eyebrow}</p><h2 class="font-display text-3xl font-extrabold leading-tight sm:text-5xl">${title}</h2>${description ? `<p class="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">${description}</p>` : ""}</div>`;
}

function navLinks(className = "") {
  return NAV_ITEMS.map(([label, id]) => `<a class="${className} ${state.activeSection === id ? "text-primary" : "text-muted-foreground hover:text-foreground"}" href="#${id}" data-nav-link>${label}</a>`).join("");
}

function optionMarkup(options, name, label) {
  return `<label class="flex flex-col gap-1 text-[10px] font-bold tracking-wider text-muted-foreground">${label}<select name="${name}" class="bg-background p-3 border border-primary/20 rounded-md text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" required><option value="" disabled selected>Selecione uma opção</option>${options.map((option) => `<option value="${option}">${option}</option>`).join("")}</select></label>`;
}

function renderProducts() {
  const visibleProducts = state.category === "Todos" ? PRODUCTS : PRODUCTS.filter((product) => product.category === state.category);
  document.querySelector("#category-filters").innerHTML = CATEGORIES.map((category) => `<button type="button" data-category="${category}" class="text-nowrap cursor-pointer ${state.category === category ? "bg-primary hover:bg-primary/90 text-white" : "bg-background hover:bg-primary/15 border-primary/15 border text-muted-foreground"} transition-colors duration-200 rounded-md text-sm px-3 py-1.5">${category}</button>`).join("");
  document.querySelector("#product-list").innerHTML = visibleProducts.map((product) => {
    const productIndex = PRODUCTS.indexOf(product);
    return `<article class="group flex flex-col min-h-70 w-full lg:w-72 bg-primary/3 rounded-lg border border-primary/15 hover:-translate-y-1 transition-transform duration-300"><div class="relative overflow-hidden rounded-t-lg"><span class="z-10 absolute top-3 left-3 text-[9px] font-semibold tracking-wide bg-background/80 py-0.75 px-2 uppercase rounded-md">${product.category}</span><img data-product="${productIndex}" src="${product.img || customSculpture}" alt="${product.name}" class="h-80 lg:h-60 w-full rounded-t-lg object-cover group-hover:scale-110 transition-transform duration-600 cursor-pointer" loading="lazy"></div><div class="flex flex-col gap-12 px-5 pb-5 pt-1"><div class="flex flex-col items-start justify-center mt-4"><span class="text-[13px] font-thin text-muted-foreground">Impressão 3D</span><span class="text-white/90 font-bold text-lg">${product.name}</span></div><div class="flex flex-row justify-between items-center"><div class="flex flex-row gap-2 items-end mt-auto">${product.oldPrice ? `<span class="text-muted-foreground text-[13px] line-through">${product.oldPrice}</span>` : ""}<span class="${product.oldPrice ? "-mb-0.5" : ""} text-lg font-bold text-primary">${product.price}</span></div><button type="button" data-product="${productIndex}" aria-label="Ver ${product.name}" class="p-2 mt-auto border border-primary/15 rounded-lg cursor-pointer hover:bg-primary/15 transition-colors duration-200">${icon("chevronRight", "h-5 w-5 text-white/90")}</button></div></div></article>`;
  }).join("");
}

function renderModal() {
  const product = state.productSelected;
  const current = document.querySelector("#product-modal");
  if (!product) {
    current?.remove();
    return;
  }
  const productHref = product.link || WHATSAPP_LINK(`Olá! Quero pedir um orçamento para ${product.name}.`);
  app.insertAdjacentHTML("beforeend", `<div id="product-modal" class="inset-0 fixed bg-black/80 min-h-dvh w-full z-50 items-center justify-center flex p-2 lg:py-30 lg:px-96"><div class="max-h-dvh lg:h-full w-full overflow-y-auto bg-surface rounded-md relative flex flex-col lg:flex-row border border-primary/10"><button type="button" data-close-modal aria-label="Fechar" class="absolute top-3 right-3 h-6 w-6 text-white/90 cursor-pointer">${icon("x", "text-muted-foreground hover:text-foreground h-5 w-5")}</button><img src="${product.img || customSculpture}" alt="${product.name}" class="h-full lg:w-1/2 object-cover" loading="lazy"><div class="flex flex-col py-8 px-4 lg:w-1/2 items-start"><div class="text-xs text-primary bg-primary/10 rounded-md px-1.5 py-1 font-semibold tracking-wide">${product.category}</div><h2 class="text-3xl font-bold mt-2 text-foreground tracking-wide">${product.name}</h2><span class="text-md text-muted-foreground mt-2">Produzido sob demanda com controle de qualidade em todas as etapas.</span><div class="w-full h-0.5 bg-primary/10 mt-8 mb-4"></div><div class="flex flex-col gap-3.5 w-full">${[["fileBox", "Material", "Resina ou filamento premium"], ["ruler", "Dimensões", "Conforme o modelo"], ["palette", "Acabamento", "Cru ou pintura manual"], ["packageCheck", "Envio", "Embalagem protegida"]].map(([symbol, title, text]) => `<div class="flex flex-row justify-between items-center w-full"><div class="flex flex-row gap-2 items-center justify-center">${icon(symbol, "h-4 w-4 text-primary")}<span class="text-sm text-muted-foreground font-semibold">${title}</span></div><span class="text-foreground text-[13px] font-semibold">${text}</span></div>`).join("")}</div><div class="w-full h-0.5 bg-primary/10 mt-4 mb-4"></div><div class="flex flex-row gap-2 items-end">${product.oldPrice ? `<span class="text-muted-foreground text-md line-through">${product.oldPrice}</span>` : ""}<span class="${product.oldPrice ? "text-3xl" : "text-4xl"} font-bold text-primary">${product.price}</span></div><a href="${productHref}" target="_blank" rel="noreferrer" class="flex mt-4 flex-row gap-2 items-center justify-center cursor-pointer bg-primary py-3.5 lg:mt-auto hover:bg-primary/90 transition-colors duration-200 px-5 rounded-md text-sm font-semibold text-foreground w-full"><p>${product.link ? "Comprar agora" : "Pedir no WhatsApp"}</p>${icon("externalLink", "h-5 w-5")}</a></div></div></div>`);
}

function render() {
  app.innerHTML = `
    <div class="min-h-dvh overflow-x-hidden bg-background">
      ${state.mobileMenuOpen ? `<div class="inset-x-0 top-20 fixed z-10"><div data-close-menu class="inset-0 fixed bg-black/80 min-h-dvh w-full z-10"></div><div class="z-10 absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-primary/10 px-6 py-4 flex flex-col gap-2 md:hidden shadow-xl justify-center">${navLinks("text-sm py-1 border-b-[0.5px] pb-3 font-medium border-b-primary/10 transition-colors duration-200").replaceAll("data-nav-link", "data-nav-link data-close-menu")}</div></div>` : ""}
      <header class="fixed inset-x-0 top-0 z-50 bg-background/85 text-white px-4 sm:px-8 lg:px-36 py-4 flex flex-row justify-between items-center backdrop-blur-xl border-b border-b-primary/10"><a class="flex flex-row gap-2 items-center justify-center" href="#inicio"><img src="${logo}" class="h-12 w-12" alt="HR Prints 3D"><div class="flex flex-col gap-0.5"><p class="font-bold">HR PRINTS <span class="text-primary">3D</span></p><span class="text-[10px] text-[#95a7ba] font-thin tracking-widest">IMPRESSÃO 3D & MODELAGEM</span></div></a><button id="menu-toggle" class="lg:hidden text-muted-foreground p-2 border border-primary/10 rounded-lg hover:bg-primary/10" aria-label="Abrir menu de navegação">${icon(state.mobileMenuOpen ? "x" : "menu", "h-6 w-6")}</button><nav class="hidden lg:inline-flex flex-row gap-8 items-center justify-center">${navLinks("transition-colors duration-200 cursor-pointer text-[13px] font-medium")}<a href="#orcamento" class="flex flex-row gap-2 items-center justify-center cursor-pointer bg-primary py-3 hover:bg-primary/90 transition-colors duration-200 px-5 rounded-md text-sm font-semibold">${icon("message", "h-5 w-5")}<p>Pedir orçamento</p></a></nav></header>
      <main>
        <section id="inicio" class="relative px-4 sm:px-8 lg:px-36 flex scroll-mt-19 bg-background items-end overflow-hidden lg:items-center text-white/90 border-b-[0.5px] border-b-primary/15"><img src="${productCollection}" alt="Coleção de peças produzidas em impressão 3D" class="absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0 bg-hero-overlay"></div><div class="z-10 w-full mx-auto max-w-7xl flex flex-col justify-center items-start pt-35 lg:pt-25 sm:pt-30 md:pt-20 min-h-dvh lg:h-dvh"><div class="flex flex-row gap-1 text-xs items-center justify-center text-primary bg-primary/10 px-2.5 py-1.5 rounded-md font-semibold border border-primary/30 mb-2">${icon("zap", "h-4 w-4")}<span>Ideias ganham forma aqui</span></div><div class="flex flex-col gap-4 sm:gap-6"><h1 class="mt-2 text-5xl max-w-70 sm:max-w-3xl font-bold tracking-tight sm:text-5xl lg:text-8xl">Nós imprimimos <span class="text-primary">o seu futuro.</span></h1><span class="text-lg sm:max-w-2xl text-muted-foreground sm:text-xl">Transformamos suas ideias, fotos e projetos em realidade com máxima precisão. Da prototipagem técnica a colecionáveis exclusivos e estátuas personalizadas em alta definição.</span></div><div class="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8 w-full"><a href="#catalogo" class="flex w-full sm:max-w-55 flex-row gap-2 items-center justify-center cursor-pointer bg-primary py-4 hover:bg-primary/90 transition-colors duration-200 px-5 rounded-md text-sm font-semibold"><p>Explorar catálogo</p>${icon("arrowRight", "h-4 w-4")}</a><a href="#orcamento" class="sm:max-w-55 flex flex-row items-center justify-center w-full cursor-pointer bg-background py-4 hover:bg-primary/15 transition-colors duration-200 px-5 rounded-md text-sm font-semibold border-primary/15 border">Orçamento personalizado</a></div><div class="mt-10 grid grid-cols-2 gap-x-18 gap-y-4 border-t w-full sm:w-2/3 border-primary/70 pt-6 sm:grid-cols-4">${HERO_HIGHLIGHTS.map((item) => `<div class="flex items-center gap-2 text-xs font-semibold text-foreground/85">${icon("check", "size-4 shrink-0 text-primary")}${item}</div>`).join("")}</div></div></section>
        <section id="servicos" class="text-white/90 bg-surface flex flex-col min-h-dvh lg:h-dvh py-25 scroll-mt-20 px-4 sm:px-8 lg:px-36 border-b-primary/15 border-b">${heading("O que criamos", "Da ideia à peça pronta.", "Criamos peças personalizadas, articuladas, decorativas e funcionais, com precisão e qualidade em cada impressão")}<div class="mt-12 grid overflow-hidden rounded-lg border border-primary/15 lg:grid-cols-3">${SERVICES.map(({ icon: symbol, title, text, tag }) => `<article class="bg-card p-7 transition-colors hover:bg-primary/15 sm:p-9 lg:border-l-[0.5px] lg:border-x-primary/15 lg:border-y-0 border-y-[0.5px] border-y-primary/15"><div class="mb-10 flex items-center justify-between"><span class="grid size-12 place-items-center rounded-md bg-primary/10 text-primary">${icon(symbol, "h-6 w-6")}</span></div><p class="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">${tag}</p><h3 class="font-display text-2xl font-bold">${title}</h3><p class="mt-4 text-sm leading-7 text-muted-foreground font-semibold">${text}</p></article>`).join("")}</div></section>
        <section id="catalogo" class="text-white/90 bg-surface flex flex-col min-h-dvh gap-12 lg:min-h-dvh py-25 scroll-mt-20 px-4 sm:px-8 lg:px-36 border-b border-b-primary/15"><div class="flex flex-col lg:flex-row items-start lg:items-end">${heading("Catálogo", "Escolha seu próximo favorito.", "Peças prontas para comprar e projetos especiais feitos para você.")}<div id="category-filters" class="flex flex-row gap-2 max-w-full overflow-x-auto pb-2 lg:max-w-2xl mt-3 lg:mt-0"></div></div><div id="product-list" class="flex flex-col lg:flex-row gap-[1.4rem] flex-wrap"></div></section>
        <section id="personalizados" class="text-white/90 bg-surface flex flex-col lg:flex-row min-h-dvh lg:min-h-dvh py-25 scroll-mt-20 px-4 sm:px-8 lg:px-36 border-b border-b-primary/15 gap-12"><div class="relative lg:w-1/2"><img src="${customSculpture}" alt="Escultura e Funko personalizados a partir de foto" loading="lazy" class="rounded-lg w-full h-full object-cover"><div class="absolute bottom-5 left-5 right-5 rounded-md border border-primary/20 bg-background/70 p-4 backdrop-blur-xl"><div class="flex items-center gap-3"><span class="grid size-10 place-items-center rounded bg-primary text-primary-foreground">${icon("palette")}</span><div><p class="text-xs text-muted-foreground">Feito especialmente para você</p><p class="font-display font-bold">Pintura manual, detalhe por detalhe.</p></div></div></div></div><div class="flex flex-col lg:w-1/2 gap-4">${heading("seu momento em 3d", "Uma lembrança que sai da tela.", "Envie suas melhores fotos. Nós cuidamos da modelagem, impressão e acabamento para eternizar pessoas, pets e histórias.", "mb-4")}${[["01", "Envie suas fotos", "Frente, perfil e detalhes que tornam a pessoa única."], ["02", "Criamos o modelo 3D", "Você acompanha e aprova a representação digital."], ["03", "Imprimimos e pintamos", "Alta definição com acabamento artesanal opcional."], ["04", "Entregamos com cuidado", "Embalagem protegida e envio de qualidade."]].map(([number, title, text]) => `<div class="flex flex-row items-start gap-2 border-b border-b-primary/20 pb-8"><span class="font-mono text-sm font-bold text-primary mt-[3.5px]">${number}</span><div class="flex flex-col"><h3 class="font-display font-bold">${title}</h3><p class="mt-1 text-sm text-muted-foreground">${text}</p></div></div>`).join("")}<a href="#orcamento" class="flex flex-row gap-2 items-center justify-center cursor-pointer bg-primary py-4 hover:bg-primary/90 transition-colors duration-200 px-5 rounded-md text-sm font-semibold w-full lg:max-w-70 mt-3"><p>Quero meu personalizado</p>${icon("arrowRight", "h-5 w-5")}</a></div></section>
        <section id="sobre" class="text-white/90 bg-surface flex flex-col min-h-dvh lg:min-h-dvh py-25 scroll-mt-20 px-4 sm:px-8 lg:px-36 border-b-primary/15 border-b">${heading("quem somos", "Do sonho à realidade.")}<div class="flex flex-col-reverse lg:flex-row mt-5 gap-4"><img src="${ownerPhoto}" alt="Equipe HR Prints 3D" class="rounded-lg w-full lg:w-2/3 object-cover"><img src="${ownerPhoto2}" alt="Processo de impressão 3D" class="rounded-lg w-full lg:w-1/3 object-cover"></div><div class="flex flex-col gap-2 mt-5"><p class="leading-7 text-muted-foreground sm:text-lg font-semibold lg:font-normal">Somos um casal jovem, movido por <span class="text-primary">grandes sonhos, determinação e pela vontade de construir algo próprio</span>. Mesmo conciliando nossa rotina de trabalho com a dedicação à nossa empresa, seguimos firmes no propósito de transformar projetos em realidade.</p><p class="leading-7 text-muted-foreground sm:text-lg font-semibold lg:font-normal">O ano de <span class="text-primary">2026</span> marcou o início da nossa jornada no universo da impressão 3D. Desde então, trabalhamos dia a dia para expandir nossas soluções e entregar peças com <span class="text-primary">padrão de excelência, precisão e acabamento impecável</span>.</p><p class="leading-7 text-muted-foreground sm:text-lg font-semibold lg:font-normal">Na <span class="text-primary font-bold">HR PRINTS 3D</span>, cada detalhe importa. Nosso foco é oferecer mais do que produtos, entregamos <span class="text-primary">qualidade, inovação e a dedicação de quem ama o que faz</span>.</p></div></section>
        <section id="orcamento" class="text-white/90 bg-surface flex flex-col gap-18 lg:flex-row min-h-dvh lg:min-h-dvh py-25 scroll-mt-20 px-4 sm:px-8 lg:px-36 border-b-primary/15 border-b"><div class="flex-1 flex-col max-w-md flex gap-10">${heading("Seu projeto começa aqui", "Conte sua ideia. Nós damos forma.", "Preencha o formulário rápido e receba atendimento direto no WhatsApp.")}<div class="flex flex-col gap-3 items-start">${["Orçamento sem compromisso", "Atendimento consultivo", "Pagamento seguro", "Envio de qualidade"].map((text) => `<div class="flex flex-row gap-2 items-center justify-center">${icon("circleCheck", "text-primary h-4.5 w-4.5")}<p class="text-muted-foreground">${text}</p></div>`).join("")}</div></div><form id="quote-form" class="flex flex-col gap-3 p-8 flex-1 bg-primary/3 rounded-md border border-primary/10"><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><label class="flex flex-col gap-1 text-[10px] font-bold tracking-wider text-muted-foreground">SEU NOME<input name="name" placeholder="Como podemos chamar você?" required class="bg-background p-3 border border-primary/20 rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"></label><label class="flex flex-col gap-1 text-[10px] font-bold tracking-wider text-muted-foreground">ENDEREÇO<input name="address" placeholder="Onde será feito o envio?" required class="bg-background p-3 border border-primary/20 rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"></label>${optionMarkup(PIECE_TYPES_OPTIONS, "pieceType", "TIPO DE PEÇA")}${optionMarkup(MODELING_OPTIONS, "modeling", "ARQUIVO 3D")}</div><label class="flex flex-col gap-1 mt-4 text-[10px] font-bold tracking-wider text-muted-foreground">DESCREVA SUA IDEIA<textarea name="description" class="bg-background p-3 border border-primary/20 rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-full min-h-35" placeholder="Conte as medidas, referências, acabamento desejado e prazo..." required></textarea></label><label class="mt-2 flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-primary/20 bg-background p-4 text-sm text-muted-foreground hover:border-primary transition-colors duration-300">${icon("upload", "size-5 text-primary")}<div class="flex flex-col"><strong class="text-foreground">Anexar referência</strong><span class="text-xs">Foto, STL ou desenho (você enviará no WhatsApp)</span><span id="file-name" class="text-xs text-primary"></span></div><input id="reference-file" type="file" class="sr-only" accept="image/*,.stl,.pdf"></label><button type="submit" class="mt-2 w-full bg-primary text-primary-foreground items-center flex flex-row gap-2 justify-center py-4 rounded-md font-semibold hover:bg-primary/90 cursor-pointer">${icon("send", "h-5 w-5")} Enviar pelo WhatsApp</button></form></section>
      </main>
      <footer class="px-4 sm:px-8 lg:px-36 pt-10 flex flex-col bg-surface border-b border-b-primary/15"><div class="flex flex-col md:flex-row items-start justify-between pb-10 gap-10 md:gap-0"><a class="flex flex-col gap-2 -ml-2 sm:ml-0" href="#inicio"><div class="flex flex-row gap-2 items-center justify-start"><img src="${logo}" class="h-12 w-12" alt="HR Prints 3D"><div class="flex flex-col gap-0.5"><p class="font-bold text-white">HR PRINTS <span class="text-primary">3D</span></p><span class="text-[10px] text-[#95a7ba] font-thin tracking-widest">IMPRESSÃO 3D & MODELAGEM</span></div></div><p class="text-muted-foreground text-[15px] max-w-sm ml-2">Impressão 3D, modelagem e pintura artesanal para transformar ideias em objetos que impressionam.</p></a><div class="flex flex-col"><span class="text-white/85 font-semibold tracking-wider text-sm mb-3">NAVEGAÇÃO</span>${NAV_ITEMS.map(([name, section]) => `<a href="#${section}" class="text-muted-foreground hover:text-primary text-[15px] tracking-wide mt-1">${name}</a>`).join("")}</div><div class="flex flex-col gap-2 md:ml-20"><span class="text-white/85 font-semibold tracking-wider text-sm">FALE CONOSCO</span><div class="flex flex-row gap-2 mt-2 mb-2"><a href="${WHATSAPP_LINK("Olá! Gostaria de conversar sobre um projeto 3D.")}" target="_blank" rel="noreferrer" aria-label="WhatsApp" class="grid size-10 place-items-center rounded-md border border-primary/20 text-primary hover:bg-primary/10">${icon("message", "h-5 w-5")}</a><a href="https://www.instagram.com/hrprints3doficial" target="_blank" rel="noreferrer" aria-label="Instagram" class="grid size-10 place-items-center rounded-md border border-primary/20 text-primary hover:bg-primary/10">${icon("instagram", "h-5 w-5")}</a></div><div class="flex flex-row gap-1 items-center">${icon("shield", "text-primary h-4 w-4")}<span class="text-muted-foreground text-sm">Produção acompanhada e embalagem protegida.</span></div></div></div></footer><div class="flex flex-col md:flex-row justify-between md:items-center py-2 md:py-5 px-4 gap-1.5 items-start sm:px-8 lg:px-36 bg-surface"><span class="text-muted-foreground text-[0.7rem]">© 2026 HR PRINTS 3D — CNPJ: 68.509.767/0001-84. Todos os direitos reservados. — Desenvolvido por <a href="https://github.com/svictorsena" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/90 transition-colors duration-200">Samuel Sena</a></span><span class="text-muted-foreground text-[0.7rem]">Modelos, marcas e designs exibidos pertencem aos seus respectivos criadores e detentores de direitos autorais.</span></div>`;
  renderProducts();
  setupObservers();
}

function setupObservers() {
  if (!("IntersectionObserver" in window)) return;
  const isMobile = window.innerWidth < 768;
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-12");
        entry.target.classList.add("opacity-100", "translate-y-0");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: isMobile ? "50px 0px 0px 0px" : "", threshold: isMobile ? 0.01 : 0.04 });
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && state.activeSection !== entry.target.id) {
        state.activeSection = entry.target.id;
        document.querySelectorAll("[data-nav-link]").forEach((link) => {
          const isActive = link.hash === `#${state.activeSection}`;
          link.classList.toggle("text-primary", isActive);
          link.classList.toggle("text-muted-foreground", !isActive);
        });
      }
    });
  }, { rootMargin: isMobile ? "-80px 0px -20% 0px" : "-80px 0px -120% 0px", threshold: 0 });
  NAV_ITEMS.forEach(([, id]) => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.add("opacity-0", "translate-y-12", "transition-all", "duration-1000", "ease-out");
      revealObserver.observe(section);
      navObserver.observe(section);
    }
  });
}

app.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    renderProducts();
    return;
  }
  const productButton = event.target.closest("[data-product]");
  if (productButton) {
    state.productSelected = PRODUCTS[Number(productButton.dataset.product)];
    renderModal();
    return;
  }
  if (event.target.closest("#menu-toggle")) {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    render();
    return;
  }
  if (event.target.closest("[data-close-modal]") || event.target.id === "product-modal") {
    state.productSelected = null;
    renderModal();
  }
  if (event.target.closest("[data-close-menu]")) {
    state.mobileMenuOpen = false;
    render();
  }
});

app.addEventListener("submit", (event) => {
  if (event.target.id !== "quote-form") return;
  event.preventDefault();
  const data = new FormData(event.target);
  const message = `Olá, HR Prints 3D! Gostaria de solicitar um orçamento.\n\nNome: ${data.get("name")}\nEndereço: ${data.get("address")}\nTipo de peça: ${data.get("pieceType")}\nArquivo/modelagem: ${data.get("modeling")}\nDescrição: ${data.get("description")}`;
  window.open(WHATSAPP_LINK(message), "_blank", "noopener,noreferrer");
});

app.addEventListener("change", (event) => {
  if (event.target.id === "reference-file") {
    document.querySelector("#file-name").textContent = event.target.files[0]?.name || "";
  }
});

render();