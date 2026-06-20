const projectData = {
  "east-africa": {
    type: "Component-robust attribution",
    title: "East Africa Ecological Quality",
    image: "./assets/thumbs/east-africa.jpg",
    slides: [
      "./assets/figures/east-africa/slide-01.jpg",
      "./assets/figures/east-africa/slide-02.jpg",
      "./assets/figures/east-africa/slide-03.jpg",
      "./assets/figures/east-africa/slide-04.jpg",
      "./assets/figures/east-africa/slide-05.jpg"
    ],
    summary:
      "A vegetation-based ecological quality framework for East Africa that combines cover, canopy structure, and ecosystem function, then tests whether greening interpretations survive component, weighting, threshold, and validation choices.",
    capabilities: [
      "Designed a multi-component ecological quality index.",
      "Separated persistent spatial gradients from long-term temporal dynamics.",
      "Used interpretable XGBoost-SHAP models with spatial block validation.",
      "Framed climate-linked vegetation change with careful evidence boundaries."
    ],
    methods: [
      "MODIS FVC, LAI, and GPP from 2001 to 2020.",
      "Theil-Sen slope, Mann-Kendall, and FDR-controlled trend detection.",
      "XGBoost-SHAP for spatial, trend, and anomaly association models.",
      "Sensitivity checks for components, normalization, masks, and autocorrelation."
    ],
    actions: [
      { label: "Download PDF", href: "./downloads/east-africa-ecological-quality.pdf", download: true }
    ]
  },
  chikungunya: {
    type: "Published first-author article",
    title: "Urban Chikungunya Risk Mapping",
    image: "./assets/thumbs/chikungunya.jpg",
    slides: [
      "./assets/figures/chikungunya/slide-01.jpg",
      "./assets/figures/chikungunya/slide-02.jpg",
      "./assets/figures/chikungunya/slide-03.jpg",
      "./assets/figures/chikungunya/slide-04.jpg",
      "./assets/figures/chikungunya/slide-05.jpg"
    ],
    summary:
      "A high-resolution urban environmental suitability workflow for chikungunya risk in the western Guangdong-Hong Kong-Macao Greater Bay Area, connecting remote sensing with outbreak-related spatial heterogeneity.",
    capabilities: [
      "Led a full independent project from coding to publication.",
      "Connected Earth observation with public-health interpretation.",
      "Used residual mismatch to reveal human-process questions.",
      "Communicated operational value while avoiding causal overclaiming."
    ],
    methods: [
      "Sentinel-2 indicators and refined 10 m land-surface temperature.",
      "Random forest residual correction and weighted additive MHSI.",
      "OLS, GWR, POI variables, and spatial autocorrelation-aware checks.",
      "External comparison with a coarser global chikungunya risk surface."
    ],
    actions: [
      { label: "Open DOI", href: "https://doi.org/10.3390/ijerph23060730", external: true },
      { label: "Download local PDF", href: "./downloads/urban-chikungunya-risk-mapping.pdf", download: true }
    ]
  },
  typhoon: {
    type: "Machine-learning disaster risk",
    title: "Tropical Cyclone Building Damage",
    image: "./assets/thumbs/typhoon.jpg",
    slides: [
      "./assets/figures/typhoon/slide-01.jpg",
      "./assets/figures/typhoon/slide-02.jpg",
      "./assets/figures/typhoon/slide-03.jpg",
      "./assets/figures/typhoon/slide-04.jpg",
      "./assets/figures/typhoon/slide-05.jpg"
    ],
    summary:
      "A data-limited pre-disaster screening framework for building-level tropical-cyclone damage, designed around accessible wind-field, exposure, and building information.",
    capabilities: [
      "Built an end-to-end geospatial ML workflow under data scarcity.",
      "Compared full-feature and easy-available-feature model modes.",
      "Used SHAP to diagnose feature behavior rather than only report scores.",
      "Tested cross-regional generalization limits across cyclone cases."
    ],
    methods: [
      "IBTrACS best-track data and simplified parametric wind-field features.",
      "Building labels and selected structural attributes.",
      "Random Forest, XGBoost, MLP, AdaBoost, and ensemble comparisons.",
      "Robustness checks, spatial split experiments, and height-based error analysis."
    ],
    actions: [
      { label: "Download DOCX", href: "./downloads/tropical-cyclone-building-damage.docx", download: true }
    ]
  },
  greening: {
    type: "Bibliometric synthesis",
    title: "Global Greening Research Review",
    image: "./assets/thumbs/greening-review.jpg",
    slides: [
      "./assets/figures/greening/slide-01.jpg",
      "./assets/figures/greening/slide-02.jpg",
      "./assets/figures/greening/slide-03.jpg",
      "./assets/figures/greening/slide-04.jpg",
      "./assets/figures/greening/slide-05.jpg"
    ],
    summary:
      "A remote-sensing review that maps how global greening research evolved from greenness detection toward attribution, functional uncertainty, carbon-water links, and resilience questions.",
    capabilities: [
      "Organized a large literature by argument rather than by paper list.",
      "Connected bibliometric structure with remote-sensing uncertainty.",
      "Explained why greenness is not automatically ecological recovery.",
      "Built a field-level map for future research questions."
    ],
    methods: [
      "Web of Science Core Collection records from 1980 to 2025.",
      "VOSviewer and CiteSpace for keyword, co-citation, and thematic evolution.",
      "Supplementary MODIS-era NDVI, LAI, and GPP trend illustrations.",
      "Synthesis of indicator, sensor, scale, masking, and attribution uncertainty."
    ],
    actions: [
      { label: "Download PDF", href: "./downloads/global-greening-review.pdf", download: true }
    ]
  },
  "street-tree": {
    type: "Urban ecological decision model",
    title: "Xiong'an Street-Tree Optimization",
    image: "./assets/thumbs/street-tree.jpg",
    slides: [
      "./assets/figures/street-tree/slide-01.jpg",
      "./assets/figures/street-tree/slide-02.jpg",
      "./assets/figures/street-tree/slide-03.jpg",
      "./assets/figures/street-tree/slide-04.jpg"
    ],
    summary:
      "A decision framework for selecting street-tree species in Xiong'an New Area by linking road ecological gaps, environmental constraints, land-use scenarios, and multi-objective ecosystem services.",
    capabilities: [
      "Translated multi-source environmental evidence into planning support.",
      "Balanced cooling, carbon, pollution mitigation, stormwater, and greening needs.",
      "Used multi-criteria decision analysis for actionable urban ecology.",
      "Designed a categorized configuration strategy instead of a single-species answer."
    ],
    methods: [
      "Landsat, Sentinel, ERA5, soil, land-use, and plant-trait data.",
      "Road functional gap identification and ecological constraint grading.",
      "AHP, entropy weighting, and TOPSIS ranking.",
      "Scenario coupling for differentiated road and land-use contexts."
    ],
    actions: [
      { label: "Download PDF", href: "./downloads/xiongan-street-tree-optimization.pdf", download: true }
    ]
  },
  "tree-crown": {
    type: "Computer vision pipeline",
    title: "Individual Tree Crown Segmentation",
    image: "./assets/thumbs/tree-crown-segmentation.jpg",
    summary:
      "An individual tree crown instance segmentation project with Prof. Yan Guangjian, focused on dense crown delineation, benchmark conversion, augmentation, tuning, and post-processing.",
    capabilities: [
      "Processed benchmark imagery and segmentation labels for training.",
      "Implemented model-support code for YOLOv8-seg and YOLOv11 workflows.",
      "Designed augmentation and hyperparameter tuning steps.",
      "Refined noisy mask outputs through filtering and crown-boundary smoothing."
    ],
    methods: [
      "ISPRS benchmark data conversion.",
      "YOLOv8-seg and YOLOv11 segmentation architectures.",
      "Augmentation, train/validation preparation, and iterative model comparison.",
      "Noise filtering and boundary-smoothing post-processing."
    ],
    actions: [
      { label: "Open overview page", href: "./tree-crown.html" }
    ]
  },
  fengning: {
    type: "Published co-authored article",
    title: "Vegetation Dynamics in Fengning County",
    image: "./assets/thumbs/fengning.png",
    slides: [
      "./assets/figures/fengning/slide-01.png",
      "./assets/figures/fengning/slide-02.png",
      "./assets/figures/fengning/slide-03.png",
      "./assets/figures/fengning/slide-04.png"
    ],
    summary:
      "A published co-authored study on spatio-temporal vegetation dynamics and driving mechanisms in a typical agro-pastoral transitional zone in Fengning County, North China.",
    capabilities: [
      "Contributed to a published vegetation-dynamics research output.",
      "Strengthened ecological remote-sensing interpretation across regional contexts.",
      "Connected vegetation trajectories with driving-mechanism analysis.",
      "Expanded collaboration experience beyond independent projects."
    ],
    methods: [
      "Spatio-temporal vegetation dynamics analysis.",
      "Driving-mechanism interpretation in an agro-pastoral transition zone.",
      "Remote-sensing and geospatial environmental analysis.",
      "Published in Land."
    ],
    actions: [
      { label: "DOI: 10.3390/land15010139", href: "https://doi.org/10.3390/land15010139", external: true }
    ]
  }
};

const skillGroups = {
  geo: {
    lead:
      "Remote sensing, GIS, and multi-source environmental data fusion form the base layer of my research.",
    values: [
      ["Google Earth Engine", 94],
      ["ArcGIS / QGIS / ENVI", 88],
      ["Remote-sensing image processing", 90],
      ["Spatial statistics and GIS analysis", 86],
      ["Multi-source environmental fusion", 92]
    ]
  },
  ml: {
    lead:
      "My AI work focuses on practical, interpretable models for geographic and environmental evidence.",
    values: [
      ["Random Forest and XGBoost", 92],
      ["SHAP interpretation", 88],
      ["Ensemble and benchmark ML", 84],
      ["YOLO segmentation pipelines", 82],
      ["Python scientific computing", 90]
    ]
  },
  writing: {
    lead:
      "I use writing as part of the research method: claims stay close to evidence and boundaries are explicit.",
    values: [
      ["Scientific argument design", 90],
      ["Manuscript drafting", 88],
      ["Critical literature synthesis", 92],
      ["Method description", 86],
      ["Cross-disciplinary framing", 87]
    ]
  }
};

const state = {
  currentSkill: "geo",
  atlasMouse: { x: 0, y: 0 }
};

document.addEventListener("DOMContentLoaded", () => {
  createIcons();
  initHeroAnimations();
  initNavigation();
  initScrollMeter();
  initFilters();
  initProjectDialog();
  initSkills();
  initThemeToggle();
  initSectionBackdrops();
  initAtlasScene();
});

function createIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initHeroAnimations() {
  const heading = document.querySelector(".animated-heading");
  if (heading) {
    const text = heading.getAttribute("data-heading") || heading.textContent || "";
    const lines = text.split("\n");
    const charDelay = 30;
    let offset = 0;
    heading.textContent = "";

    lines.forEach((line, lineIndex) => {
      const lineWrap = document.createElement("span");
      lineWrap.className = "animated-line";

      [...line].forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.className = "animated-char";
        span.textContent = char === " " ? "\u00A0" : char;
        const delay = 200 + offset + charIndex * charDelay;
        window.setTimeout(() => span.classList.add("char-visible"), delay);
        lineWrap.appendChild(span);
      });

      heading.appendChild(lineWrap);
      if (lineIndex < lines.length - 1) heading.appendChild(document.createElement("br"));
      offset += line.length * charDelay;
    });

    window.setTimeout(() => heading.classList.add("is-visible"), 40);
  }

  document.querySelectorAll(".fade-in").forEach((element) => {
    const delay = Number(element.getAttribute("data-delay") || 0);
    window.setTimeout(() => element.classList.add("is-visible"), delay);
  });
}

function initNavigation() {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav-links");
  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement && window.innerWidth < 1050) {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

function initScrollMeter() {
  const meter = document.getElementById("scrollMeter");
  if (!meter) return;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable <= 0 ? 0 : (window.scrollY / scrollable) * 100;
    meter.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initFilters() {
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".project-card");
  if (!filters.length || !cards.length) return;

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";
      filters.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      cards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";
        const visible = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });
}

function initProjectDialog() {
  const dialog = document.getElementById("projectDialog");
  if (!(dialog instanceof HTMLDialogElement)) return;

  const close = dialog.querySelector(".dialog-close");
  const media = dialog.querySelector(".dialog-media");
  const type = document.getElementById("dialogType");
  const title = document.getElementById("dialogTitle");
  const summary = document.getElementById("dialogSummary");
  const capabilities = document.getElementById("dialogCapabilities");
  const methods = document.getElementById("dialogMethods");
  const actions = document.getElementById("dialogActions");
  let stopCarousel = () => {};

  document.querySelectorAll("[data-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const key = trigger.getAttribute("data-open");
      const project = key ? projectData[key] : null;
      if (!project || !media) return;

      stopCarousel();
      stopCarousel = renderDialogMedia(media, project);
      type.textContent = project.type;
      title.textContent = project.title;
      summary.textContent = project.summary;
      fillList(capabilities, project.capabilities);
      fillList(methods, project.methods);
      actions.innerHTML = "";

      project.actions.forEach((action) => {
        const link = document.createElement("a");
        link.href = action.href;
        link.textContent = action.label;
        if (action.external) {
          link.target = "_blank";
          link.rel = "noreferrer";
        }
        if (action.download) {
          link.setAttribute("download", "");
        }
        actions.appendChild(link);
      });

      dialog.showModal();
      document.body.classList.add("no-scroll");
    });
  });

  close?.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    stopCarousel();
    document.body.classList.remove("no-scroll");
  });
}

function renderDialogMedia(media, project) {
  const slides = project.slides?.length ? project.slides : [project.image];
  media.innerHTML = "";

  if (slides.length <= 1) {
    const image = document.createElement("img");
    image.id = "dialogImage";
    image.src = slides[0];
    image.alt = `${project.title} visual`;
    media.appendChild(image);
    return () => {};
  }

  const carousel = document.createElement("div");
  carousel.className = "dialog-carousel";
  carousel.setAttribute("aria-label", `${project.title} figure carousel`);

  const track = document.createElement("div");
  track.className = "carousel-track";
  carousel.appendChild(track);

  slides.forEach((slide, index) => {
    const image = document.createElement("img");
    image.className = "carousel-slide";
    image.src = slide;
    image.alt = `${project.title} figure ${index + 1}`;
    image.loading = index === 0 ? "eager" : "lazy";
    track.appendChild(image);
  });

  const controls = document.createElement("div");
  controls.className = "carousel-controls";
  controls.innerHTML = `
    <div class="carousel-progress"><i></i></div>
    <div class="carousel-dots" aria-label="Figure slides"></div>
    <div class="carousel-buttons">
      <button class="carousel-button" type="button" data-carousel="prev" aria-label="Previous figure">
        <i data-lucide="chevron-left"></i>
      </button>
      <button class="carousel-button" type="button" data-carousel="next" aria-label="Next figure">
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
  `;
  carousel.appendChild(controls);
  media.appendChild(carousel);

  const dots = controls.querySelector(".carousel-dots");
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Show figure ${index + 1}`);
    dot.addEventListener("click", () => {
      show(index);
      start();
    });
    dots?.appendChild(dot);
  });

  const dotButtons = carousel.querySelectorAll(".carousel-dot");
  const progressBar = controls.querySelector(".carousel-progress i");
  let current = 0;
  let timer = 0;
  let progressTimer = 0;
  let progressStarted = performance.now();
  const interval = 3200;

  function show(next) {
    current = (next + slides.length) % slides.length;
    track.style.transform = `translateX(${-current * 100}%)`;
    progressStarted = performance.now();
    if (progressBar) {
      progressBar.style.transform = "scaleX(0)";
    }
    dotButtons.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === current);
      dot.setAttribute("aria-current", index === current ? "true" : "false");
    });
  }

  function updateProgress() {
    const elapsed = performance.now() - progressStarted;
    const progress = Math.max(0, Math.min(1, elapsed / interval));
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }
  }

  function start() {
    stop();
    progressStarted = performance.now();
    timer = window.setInterval(() => show(current + 1), interval);
    progressTimer = window.setInterval(updateProgress, 80);
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = 0;
    }
    if (progressTimer) {
      window.clearInterval(progressTimer);
      progressTimer = 0;
    }
  }

  controls.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-carousel]") : null;
    if (!(button instanceof HTMLButtonElement)) return;
    show(current + (button.dataset.carousel === "next" ? 1 : -1));
    start();
  });

  show(0);
  start();
  createIcons();
  return stop;
}

function fillList(list, values) {
  list.innerHTML = "";
  values.forEach((value) => {
    const item = document.createElement("li");
    item.textContent = value;
    list.appendChild(item);
  });
}

function initSkills() {
  const tabs = document.querySelectorAll(".skill-tab");
  const lead = document.getElementById("skillLead");
  const list = document.getElementById("skillList");
  const canvas = document.getElementById("skillCanvas");
  if (!tabs.length || !lead || !list || !(canvas instanceof HTMLCanvasElement)) return;

  const render = (key) => {
    state.currentSkill = key;
    const group = skillGroups[key];
    lead.textContent = group.lead;
    list.innerHTML = "";

    group.values.forEach(([label, level]) => {
      const item = document.createElement("div");
      item.className = "skill-item";
      item.innerHTML = `
        <span>${label}</span>
        <div class="skill-bar" aria-label="${label}: ${level} percent">
          <i style="--level:${level}%"></i>
        </div>
      `;
      list.appendChild(item);
    });

    drawSkillCanvas(canvas, group.values);
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.skill || "geo";
      tabs.forEach((item) => {
        item.classList.toggle("is-active", item === tab);
        item.setAttribute("aria-selected", String(item === tab));
      });
      render(key);
    });
  });

  render(state.currentSkill);
  window.addEventListener("resize", () => render(state.currentSkill));
}

function initThemeToggle() {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  button.addEventListener("click", () => {
    document.body.classList.toggle("cover-soft");
    const icon = document.body.classList.contains("cover-soft") ? "sun" : "moon";
    button.innerHTML = `<i data-lucide="${icon}"></i>`;
    createIcons();
  });
}

function initSectionBackdrops() {
  const sections = Array.from(document.querySelectorAll(".section[id]"));
  if (!sections.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const models = sections.map((section) => {
    const canvas = document.createElement("canvas");
    canvas.className = "section-backdrop";
    canvas.setAttribute("aria-hidden", "true");
    section.prepend(canvas);
    return {
      section,
      canvas,
      ctx: canvas.getContext("2d"),
      type: section.id,
      active: true,
      width: 0,
      height: 0,
      points: []
    };
  }).filter((model) => model.ctx);

  if (!models.length) return;

  const resize = () => {
    models.forEach((model) => resizeBackdrop(model));
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const model = models.find((item) => item.section === entry.target);
          if (model) model.active = entry.isIntersecting;
        });
      },
      { rootMargin: "160px 0px" }
    );
    models.forEach((model) => observer.observe(model.section));
  }

  resize();
  window.addEventListener("resize", resize);

  const animate = (time) => {
    models.forEach((model) => {
      if (model.active || reduceMotion) drawBackdrop(model, time / 1000);
    });
    if (!reduceMotion) window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);

  if (window.gsap) {
    window.gsap.fromTo(
      ".section-backdrop",
      { autoAlpha: 0 },
      { autoAlpha: 0.38, duration: 1.4, stagger: 0.08, ease: "sine.out", delay: 0.18 }
    );
  }
}

function resizeBackdrop(model) {
  const { canvas, ctx, type } = model;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  model.width = width;
  model.height = height;
  const rand = seededRandom(`${type}:${width}:${height}`);
  model.points = createBackdropPoints(type, width, height, rand);
  model.mesh = createBackdropMesh(type, width, height, rand);
  model.routes = createBackdropRoutes(type, width, height, rand);
  model.columns = createBackdropColumns(type, width, height, rand);
  model.beams = createBackdropBeams(type, width, height, rand);
}

function createBackdropPoints(type, width, height, randomizer = null) {
  const rand = randomizer || seededRandom(type);
  const count = {
    projects: 124,
    about: 76,
    publications: 64,
    skills: 82,
    coursework: 92,
    downloads: 68
  }[type] || 54;

  return Array.from({ length: count }, () => ({
    x: rand() * width,
    y: rand() * height,
    radius: 0.8 + rand() * 3.2,
    phase: rand() * Math.PI * 2,
    drift: 0.6 + rand() * 1.8,
    depth: 0.4 + rand() * 0.9
  }));
}

function createBackdropMesh(type, width, height, rand) {
  const rows = type === "skills" ? 8 : type === "projects" ? 9 : 7;
  const cols = width > 1000 ? 17 : width > 700 ? 13 : 10;
  const mesh = [];

  for (let row = 0; row < rows; row += 1) {
    const band = [];
    const yBase = height * (0.16 + (row / Math.max(1, rows - 1)) * 0.72);
    const amplitude = 10 + row * 4 + rand() * 8;
    for (let col = 0; col < cols; col += 1) {
      band.push({
        x: (col / Math.max(1, cols - 1)) * width,
        yBase,
        amplitude,
        phase: rand() * Math.PI * 2 + row * 0.4 + col * 0.08,
        drift: 0.16 + rand() * 0.22
      });
    }
    mesh.push(band);
  }

  return mesh;
}

function createBackdropRoutes(type, width, height, rand) {
  const count = {
    projects: 9,
    about: 6,
    publications: 7,
    skills: 6,
    coursework: 7,
    downloads: 8
  }[type] || 6;

  return Array.from({ length: count }, (_, index) => {
    if (type === "downloads") {
      const startX = width * (0.08 + rand() * 0.84);
      const sway = width * (rand() * 0.16 - 0.08);
      return {
        start: { x: startX, y: -height * (0.05 + rand() * 0.2) },
        cp1: { x: startX + sway, y: height * (0.18 + rand() * 0.12) },
        cp2: { x: startX - sway * 0.75, y: height * (0.64 + rand() * 0.14) },
        end: { x: startX + sway * 0.35, y: height * 1.08 },
        speed: 0.03 + rand() * 0.03,
        phase: rand(),
        width: 0.9 + rand() * 1.4,
        colorKey: index % 3 === 0 ? "accent" : index % 2 === 0 ? "secondary" : "primary"
      };
    }

    const leftToRight = type !== "skills";
    const startX = leftToRight ? -width * (0.06 + rand() * 0.08) : width * (0.24 + rand() * 0.22);
    const endX = leftToRight ? width * (0.9 + rand() * 0.14) : width * (0.56 + rand() * 0.2);
    const baseY = height * (0.16 + (index / Math.max(1, count - 1)) * 0.68);
    const arc = height * (0.08 + rand() * 0.18) * (index % 2 === 0 ? -1 : 1);
    return {
      start: { x: startX, y: baseY },
      cp1: { x: width * (0.24 + rand() * 0.18), y: baseY + arc },
      cp2: { x: width * (0.58 + rand() * 0.14), y: baseY - arc * (0.72 + rand() * 0.18) },
      end: { x: endX, y: baseY + arc * 0.18 },
      speed: 0.02 + rand() * 0.026,
      phase: rand(),
      width: 1 + rand() * 1.8,
      colorKey: index % 3 === 0 ? "secondary" : index % 2 === 0 ? "primary" : "accent"
    };
  });
}

function createBackdropColumns(type, width, height, rand) {
  const count = {
    projects: 26,
    about: 10,
    publications: 14,
    skills: 22,
    coursework: 18,
    downloads: 16
  }[type] || 12;

  return Array.from({ length: count }, (_, index) => ({
    x: width * (0.08 + rand() * 0.84),
    y: height * (0.22 + rand() * 0.6),
    width: 1.1 + rand() * 2.6,
    height: 26 + rand() * (type === "projects" ? 128 : 82),
    phase: rand() * Math.PI * 2 + index * 0.18,
    drift: 0.4 + rand() * 0.8,
    colorKey: index % 3 === 0 ? "accent" : index % 2 === 0 ? "secondary" : "primary"
  }));
}

function createBackdropBeams(type, width, height, rand) {
  const count = type === "projects" || type === "skills" ? 3 : 2;
  return Array.from({ length: count }, (_, index) => ({
    anchorX: width * (0.18 + rand() * 0.64),
    anchorY: height * (0.08 + rand() * 0.72),
    angle: -0.68 + rand() * 1.36 + index * 0.08,
    spread: width * (0.16 + rand() * 0.18),
    radius: Math.max(width, height) * (0.46 + rand() * 0.28),
    speed: 0.045 + rand() * 0.05,
    phase: rand() * Math.PI * 2,
    colorKey: index % 2 === 0 ? "secondary" : "primary"
  }));
}

function seededRandom(seedText) {
  let seed = 2166136261;
  for (let i = 0; i < seedText.length; i += 1) {
    seed ^= seedText.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }
  return () => {
    seed = Math.imul(seed ^ (seed >>> 15), 2246822507);
    seed = Math.imul(seed ^ (seed >>> 13), 3266489909);
    seed ^= seed >>> 16;
    return (seed >>> 0) / 4294967296;
  };
}

function drawBackdrop(model, time) {
  const { ctx, width, height, type, points, mesh, routes, columns, beams } = model;
  if (!ctx || !width || !height) return;

  const palette = getBackdropPalette(type);
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  drawBackdropGlow(ctx, width, height, palette, time, beams);
  drawBackdropGrid(ctx, width, height, palette, time, type, mesh);
  drawBackdropSweepBeams(ctx, width, height, palette, time, beams);
  drawBackdropMesh(ctx, width, height, palette, time, mesh);

  if (type === "projects") {
    drawMapRoutes(ctx, width, height, palette, time, routes);
    drawSignalBars(ctx, width, height, palette, time, columns);
  } else if (type === "about") {
    drawContourLines(ctx, width, height, palette, time);
    drawOrbitSweep(ctx, width, height, palette, time, 0.26);
    drawMapRoutes(ctx, width, height, palette, time, routes.slice(0, 4));
  } else if (type === "publications") {
    drawPublicationRoutes(ctx, width, height, palette, time, routes);
  } else if (type === "skills") {
    drawRadarBackdrop(ctx, width, height, palette, time, points, columns);
  } else if (type === "coursework") {
    drawScoreBands(ctx, width, height, palette, time, points, routes);
  } else if (type === "downloads") {
    drawDataStreams(ctx, width, height, palette, time, points, routes);
  }

  drawSoftParticles(ctx, points, palette, time);
  drawBackdropVignette(ctx, width, height);
  ctx.restore();
}

function getBackdropPalette(type) {
  const palettes = {
    projects: { primary: "115, 209, 132", secondary: "98, 216, 230", accent: "216, 181, 107" },
    about: { primary: "98, 216, 230", secondary: "115, 209, 132", accent: "112, 167, 255" },
    publications: { primary: "216, 181, 107", secondary: "98, 216, 230", accent: "115, 209, 132" },
    skills: { primary: "98, 216, 230", secondary: "115, 209, 132", accent: "239, 127, 102" },
    coursework: { primary: "115, 209, 132", secondary: "216, 181, 107", accent: "98, 216, 230" },
    downloads: { primary: "98, 216, 230", secondary: "216, 181, 107", accent: "115, 209, 132" }
  };
  return palettes[type] || palettes.projects;
}

function color(rgb, alpha) {
  return `rgba(${rgb}, ${alpha})`;
}

function getPaletteColor(palette, key, alpha) {
  return color(palette[key] || palette.primary, alpha);
}

function cubicPoint(route, t) {
  const u = 1 - t;
  const p0 = route.start;
  const p1 = route.cp1;
  const p2 = route.cp2;
  const p3 = route.end;
  return {
    x:
      u ** 3 * p0.x +
      3 * u ** 2 * t * p1.x +
      3 * u * t ** 2 * p2.x +
      t ** 3 * p3.x,
    y:
      u ** 3 * p0.y +
      3 * u ** 2 * t * p1.y +
      3 * u * t ** 2 * p2.y +
      t ** 3 * p3.y
  };
}

function drawBackdropGlow(ctx, width, height, palette, time, beams) {
  const pulse = 0.04 * Math.sin(time * 0.45);
  const topGlow = ctx.createRadialGradient(
    width * 0.76,
    height * 0.16,
    0,
    width * 0.76,
    height * 0.16,
    Math.max(width, height) * 0.82
  );
  topGlow.addColorStop(0, getPaletteColor(palette, "primary", 0.22 + pulse));
  topGlow.addColorStop(0.38, getPaletteColor(palette, "secondary", 0.09));
  topGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = topGlow;
  ctx.fillRect(0, 0, width, height);

  const lowerGlow = ctx.createRadialGradient(
    width * 0.16,
    height * 0.92,
    0,
    width * 0.16,
    height * 0.92,
    Math.max(width, height) * 0.64
  );
  lowerGlow.addColorStop(0, getPaletteColor(palette, "accent", 0.12));
  lowerGlow.addColorStop(0.42, getPaletteColor(palette, "secondary", 0.04));
  lowerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = lowerGlow;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.filter = "blur(52px)";
  beams.slice(0, 2).forEach((beam, index) => {
    const driftX = Math.sin(time * beam.speed + beam.phase) * 54;
    const driftY = Math.cos(time * beam.speed * 0.72 + beam.phase) * 26;
    ctx.beginPath();
    ctx.ellipse(
      beam.anchorX + driftX,
      beam.anchorY + driftY,
      beam.radius * (0.38 + index * 0.06),
      beam.radius * 0.18,
      beam.angle,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = getPaletteColor(palette, beam.colorKey, 0.1 + index * 0.03);
    ctx.fill();
  });
  ctx.restore();
}

function drawBackdropGrid(ctx, width, height, palette, time, type, mesh) {
  const step = type === "coursework" ? 40 : 56;
  const offset = (time * 10) % step;
  ctx.save();
  ctx.strokeStyle = getPaletteColor(palette, "secondary", 0.04);
  ctx.lineWidth = 1;

  for (let x = -step; x < width + step; x += step) {
    ctx.beginPath();
    ctx.moveTo(x + offset, height * 0.04);
    ctx.lineTo(x + offset - height * 0.12, height);
    ctx.stroke();
  }

  const horizon = mesh[0]?.[0]?.yBase || height * 0.18;
  for (let y = horizon; y < height + step; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y - offset * 0.28);
    ctx.lineTo(width, y - offset * 0.28 + width * 0.045);
    ctx.stroke();
  }
  ctx.restore();
}

function drawBackdropSweepBeams(ctx, width, height, palette, time, beams) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  beams.forEach((beam, index) => {
    const sweep = Math.sin(time * beam.speed + beam.phase);
    ctx.save();
    ctx.translate(beam.anchorX + sweep * 90, beam.anchorY + Math.cos(time * beam.speed + beam.phase) * 28);
    ctx.rotate(beam.angle + sweep * 0.08);
    const gradient = ctx.createLinearGradient(-beam.spread, 0, beam.spread, 0);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(0.5, getPaletteColor(palette, beam.colorKey, 0.08 + index * 0.015));
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(-beam.spread, -beam.radius * 0.42, beam.spread * 2, beam.radius * 0.84);
    ctx.restore();
  });
  ctx.restore();
}

function drawBackdropMesh(ctx, width, height, palette, time, mesh) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.lineWidth = 1;
  mesh.forEach((band, rowIndex) => {
    ctx.beginPath();
    band.forEach((node, columnIndex) => {
      const y = node.yBase + Math.sin(time * node.drift + node.phase) * node.amplitude;
      if (columnIndex === 0) ctx.moveTo(node.x, y);
      else ctx.lineTo(node.x, y);
    });
    ctx.strokeStyle = getPaletteColor(palette, rowIndex % 2 === 0 ? "secondary" : "primary", 0.05 + rowIndex * 0.004);
    ctx.stroke();

    if (rowIndex === mesh.length - 1) return;
    band.forEach((node, columnIndex) => {
      if (columnIndex % 2 !== 0) return;
      const next = mesh[rowIndex + 1][columnIndex];
      const y1 = node.yBase + Math.sin(time * node.drift + node.phase) * node.amplitude;
      const y2 = next.yBase + Math.sin(time * next.drift + next.phase) * next.amplitude;
      ctx.beginPath();
      ctx.moveTo(node.x, y1);
      ctx.lineTo(next.x, y2);
      ctx.strokeStyle = getPaletteColor(palette, "secondary", 0.032);
      ctx.stroke();
    });
  });
  ctx.restore();
}

function drawMapRoutes(ctx, width, height, palette, time, routes) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  routes.forEach((route, index) => {
    ctx.beginPath();
    ctx.moveTo(route.start.x, route.start.y);
    ctx.bezierCurveTo(route.cp1.x, route.cp1.y, route.cp2.x, route.cp2.y, route.end.x, route.end.y);
    ctx.strokeStyle = getPaletteColor(palette, route.colorKey, 0.12);
    ctx.lineWidth = route.width;
    ctx.stroke();

    const head = (time * route.speed + route.phase) % 1;
    for (let i = 0; i < 3; i += 1) {
      const packet = cubicPoint(route, (head - i * 0.06 + 1) % 1);
      ctx.beginPath();
      ctx.arc(packet.x, packet.y, 2.8 + (2 - i) * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = getPaletteColor(palette, route.colorKey, 0.22 - i * 0.05);
      ctx.fill();
    }
  });
  ctx.restore();
}

function drawSignalBars(ctx, width, height, palette, time, columns) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  columns.forEach((column, index) => {
    const barHeight = column.height * (0.38 + Math.abs(Math.sin(time * column.drift + column.phase)) * 0.74);
    const x = column.x;
    const y = column.y;
    const gradient = ctx.createLinearGradient(x, y, x, y - barHeight);
    gradient.addColorStop(0, getPaletteColor(palette, column.colorKey, 0));
    gradient.addColorStop(1, getPaletteColor(palette, column.colorKey, 0.24));
    ctx.fillStyle = gradient;
    ctx.fillRect(x - column.width / 2, y - barHeight, column.width, barHeight);
    ctx.beginPath();
    ctx.arc(x, y - barHeight, 3.2 + (index % 3), 0, Math.PI * 2);
    ctx.fillStyle = getPaletteColor(palette, column.colorKey, 0.16);
    ctx.fill();
  });
  ctx.restore();
}

function drawContourLines(ctx, width, height, palette, time) {
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = getPaletteColor(palette, "primary", 0.09);
  for (let row = 0; row < 11; row += 1) {
    const yBase = height * (0.08 + row * 0.1);
    ctx.beginPath();
    for (let x = -40; x <= width + 40; x += 20) {
      const y = yBase + Math.sin(x * 0.012 + row * 1.2 + time * 0.32) * (12 + row * 1.8);
      if (x === -40) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function drawOrbitSweep(ctx, width, height, palette, time, alpha) {
  ctx.save();
  ctx.translate(width * 0.72, height * 0.45);
  ctx.rotate(-0.32 + Math.sin(time * 0.2) * 0.04);
  ctx.strokeStyle = getPaletteColor(palette, "secondary", alpha * 0.45);
  ctx.lineWidth = 1.1;
  for (let ring = 0; ring < 5; ring += 1) {
    ctx.beginPath();
    ctx.ellipse(0, 0, width * (0.18 + ring * 0.05), height * (0.09 + ring * 0.032), 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  const angle = time * 0.42;
  const x = Math.cos(angle) * width * 0.3;
  const y = Math.sin(angle) * height * 0.14;
  ctx.beginPath();
  ctx.arc(x, y, 3.8, 0, Math.PI * 2);
  ctx.fillStyle = getPaletteColor(palette, "accent", alpha);
  ctx.fill();
  ctx.restore();
}

function drawPublicationRoutes(ctx, width, height, palette, time, routes) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  routes.forEach((route, index) => {
    ctx.beginPath();
    ctx.moveTo(route.start.x, route.start.y);
    ctx.bezierCurveTo(route.cp1.x, route.cp1.y, route.cp2.x, route.cp2.y, route.end.x, route.end.y);
    ctx.strokeStyle = getPaletteColor(palette, route.colorKey, 0.11);
    ctx.lineWidth = 1.3 + (index % 3) * 0.35;
    ctx.stroke();

    for (let node = 0; node < 4; node += 1) {
      const pct = (node + 1) / 5;
      const point = cubicPoint(route, pct);
      const pulse = 2.4 + Math.sin(time * 1.16 + node + index) * 1.3;
      ctx.beginPath();
      ctx.arc(point.x, point.y, pulse, 0, Math.PI * 2);
      ctx.fillStyle = getPaletteColor(palette, node % 2 === 0 ? "accent" : route.colorKey, 0.14);
      ctx.fill();
    }

    const head = (time * route.speed + route.phase) % 1;
    const packet = cubicPoint(route, head);
    ctx.beginPath();
    ctx.arc(packet.x, packet.y, 4.2, 0, Math.PI * 2);
    ctx.fillStyle = getPaletteColor(palette, route.colorKey, 0.28);
    ctx.fill();
  });
  ctx.restore();
}

function drawRadarBackdrop(ctx, width, height, palette, time, points, columns) {
  ctx.save();
  const cx = width * 0.36;
  const cy = height * 0.5;
  const radius = Math.min(width, height) * 0.38;
  ctx.strokeStyle = getPaletteColor(palette, "secondary", 0.1);
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 6; ring += 1) {
    ctx.beginPath();
    ctx.arc(cx, cy, (radius * ring) / 6, 0, Math.PI * 2);
    ctx.stroke();
  }
  const sweep = time * 0.36;
  const gradient = ctx.createConicGradient(sweep, cx, cy);
  gradient.addColorStop(0, getPaletteColor(palette, "primary", 0));
  gradient.addColorStop(0.08, getPaletteColor(palette, "primary", 0.2));
  gradient.addColorStop(0.12, getPaletteColor(palette, "secondary", 0));
  gradient.addColorStop(1, getPaletteColor(palette, "primary", 0));
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color(palette.primary, 0.14);
  points.slice(0, 28).forEach((point) => {
    const x = cx + (point.x / width - 0.5) * radius * 1.8;
    const y = cy + (point.y / height - 0.5) * radius * 1.8;
    ctx.beginPath();
    ctx.arc(x, y, 1.4 + Math.sin(time + point.phase) * 0.5, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  columns.slice(0, 14).forEach((column) => {
    const angle = ((column.x / width) - 0.5) * Math.PI * 1.4;
    const distance = radius * (0.22 + (column.y / height) * 0.55);
    const x = cx + Math.cos(angle) * distance;
    const y = cy + Math.sin(angle) * distance;
    const pulse = 8 + Math.sin(time * column.drift + column.phase) * 12;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - pulse);
    ctx.strokeStyle = getPaletteColor(palette, column.colorKey, 0.18);
    ctx.stroke();
  });
  ctx.restore();
  ctx.restore();
}

function drawScoreBands(ctx, width, height, palette, time, points, routes) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  points.slice(0, 22).forEach((point, index) => {
    const score = 86 + (index % 9);
    const x = (point.x + time * (7 + index * 0.18)) % (width + 160) - 80;
    const y = point.y;
    ctx.strokeStyle = color(index % 2 ? palette.primary : palette.secondary, 0.12);
    ctx.fillStyle = color(index % 3 ? palette.primary : palette.accent, 0.035);
    ctx.lineWidth = 1;
    roundRect(ctx, x, y, 54, 18, 9);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = color(palette.secondary, 0.12);
    ctx.font = "700 10px Inter, sans-serif";
    ctx.fillText(`${score}`, x + 19, y + 12);
  });
  routes.slice(0, 4).forEach((route) => {
    const head = (time * route.speed + route.phase) % 1;
    const packet = cubicPoint(route, head);
    ctx.beginPath();
    ctx.arc(packet.x, packet.y, 3.2, 0, Math.PI * 2);
    ctx.fillStyle = getPaletteColor(palette, route.colorKey, 0.14);
    ctx.fill();
  });
  ctx.restore();
}

function drawDataStreams(ctx, width, height, palette, time, points, routes) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.lineWidth = 1;
  points.slice(0, 32).forEach((point, index) => {
    const x = (point.x + Math.sin(time * 0.2 + point.phase) * 28) % width;
    const y = (point.y + time * (12 + index * 0.4)) % (height + 70) - 70;
    const length = 28 + (index % 5) * 12;
    const gradient = ctx.createLinearGradient(x, y, x + length, y + length * 0.32);
    gradient.addColorStop(0, color(palette.secondary, 0));
    gradient.addColorStop(0.55, color(index % 2 ? palette.primary : palette.accent, 0.14));
    gradient.addColorStop(1, color(palette.secondary, 0));
    ctx.strokeStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y + length * 0.32);
    ctx.stroke();
  });
  routes.slice(0, 5).forEach((route) => {
    const head = (time * route.speed + route.phase) % 1;
    const packet = cubicPoint(route, head);
    ctx.beginPath();
    ctx.arc(packet.x, packet.y, 2.6, 0, Math.PI * 2);
    ctx.fillStyle = getPaletteColor(palette, route.colorKey, 0.16);
    ctx.fill();
  });
  ctx.restore();
}

function drawSoftParticles(ctx, points, palette, time) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  points.forEach((point, index) => {
    const flicker = 0.05 + Math.abs(Math.sin(time * point.drift + point.phase)) * 0.09;
    ctx.beginPath();
    ctx.arc(
      point.x + Math.sin(time * 0.12 * point.depth + point.phase) * (8 + point.depth * 5),
      point.y + Math.cos(time * 0.08 * point.depth + point.phase) * (3 + point.depth * 4),
      point.radius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = index % 3 ? getPaletteColor(palette, "primary", flicker) : getPaletteColor(palette, "secondary", flicker);
    ctx.fill();
  });
  ctx.restore();
}

function drawBackdropVignette(ctx, width, height) {
  const vignette = ctx.createLinearGradient(0, 0, 0, height);
  vignette.addColorStop(0, "rgba(5, 8, 7, 0.28)");
  vignette.addColorStop(0.12, "rgba(5, 8, 7, 0)");
  vignette.addColorStop(0.88, "rgba(5, 8, 7, 0)");
  vignette.addColorStop(1, "rgba(5, 8, 7, 0.34)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawSkillCanvas(canvas, values) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const parentWidth = canvas.parentElement?.getBoundingClientRect().width || window.innerWidth - 48;
  const viewportWidth = window.innerWidth - 48;
  const displaySize = Math.max(260, Math.min(parentWidth, viewportWidth, 430));
  canvas.width = displaySize * dpr;
  canvas.height = displaySize * dpr;
  canvas.style.width = `${displaySize}px`;
  canvas.style.height = `${displaySize}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, displaySize, displaySize);

  const center = displaySize / 2;
  const radius = displaySize * 0.34;
  const count = values.length;
  ctx.lineWidth = 1;
  ctx.font = "600 11px Inter, sans-serif";

  for (let ring = 1; ring <= 4; ring += 1) {
    const r = (radius * ring) / 4;
    ctx.beginPath();
    for (let i = 0; i < count; i += 1) {
      const a = -Math.PI / 2 + (i * Math.PI * 2) / count;
      const x = center + Math.cos(a) * r;
      const y = center + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = "rgba(216, 245, 232, 0.13)";
    ctx.stroke();
  }

  values.forEach(([, level], i) => {
    const a = -Math.PI / 2 + (i * Math.PI * 2) / count;
    const outerX = center + Math.cos(a) * radius;
    const outerY = center + Math.sin(a) * radius;
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.lineTo(outerX, outerY);
    ctx.strokeStyle = "rgba(216, 245, 232, 0.14)";
    ctx.stroke();

    const labelX = center + Math.cos(a) * (radius + 44);
    const labelY = center + Math.sin(a) * (radius + 44);
    ctx.fillStyle = "rgba(215, 232, 226, 0.78)";
    ctx.textAlign = labelX < center - 8 ? "right" : labelX > center + 8 ? "left" : "center";
    ctx.fillText(`${level}%`, labelX, labelY);
  });

  ctx.beginPath();
  values.forEach(([, level], i) => {
    const a = -Math.PI / 2 + (i * Math.PI * 2) / count;
    const r = radius * (level / 100);
    const x = center + Math.cos(a) * r;
    const y = center + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  const fill = ctx.createLinearGradient(center - radius, center - radius, center + radius, center + radius);
  fill.addColorStop(0, "rgba(115, 209, 132, 0.38)");
  fill.addColorStop(0.58, "rgba(98, 216, 230, 0.28)");
  fill.addColorStop(1, "rgba(216, 181, 107, 0.22)");
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = "rgba(115, 209, 132, 0.82)";
  ctx.lineWidth = 2;
  ctx.stroke();

  values.forEach(([, level], i) => {
    const a = -Math.PI / 2 + (i * Math.PI * 2) / count;
    const r = radius * (level / 100);
    const x = center + Math.cos(a) * r;
    const y = center + Math.sin(a) * r;
    ctx.beginPath();
    ctx.arc(x, y, 4.2, 0, Math.PI * 2);
    ctx.fillStyle = "#73d184";
    ctx.fill();
  });
}

async function initAtlasScene() {
  const canvas = document.getElementById("atlasCanvas");
  if (!(canvas instanceof HTMLCanvasElement)) return;

  let three;
  try {
    three = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
  } catch (error) {
    paintCanvasFallback(canvas);
    return;
  }

  const { Scene, PerspectiveCamera, WebGLRenderer, Color, PlaneGeometry, Mesh, MeshStandardMaterial, DirectionalLight, AmbientLight, BufferGeometry, Float32BufferAttribute, Points, PointsMaterial, Group, CylinderGeometry, MeshBasicMaterial } = three;

  const scene = new Scene();
  scene.background = new Color(0x050807);

  const camera = new PerspectiveCamera(45, 1, 0.1, 140);
  camera.position.set(0, 14, 24);
  camera.lookAt(0, 0, 0);

  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const terrainGeometry = new PlaneGeometry(36, 24, 92, 68);
  terrainGeometry.rotateX(-Math.PI / 2);
  const position = terrainGeometry.attributes.position;
  for (let i = 0; i < position.count; i += 1) {
    const x = position.getX(i);
    const z = position.getZ(i);
    const ridge = Math.sin(x * 0.55) * Math.cos(z * 0.42);
    const hills = Math.sin((x + z) * 0.22) + Math.cos((x - z) * 0.31);
    position.setY(i, ridge * 0.9 + hills * 0.42);
  }
  terrainGeometry.computeVertexNormals();

  const terrain = new Mesh(
    terrainGeometry,
    new MeshStandardMaterial({
      color: 0x17432e,
      roughness: 0.72,
      metalness: 0.08,
      wireframe: false
    })
  );
  terrain.position.set(6.2, -2.2, 0);
  terrain.rotation.z = -0.08;
  scene.add(terrain);

  const wire = new Mesh(
    terrainGeometry.clone(),
    new MeshBasicMaterial({ color: 0x62d8e6, wireframe: true, transparent: true, opacity: 0.12 })
  );
  wire.position.copy(terrain.position);
  wire.rotation.copy(terrain.rotation);
  wire.scale.setScalar(1.003);
  scene.add(wire);

  const pointsGeometry = new BufferGeometry();
  const pointPositions = [];
  const pointColors = [];
  const palette = [
    [0.45, 0.82, 0.52],
    [0.38, 0.85, 0.9],
    [0.85, 0.71, 0.42],
    [0.44, 0.65, 1.0]
  ];

  for (let i = 0; i < 900; i += 1) {
    const x = (Math.random() - 0.1) * 33;
    const z = (Math.random() - 0.5) * 21;
    const y = Math.sin(x * 0.55) * Math.cos(z * 0.42) * 0.9 + (Math.random() - 0.4) * 2.4;
    pointPositions.push(x + 6.2, y - 0.8, z);
    const color = palette[i % palette.length];
    pointColors.push(color[0], color[1], color[2]);
  }
  pointsGeometry.setAttribute("position", new Float32BufferAttribute(pointPositions, 3));
  pointsGeometry.setAttribute("color", new Float32BufferAttribute(pointColors, 3));
  const points = new Points(
    pointsGeometry,
    new PointsMaterial({ size: 0.055, vertexColors: true, transparent: true, opacity: 0.72 })
  );
  scene.add(points);

  const columns = new Group();
  const columnMaterial = new MeshBasicMaterial({ color: 0x73d184, transparent: true, opacity: 0.48 });
  for (let i = 0; i < 34; i += 1) {
    const height = 0.7 + Math.random() * 2.8;
    const cylinder = new Mesh(new CylinderGeometry(0.025, 0.025, height, 8), columnMaterial);
    cylinder.position.set(1 + Math.random() * 19, -1.4 + height / 2, -8 + Math.random() * 14);
    columns.add(cylinder);
  }
  scene.add(columns);

  const light = new DirectionalLight(0xd7fff0, 2.6);
  light.position.set(-7, 12, 8);
  scene.add(light);
  scene.add(new AmbientLight(0x6f9a93, 1.1));

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  window.addEventListener(
    "pointermove",
    (event) => {
      state.atlasMouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      state.atlasMouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true }
  );

  const start = performance.now();
  const animate = () => {
    const t = (performance.now() - start) * 0.001;
    terrain.rotation.z = -0.08 + Math.sin(t * 0.18) * 0.018;
    wire.rotation.z = terrain.rotation.z;
    points.rotation.y = Math.sin(t * 0.18) * 0.03 + state.atlasMouse.x * 0.025;
    columns.position.y = Math.sin(t * 0.8) * 0.08;
    camera.position.x = state.atlasMouse.x * 0.9;
    camera.position.y = 14 - state.atlasMouse.y * 0.5;
    camera.lookAt(5.2, -1.6, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
}

function paintCanvasFallback(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const resize = () => {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#050807";
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = "rgba(98, 216, 230, 0.26)";
    ctx.lineWidth = 1;
    for (let y = rect.height * 0.28; y < rect.height * 0.82; y += 18) {
      ctx.beginPath();
      for (let x = rect.width * 0.28; x < rect.width; x += 26) {
        const wave = Math.sin(x * 0.012 + y * 0.03) * 12;
        if (x === rect.width * 0.28) ctx.moveTo(x, y + wave);
        else ctx.lineTo(x, y + wave);
      }
      ctx.stroke();
    }
  };
  resize();
  window.addEventListener("resize", resize);
}
