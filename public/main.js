const navLinks = [...document.querySelectorAll(".site-nav a")];
const siteNav = document.querySelector(".site-nav");
const sections = [...document.querySelectorAll("[data-section]")];
const revealItems = [...document.querySelectorAll(".reveal")];
const backTop = document.querySelector(".back-top");

const workImages = {
  home: "./photo/jobflow-home.png",
  board: "./photo/jobflow-board.png",
  focus: "./photo/jobflow-focus.png",
  archive: "./photo/jobflow-archive.png"
};

const fallbackWorkImage = "./photo/jobflow-board.png";

const experienceDetails = {
  bytedance: {
    kicker: "KA 作者策略运营",
    title: "字节跳动｜KA 作者策略运营",
    time: "实习时间：见简历",
    sections: [
      {
        title: "核心经历",
        items: [
          ["达人运营：", "运营480+头部达人，数据驱动策略，GMV年同比+43%（增量18亿），直播PV同比+72%（增量23亿）。"],
          ["经营分析：", "建立“供给+货盘+用户画像+流量+内容”五维分析模型，深度分析50+达人数据，精准定位增长机会点。"],
          ["货盘提效：", "基于经营数据以及营销节点定制货盘调优方案，并协同行业撮合意向品牌，成功撮合pair对200+。"],
          ["内容调优：", "通过调整达人流量结构、调优预热内容、优化营销工具配置等动作，助力25+达人打造5000w+大场。"],
          ["资源配置：", "根据目标对作者进行策略分层，设计针对性的激励任务赛批量牵引靶向作者。累计设计5次主题任务赛，平均带来GMV增量3000w+，项目完成率200%+，项目ROI 2.8，核心牵引指标在AA以及AB对比上均显著正向。"],
          ["数据体系建设：", "独立搭建5个专项数据看板，实现团队OKR和业务目标监控，完善业务数据体系，挖掘数据异动并归因。"]
        ]
      }
    ]
  },
  vipshop: {
    kicker: "供应链策略&采销",
    title: "唯品会｜供应链策略&采销",
    time: "实习时间：见简历",
    sections: [
      {
        title: "供应链策略",
        items: [
          ["链路优化：", "基于电商客退的逆向物流全链路数据，给出优化流程和方案，减少链路资产损失。"],
          ["数据分析：", "利用SQL、AI工具分析历史客退数据，从客服、OQC、IQC、物流、供应商、客户风险分等方向挖掘。"],
          ["问题溯源：", "完成1000+异常工单溯源分析，结合用户行为画像、对话记录、监控视频等多元数据定位高频问题场景。"],
          ["方案设计：", "利用大盘数据及抽样结果，测算优化目标，设计优化方案，联动链路上的其他部门。"],
          ["流程提效：", "参与20+项流程优化课题，产出50+改进方案。在海淘逆向优化项目，预计挽回400W+，残次损失率降低18%。"]
        ]
      },
      {
        title: "采销",
        items: [
          ["指标测算：", "协助完成10+份订单，累计600+SKU的成本费用、利润率、GMV等关键指标测算。"],
          ["采购评分：", "根据BFPQ模型（品牌力/畅销度/价格力/质量），完成120+项采购申请的量化评分，支持亿级采购决策。"],
          ["流程分析：", "梳理热度订单历史采购跟进信息80+单，分析当前采购流程主要瓶颈和风险，预计将流程压缩37%。"]
        ]
      }
    ]
  },
  iqiyi: {
    kicker: "产品技术部｜产品运营",
    title: "爱奇艺（产品技术部）｜产品运营",
    time: "实习时间：2026.01 - 至今",
    sections: [
      {
        title: "核心经历",
        items: [
          ["综艺内容承接优化：", "围绕综艺内容消费与播放转化，拆解正片、衍生、看点、更多周边等内容场景，优化播放页内容分层与联播承接策略，提升用户从站内外种草到播放消费的链路效率，带动人均播放时长提升10%。"],
          ["新用户首轮承接优化：", "围绕PCA新安装用户首轮消费转化，完成下载到消费全链路体验走查，定位弹窗密集、营销感强、播放链路被打断等高流失风险问题，推动新用户分层触达与弹窗降扰策略落地，开播转化率提升6%、留存提升4%。"],
          ["AI辅助协同：", "结合AI快速生成交互Demo，替代部分静态描述，减少需求理解偏差，提升跨团队对齐效率。"],
          ["AI自动化提效：", "针对SEO项目中物料供给与搜索出卡巡检的高频重复需求，利用Codex开发自动化工具，累计支持200+次物料生成，单次处理时长缩短至5min；搭建榜单关键词巡检流程，识别搜索出卡异常，提升SEO运营效率。"]
        ]
      }
    ]
  },
  deloitte: {
    kicker: "咨询",
    title: "德勤｜咨询",
    time: "实习时间：见简历",
    sections: [
      {
        title: "核心经历",
        items: [
          ["ESG咨询与研究：", "参与多行业上市企业ESG提升/转型方案、月报及BD材料撰写，支持MSCI、DJSI等评级提升与回应，并参与气候风险、碳资产及ESG差距分析。"]
        ]
      }
    ]
  }
};

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

function setupExperienceModal() {
  const modal = document.querySelector(".detail-modal");
  const kicker = document.querySelector("#modal-kicker");
  const title = document.querySelector("#modal-title");
  const time = document.querySelector("#modal-time");
  const content = document.querySelector("#modal-content");
  const closeButton = document.querySelector("[data-close-modal]");

  function renderDetail(key) {
    const detail = experienceDetails[key];
    if (!detail) return;

    kicker.textContent = detail.kicker;
    title.textContent = detail.title;
    time.textContent = detail.time;
    content.innerHTML = detail.sections
      .map(
        (section) => `
          <section>
            <h3>${section.title}</h3>
            <ol>
              ${section.items.map(([lead, text]) => `<li><strong>${lead}</strong>${text}</li>`).join("")}
            </ol>
          </section>
        `
      )
      .join("");

    modal.showModal();
  }

  document.querySelectorAll("[data-exp]").forEach((card) => {
    card.addEventListener("click", () => renderDetail(card.dataset.exp));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        renderDetail(card.dataset.exp);
      }
    });
  });

  closeButton.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}

function setupWorkTabs() {
  const image = document.querySelector("#work-image");
  const buttons = [...document.querySelectorAll("[data-work-tab]")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      image.classList.add("is-switching");

      window.setTimeout(() => {
        image.src = workImages[button.dataset.workTab] || fallbackWorkImage;
        image.alt = `JobFlow Board ${button.textContent} 页面预览`;
        image.classList.remove("is-switching");
      }, 120);
    });
  });

  image.addEventListener("error", () => {
    if (!image.src.endsWith("jobflow-board.png")) {
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

setupNavigation();
setupReveal();
setupExperienceModal();
setupWorkTabs();
setupLightbox();
setupBackTop();
