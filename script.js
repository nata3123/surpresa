/*
  Surpresa personalizada para Bianca Leticia de França Aragão.
  Feita por Natã Victor Lima Olegario Teixeira.
*/
const CONFIG = {
  pageTitle: "surpresaparabianca",
  introTitle: "Bianca & Natã, a nossa história mora aqui.",
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
  endingText: "Desde 21 de maio de 2026, cada dia ao seu lado ganhou um lugar especial na minha história."
};

const SUPABASE = Object.freeze({
  url: "https://mijtdivqfjrkwchqdqvr.supabase.co",
  publishableKey: "sb_publishable_ukedGcRlxvIYSyF8rSONig_koPKNEVh",
  publishFunction: "publicar-lembranca",
  replyFunction: "responder-publicacao",
  plansFunction: "gerenciar-planos",
  cornerFunction: "gerenciar-cantinho",
  manageFunction: "gerenciar-conteudo"
});

const IMAGE_UPLOAD = Object.freeze({
  maxBytes: 8 * 1024 * 1024,
  outputType: "image/webp",
  qualityLevels: [0.99, 0.98, 0.97],
  minimumSaving: 0.1,
  minimumPsnr: 46,
  comparisonLongEdge: 640
});

const FUTURE_PLAN_CATEGORIES = Object.freeze({
  viagem: { label: "Viagem", symbol: "✈" },
  encontro: { label: "Encontro", symbol: "♡" },
  sonho: { label: "Sonho", symbol: "✦" },
  aventura: { label: "Aventura", symbol: "⌁" },
  outro: { label: "Nosso plano", symbol: "♥" }
});

const DAILY_ENTRY_TYPES = Object.freeze({
  gosto_em_voce: { label: "Três coisas que gosto em você", symbol: "♡" },
  coisas_boas: { label: "Três coisas boas do dia", symbol: "☼" },
  gratidao: { label: "Três motivos de gratidão", symbol: "✦" }
});

const DATE_IDEA_LABELS = Object.freeze({
  place: { casa: "⌂ Em casa", sair: "⌁ Fora de casa" },
  budget: { gratis: "◌ Sem gastar", baixo: "◌ Econômico", especial: "✦ Algo especial" },
  duration: { rapido: "◷ Até 1 hora", medio: "◷ Algumas horas", longo: "☼ Um dia inteiro" }
});

const DATE_IDEAS = Object.freeze([
  { title: "Perguntas que aquecem o coração", description: "Sentem juntos por alguns minutos e cada um faz três perguntas que sempre teve vontade de fazer ao outro.", specialTouch: "Terminem contando qual resposta gostariam de guardar para sempre.", place: "casa", budget: "gratis", duration: "rapido" },
  { title: "Sessão de fotos do nosso jeitinho", description: "Escolham cantinhos da casa, improvisem poses e façam uma pequena sessão usando apenas o celular e o que já têm.", specialTouch: "Escolham a foto mais espontânea para entrar em Memórias que moram em mim.", place: "casa", budget: "gratis", duration: "medio" },
  { title: "Um dia inteiro sem pressa", description: "Montem juntos um dia em casa com café demorado, música, jogos, comida feita pelos dois e uma noite de filme.", specialTouch: "Cada um escolhe uma parte do dia sem contar antes para o outro.", place: "casa", budget: "gratis", duration: "longo" },
  { title: "Lanche surpresa em dupla", description: "Cada um prepara ou compra uma bebida, um salgado e um doce para o outro sem revelar as escolhas.", specialTouch: "Façam uma nota divertida para cada escolha e guardem o resultado.", place: "casa", budget: "baixo", duration: "rapido" },
  { title: "Cinema com cardápio escolhido pelos dois", description: "Escolham um filme que nenhum dos dois viu, preparem uma comida simples e deixem os celulares longe até os créditos.", specialTouch: "Antes do filme, cada um escreve uma previsão sobre a história para comparar no final.", place: "casa", budget: "baixo", duration: "medio" },
  { title: "Festival particular de filmes e sabores", description: "Escolham dois filmes, preparem lanches para momentos diferentes e transformem a sala no cinema particular de vocês.", specialTouch: "Façam ingressos de papel com a data e o nome do festival.", place: "casa", budget: "baixo", duration: "longo" },
  { title: "Brinde com sobremesa especial", description: "Escolham uma sobremesa bonita, arrumem a mesa e façam um pequeno brinde a alguma conquista de vocês.", specialTouch: "Cada um completa a frase: hoje eu celebraria em você...", place: "casa", budget: "especial", duration: "rapido" },
  { title: "Jantar com tema sorteado", description: "Sorteiem um país, uma cor ou uma década e montem juntos um jantar inspirado no tema escolhido.", specialTouch: "Escolham uma música que combine com o tema para abrir a noite.", place: "casa", budget: "especial", duration: "medio" },
  { title: "Hotel romântico dentro de casa", description: "Preparem café especial, roupas confortáveis, jantar caprichado e uma programação inteira sem tarefas ou pressa.", specialTouch: "Deixem uma cartinha de boas-vindas no travesseiro um do outro.", place: "casa", budget: "especial", duration: "longo" },
  { title: "Caminhada sem celular", description: "Saiam para caminhar sem destino definido e conversem com calma, prestando atenção ao caminho e um ao outro.", specialTouch: "Cada um faz uma pergunta que nunca fez antes.", place: "sair", budget: "gratis", duration: "rapido" },
  { title: "Passeio para ver o pôr do sol", description: "Escolham um lugar bonito, levem água e fiquem juntos enquanto o céu muda de cor.", specialTouch: "Tirem uma única foto do momento e contem o que mais gostaram no dia.", place: "sair", budget: "gratis", duration: "medio" },
  { title: "Turistas a pé na própria cidade", description: "Montem um roteiro por praças, ruas e lugares gratuitos que vocês ainda não conhecem e explorem sem pressa.", specialTouch: "Criem um nome divertido para o passeio e registrem três descobertas.", place: "sair", budget: "gratis", duration: "longo" },
  { title: "Uma sobremesa em um lugar novo", description: "Procurem uma sobremesa que nunca provaram, dividam a escolha e aproveitem uma saída curta da rotina.", specialTouch: "Cada um escolhe uma colherada perfeita para oferecer ao outro.", place: "sair", budget: "baixo", duration: "rapido" },
  { title: "Piquenique simples para dois", description: "Levem frutas, café ou lanches fáceis para um lugar tranquilo e passem algumas horas conversando.", specialTouch: "Cada um leva escondido uma coisinha que sabe que o outro gosta.", place: "sair", budget: "baixo", duration: "medio" },
  { title: "Roteiro econômico pela cidade", description: "Escolham três paradas baratas, como uma praça, um café e um lugar bonito para fotos, e façam um passeio completo.", specialTouch: "Guardem um papel ou uma foto de cada parada para lembrar do roteiro.", place: "sair", budget: "baixo", duration: "longo" },
  { title: "Um brinde fora da rotina", description: "Escolham um lugar agradável para dividir uma bebida ou petisco e fazer uma pausa especial no dia.", specialTouch: "Brindem a uma coisa pequena que melhorou desde que vocês se conheceram.", place: "sair", budget: "especial", duration: "rapido" },
  { title: "Recriar uma parte do primeiro encontro", description: "Voltem a um lugar, comida, música ou detalhe do começo e contem o que cada um lembra daquele dia.", specialTouch: "No fim, digam o que fariam igual e o que tornou a história ainda melhor.", place: "sair", budget: "especial", duration: "medio" },
  { title: "Um dia inteiro escolhido pelos dois", description: "Cada um escolhe em segredo uma parte do dia, como uma comida, um passeio e algo para fazer à noite.", specialTouch: "Só revelem a próxima escolha quando chegar a hora de vivê-la.", place: "sair", budget: "especial", duration: "longo" }
]);

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
let latestPublicationReplies = [];
let latestFuturePlans = [];
let currentDateIdea = null;
let complaintPreviewUrl = "";
let sharedContentActivated = false;
let counterTimer;
let realtimeClientPromise;
let originalAlbumPhotos = [];
let latestRepliesByPublication = new Map();

function hydrateContent() {
  document.title = CONFIG.pageTitle;
  $("#pageTitle").textContent = "Bianca & Natã — nossa história";
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

  void loadPublications();
  setupDateIdea();
}

function activateSharedContent() {
  if (sharedContentActivated) return;
  sharedContentActivated = true;
  void renderNotes();
  void loadPublications();
  void loadFuturePlans();
  void loadCoupleCorner();
  void loadRealtimeClient()
    .then(subscribeToPublications)
    .catch(startPublicationsFallback);
}

function loadRealtimeClient() {
  if (window.supabase?.createClient) return Promise.resolve();
  if (realtimeClientPromise) return realtimeClientPromise;

  realtimeClientPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.111.0/dist/umd/supabase.min.js";
    script.crossOrigin = "anonymous";
    script.onload = resolve;
    script.onerror = () => reject(new Error("Não foi possível ativar as atualizações em tempo real."));
    document.head.append(script);
  });

  return realtimeClientPromise;
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

function updateHeroMemories(photos) {
  const preferredPhotos = [1, 2, 3, 4]
    .map((index) => photos[index])
    .filter(Boolean);
  const candidates = preferredPhotos.length ? preferredPhotos : photos.slice(0, 4);

  $$(".hero-memory").forEach((figure, index) => {
    const photo = candidates[index];
    const image = figure.querySelector("img");
    figure.hidden = !photo;
    if (!photo) {
      image.removeAttribute("src");
      return;
    }
    image.src = photo.imagem_url;
    image.alt = "";
    image.style.objectPosition = photo.posicao || "center";
  });
}

function renderGallery(photos = []) {
  const activePhotoId = originalAlbumPhotos[currentPhoto]?.id;
  originalAlbumPhotos = [...photos].sort((left, right) => (left.ordem || 0) - (right.ordem || 0));
  const thumbnails = $("#thumbnails");
  thumbnails.replaceChildren();
  updateHeroMemories(originalAlbumPhotos);

  originalAlbumPhotos.forEach((photo, index) => {
    const button = document.createElement("button");
    button.className = `thumbnail${index === 0 ? " active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", `Ver memória ${index + 1}: ${photo.titulo}`);
    const image = document.createElement("img");
    image.src = photo.imagem_url;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    button.append(image);
    button.addEventListener("click", () => showPhoto(index));
    thumbnails.append(button);
  });

  if (!originalAlbumPhotos.length) {
    currentPhoto = 0;
    $("#galleryImage").removeAttribute("src");
    $("#galleryImage").alt = "";
    $("#galleryCaption").textContent = "O álbum está esperando uma nova memória";
    $("#galleryText").textContent = "Quando vocês publicarem uma foto nesta seção, ela aparecerá aqui.";
    $("#galleryIndex").textContent = "0 de 0";
    $("#galleryIndexPadded").textContent = "00";
    $("#galleryPrev").disabled = true;
    $("#galleryNext").disabled = true;
    $("#galleryDiary").replaceChildren();
    return;
  }

  $("#galleryPrev").disabled = false;
  $("#galleryNext").disabled = false;
  const preservedIndex = originalAlbumPhotos.findIndex((photo) => photo.id === activePhotoId);
  currentPhoto = preservedIndex >= 0 ? preservedIndex : Math.min(currentPhoto, originalAlbumPhotos.length - 1);
  showPhoto(currentPhoto, false);
}

function showPhoto(index, animate = true) {
  if (!originalAlbumPhotos.length) return;
  currentPhoto = (index + originalAlbumPhotos.length) % originalAlbumPhotos.length;
  const photo = originalAlbumPhotos[currentPhoto];
  const image = $("#galleryImage");

  if (animate) image.classList.add("changing");

  setTimeout(() => {
    image.src = photo.imagem_url;
    image.alt = photo.alt_texto || photo.titulo;
    image.style.objectPosition = photo.posicao || "center";
    $("#galleryCaption").textContent = photo.titulo;
    $("#galleryText").textContent = photo.texto;
    $("#galleryIndex").textContent = `${currentPhoto + 1} de ${originalAlbumPhotos.length}`;
    $("#galleryIndexPadded").textContent = String(currentPhoto + 1).padStart(2, "0");
    $$(".thumbnail").forEach((thumb, i) => thumb.classList.toggle("active", i === currentPhoto));
    renderGalleryDiary();
    image.classList.remove("changing");
  }, animate ? 160 : 0);
}

function renderTimeline(items = [], repliesByPublication = latestRepliesByPublication) {
  const timeline = $("#timeline");
  timeline.replaceChildren();

  items
    .sort((left, right) => (left.ordem || 0) - (right.ordem || 0))
    .forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item cloud-original reveal";
    if (document.body.classList.contains("surprise-open")) article.classList.add("visible");
    const dot = document.createElement("span");
    dot.className = "timeline-dot";
    dot.setAttribute("aria-hidden", "true");
    const card = document.createElement("div");
    card.className = "timeline-card";
    const image = document.createElement("img");
    image.src = item.imagem_url;
    image.alt = item.alt_texto || item.titulo;
    image.loading = "lazy";
    image.decoding = "async";
    image.style.objectPosition = item.posicao || "center";
    const copy = document.createElement("div");
    copy.className = "timeline-copy";
    const date = document.createElement("time");
    date.textContent = item.rotulo_data || formatPublicationDate(item.criado_em);
    const title = document.createElement("h3");
    title.textContent = item.titulo;
    const text = document.createElement("p");
    text.textContent = item.texto;
    copy.append(date, title, text);
    card.append(
      image,
      copy,
      createPublicationReplyArea(
        { publicationId: item.id, defaultAuthor: "Bianca" },
        repliesByPublication.get(String(item.id)) || []
      ),
      createPublicationManager(item, {
        deletePrompt: "Excluir esta foto da nuvem e da linha do tempo?"
      })
    );
    article.append(dot, card);
    timeline.append(article);
  });

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "corner-empty timeline-empty";
    empty.textContent = "A linha do tempo está esperando um novo capítulo ♥";
    timeline.append(empty);
  }
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
  activateSharedContent();
  openSurprise.closest(".hero-content").classList.add("visible");
  clearInterval(heartTimer);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heartTimer = setInterval(createFloatingHeart, 1000);
  }

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

const AUTHOR_OPTIONS = [
  { value: "Bianca", label: "Bianca" },
  { value: "Natã", label: "Natã" }
];

async function requestManagedContent(payload, editorCode) {
  const response = await fetch(SUPABASE.url + "/functions/v1/" + SUPABASE.manageFunction, {
    method: "POST",
    headers: {
      apikey: SUPABASE.publishableKey,
      "x-editor-code": editorCode
    },
    body: payload
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "Não foi possível alterar esse conteúdo.");
  return result;
}

function createManageField(config, item, contentType) {
  const wrapper = document.createElement("div");
  wrapper.className = "content-manager-field";

  const label = document.createElement("label");
  const fieldId = "manage-" + contentType + "-" + item.id + "-" + config.name;
  label.htmlFor = fieldId;
  label.textContent = config.label;

  let field;
  if (config.kind === "select") {
    field = document.createElement("select");
    (config.options || []).forEach((optionData) => {
      const option = document.createElement("option");
      option.value = optionData.value;
      option.textContent = optionData.label;
      option.selected = String(config.value ?? item[config.name] ?? "") === optionData.value;
      field.append(option);
    });
  } else if (config.kind === "textarea") {
    field = document.createElement("textarea");
    field.rows = config.rows || 4;
  } else {
    field = document.createElement("input");
    field.type = "text";
  }

  field.id = fieldId;
  field.name = config.name;
  if (config.kind !== "select") field.value = String(config.value ?? item[config.name] ?? "");
  if (config.maxLength) field.maxLength = config.maxLength;
  if (config.required !== false) field.required = true;
  wrapper.append(label, field);
  return wrapper;
}

function createContentManager(config) {
  const details = document.createElement("details");
  details.className = "content-manager";

  const summary = document.createElement("summary");
  summary.textContent = "Editar ou excluir";
  details.append(summary);

  const form = document.createElement("form");
  form.className = "content-manager-form";
  (config.fields || []).forEach((field) => {
    form.append(createManageField(field, config.item, config.type));
  });

  if (config.allowImage) {
    const imageField = document.createElement("div");
    imageField.className = "content-manager-field";
    const imageLabel = document.createElement("label");
    imageLabel.htmlFor = "manage-" + config.type + "-" + config.item.id + "-imagem";
    imageLabel.textContent = "Trocar foto, se quiser";
    const image = document.createElement("input");
    image.id = imageLabel.htmlFor;
    image.name = "imagem";
    image.type = "file";
    image.accept = "image/jpeg,image/png,image/webp";
    const hint = document.createElement("small");
    hint.textContent = "Deixe vazio para manter a foto atual.";
    imageField.append(imageLabel, image, hint);
    form.append(imageField);
  }

  const codeField = document.createElement("div");
  codeField.className = "content-manager-field";
  const codeLabel = document.createElement("label");
  codeLabel.htmlFor = "manage-" + config.type + "-" + config.item.id + "-codigo";
  codeLabel.textContent = "Código reservado";
  const code = document.createElement("input");
  code.id = codeLabel.htmlFor;
  code.name = "codigo";
  code.type = "password";
  code.autocomplete = "off";
  code.placeholder = "Digite o código para confirmar";
  code.required = true;
  codeField.append(codeLabel, code);

  const actions = document.createElement("div");
  actions.className = "content-manager-actions";
  const editButton = document.createElement("button");
  editButton.className = "content-edit-button";
  editButton.type = "submit";
  editButton.textContent = "Salvar alterações";
  const deleteButton = document.createElement("button");
  deleteButton.className = "content-delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Excluir";
  actions.append(editButton, deleteButton);

  const status = document.createElement("small");
  status.className = "content-manager-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  form.append(codeField, actions, status);

  const setBusy = (busy) => {
    editButton.disabled = busy;
    deleteButton.disabled = busy;
    code.disabled = busy;
  };

  const finishAction = async (action) => {
    const editorCode = code.value;
    if (!editorCode) {
      status.textContent = "Digite o código reservado para continuar.";
      status.dataset.state = "error";
      code.focus();
      return;
    }

    if (action === "excluir" && !window.confirm(config.deletePrompt || "Excluir esse conteúdo para sempre?")) {
      return;
    }

    setBusy(true);
    status.textContent = action === "editar" ? "Salvando alterações…" : "Excluindo…";
    status.dataset.state = "";

    try {
      let payload;
      if (action === "editar") {
        payload = new FormData(form);
        payload.delete("codigo");
        const image = payload.get("imagem");
        if (image instanceof File && image.size > 0) {
          status.textContent = "Preparando a nova foto sem perder qualidade…";
          const optimized = await optimizePublicationImage(image)
            .catch(() => ({ file: image, optimized: false }));
          const preparedImage = optimized.file || image;
          payload.set("imagem", preparedImage, preparedImage.name);
        } else {
          payload.delete("imagem");
        }
      } else {
        payload = new FormData();
      }

      payload.set("acao", action);
      payload.set("tipo", config.type);
      payload.set("id", String(config.item.id));
      await requestManagedContent(payload, editorCode);
      status.textContent = action === "editar" ? "Alterações salvas ♥" : "Conteúdo excluído.";
      status.dataset.state = "success";
      await config.reload();
    } catch (error) {
      status.textContent = error.message || "Não foi possível alterar esse conteúdo.";
      status.dataset.state = "error";
      setBusy(false);
      if (status.textContent === "Código reservado incorreto.") {
        code.value = "";
        code.focus();
      }
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void finishAction("editar");
  });
  deleteButton.addEventListener("click", () => void finishAction("excluir"));

  details.append(form);
  return details;
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

  card.append(
    strong,
    message,
    date,
    createContentManager({
      type: "recado",
      item: note,
      fields: [
        { name: "nome", label: "Nome", maxLength: 40 },
        { name: "mensagem", label: "Recado", kind: "textarea", rows: 3, maxLength: 240 }
      ],
      reload: renderNotes,
      deletePrompt: "Excluir este recado para sempre?"
    })
  );
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

function formatFuturePlanDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "um dia especial";

  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(date);
}

function setFuturePlanStatus(message, state = "") {
  const status = $("#futurePlanStatus");
  status.textContent = message;
  status.dataset.state = state;
}

async function requestFuturePlan(payload, editorCode) {
  const response = await fetch(`${SUPABASE.url}/functions/v1/${SUPABASE.plansFunction}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE.publishableKey,
      "Content-Type": "application/json",
      "x-editor-code": editorCode
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "Não foi possível atualizar nossos planos agora.");
  return result;
}

async function completeFuturePlan(event, plan) {
  event.preventDefault();

  const form = event.currentTarget;
  const codeField = form.elements.namedItem("codigo");
  const status = form.querySelector(".future-complete-status");
  const submitButton = form.querySelector('button[type="submit"]');
  const editorCode = codeField.value;
  if (!editorCode) return;

  const originalLabel = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Guardando…";
  status.textContent = "Transformando este plano em um capítulo vivido…";
  status.dataset.state = "";

  try {
    await requestFuturePlan({ acao: "concluir", id: plan.id }, editorCode);
    await loadFuturePlans();
  } catch (error) {
    status.textContent = error.message || "Não foi possível marcar este plano agora.";
    status.dataset.state = "error";
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
}

function transformFuturePlanIntoMemory(plan) {
  const title = String(plan.titulo || "Nosso plano virou memória");
  $("#publicationSection").value = "historia";
  $("#publicationTitle").value = title.length > 80 ? `${title.slice(0, 77)}…` : title;
  $("#publicationText").value = plan.detalhes
    ? `Nós tiramos este plano do papel: ${plan.detalhes}`
    : "Mais um sonho saiu da nossa lista e virou uma lembrança para guardar para sempre.";
  updatePublicationDesign();
  setPublicationStatus("Plano preenchido! Agora escolha uma foto desse dia para transformá-lo em memória ♥", "success");

  const form = $("#publicationForm");
  form.classList.add("prefilled-from-plan");
  $("#adicionar").scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => {
    form.classList.remove("prefilled-from-plan");
    $("#publicationImage").focus({ preventScroll: true });
  }, 850);
}

function createFuturePlanCard(plan) {
  const category = FUTURE_PLAN_CATEGORIES[plan.categoria] || FUTURE_PLAN_CATEGORIES.outro;
  const article = document.createElement("article");
  article.className = `future-plan-card${plan.concluido ? " is-complete" : ""}`;
  article.dataset.futurePlanId = String(plan.id);

  const meta = document.createElement("div");
  meta.className = "future-plan-meta";

  const badge = document.createElement("span");
  badge.className = "future-plan-badge";
  badge.textContent = `${category.symbol} ${category.label}`;

  const author = document.createElement("span");
  author.textContent = `Sonho de ${plan.autor}`;
  meta.append(badge, author);

  const title = document.createElement("h4");
  title.textContent = plan.titulo;

  article.append(meta, title);

  if (plan.detalhes) {
    const details = document.createElement("p");
    details.textContent = plan.detalhes;
    article.append(details);
  }

  const footer = document.createElement("div");
  footer.className = "future-plan-footer";

  if (plan.concluido) {
    const lived = document.createElement("span");
    lived.className = "future-lived-label";
    lived.textContent = `✓ Vivido em ${formatFuturePlanDate(plan.concluido_em)}`;

    const transformButton = document.createElement("button");
    transformButton.className = "future-transform-button";
    transformButton.type = "button";
    transformButton.textContent = "Transformar em memória";
    transformButton.addEventListener("click", () => transformFuturePlanIntoMemory(plan));
    footer.append(lived, transformButton);
  } else {
    const added = document.createElement("small");
    added.textContent = `Guardado em ${formatFuturePlanDate(plan.criado_em)}`;

    const composer = document.createElement("details");
    composer.className = "future-complete-composer";
    const summary = document.createElement("summary");
    summary.textContent = "Marcar como vivido ✓";

    const form = document.createElement("form");
    form.className = "future-complete-form";
    const label = document.createElement("label");
    label.htmlFor = `future-complete-code-${plan.id}`;
    label.textContent = "Código reservado";
    const code = document.createElement("input");
    code.id = label.htmlFor;
    code.name = "codigo";
    code.type = "password";
    code.autocomplete = "off";
    code.placeholder = "Digite o código";
    code.required = true;
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Sim, nós vivemos isso ♥";
    const status = document.createElement("small");
    status.className = "future-complete-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");

    form.append(label, code, button, status);
    form.addEventListener("submit", (event) => completeFuturePlan(event, plan));
    composer.append(summary, form);
    footer.append(added, composer);
  }

  article.append(
    footer,
    createContentManager({
      type: "plano",
      item: plan,
      fields: [
        { name: "autor", label: "Quem adicionou?", kind: "select", options: AUTHOR_OPTIONS },
        {
          name: "categoria",
          label: "Categoria",
          kind: "select",
          options: Object.entries(FUTURE_PLAN_CATEGORIES).map(([value, data]) => ({
            value,
            label: data.label
          }))
        },
        { name: "titulo", label: "Título", maxLength: 100 },
        { name: "detalhes", label: "Detalhes", kind: "textarea", rows: 3, maxLength: 600, required: false }
      ],
      reload: loadFuturePlans,
      deletePrompt: "Excluir este plano da história de vocês?"
    })
  );
  return article;
}

function createFuturePlanGroup(titleText, plans, completed) {
  const section = document.createElement("section");
  section.className = `future-plan-group${completed ? " completed-group" : ""}`;

  const heading = document.createElement("h3");
  heading.textContent = titleText;
  const grid = document.createElement("div");
  grid.className = "future-plan-grid";
  plans.forEach((plan) => grid.append(createFuturePlanCard(plan)));
  section.append(heading, grid);
  return section;
}

function renderFuturePlans(plans) {
  latestFuturePlans = plans;
  const pending = plans.filter((plan) => !plan.concluido);
  const completed = plans.filter((plan) => plan.concluido);
  $("#futurePendingCount").textContent = pending.length;
  $("#futureCompletedCount").textContent = completed.length;

  const list = $("#futurePlansList");
  list.replaceChildren();

  if (!plans.length) {
    const empty = document.createElement("div");
    empty.className = "future-empty";
    const heart = document.createElement("span");
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = "♡";
    const title = document.createElement("strong");
    title.textContent = "Nossa lista ainda está esperando o primeiro sonho.";
    const text = document.createElement("p");
    text.textContent = "Pode ser uma viagem, um encontro simples ou qualquer coisa que vocês queiram viver juntos.";
    empty.append(heart, title, text);
    list.append(empty);
    return;
  }

  if (pending.length) {
    list.append(createFuturePlanGroup("Próximos capítulos", pending, false));
  }
  if (completed.length) {
    list.append(createFuturePlanGroup("Sonhos que já viraram história", completed, true));
  }
}

async function loadFuturePlans() {
  try {
    const response = await fetch(
      `${SUPABASE.url}/rest/v1/planos_futuros?select=id,titulo,detalhes,categoria,autor,concluido,concluido_em,criado_em&order=concluido.asc,criado_em.desc`,
      { headers: { apikey: SUPABASE.publishableKey } }
    );

    if (!response.ok) throw new Error(`Não foi possível carregar os planos (${response.status}).`);
    renderFuturePlans(await response.json());
  } catch (error) {
    console.error(error);
    if (!latestFuturePlans.length) {
      const warning = document.createElement("p");
      warning.className = "future-empty future-error";
      warning.textContent = "Não foi possível carregar nossos próximos capítulos agora. Tente novamente em instantes.";
      $("#futurePlansList").replaceChildren(warning);
    }
  }
}

function formatCornerDate(value, withTime = false) {
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(value))
    ? new Date(`${value}T12:00:00`)
    : new Date(value);
  if (Number.isNaN(date.getTime())) return "Uma data para guardar";

  return new Intl.DateTimeFormat("pt-BR", withTime
    ? { dateStyle: "long", timeStyle: "short" }
    : { dateStyle: "long" }).format(date);
}

function setCornerStatus(selector, message, state = "") {
  const status = $(selector);
  status.textContent = message;
  status.dataset.state = state;
}

function setupDateIdea() {
  const today = new Date();
  const longDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(today);
  const naturalDate = longDate.charAt(0).toUpperCase() + longDate.slice(1);
  $("#dateTodayLabel").textContent = `Hoje é ${naturalDate}. Que tal transformar o dia em uma lembrança nova?`;
  $("#dailyFormDate").textContent = naturalDate;
  chooseDateIdea(true);
}

function getDateIdeaFilters() {
  return {
    place: $("#datePlaceFilter").value,
    budget: $("#dateBudgetFilter").value,
    duration: $("#dateDurationFilter").value
  };
}

function getFilteredDateIdeas() {
  const { place, budget, duration } = getDateIdeaFilters();
  const filtered = DATE_IDEAS.filter((idea) => (
    (place === "todos" || idea.place === place)
    && (budget === "todos" || idea.budget === budget)
    && (duration === "todos" || idea.duration === duration)
  ));
  return filtered.length ? filtered : DATE_IDEAS;
}

function renderDateIdea(idea) {
  currentDateIdea = idea;
  const placeLabel = idea.place === "casa" ? "Em casa" : "Fora de casa";
  const budgetLabel = {
    gratis: "sem gastar",
    baixo: "econômico",
    especial: "algo especial"
  }[idea.budget];

  $("#dateIdeaTag").textContent = `${placeLabel} · ${budgetLabel}`;
  $("#dateIdeaOrigin").innerHTML = '<span aria-hidden="true">✦</span> Sugestão sorteada';
  $("#dateIdeaTitle").textContent = idea.title;
  $("#dateIdeaDescription").textContent = idea.description;
  const specialTouch = String(idea.specialTouch || "").trim();
  $("#dateIdeaExtra").hidden = !specialTouch;
  $("#dateIdeaSpecialTouch").textContent = specialTouch;
  $("#dateIdeaPlace").textContent = DATE_IDEA_LABELS.place[idea.place];
  $("#dateIdeaBudget").textContent = DATE_IDEA_LABELS.budget[idea.budget];
  $("#dateIdeaDuration").textContent = DATE_IDEA_LABELS.duration[idea.duration];
  setCornerStatus("#dateSaveStatus", "");
}

function chooseDateIdea(deterministic = false) {
  const ideas = getFilteredDateIdeas();
  let index;

  if (deterministic) {
    const now = new Date();
    const seed = Number(`${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`);
    index = seed % ideas.length;
  } else {
    index = Math.floor(Math.random() * ideas.length);
    if (ideas.length > 1 && ideas[index] === currentDateIdea) index = (index + 1) % ideas.length;
  }

  renderDateIdea(ideas[index]);
}

function setDateIdeaStatus(message, state = "") {
  const status = $("#dateIdeaStatus");
  status.textContent = message;
  status.dataset.state = state;
}

function createDateIdea() {
  chooseDateIdea(false);
  setDateIdeaStatus("Pronto! A ideia respeita as escolhas de vocês e não custa nada para gerar ♥", "success");
}

async function requestCoupleCorner(payload, editorCode) {
  const isFormData = payload instanceof FormData;
  const headers = {
    apikey: SUPABASE.publishableKey,
    "x-editor-code": editorCode
  };
  if (!isFormData) headers["Content-Type"] = "application/json";

  const response = await fetch(`${SUPABASE.url}/functions/v1/${SUPABASE.cornerFunction}`, {
    method: "POST",
    headers,
    body: isFormData ? payload : JSON.stringify(payload)
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "Não foi possível guardar isso agora.");
  return result;
}

function createCornerEmpty(message) {
  const empty = document.createElement("p");
  empty.className = "corner-empty";
  empty.textContent = message;
  return empty;
}

function renderDailyEntries(entries) {
  const list = $("#dailyEntriesList");
  list.replaceChildren();
  if (!entries.length) {
    list.append(createCornerEmpty("O primeiro registro de vocês ainda está esperando para ser escrito ♥"));
    return;
  }

  entries.forEach((entry) => {
    const type = DAILY_ENTRY_TYPES[entry.tipo] || DAILY_ENTRY_TYPES.coisas_boas;
    const card = document.createElement("article");
    card.className = "daily-entry-card";

    const header = document.createElement("div");
    const badge = document.createElement("span");
    badge.className = "daily-entry-badge";
    badge.textContent = `${type.symbol} ${type.label}`;
    const date = document.createElement("time");
    date.dateTime = entry.data;
    date.textContent = formatCornerDate(entry.data);
    header.append(badge, date);

    const author = document.createElement("h4");
    author.textContent = `Escrito por ${entry.autor}`;
    const items = document.createElement("ol");
    [entry.item_1, entry.item_2, entry.item_3].forEach((item) => {
      const row = document.createElement("li");
      row.textContent = item;
      items.append(row);
    });

    card.append(
      header,
      author,
      items,
      createContentManager({
        type: "registro",
        item: entry,
        fields: [
          { name: "autor", label: "Quem escreveu?", kind: "select", options: AUTHOR_OPTIONS },
          {
            name: "categoria",
            label: "Tipo de registro",
            kind: "select",
            value: entry.tipo,
            options: Object.entries(DAILY_ENTRY_TYPES).map(([value, data]) => ({
              value,
              label: data.label
            }))
          },
          { name: "item_1", label: "Primeira coisa", kind: "textarea", rows: 2, maxLength: 240 },
          { name: "item_2", label: "Segunda coisa", kind: "textarea", rows: 2, maxLength: 240 },
          { name: "item_3", label: "Terceira coisa", kind: "textarea", rows: 2, maxLength: 240 }
        ],
        reload: loadDailyEntries,
        deletePrompt: "Excluir este registro do dia?"
      })
    );
    list.append(card);
  });
}

async function loadDailyEntries() {
  try {
    const response = await fetch(
      `${SUPABASE.url}/rest/v1/registros_diarios?select=id,data,autor,tipo,item_1,item_2,item_3,criado_em&order=data.desc,criado_em.desc&limit=60`,
      { headers: { apikey: SUPABASE.publishableKey } }
    );
    if (!response.ok) throw new Error(`Não foi possível carregar os registros (${response.status}).`);
    renderDailyEntries(await response.json());
  } catch (error) {
    console.error(error);
    $("#dailyEntriesList").replaceChildren(createCornerEmpty("Não foi possível carregar os registros agora."));
  }
}

function renderLetters(letters) {
  const list = $("#lettersList");
  list.replaceChildren();
  if (!letters.length) {
    list.append(createCornerEmpty("Ainda não chegou nenhuma carta. A primeira pode ser escrita hoje ♥"));
    return;
  }

  letters.forEach((letter, index) => {
    const card = document.createElement("details");
    card.className = "letter-card";
    if (index === 0) card.open = true;

    const summary = document.createElement("summary");
    const stamp = document.createElement("span");
    stamp.textContent = letter.autor === "Bianca" ? "B" : "N";
    const summaryCopy = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = letter.titulo;
    const meta = document.createElement("small");
    const recipient = letter.autor === "Bianca" ? "Natã" : "Bianca";
    meta.textContent = `De ${letter.autor} para ${recipient} · ${formatCornerDate(letter.criado_em)}`;
    summaryCopy.append(title, meta);
    summary.append(stamp, summaryCopy);

    const body = document.createElement("div");
    body.className = "letter-card-body";
    const text = document.createElement("p");
    text.textContent = letter.texto;
    const signature = document.createElement("span");
    signature.textContent = `Com carinho, ${letter.autor} ♥`;
    body.append(
      text,
      signature,
      createContentManager({
        type: "carta",
        item: letter,
        fields: [
          { name: "autor", label: "Quem escreveu?", kind: "select", options: AUTHOR_OPTIONS },
          { name: "titulo", label: "Título", maxLength: 100 },
          { name: "texto", label: "Carta", kind: "textarea", rows: 8, maxLength: 5000 }
        ],
        reload: loadLetters,
        deletePrompt: "Excluir esta carta para sempre?"
      })
    );
    card.append(summary, body);
    list.append(card);
  });
}

async function loadLetters() {
  try {
    const response = await fetch(
      `${SUPABASE.url}/rest/v1/cartas?select=id,autor,titulo,texto,criado_em&order=criado_em.desc&limit=50`,
      { headers: { apikey: SUPABASE.publishableKey } }
    );
    if (!response.ok) throw new Error(`Não foi possível carregar as cartas (${response.status}).`);
    renderLetters(await response.json());
  } catch (error) {
    console.error(error);
    $("#lettersList").replaceChildren(createCornerEmpty("Não foi possível carregar as cartas agora."));
  }
}

async function submitComplaintInterpretation(event, complaint) {
  event.preventDefault();
  const form = event.currentTarget;
  const author = form.elements.namedItem("autor").value;
  const message = form.elements.namedItem("mensagem").value.trim();
  const editorCode = form.elements.namedItem("codigo").value;
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector(".complaint-interpretation-status");
  if (!author || !message || !editorCode) return;

  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = "Guardando…";
  status.textContent = "Guardando sua interpretação…";
  status.dataset.state = "";

  try {
    await requestCoupleCorner({
      acao: "interpretacao",
      reclamacao_id: complaint.id,
      autor: author,
      mensagem: message
    }, editorCode);
    await loadComplaints();
  } catch (error) {
    status.textContent = error.message || "Não foi possível guardar a interpretação.";
    status.dataset.state = "error";
    button.disabled = false;
    button.textContent = originalLabel;
  }
}

function createComplaintCard(complaint, interpretations) {
  const card = document.createElement("article");
  card.className = "complaint-card";

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.src = complaint.imagem_url;
  image.alt = `Reclamação misteriosa enviada por ${complaint.autor}`;
  image.loading = "lazy";
  image.decoding = "async";
  const tape = document.createElement("span");
  tape.className = "complaint-tape";
  tape.setAttribute("aria-hidden", "true");
  figure.append(tape, image);

  const copy = document.createElement("div");
  copy.className = "complaint-copy";
  const meta = document.createElement("span");
  meta.textContent = `Reclamação de ${complaint.autor} · ${formatCornerDate(complaint.criado_em)}`;
  const title = document.createElement("h3");
  title.textContent = "O que essa foto quer dizer?";
  copy.append(meta, title);

  const replies = document.createElement("div");
  replies.className = "complaint-interpretations";
  if (interpretations.length) {
    interpretations.forEach((interpretation) => {
      const reply = document.createElement("div");
      const author = document.createElement("strong");
      author.textContent = interpretation.autor;
      const text = document.createElement("p");
      text.textContent = interpretation.mensagem;
      const date = document.createElement("small");
      date.textContent = formatCornerDate(interpretation.criado_em, true);
      reply.append(
        author,
        text,
        date,
        createContentManager({
          type: "interpretacao",
          item: interpretation,
          fields: [
            { name: "autor", label: "Quem escreveu?", kind: "select", options: AUTHOR_OPTIONS },
            { name: "mensagem", label: "Interpretação", kind: "textarea", rows: 3, maxLength: 1000 }
          ],
          reload: loadComplaints,
          deletePrompt: "Excluir esta interpretação?"
        })
      );
      replies.append(reply);
    });
  } else {
    replies.append(createCornerEmpty("Ninguém decifrou esta reclamação ainda."));
  }

  const composer = document.createElement("details");
  composer.className = "complaint-interpretation-composer";
  const summary = document.createElement("summary");
  summary.textContent = "Tentar interpretar 💃🏻";
  const form = document.createElement("form");
  const authorLabel = document.createElement("label");
  authorLabel.htmlFor = `complaint-author-${complaint.id}`;
  authorLabel.textContent = "Quem está interpretando?";
  const author = document.createElement("select");
  author.id = authorLabel.htmlFor;
  author.name = "autor";
  ["Bianca", "Natã"].forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    option.selected = name !== complaint.autor;
    author.append(option);
  });
  const messageLabel = document.createElement("label");
  messageLabel.htmlFor = `complaint-message-${complaint.id}`;
  messageLabel.textContent = "Minha interpretação";
  const message = document.createElement("textarea");
  message.id = messageLabel.htmlFor;
  message.name = "mensagem";
  message.maxLength = 1000;
  message.placeholder = "Eu acho que essa foto está reclamando que…";
  message.required = true;
  const codeLabel = document.createElement("label");
  codeLabel.htmlFor = `complaint-code-${complaint.id}`;
  codeLabel.textContent = "Código reservado";
  const code = document.createElement("input");
  code.id = codeLabel.htmlFor;
  code.name = "codigo";
  code.type = "password";
  code.autocomplete = "off";
  code.placeholder = "Digite o código";
  code.required = true;
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Guardar interpretação";
  const status = document.createElement("small");
  status.className = "complaint-interpretation-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  form.append(authorLabel, author, messageLabel, message, codeLabel, code, button, status);
  form.addEventListener("submit", (event) => submitComplaintInterpretation(event, complaint));
  composer.append(summary, form);

  copy.append(
    replies,
    composer,
    createContentManager({
      type: "reclamacao",
      item: complaint,
      fields: [
        { name: "autor", label: "Quem enviou?", kind: "select", options: AUTHOR_OPTIONS }
      ],
      allowImage: true,
      reload: loadComplaints,
      deletePrompt: "Excluir esta reclamação e todas as interpretações dela?"
    })
  );
  card.append(figure, copy);
  return card;
}

function renderComplaints(complaints, interpretations) {
  const list = $("#complaintsList");
  list.replaceChildren();
  if (!complaints.length) {
    list.append(createCornerEmpty("Nenhuma reclamação misteriosa ainda. Isso parece suspeito…"));
    return;
  }

  const grouped = new Map();
  interpretations.forEach((interpretation) => {
    const key = String(interpretation.reclamacao_id);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(interpretation);
  });
  complaints.forEach((complaint) => {
    list.append(createComplaintCard(complaint, grouped.get(String(complaint.id)) || []));
  });
}

async function loadComplaints() {
  try {
    const [complaintsResponse, interpretationsResponse] = await Promise.all([
      fetch(
        `${SUPABASE.url}/rest/v1/reclamacoes?select=id,autor,imagem_url,criado_em&order=criado_em.desc&limit=40`,
        { headers: { apikey: SUPABASE.publishableKey } }
      ),
      fetch(
        `${SUPABASE.url}/rest/v1/interpretacoes_reclamacao?select=id,reclamacao_id,autor,mensagem,criado_em&order=criado_em.asc&limit=200`,
        { headers: { apikey: SUPABASE.publishableKey } }
      )
    ]);
    if (!complaintsResponse.ok || !interpretationsResponse.ok) {
      throw new Error("Não foi possível carregar as reclamações.");
    }
    renderComplaints(await complaintsResponse.json(), await interpretationsResponse.json());
  } catch (error) {
    console.error(error);
    $("#complaintsList").replaceChildren(createCornerEmpty("Não foi possível carregar as reclamações agora."));
  }
}

async function loadCoupleCorner() {
  await Promise.all([loadDailyEntries(), loadLetters(), loadComplaints()]);
}

function createReplyCard(reply) {
  const article = document.createElement("article");
  article.className = "publication-reply";

  const header = document.createElement("div");
  const author = document.createElement("strong");
  author.textContent = reply.autor;
  const date = document.createElement("time");
  date.dateTime = reply.criado_em;
  date.textContent = formatPublicationDate(reply.criado_em);
  header.append(author, date);

  const message = document.createElement("p");
  message.textContent = reply.mensagem;
  article.append(
    header,
    message,
    createContentManager({
      type: "resposta",
      item: reply,
      fields: [
        { name: "autor", label: "Quem escreveu?", kind: "select", options: AUTHOR_OPTIONS },
        { name: "mensagem", label: "Resposta", kind: "textarea", rows: 3, maxLength: 1000 }
      ],
      reload: loadPublications,
      deletePrompt: "Excluir esta resposta do Nosso diário?"
    })
  );
  return article;
}

function groupPublicationReplies(replies = []) {
  const byPublication = new Map();
  const byMemory = new Map();

  replies.forEach((reply) => {
    const map = reply.publicacao_id != null ? byPublication : byMemory;
    const key = reply.publicacao_id != null ? String(reply.publicacao_id) : String(reply.memoria_chave || "");
    if (!key) return;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(reply);
  });

  return { byPublication, byMemory };
}

function renderGalleryDiary() {
  const container = $("#galleryDiary");
  if (!container) return;
  const publication = originalAlbumPhotos[currentPhoto];
  if (!publication) {
    container.replaceChildren();
    return;
  }

  container.replaceChildren(
    createPublicationReplyArea(
      { publicationId: publication.id, defaultAuthor: "Bianca" },
      latestRepliesByPublication.get(String(publication.id)) || []
    ),
    createPublicationManager(publication, {
      deletePrompt: "Excluir esta foto da nuvem, do álbum e todas as respostas escritas nela?"
    })
  );
}

async function submitPublicationReply(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const publicationId = form.dataset.publicationId;
  const memoryKey = form.dataset.memoryKey;
  const replyTarget = form.dataset.replyTarget;
  const authorField = form.elements.namedItem("autor");
  const messageField = form.elements.namedItem("mensagem");
  const codeField = form.elements.namedItem("codigo");
  const status = form.querySelector(".publication-reply-status");
  const submitButton = form.querySelector('button[type="submit"]');
  const author = authorField.value;
  const message = messageField.value.trim();
  const editorCode = codeField.value;

  if ((!publicationId && !memoryKey) || !author || !message || !editorCode) return;

  const originalLabel = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Guardando…";
  status.textContent = "Guardando sua resposta no nosso diário…";
  status.dataset.state = "";

  try {
    const response = await fetch(`${SUPABASE.url}/functions/v1/${SUPABASE.replyFunction}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE.publishableKey,
        "Content-Type": "application/json",
        "x-editor-code": editorCode
      },
      body: JSON.stringify({
        publicacao_id: publicationId || null,
        memoria_chave: memoryKey || null,
        autor: author,
        mensagem: message
      })
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Não foi possível guardar a resposta agora.");

    form.reset();
    await loadPublications();
    const replyArea = document.querySelector(`[data-reply-target="${replyTarget}"]`);
    if (replyArea) {
      replyArea.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  } catch (error) {
    status.textContent = error.message || "Não foi possível guardar a resposta agora.";
    status.dataset.state = "error";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
}

function createPublicationReplyArea(target, replies) {
  const publicationId = target.publicationId != null ? String(target.publicationId) : "";
  const memoryKey = target.memoryKey || "";
  const replyTarget = publicationId ? `publicacao-${publicationId}` : memoryKey;
  const section = document.createElement("section");
  section.className = "publication-replies";
  section.dataset.replyTarget = replyTarget;

  const heading = document.createElement("div");
  heading.className = "publication-replies-heading";
  const eyebrow = document.createElement("span");
  eyebrow.textContent = "Nosso diário";
  const title = document.createElement("h5");
  title.textContent = replies.length ? "O que essa memória despertou em nós" : "Uma resposta esperando para nascer";
  heading.append(eyebrow, title);
  section.append(heading);

  if (replies.length) {
    const list = document.createElement("div");
    list.className = "publication-replies-list";
    replies.forEach((reply) => list.append(createReplyCard(reply)));
    section.append(list);
  } else {
    const empty = document.createElement("p");
    empty.className = "publication-replies-empty";
    empty.textContent = "Esta lembrança ainda pode ganhar palavras novas de vocês dois.";
    section.append(empty);
  }

  const composer = document.createElement("details");
  composer.className = "publication-reply-composer";
  const summary = document.createElement("summary");
  summary.textContent = replies.length ? "Continuar esta conversa ♥" : "Escrever uma resposta ♥";

  const form = document.createElement("form");
  form.className = "publication-reply-form";
  form.dataset.publicationId = publicationId;
  form.dataset.memoryKey = memoryKey;
  form.dataset.replyTarget = replyTarget;

  const authorLabel = document.createElement("label");
  authorLabel.htmlFor = `reply-author-${replyTarget}`;
  authorLabel.textContent = "Quem está escrevendo?";
  const author = document.createElement("select");
  author.id = authorLabel.htmlFor;
  author.name = "autor";
  author.required = true;
  ["Bianca", "Natã"].forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    option.selected = name === target.defaultAuthor;
    author.append(option);
  });

  const messageLabel = document.createElement("label");
  messageLabel.htmlFor = `reply-message-${replyTarget}`;
  messageLabel.textContent = "Sua resposta";
  const textarea = document.createElement("textarea");
  textarea.id = messageLabel.htmlFor;
  textarea.name = "mensagem";
  textarea.maxLength = 1000;
  textarea.rows = 4;
  textarea.placeholder = "Escreva o que essa lembrança fez você sentir…";
  textarea.required = true;

  const codeLabel = document.createElement("label");
  codeLabel.htmlFor = `reply-code-${replyTarget}`;
  codeLabel.textContent = "Código reservado";
  const code = document.createElement("input");
  code.id = codeLabel.htmlFor;
  code.name = "codigo";
  code.type = "password";
  code.autocomplete = "off";
  code.placeholder = "Digite o código para responder";
  code.required = true;

  const actions = document.createElement("div");
  actions.className = "publication-reply-actions";
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Guardar resposta ♥";
  const status = document.createElement("small");
  status.className = "publication-reply-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  actions.append(button, status);

  form.append(authorLabel, author, messageLabel, textarea, codeLabel, code, actions);
  form.addEventListener("submit", submitPublicationReply);
  composer.append(summary, form);
  section.append(composer);
  return section;
}

function createPublicationManager(publication, options = {}) {
  return createContentManager({
    type: "publicacao",
    item: publication,
    fields: [
      { name: "titulo", label: "Título", maxLength: 80 },
      { name: "texto", label: "Texto", kind: "textarea", rows: 5, maxLength: 1000 }
    ],
    allowImage: true,
    reload: loadPublications,
    deletePrompt: options.deletePrompt || "Excluir esta memória, a foto e as respostas escritas nela?"
  });
}

function createMemoryPublicationCard(publication, replies) {
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
  image.decoding = "async";
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
  article.append(
    figure,
    copy,
    createPublicationReplyArea({ publicationId: publication.id, defaultAuthor: "Natã" }, replies),
    createPublicationManager(publication)
  );
  return article;
}

function createTimelinePublicationItem(publication, replies) {
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
  image.decoding = "async";

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
  card.append(
    image,
    copy,
    createPublicationReplyArea({ publicationId: publication.id, defaultAuthor: "Natã" }, replies),
    createPublicationManager(publication)
  );
  article.append(dot, card);
  return article;
}

function renderPublications(publications, replies) {
  latestPublicationReplies = replies;
  const { byPublication: repliesByPublication } = groupPublicationReplies(replies);
  latestRepliesByPublication = repliesByPublication;

  const originalAlbum = publications.filter(
    (post) => post.origem === "original" && post.secao === "fotos"
  );
  const originalTimeline = publications.filter(
    (post) => post.origem === "original" && post.secao === "historia"
  );
  const addedPublications = publications.filter((post) => post.origem !== "original");

  renderGallery(originalAlbum);
  renderTimeline(originalTimeline, repliesByPublication);
  const albumCount = $("#albumMemoryCount");
  if (albumCount) albumCount.textContent = `${originalAlbum.length} ${originalAlbum.length === 1 ? "memória" : "memórias"}`;

  const memoryFeed = $('[data-live-section="fotos"]');
  const memoryPosts = addedPublications.filter((post) => post.secao === "fotos");

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
    memoryPosts.forEach((post) => {
      grid.append(createMemoryPublicationCard(post, repliesByPublication.get(String(post.id)) || []));
    });

    memoryFeed.replaceChildren(heading, grid);
    memoryFeed.hidden = false;
  } else {
    memoryFeed.replaceChildren();
    memoryFeed.hidden = true;
  }

  const addedTimeline = addedPublications.filter((post) => post.secao === "historia");
  if (addedTimeline.length) $("#timeline .timeline-empty")?.remove();
  addedTimeline
    .forEach((post) => {
      $("#timeline").append(createTimelinePublicationItem(post, repliesByPublication.get(String(post.id)) || []));
    });
}

async function loadPublications() {
  try {
    const [publicationsResponse, repliesResponse] = await Promise.all([
      fetch(
        `${SUPABASE.url}/rest/v1/publicacoes?select=id,secao,titulo,texto,imagem_url,origem,ordem,alt_texto,rotulo_data,posicao,criado_em&order=origem.asc,ordem.asc.nullslast,criado_em.asc`,
        { headers: { apikey: SUPABASE.publishableKey } }
      ),
      fetch(
        `${SUPABASE.url}/rest/v1/respostas_publicacoes?select=id,publicacao_id,memoria_chave,autor,mensagem,criado_em&order=criado_em.asc`,
        { headers: { apikey: SUPABASE.publishableKey } }
      )
    ]);

    if (!publicationsResponse.ok) {
      throw new Error(`Não foi possível carregar as publicações (${publicationsResponse.status}).`);
    }
    if (!repliesResponse.ok) {
      throw new Error(`Não foi possível carregar as respostas (${repliesResponse.status}).`);
    }

    renderPublications(await publicationsResponse.json(), await repliesResponse.json());
  } catch (error) {
    console.error(error);
  }
}

function startPublicationsFallback() {
  if (publicationsFallbackTimer) return;
  publicationsFallbackTimer = setInterval(() => {
    void renderNotes();
    void loadPublications();
    void loadFuturePlans();
    void loadCoupleCorner();
  }, 15000);
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
      { event: "*", schema: "public", table: "recados" },
      () => void renderNotes()
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "publicacoes" },
      () => void loadPublications()
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "respostas_publicacoes" },
      () => void loadPublications()
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "planos_futuros" },
      () => void loadFuturePlans()
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "registros_diarios" },
      () => void loadDailyEntries()
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "cartas" },
      () => void loadLetters()
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "reclamacoes" },
      () => void loadComplaints()
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "interpretacoes_reclamacao" },
      () => void loadComplaints()
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

document.addEventListener("DOMContentLoaded", () => {
  hydrateContent();
  updatePublicationDesign();
  updateCounter();
  counterTimer = setInterval(updateCounter, 1000);
  setTimeout(() => loadingScreen.classList.add("hidden"), 450);
  setTimeout(() => $(".hero .reveal").classList.add("visible"), 650);

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

document.addEventListener("visibilitychange", () => {
  clearInterval(counterTimer);
  clearInterval(heartTimer);
  if (document.hidden) return;

  updateCounter();
  counterTimer = setInterval(updateCounter, 1000);
  if (document.body.classList.contains("surprise-open")
      && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heartTimer = setInterval(createFloatingHeart, 1000);
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

$("#futurePlanForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const author = $("#futurePlanAuthor").value;
  const category = $("#futurePlanCategory").value;
  const title = $("#futurePlanTitle").value.trim();
  const details = $("#futurePlanDetails").value.trim();
  const editorCode = $("#futurePlanCode").value;
  if (!author || !category || !title || !editorCode) return;

  const originalLabel = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Guardando…";
  setFuturePlanStatus("Guardando este sonho na nossa história…");

  try {
    const result = await requestFuturePlan({
      acao: "criar",
      autor: author,
      categoria: category,
      titulo: title,
      detalhes: details
    }, editorCode);

    form.reset();
    setFuturePlanStatus("Plano guardado! Ele já aparece para vocês dois ♥", "success");
    await loadFuturePlans();

    const newPlan = result.plano?.id
      ? document.querySelector(`[data-future-plan-id="${result.plano.id}"]`)
      : null;
    if (newPlan) {
      setTimeout(() => newPlan.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
    }
  } catch (error) {
    setFuturePlanStatus(error.message || "Não foi possível guardar este plano agora.", "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
});

["#datePlaceFilter", "#dateBudgetFilter", "#dateDurationFilter"].forEach((selector) => {
  $(selector).addEventListener("change", () => {
    chooseDateIdea(true);
    setDateIdeaStatus("Escolhas atualizadas. Toquem no botão para sortear outra ideia.");
  });
});

$("#newDateIdea").addEventListener("click", createDateIdea);

$("#dateSaveForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!currentDateIdea) return;

  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const author = $("#dateSaveAuthor").value;
  const editorCode = $("#dateSaveCode").value;
  if (!author || !editorCode) return;

  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = "Guardando…";
  setCornerStatus("#dateSaveStatus", "Guardando este encontro nos próximos capítulos…");

  try {
    await requestFuturePlan({
      acao: "criar",
      autor: author,
      categoria: "encontro",
      titulo: currentDateIdea.title,
      detalhes: currentDateIdea.specialTouch
        ? `${currentDateIdea.description} Toque especial: ${currentDateIdea.specialTouch}`
        : currentDateIdea.description
    }, editorCode);
    $("#dateSaveCode").value = "";
    setCornerStatus("#dateSaveStatus", "Encontro guardado em “Coisas que ainda vamos viver” ♥", "success");
    await loadFuturePlans();
  } catch (error) {
    setCornerStatus("#dateSaveStatus", error.message || "Não foi possível guardar este encontro.", "error");
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
});

$("#dailyEntryForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const author = $("#dailyAuthor").value;
  const type = $("#dailyType").value;
  const items = [
    $("#dailyItem1").value.trim(),
    $("#dailyItem2").value.trim(),
    $("#dailyItem3").value.trim()
  ];
  const editorCode = $("#dailyCode").value;
  if (!author || !type || items.some((item) => !item) || !editorCode) return;

  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = "Guardando…";
  setCornerStatus("#dailyStatus", "Guardando as três coisas de hoje…");

  try {
    await requestCoupleCorner({
      acao: "registro_diario",
      autor: author,
      tipo: type,
      itens: items
    }, editorCode);
    form.reset();
    setCornerStatus("#dailyStatus", "As três coisas de hoje foram guardadas ♥", "success");
    await loadDailyEntries();
  } catch (error) {
    setCornerStatus("#dailyStatus", error.message || "Não foi possível guardar o registro.", "error");
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
});

$("#letterForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const author = $("#letterAuthor").value;
  const title = $("#letterTitle").value.trim();
  const text = $("#letterText").value.trim();
  const editorCode = $("#letterCode").value;
  if (!author || !title || !text || !editorCode) return;

  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = "Guardando…";
  setCornerStatus("#letterStatus", "Guardando a carta com carinho…");

  try {
    await requestCoupleCorner({
      acao: "carta",
      autor: author,
      titulo: title,
      texto: text
    }, editorCode);
    form.reset();
    setCornerStatus("#letterStatus", "Carta guardada e entregue no cantinho de vocês ♥", "success");
    await loadLetters();
  } catch (error) {
    setCornerStatus("#letterStatus", error.message || "Não foi possível guardar a carta.", "error");
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
});

function clearComplaintPreview() {
  if (complaintPreviewUrl) URL.revokeObjectURL(complaintPreviewUrl);
  complaintPreviewUrl = "";
  $("#complaintPreviewImage").removeAttribute("src");
  $("#complaintPreview").hidden = true;
}

$("#complaintImage").addEventListener("change", (event) => {
  clearComplaintPreview();
  const [file] = event.currentTarget.files;
  if (!file) return;

  if (file.size > IMAGE_UPLOAD.maxBytes) {
    event.currentTarget.value = "";
    setCornerStatus("#complaintStatus", "A foto deve ter no máximo 8 MB.", "error");
    return;
  }

  complaintPreviewUrl = URL.createObjectURL(file);
  $("#complaintPreviewImage").src = complaintPreviewUrl;
  $("#complaintPreview").hidden = false;
  setCornerStatus("#complaintStatus", "Foto escolhida. Agora não vale explicar nada.");
});

$("#complaintForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const author = $("#complaintAuthor").value;
  const [selectedImage] = $("#complaintImage").files;
  const editorCode = $("#complaintCode").value;
  if (!author || !selectedImage || !editorCode) return;

  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = "Publicando…";
  setCornerStatus("#complaintStatus", "Preparando a foto sem perder a qualidade…");

  try {
    const optimized = await optimizePublicationImage(selectedImage)
      .catch(() => ({ file: selectedImage, optimized: false }));
    const image = optimized.file || selectedImage;
    const payload = new FormData();
    payload.append("acao", "reclamacao");
    payload.append("autor", author);
    payload.append("imagem", image, image.name);

    setCornerStatus("#complaintStatus", "Enviando a reclamação misteriosa…");
    await requestCoupleCorner(payload, editorCode);
    form.reset();
    clearComplaintPreview();
    setCornerStatus("#complaintStatus", "Reclamação publicada. Agora alguém precisa decifrar 💃🏻", "success");
    await loadComplaints();
  } catch (error) {
    setCornerStatus("#complaintStatus", error.message || "Não foi possível publicar a reclamação.", "error");
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
});

$("#shareButton").addEventListener("click", sharePage);
$("#replayButton").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => openSurprise.focus(), 650);
});
