const navLinks = [...document.querySelectorAll(".site-nav a")];
const siteNav = document.querySelector(".site-nav");
const sections = [...document.querySelectorAll("[data-section]")];
const revealItems = [...document.querySelectorAll(".reveal")];
const backTop = document.querySelector(".back-top");

const workImages = {
  home: "./photo/jobflow-board-homepage.png",
  board: "./photo/jobflow-board-boardpage.png",
  focus: "./photo/jobflow-board-focuspage.png",
  archive: "./photo/jobflow-board-archivepage.png"
};

const fallbackWorkImage = "./photo/jobflow-board-boardpage.png";

const experienceAssetPath = "./assets/experience/";

const experiences = [
  {
    id: "bytedance",
    company: "字节跳动",
    brand: "抖音电商",
    logo: "logo-bytedance-small.svg",
    department: "抖音电商",
    role: "KA 作者策略运营",
    time: "2025.06 – 2025.11",
    location: "",
    cardSummary: "运营 480+ 头部达人，以经营分析、货盘提效与资源配置驱动增长。",
    tags: ["达人增长", "经营分析", "策略运营"],
    quote: "以经营分析为基础，围绕达人增长、货盘提效与资源配置推进业务增长。",
    responsibilities: [
      "负责 480+ 头部达人的运营管理，围绕经营表现制定增长策略。",
      "建立“供给 + 货盘 + 用户画像 + 流量 + 内容”五维分析模型，定位增长机会点。",
      "基于营销节点定制货盘调优方案，并协同行业撮合品牌与达人合作。",
      "根据目标进行作者策略分层，设计任务赛与激励机制，批量牵引重点作者达成业务目标。"
    ],
    achievements: [
      { value: "480+", label: "头部达人运营" },
      { value: "+43%", label: "GMV 年同比增长" },
      { value: "+72%", label: "直播 PV 同比增长" },
      { value: "200+", label: "品牌撮合 pair 对" }
    ],
    skillTags: ["达人运营", "经营分析", "货盘策略", "资源配置", "内容调优", "数据看板"],
    tools: ["Excel", "SQL", "Tableau", "Python", "AI 工具"]
  },
  {
    id: "vipshop",
    company: "唯品会",
    brand: "vip.com",
    logo: "logo-vipshop-small.svg",
    department: "项目管理部 / 商务部",
    role: "供应链策略 & 机会采买",
    time: "2024.11 – 2025.06",
    location: "",
    isGrouped: true,
    cardSummary: "围绕逆向物流优化与机会采买分析，支持供应链提效与采购决策。",
    tags: ["供应链策略", "采购", "流程优化"],
    quote: "一段偏策略优化，一段偏采买决策，用数据把供应链问题拆清楚、推下去。",
    subExperiences: [
      {
        title: "供应链策略",
        department: "逆向物流 / 流程优化",
        time: "2025.01 – 2025.06",
        summary: "基于逆向物流全链路数据，识别异常场景并推动流程优化与损失控制。",
        responsibilities: [
          "基于客退逆向物流数据，从客服、OQC、IQC、物流、供应商及客户风险分等维度开展分析。",
          "完成 1000+ 异常工单溯源，结合用户画像、对话记录与监控视频定位高频场景。",
          "基于分析与抽样结果测算优化目标，设计流程改进方案，并联动相关部门推进落地。",
          "参与 20+ 项流程优化课题，产出 50+ 改进方案，支持逆向链路减少资产损失。"
        ],
        achievements: [
          { value: "1000+", label: "异常工单分析" },
          { value: "20+", label: "流程优化课题" },
          { value: "50+", label: "改进方案产出" },
          { value: "400W+", label: "预计挽回金额" }
        ]
      },
      {
        title: "机会采买",
        department: "采购分析 / 决策支持",
        time: "2024.11 – 2025.01",
        summary: "围绕采购申请、订单利润与流程瓶颈进行量化分析，支持采买决策与流程提效。",
        responsibilities: [
          "协助完成 10+ 份订单、600+ SKU 的成本费用、利润率、GMV 等关键指标测算。",
          "基于 BFPQ 模型完成 120+ 项采购申请量化评分，支持亿级采购决策。",
          "梳理 80+ 单热度订单历史采购跟进信息，识别采购流程瓶颈与风险。",
          "结合订单数据与流程信息提出优化方向，预计将采购流程压缩 37%。"
        ],
        achievements: [
          { value: "600+", label: "SKU 指标测算" },
          { value: "120+", label: "采购申请评分" },
          { value: "80+", label: "订单跟进梳理" },
          { value: "37%", label: "预计流程压缩" }
        ]
      }
    ],
    skillTags: ["供应链策略", "逆向物流", "流程优化", "数据分析", "异常溯源", "跨部门协同"],
    tools: ["Excel", "SQL", "AI 工具"]
  },
  {
    id: "iqiyi",
    company: "爱奇艺",
    brand: "iQIYI",
    logo: "logo-iqiyi-small.svg",
    department: "产品技术部",
    role: "产品运营",
    time: "2026.01 – 至今",
    location: "北京",
    cardSummary: "围绕综艺内容承接、新用户转化与 AI 提效，优化内容链路与运营效率。",
    tags: ["内容承接", "转化优化", "AI 提效"],
    quote: "用数据与产品思维，推动内容承接与用户价值的持续增长。",
    responsibilities: [
      "优化综艺内容承接链路，围绕正片、衍生、看点与周边内容设计更清晰的消费路径。",
      "走查新安装用户首轮消费链路，定位弹窗密集、营销感强、播放被打断等高流失问题。",
      "推动新用户分层触达与弹窗降扰策略落地，提升开播转化与留存表现。",
      "利用 AI 生成交互 Demo，并结合 Codex 开发自动化工具，提升 SEO 运营与跨团队协同效率。"
    ],
    achievements: [
      { value: "+10%", label: "人均播放时长" },
      { value: "+6%", label: "开播转化率" },
      { value: "+4%", label: "留存提升" },
      { value: "200+", label: "物料生成支持" }
    ],
    skillTags: ["内容运营", "用户增长", "数据分析", "SEO 优化", "AI 工具协同", "项目管理"],
    tools: ["Excel", "SQL", "Python", "Tableau", "ChatGPT / Codex"]
  },
  {
    id: "deloitte",
    company: "德勤",
    brand: "Deloitte",
    logo: "logo-deloitte-small.svg",
    department: "ESG 咨询与研究",
    role: "咨询",
    time: "2023.07 – 2023.09",
    location: "",
    cardSummary: "参与 ESG 咨询研究与材料交付，训练结构化研究与商业表达能力。",
    tags: ["ESG", "咨询研究", "项目交付"],
    quote: "参与 ESG 咨询与研究支持，在真实项目中训练结构化分析与商业表达能力。",
    responsibilities: [
      "参与多行业上市企业 ESG 提升与转型方案研究。",
      "支持月报、BD 材料与评级回应材料撰写。",
      "参与 MSCI、DJSI 等 ESG 评级提升与回应支持。",
      "参与气候风险、碳资产与 ESG 差距分析等研究工作。"
    ],
    achievements: [
      { value: "ESG", label: "咨询研究" },
      { value: "MSCI", label: "评级回应" },
      { value: "BD", label: "材料支持" },
      { value: "Climate", label: "气候风险分析" }
    ],
    skillTags: ["ESG", "咨询研究", "商业写作", "材料交付", "结构化分析"],
    tools: ["Excel", "PowerPoint", "Desk Research"]
  }
];

function mountExperienceDebug(overrides = {}) {
  window.__experienceDebug = {
    cards: [...document.querySelectorAll("[data-exp]")],
    panel: document.querySelector("[data-detail-panel]"),
    close: document.querySelector("[data-close-experience]"),
    forceOpen: () => {
      const panel = document.querySelector("[data-detail-panel]");
      if (panel) panel.hidden = false;
    },
    forceClose: () => {
      const panel = document.querySelector("[data-detail-panel]");
      if (panel) panel.hidden = true;
    },
    openFirst: () => {
      const first = document.querySelector("[data-exp]");
      if (first) first.click();
    },
    ...overrides
  };
}

function setupNavigation() {
  if (window.__maxineNavReady) return;

  function moveIndicator(activeLink) {
    if (!siteNav || !activeLink) return;
    const navBox = siteNav.getBoundingClientRect();
    const linkBox = activeLink.getBoundingClientRect();
    const x = Math.round(linkBox.left - navBox.left);
    const width = Math.round(linkBox.width);
    siteNav.style.setProperty("--nav-x", `${x}px`);
    siteNav.style.setProperty("--nav-w", `${width}px`);
    siteNav.classList.add("has-active");
  }

  function setActive(hash) {
    let activeLink;
    navLinks.forEach((link) => {
      const isActive = link.hash === hash;
      link.classList.toggle("is-active", isActive);
      if (isActive) activeLink = link;
    });
    moveIndicator(activeLink);
    requestAnimationFrame(() => moveIndicator(activeLink));
  }

  let isProgrammaticScroll = false;
  let scrollTimer;

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(link.hash);
      if (!target) return;
      isProgrammaticScroll = true;
      window.clearTimeout(scrollTimer);
      setActive(link.hash);
      history.replaceState(null, "", link.hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      scrollTimer = window.setTimeout(() => {
        isProgrammaticScroll = false;
      }, 900);
    });
  });

  setActive(window.location.hash || "#home");
  requestAnimationFrame(() => setActive(window.location.hash || "#home"));

  function syncActiveFromScroll() {
    if (isProgrammaticScroll) return;
    const probeY = window.scrollY + window.innerHeight * 0.38;
    const current = sections
      .filter((section) => section.offsetTop <= probeY)
      .at(-1);
    if (current) setActive(`#${current.id}`);
  }

  window.addEventListener("scroll", syncActiveFromScroll, { passive: true });
  window.addEventListener("resize", () => {
    const activeLink = navLinks.find((link) => link.classList.contains("is-active"));
    moveIndicator(activeLink);
  });
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  document.body.classList.add("reveal-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupExperiencePanel() {
  const cards = [...document.querySelectorAll("[data-exp]")];
  const grid = document.querySelector(".experience-grid");
  const panel = document.querySelector("[data-detail-panel]");
  const body = document.querySelector("#experience-detail-body");
  const closeButton = document.querySelector("[data-close-experience]");
  let selectedExperienceId = null;

  console.log("[experience] setup start");
  console.log("[experience] cards count", document.querySelectorAll("[data-exp]").length);
  console.log("[experience] panel", document.querySelector("[data-detail-panel]"));
  console.log("[experience] close", document.querySelector("[data-close-experience]"));

  mountExperienceDebug();

  if (!cards.length || !grid || !panel || !body) return;

  panel.setAttribute("hidden", "");
  panel.classList.remove("is-open", "is-switching", "has-rendered");
  body.innerHTML = "";
  setCardState(null);

  function findExperience(id) {
    return experiences.find((item) => item.id === id);
  }

  function renderList(items) {
    return items
      .map(
        (item) => `
          <li>
            <img src="${experienceAssetPath}icon-square-bullet.svg" alt="" />
            <span>${item}</span>
          </li>
        `
      )
      .join("");
  }

  function renderTags(items) {
    return items.map((item) => `<span>${item}</span>`).join("");
  }

  function renderTools(items) {
    const toolMap = {
      Excel: "tool-excel.svg",
      SQL: "tool-sql.svg",
      Python: "tool-python.svg",
      Tableau: "tool-tableau.svg",
      "ChatGPT / Codex": "icon-stack-outline.svg",
      "AI 工具": "icon-stack-outline.svg",
      PowerPoint: "tool-excel.svg",
      "Desk Research": "icon-stack-outline.svg"
    };

    return items
      .map((item) => {
        const icon = toolMap[item] || "tool-chatgpt-codex.svg";
        const label = item === "AI 工具" ? "ChatGPT / Codex" : item;

        return `
          <span class="tool-item">
            <img src="${experienceAssetPath}${icon}" alt="" />
            <span>${label}</span>
          </span>
        `;
      })
      .join("");
  }

  function renderAchievements(items) {
    return items
      .map(
        (item) => `
          <div class="achievement-tile">
            <strong>${item.value}</strong>
            <span>${item.label}</span>
          </div>
        `
      )
      .join("");
  }

  function renderSectionTitle(eyebrow, title) {
    return `
      <div class="detail-section-title">
        <p class="panel-kicker">${eyebrow}</p>
        <h4>${title}</h4>
      </div>
    `;
  }

  function renderGroupedTimeline(detail) {
    if (!detail.isGrouped || !detail.subExperiences) return "";

    return `
      <div class="detail-timeline" aria-label="唯品会子经历">
        ${detail.subExperiences
          .map(
            (item) => `
              <div>
                <strong>${item.title}</strong>
                <span>${item.time}</span>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderNormalDetail(detail) {
    return `
      <div class="detail-block">
        ${renderSectionTitle("Responsibilities", "核心职责")}
        <ul class="detail-list">${renderList(detail.responsibilities)}</ul>
      </div>
      <div class="detail-block">
        ${renderSectionTitle("Results", "关键成果")}
        <div class="achievement-tiles">${renderAchievements(detail.achievements)}</div>
      </div>
    `;
  }

  function renderGroupedDetail(detail) {
    return detail.subExperiences
      .map(
        (item) => `
          <article class="sub-experience">
            <header class="sub-experience__head">
              <div>
                <p class="panel-kicker">${item.department}</p>
                <h4>${item.title}</h4>
              </div>
              <span>${item.time}</span>
            </header>
            <p class="sub-experience__summary">${item.summary}</p>
            <ul class="detail-list">${renderList(item.responsibilities)}</ul>
            <div class="achievement-tiles achievement-tiles--compact">${renderAchievements(item.achievements)}</div>
          </article>
        `
      )
      .join("");
  }

  function setCardState(id) {
    cards.forEach((card) => {
      const isSelected = card.dataset.exp === id;
      card.classList.toggle("is-selected", isSelected);
      card.classList.toggle("is-dimmed", Boolean(id) && !isSelected);
      card.setAttribute("aria-pressed", String(isSelected));
    });
  }

  function updatePanel(detail) {
    body.innerHTML = `
      <aside class="detail-profile">
        <img class="detail-pin" src="${experienceAssetPath}icon-panel-pin.svg" alt="" />
        <img class="detail-logo" src="${experienceAssetPath}${detail.logo}" alt="${detail.company}" />
        <p class="detail-brand">${detail.brand}</p>
        <h3>${detail.company}</h3>
        <dl class="detail-identity">
          <div>
            <dt>部门</dt>
            <dd>${detail.department || detail.brand}</dd>
          </div>
          <div>
            <dt>岗位</dt>
            <dd>${detail.role}</dd>
          </div>
        </dl>
        <div class="detail-meta">
          <span><img src="${experienceAssetPath}icon-calendar-line.svg" alt="" />${detail.time}</span>
          ${
            detail.location
              ? `<span><img src="${experienceAssetPath}icon-location-line.svg" alt="" />${detail.location}</span>`
              : ""
          }
        </div>
        <figure class="detail-quote">
          <img class="quote-corner quote-corner--tl" src="${experienceAssetPath}quote-box-corner-tl.svg" alt="" />
          <img class="quote-corner quote-corner--br" src="${experienceAssetPath}quote-box-corner-br.svg" alt="" />
          <img class="quote-mark quote-mark--left" src="${experienceAssetPath}quote-mark-left.svg" alt="" />
          <blockquote>${detail.quote}</blockquote>
          <img class="quote-mark quote-mark--right" src="${experienceAssetPath}quote-mark-right.svg" alt="" />
        </figure>
        ${renderGroupedTimeline(detail)}
      </aside>

      <section class="detail-core">
        ${detail.isGrouped ? renderGroupedDetail(detail) : renderNormalDetail(detail)}
      </section>

      <aside class="detail-skills">
        ${renderSectionTitle("Skill Tags", "能力标签")}
        <div class="detail-tags">${renderTags(detail.skillTags)}</div>
        ${renderSectionTitle("Tools", "使用工具")}
        <div class="detail-tools">${renderTools(detail.tools)}</div>
      </aside>
    `;
  }

  function openPanel(id, shouldScroll = false) {
    console.log("[experience] open panel before", id, panel.hidden);
    const isFirstOpen = selectedExperienceId === null;
    panel.hidden = false;
    console.log("[experience] open panel after", id, panel.hidden);

    selectedExperienceId = id;
    setCardState(id);

    const detail = findExperience(id);
    if (!detail) return;
    panel.classList.toggle("experience-detail--grouped", Boolean(detail.isGrouped));

    if (isFirstOpen) {
      panel.classList.remove("is-open", "is-switching");
      updatePanel(detail);
      requestAnimationFrame(() => {
        panel.classList.add("is-open", "is-visible", "has-rendered");
      });
    } else {
      panel.classList.add("is-switching");
      window.setTimeout(() => {
        updatePanel(detail);
        panel.classList.remove("is-switching");
      }, 140);
    }

    if (shouldScroll) {
      window.setTimeout(() => {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }, isFirstOpen ? 180 : 90);
    }
  }

  function closePanel() {
    console.log("[experience] panel close");
    selectedExperienceId = null;
    panel.classList.remove("is-open", "has-rendered", "is-visible", "experience-detail--grouped");
    setCardState(null);
    panel.hidden = true;
    body.innerHTML = "";
  }

  cards.forEach((card) => {
    card.setAttribute("aria-pressed", "false");
    console.log("[experience] bind card", card.dataset.exp);

    card.addEventListener("click", () => {
      const id = card.dataset.exp;
      panel.hidden = false;
      setCardState(id);
      console.log("[experience] card clicked", id);
      openPanel(id, true);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      const id = card.dataset.exp;
      panel.hidden = false;
      setCardState(id);
      console.log("[experience] card clicked", id);
      openPanel(id, true);
    });
  });

  closeButton?.addEventListener("click", closePanel);
}

function setupWorkTabs() {
  const image = document.querySelector("#work-image");
  const buttons = [...document.querySelectorAll("[data-work-tab]")];
  const status = document.querySelector("#work-status");
  const prevButton = document.querySelector("[data-work-prev]");
  const nextButton = document.querySelector("[data-work-next]");
  const order = ["home", "board", "focus", "archive"];
  let activeScreenshot = "home";

  if (!image || !buttons.length) return;

  function setActiveScreenshot(id) {
    activeScreenshot = workImages[id] ? id : "board";
    const activeButton = buttons.find((button) => button.dataset.workTab === activeScreenshot);
    const label = activeButton?.querySelector("span")?.textContent || "Board";

    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.workTab === activeScreenshot);
    });

    if (status) status.textContent = label;
    image.classList.add("is-switching");

    window.setTimeout(() => {
      image.src = workImages[activeScreenshot] || fallbackWorkImage;
      image.alt = `JobFlow Board ${label} 页面预览`;
      image.classList.remove("is-switching");
    }, 120);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setActiveScreenshot(button.dataset.workTab));
  });

  prevButton?.addEventListener("click", () => {
    const index = order.indexOf(activeScreenshot);
    setActiveScreenshot(order[(index - 1 + order.length) % order.length]);
  });

  nextButton?.addEventListener("click", () => {
    const index = order.indexOf(activeScreenshot);
    setActiveScreenshot(order[(index + 1) % order.length]);
  });

  image.addEventListener("error", () => {
    if (!image.src.endsWith("jobflow-board-boardpage.png")) {
      image.src = fallbackWorkImage;
    }
  });
}

function setupLightbox() {
  const lightbox = document.querySelector(".lightbox");
  const image = lightbox.querySelector("img");
  const closeButton = document.querySelector("[data-close-lightbox]");

  function closeLightbox() {
    lightbox.hidden = true;
    image.src = "";
    document.body.classList.remove("is-locked");
  }

  document.querySelectorAll("[data-lightbox]").forEach((button) => {
    button.addEventListener("click", () => {
      image.src = button.dataset.lightbox;
      lightbox.hidden = false;
      document.body.classList.add("is-locked");
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

function setupBackTop() {
  window.addEventListener("scroll", () => {
    backTop.classList.toggle("is-visible", window.scrollY > 520);
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

mountExperienceDebug();
setupNavigation();
setupExperiencePanel();
setupReveal();
setupWorkTabs();
setupLightbox();
setupBackTop();
