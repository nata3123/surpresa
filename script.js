/*
  Surpresa personalizada para Bianca Leticia de França Aragão.
  Feita por Natã Victor Lima Olegario Teixeira.
*/
const CONFIG = {
  pageTitle: "surpresaparabianca",
  introTitle: "Bianca, fiz isso pensando em você.",
  introText: "Uma pequena lembrança de tudo o que vivemos desde 21 de maio de 2026.",
  startDate: "2026-05-21T00:00:00-03:00",
  songTitle: "Partilhar",
  songArtist: "Rubel & ANAVITÓRIA",
  youtubeVideoId: "RLlWIQCl7iQ",
  message: `Desde o primeiro momento em que te vi, senti que havia encontrado o amor da minha vida.

Obrigado por me fazer o homem mais sortudo do mundo, meu amor. Fiz esta página com todo o carinho para que você possa voltar aqui sempre que quiser e lembrar o quanto é amada.

Eu te amo, hoje e sempre. ❤️`,
  signature: "Com todo o meu amor, Natã.",
  endingTitle: "Bianca, eu quero partilhar a vida boa com você.",
  endingText: "Desde 21 de maio de 2026, cada dia ao seu lado ganhou um lugar especial na minha história.",

photos: [
  {
    src: "assets/foto-1.webp",
    alt: "Natã e Bianca se beijando",
    caption: "Um beijo para guardar para sempre",
    text: "Entre tantos momentos, esse ficou guardado de um jeito especial em mim. Foi mais do que um beijo, foi a certeza de que ao seu lado tudo ganha mais sentido.",
    position: "50% 45%"
  },
  {
    src: "assets/foto-2.webp",
    alt: "Natã e Bianca fazendo caretas ao ar livre",
    caption: "A felicidade mora nas coisas simples",
    text: "Eu amo como até os momentos mais simples com você se tornam inesquecíveis. Um olhar, uma brincadeira, um instante qualquer… e de repente vira uma das minhas lembranças favoritas.",
    position: "60% 45%"
  },
  {
    src: "assets/foto-3.webp",
    alt: "Natã e Bianca viajando juntos",
    caption: "Até o caminho fica melhor com você",
    text: "Não importa o destino, porque quando estou com você, até o caminho se transforma em memória boa. Ao seu lado, tudo fica mais leve, mais bonito e mais especial.",
    position: "50% 50%"
  },
  {
    src: "assets/foto-4.webp",
    alt: "Natã e Bianca diante do espelho",
    caption: "Meu reflexo favorito",
    text: "Gosto de olhar para nós e perceber como a vida ficou mais bonita depois que você chegou. Essa foto não mostra só a nossa imagem, mostra também o quanto eu amo estar com você.",
    position: "50% 45%"
  },
  {
    src: "assets/foto-5.webp",
    alt: "Natã e Bianca deitados juntos",
    caption: "Nós, do nosso jeitinho",
    text: "Sem precisar de perfeição, sem roteiro e sem esforço. Apenas nós dois, do nosso jeitinho, vivendo um carinho que faz o meu coração se sentir em casa.",
    position: "50% 50%"
  },
  {
    src: "assets/foto-6.jpg",
    alt: "Natã e Bianca diante do espelho em casa",
    caption: "Nosso cantinho",
    text: "Tem uma beleza que só existe nos nossos momentos mais simples: quando não há roteiro, só a paz de dividir o mesmo espaço com você. É assim, no nosso cantinho e do nosso jeito, que meu coração se sente em casa.",
    position: "50% 42%"
  },
  {
    src: "assets/foto-7.jpg",
    alt: "Buquê de girassóis sobre a mesa da primeira janta preparada por Natã",
    caption: "A primeira janta que fiz para você",
    text: "Naquele dia, eu quis transformar uma refeição em carinho. Preparei nossa primeira janta e comprei girassóis, porque sei que são as suas flores favoritas. Mais do que comida e flores, eu queria te mostrar o quanto amo cuidar de você.",
    position: "50% 52%"
  }
],
  timeline: [
    {
      date: "21 de maio de 2026",
      title: "O começo do nosso namoro",
      text: "O dia em que deixamos de ser apenas duas histórias e começamos a escrever a nossa.",
      image: "assets/foto-1.webp",
      position: "50% 45%"
    },
    {
      date: "Nos momentos leves",
      title: "Nossas risadas",
      text: "Com você, até as brincadeiras mais simples viram lembranças que eu quero guardar.",
      image: "assets/foto-2.webp",
      position: "62% 42%"
    },
    {
      date: "Em cada caminho",
      title: "Nossas aventuras",
      text: "Não importa o destino: viajar, esperar ou simplesmente estar junto já vale a pena.",
      image: "assets/foto-3.webp",
      position: "50% 48%"
    },
    {
      date: "Nos dias comuns",
      title: "Nosso cantinho",
      text: "Porque os momentos mais simples se tornam especiais quando estou ao seu lado.",
      image: "assets/foto-6.jpg",
      position: "50% 42%"
    },
    {
      date: "Na primeira janta que preparei",
      title: "Girassóis para você",
      text: "Preparei tudo com carinho e escolhi girassóis porque são as suas flores favoritas. Foi uma noite simples, mas cheia de amor.",
      image: "assets/foto-7.jpg",
      position: "50% 52%"
    },
    {
      date: "Hoje e sempre",
      title: "Ainda é só o começo",
      text: "Quero continuar vivendo, aprendendo, rindo e construindo a vida boa com você.",
      image: "assets/foto-5.webp",
      position: "50% 48%"
    }
  ]
};

const SUPABASE = Object.freeze({
  url: "https://mijtdivqfjrkwchqdqvr.supabase.co",
  publishableKey: "sb_publishable_ukedGcRlxvIYSyF8rSONig_koPKNEVh",
  publishFunction: "publicar-lembranca"
});

const IMAGE_UPLOAD = Object.freeze({
  maxBytes: 8 * 1024 * 1024,
  outputType: "image/webp",
  qualityLevels: [0.99, 0.98, 0.97],
  minimumSaving: 0.1,
  minimumPsnr: 46,
  comparisonLongEdge: 640
});

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const loadingScreen = $("#loadingScreen");
const openSurprise = $("#openSurprise");
const surpriseContent = $("#surpriseContent");
const vinyl = $("#vinyl");

let currentPhoto = 0;
let heartTimer;
let publicationPreviewUrl = "";
let publicationsFallbackTimer;
let preparedPublicationImage = null;
let publicationImagePromise = null;
let publicationImageSelection = 0;

function hydrateContent() {
  document.title = CONFIG.pageTitle;
  $("#pageTitle").textContent = "Bianca, o amor da minha vida";
  $("#introTitle").textContent = CONFIG.introTitle;
  $("#introText").textContent = CONFIG.introText;
  $("#songTitle").textContent = CONFIG.songTitle;
  $("#songArtist").textContent = CONFIG.songArtist;
  $("#loveMessage").textContent = CONFIG.message;
  $("#signature").textContent = CONFIG.signature;
  $("#endingTitle").textContent = CONFIG.endingTitle;
  $("#endingText").textContent = CONFIG.endingText;

  const start = new Date(CONFIG.startDate);
  $("#startDateLabel").textContent = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(start);

  renderGallery();
  renderTimeline();
  void renderNotes();
  void loadPublications();
}

function preciseDateDiff(start, end) {
  if (end < start) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, totalDays: 0 };
  }

  const cursor = new Date(start);
  let years = end.getFullYear() - cursor.getFullYear();
  cursor.setFullYear(cursor.getFullYear() + years);
  if (cursor > end) {
    years -= 1;
    cursor.setFullYear(cursor.getFullYear() - 1);
  }

  let months = (end.getFullYear() - cursor.getFullYear()) * 12 + end.getMonth() - cursor.getMonth();
  cursor.setMonth(cursor.getMonth() + months);
  if (cursor > end) {
    months -= 1;
    cursor.setMonth(cursor.getMonth() - 1);
  }

  const remainder = end - cursor;
  const days = Math.floor(remainder / 86400000);
  const afterDays = remainder - days * 86400000;
  const hours = Math.floor(afterDays / 3600000);
  const minutes = Math.floor((afterDays % 3600000) / 60000);
  const seconds = Math.floor((afterDays % 60000) / 1000);
  const totalDays = Math.floor((end - start) / 86400000);

  return { years, months, days, hours, minutes, seconds, totalDays };
}

function updateCounter() {
  const diff = preciseDateDiff(new Date(CONFIG.startDate), new Date());
  $("#years").textContent = diff.years;
  $("#months").textContent = diff.months;
  $("#days").textContent = diff.days;
  $("#clock").textContent = [diff.hours, diff.minutes, diff.seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
  $("#totalDays").textContent = diff.totalDays.toLocaleString("pt-BR");
}

function renderGallery() {
  const thumbnails = $("#thumbnails");
  thumbnails.innerHTML = "";

  CONFIG.photos.forEach((photo, index) => {
    const button = document.createElement("button");
    button.className = `thumbnail${index === 0 ? " active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", `Ver memória ${index + 1}: ${photo.caption}`);
    button.innerHTML = `<img src="${photo.src}" alt="" loading="lazy" />`;
    button.addEventListener("click", () => showPhoto(index));
    thumbnails.append(button);
  });

  showPhoto(0, false);
}

function showPhoto(index, animate = true) {
  currentPhoto = (index + CONFIG.photos.length) % CONFIG.photos.length;
  const photo = CONFIG.photos[currentPhoto];
  const image = $("#galleryImage");

  if (animate) image.classList.add("changing");

  setTimeout(() => {
    image.src = photo.src;
    image.alt = photo.alt;
    image.style.objectPosition = photo.position || "center";
    $("#galleryCaption").textContent = photo.caption;
    $("#galleryText").textContent = photo.text;
    $("#galleryIndex").textContent = `${currentPhoto + 1} de ${CONFIG.photos.length}`;
    $("#galleryIndexPadded").textContent = String(currentPhoto + 1).padStart(2, "0");
    $$(".thumbnail").forEach((thumb, i) => thumb.classList.toggle("active", i === currentPhoto));
    image.classList.remove("changing");
  }, animate ? 160 : 0);
}

function renderTimeline() {
  const timeline = $("#timeline");
  timeline.innerHTML = "";

  CONFIG.timeline.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item reveal";
    article.innerHTML = `
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card">
        <img src="${item.image}" alt="${item.title}" style="object-position:${item.position || "center"}" />
        <div class="timeline-copy">
          <time>${item.date}</time>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </div>`;
    timeline.append(article);
  });
}

/* A música completa é reproduzida dentro da página pelo player oficial incorporado. */

function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $$(".reveal").forEach((element) => observer.observe(element));
}

function createFloatingHeart() {
  if (!document.body.classList.contains("surprise-open")) return;

  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.3 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  $("#ambientHearts").append(heart);
  setTimeout(() => heart.remove(), 10000);
}

function openExperience() {
  document.body.classList.add("surprise-open");
  surpriseContent.hidden = false;
  openSurprise.closest(".hero-content").classList.add("visible");
  clearInterval(heartTimer);
  heartTimer = setInterval(createFloatingHeart, 700);

  const previewTarget = new URLSearchParams(location.search).has("preview") && location.hash
    ? document.getElementById(location.hash.slice(1))
    : null;

  setTimeout(() => {
    (previewTarget || surpriseContent).scrollIntoView({ behavior: "smooth" });
  }, 350);

  revealOnScroll();
}

function setGuestbookStatus(message, state = "") {
  const status = $("#guestbookStatus");
  status.textContent = message;
  status.dataset.state = state;
}

function createNoteCard(note) {
  const card = document.createElement("article");
  card.className = "note-card";

  const strong = document.createElement("strong");
  strong.textContent = note.nome;

  const message = document.createElement("p");
  message.textContent = note.mensagem;

  const date = document.createElement("small");
  const createdAt = new Date(note.criado_em);
  date.textContent = Number.isNaN(createdAt.getTime())
    ? "Recado guardado com carinho"
    : new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "long",
        timeStyle: "short"
      }).format(createdAt);

  card.append(strong, message, date);
  return card;
}

async function renderNotes() {
  const notesList = $("#notesList");
  const loading = document.createElement("small");
  loading.textContent = "Carregando os recados…";
  notesList.replaceChildren(loading);

  try {
    const response = await fetch(
      `${SUPABASE.url}/rest/v1/recados?select=id,nome,mensagem,criado_em&order=criado_em.desc&limit=50`,
      { headers: { apikey: SUPABASE.publishableKey } }
    );

    if (!response.ok) throw new Error(`Não foi possível carregar os recados (${response.status}).`);

    const notes = await response.json();
    notesList.replaceChildren();

    if (!notes.length) {
      const empty = document.createElement("small");
      empty.textContent = "Nenhum recado ainda. O primeiro pode ser seu ♥";
      notesList.append(empty);
      return;
    }

    notes.forEach((note) => notesList.append(createNoteCard(note)));
  } catch (error) {
    notesList.replaceChildren();
    const warning = document.createElement("small");
    warning.className = "notes-error";
    warning.textContent = "Não foi possível carregar os recados agora. Tente novamente em instantes.";
    notesList.append(warning);
    console.error(error);
  }
}

function formatPublicationDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Uma nova lembrança";

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeStyle: "short"
  }).format(date);
}

function createMemoryPublicationCard(publication) {
  const article = document.createElement("article");
  article.className = "memory-live-card";

  const figure = document.createElement("figure");
  const tape = document.createElement("span");
  tape.className = "memory-live-tape";
  tape.setAttribute("aria-hidden", "true");
  const image = document.createElement("img");
  image.src = publication.imagem_url;
  image.alt = publication.titulo;
  image.loading = "lazy";
  figure.append(tape, image);

  const copy = document.createElement("div");
  copy.className = "memory-live-copy";

  const date = document.createElement("time");
  date.dateTime = publication.criado_em;
  date.textContent = formatPublicationDate(publication.criado_em);

  const title = document.createElement("h4");
  title.textContent = publication.titulo;

  const text = document.createElement("p");
  text.textContent = publication.texto;

  copy.append(date, title, text);
  article.append(figure, copy);
  return article;
}

function createTimelinePublicationItem(publication) {
  const article = document.createElement("article");
  article.className = "timeline-item user-added visible";

  const dot = document.createElement("span");
  dot.className = "timeline-dot";
  dot.setAttribute("aria-hidden", "true");

  const card = document.createElement("div");
  card.className = "timeline-card";

  const image = document.createElement("img");
  image.src = publication.imagem_url;
  image.alt = publication.titulo;
  image.loading = "lazy";

  const copy = document.createElement("div");
  copy.className = "timeline-copy";

  const date = document.createElement("time");
  date.dateTime = publication.criado_em;
  date.textContent = formatPublicationDate(publication.criado_em);

  const title = document.createElement("h3");
  title.textContent = publication.titulo;

  const text = document.createElement("p");
  text.textContent = publication.texto;

  copy.append(date, title, text);
  card.append(image, copy);
  article.append(dot, card);
  return article;
}

function renderPublications(publications) {
  const memoryFeed = $('[data-live-section="fotos"]');
  const memoryPosts = publications.filter((post) => post.secao === "fotos");

  if (memoryPosts.length) {
    const heading = document.createElement("div");
    heading.className = "memory-live-heading";

    const eyebrow = document.createElement("span");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = "Álbum que continua crescendo";

    const title = document.createElement("h3");
    title.textContent = "Novas memórias que agora também moram aqui";
    heading.append(eyebrow, title);

    const grid = document.createElement("div");
    grid.className = "memory-live-grid";
    memoryPosts.forEach((post) => grid.append(createMemoryPublicationCard(post)));

    memoryFeed.replaceChildren(heading, grid);
    memoryFeed.hidden = false;
  } else {
    memoryFeed.replaceChildren();
    memoryFeed.hidden = true;
  }

  const timeline = $("#timeline");
  timeline.querySelectorAll(".timeline-item.user-added").forEach((item) => item.remove());
  publications
    .filter((post) => post.secao === "historia")
    .forEach((post) => timeline.append(createTimelinePublicationItem(post)));
}

async function loadPublications() {
  try {
    const response = await fetch(
      `${SUPABASE.url}/rest/v1/publicacoes?select=id,secao,titulo,texto,imagem_url,criado_em&order=criado_em.asc`,
      { headers: { apikey: SUPABASE.publishableKey } }
    );

    if (!response.ok) throw new Error(`Não foi possível carregar as publicações (${response.status}).`);
    renderPublications(await response.json());
  } catch (error) {
    console.error(error);
  }
}

function startPublicationsFallback() {
  if (publicationsFallbackTimer) return;
  publicationsFallbackTimer = setInterval(loadPublications, 15000);
}

function subscribeToPublications() {
  if (!window.supabase?.createClient) {
    startPublicationsFallback();
    return;
  }

  const client = window.supabase.createClient(SUPABASE.url, SUPABASE.publishableKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  });

  client
    .channel("novas-lembrancas-bianca")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "publicacoes" },
      () => void loadPublications()
    )
    .subscribe((status) => {
      if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") startPublicationsFallback();
    });
}

function clearPublicationPreview() {
  if (publicationPreviewUrl) URL.revokeObjectURL(publicationPreviewUrl);
  publicationPreviewUrl = "";
  preparedPublicationImage = null;
  publicationImagePromise = null;
  publicationImageSelection += 1;
  $("#publicationPreviewImage").removeAttribute("src");
  $("#publicationPreview").hidden = true;
  $("#publicationImageHint").textContent = "JPG, PNG ou WEBP, com até 8 MB. A foto será otimizada sem reduzir suas dimensões; se a qualidade não puder ser preservada, o arquivo original será usado.";
}

function formatImageSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} MB`;
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => blob ? resolve(blob) : reject(new Error("O navegador não conseguiu preparar a imagem.")),
      type,
      quality
    );
  });
}

function drawForComparison(source) {
  const scale = Math.min(1, IMAGE_UPLOAD.comparisonLongEdge / Math.max(source.width, source.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(source.width * scale));
  canvas.height = Math.max(1, Math.round(source.height * scale));
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(source, 0, 0, canvas.width, canvas.height);
  return context.getImageData(0, 0, canvas.width, canvas.height).data;
}

function calculatePsnr(reference, candidate) {
  if (reference.length !== candidate.length) return 0;

  let squaredError = 0;
  for (let index = 0; index < reference.length; index += 1) {
    const difference = reference[index] - candidate[index];
    squaredError += difference * difference;
  }

  if (squaredError === 0) return Number.POSITIVE_INFINITY;
  const meanSquaredError = squaredError / reference.length;
  return 10 * Math.log10((255 * 255) / meanSquaredError);
}

async function optimizePublicationImage(file) {
  if (!("createImageBitmap" in window) || !HTMLCanvasElement.prototype.toBlob) {
    return { file, optimized: false };
  }

  const originalBitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const canvas = document.createElement("canvas");
  canvas.width = originalBitmap.width;
  canvas.height = originalBitmap.height;
  const context = canvas.getContext("2d");

  if (!context || !canvas.width || !canvas.height) {
    originalBitmap.close?.();
    return { file, optimized: false };
  }

  context.drawImage(originalBitmap, 0, 0);
  const referencePixels = drawForComparison(originalBitmap);
  let bestCandidate = null;

  try {
    for (const quality of IMAGE_UPLOAD.qualityLevels) {
      const blob = await canvasToBlob(canvas, IMAGE_UPLOAD.outputType, quality);
      const saving = 1 - blob.size / file.size;
      if (saving < IMAGE_UPLOAD.minimumSaving) continue;

      const candidateBitmap = await createImageBitmap(blob);
      const psnr = calculatePsnr(referencePixels, drawForComparison(candidateBitmap));
      candidateBitmap.close?.();

      if (psnr >= IMAGE_UPLOAD.minimumPsnr && (!bestCandidate || blob.size < bestCandidate.blob.size)) {
        bestCandidate = { blob, psnr, saving };
      }
    }
  } finally {
    originalBitmap.close?.();
  }

  if (!bestCandidate) return { file, optimized: false };

  const baseName = file.name.replace(/\.[^.]+$/, "") || "lembranca";
  const optimizedFile = new File([bestCandidate.blob], `${baseName}.webp`, {
    type: IMAGE_UPLOAD.outputType,
    lastModified: file.lastModified
  });

  return {
    file: optimizedFile,
    optimized: true,
    originalBytes: file.size,
    optimizedBytes: optimizedFile.size
  };
}

function setPublicationStatus(message, state = "") {
  const status = $("#publicationStatus");
  status.textContent = message;
  status.dataset.state = state;
}

function updatePublicationDesign() {
  const section = $("#publicationSection").value;
  const creatorCard = $(".creator-card");
  creatorCard.dataset.selectedSection = section;
  $("#publicationPreview").dataset.selectedSection = section;
  $("#publicationDesignHint").textContent = section === "historia"
    ? "A lembrança entrará como uma nova etapa da linha do tempo."
    : "A lembrança aparecerá como uma nova fotografia do álbum.";
}

function getShareUrl() {
  if (location.protocol === "file:") return "";

  try {
    if (window.top !== window && window.top.location.origin === location.origin) {
      return window.top.location.href.split("#")[0];
    }
  } catch {
    // Se a página estiver em outro domínio, usa o endereço atual com segurança.
  }

  return location.href.split("#")[0];
}

async function copyShareUrl(url) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch {
      // Continua para a alternativa compatível com navegadores mais antigos.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = url;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.append(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}

function showShareFallback(status, url, copied) {
  status.textContent = copied
    ? "Link copiado! Agora é só enviar para ela ♥"
    : "Não foi possível copiar automaticamente. Use o link abaixo:";

  const link = document.createElement("a");
  link.href = url;
  link.textContent = url;
  link.target = "_blank";
  link.rel = "noopener";

  status.append(document.createElement("br"), link);
}

async function sharePage() {
  const shareUrl = getShareUrl();
  const status = $("#shareStatus");

  if (!shareUrl) {
    status.textContent = "Publique o site para gerar um link compartilhável.";
    return;
  }

  const data = {
    title: CONFIG.pageTitle,
    text: "Natã fez uma surpresa para Bianca ♥",
    url: shareUrl
  };

  let canUseNativeShare = typeof navigator.share === "function";

  if (canUseNativeShare && typeof navigator.canShare === "function") {
    try {
      canUseNativeShare = navigator.canShare(data);
    } catch {
      canUseNativeShare = false;
    }
  }

  if (canUseNativeShare) {
    try {
      await navigator.share(data);
      status.textContent = "Compartilhado com amor ♥";
      return;
    } catch (error) {
      if (error.name === "AbortError") {
        status.textContent = "Compartilhamento cancelado.";
        return;
      }
    }
  }

  const copied = await copyShareUrl(shareUrl);
  showShareFallback(status, shareUrl, copied);
}

let touchStartX = 0;
$(".gallery-photo-area").addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

$(".gallery-photo-area").addEventListener("touchend", (event) => {
  const delta = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(delta) > 45) showPhoto(currentPhoto + (delta < 0 ? 1 : -1));
}, { passive: true });

$(".memory-album").addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showPhoto(currentPhoto - 1);
  if (event.key === "ArrowRight") showPhoto(currentPhoto + 1);
});

window.addEventListener("load", () => {
  hydrateContent();
  subscribeToPublications();
  updatePublicationDesign();
  updateCounter();
  setInterval(updateCounter, 1000);
  setTimeout(() => loadingScreen.classList.add("hidden"), 900);
  setTimeout(() => $(".hero .reveal").classList.add("visible"), 1150);

  if (new URLSearchParams(location.search).has("preview")) {
    setTimeout(() => {
      openExperience();
      setTimeout(() => {
        const section = location.hash ? document.getElementById(location.hash.slice(1)) : null;
        if (section) section.scrollIntoView({ behavior: "auto", block: "start" });
      }, 900);
    }, 1500);
  }
});

openSurprise.addEventListener("click", openExperience);
$("#galleryPrev").addEventListener("click", () => showPhoto(currentPhoto - 1));
$("#galleryNext").addEventListener("click", () => showPhoto(currentPhoto + 1));

$("#guestbookForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = $("#guestName").value.trim();
  const message = $("#guestMessage").value.trim();
  if (!name || !message) return;

  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalLabel = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Guardando…";
  setGuestbookStatus("Enviando seu recado…");

  try {
    const response = await fetch(`${SUPABASE.url}/rest/v1/recados`, {
      method: "POST",
      headers: {
        apikey: SUPABASE.publishableKey,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({ nome: name, mensagem: message })
    });

    if (!response.ok) throw new Error(`Não foi possível guardar o recado (${response.status}).`);

    form.reset();
    setGuestbookStatus("Recado guardado para aparecer em todos os aparelhos ♥", "success");
    await renderNotes();
  } catch (error) {
    setGuestbookStatus("Não foi possível guardar agora. Confira a internet e tente novamente.", "error");
    console.error(error);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
});

$("#publicationImage").addEventListener("change", (event) => {
  clearPublicationPreview();
  const [file] = event.currentTarget.files;
  if (!file) return;

  if (file.size > IMAGE_UPLOAD.maxBytes) {
    event.currentTarget.value = "";
    setPublicationStatus("A foto deve ter no máximo 8 MB.", "error");
    return;
  }

  const selection = ++publicationImageSelection;
  preparedPublicationImage = file;
  $("#publicationImageHint").textContent = "Analisando a foto e preservando a melhor qualidade…";
  setPublicationStatus("Preparando a foto…");

  publicationImagePromise = optimizePublicationImage(file)
    .catch(() => ({ file, optimized: false }))
    .then((result) => {
      if (selection !== publicationImageSelection) return null;

      preparedPublicationImage = result.file;
      publicationPreviewUrl = URL.createObjectURL(result.file);
      $("#publicationPreviewImage").src = publicationPreviewUrl;
      $("#publicationPreview").hidden = false;

      if (result.optimized) {
        $("#publicationImageHint").textContent = `Foto otimizada de ${formatImageSize(result.originalBytes)} para ${formatImageSize(result.optimizedBytes)}, mantendo as dimensões e a qualidade visual.`;
      } else {
        $("#publicationImageHint").textContent = `Qualidade priorizada: o arquivo original de ${formatImageSize(file.size)} será usado.`;
      }

      setPublicationStatus("");
      return result.file;
    });
});

$("#publicationSection").addEventListener("change", updatePublicationDesign);

$("#publicationForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const [selectedImage] = $("#publicationImage").files;
  const section = $("#publicationSection").value;
  const title = $("#publicationTitle").value.trim();
  const publicationText = $("#publicationText").value.trim();
  const editorCode = $("#publicationCode").value;

  if (!selectedImage || !title || !publicationText || !editorCode) return;

  const originalLabel = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Publicando…";
  setPublicationStatus("Finalizando a foto com a melhor qualidade…");

  try {
    if (publicationImagePromise) await publicationImagePromise;
    const image = preparedPublicationImage || selectedImage;
    const payload = new FormData();
    payload.append("secao", section);
    payload.append("titulo", title);
    payload.append("texto", publicationText);
    payload.append("imagem", image, image.name);

    setPublicationStatus("Enviando a foto e preparando a nova lembrança…");
    const response = await fetch(`${SUPABASE.url}/functions/v1/${SUPABASE.publishFunction}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE.publishableKey,
        "x-editor-code": editorCode
      },
      body: payload
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Não foi possível publicar agora.");

    form.reset();
    clearPublicationPreview();
    updatePublicationDesign();
    setPublicationStatus("Lembrança publicada! Ela já está aparecendo na seção escolhida ♥", "success");
    await loadPublications();

    const destination = section === "historia"
      ? $("#timeline .timeline-item.user-added:last-child")
      : $('[data-live-section="fotos"]');
    if (destination && !destination.hidden) {
      setTimeout(() => destination.scrollIntoView({ behavior: "smooth", block: "center" }), 250);
    }
  } catch (error) {
    setPublicationStatus(error.message || "Não foi possível publicar agora.", "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
});

$("#shareButton").addEventListener("click", sharePage);
$("#replayButton").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => openSurprise.focus(), 650);
});
