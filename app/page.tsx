"use client";

import { useEffect, useState } from "react";

const projects = [
  { number: "01", name: "BeatTrace", zh: "音乐可视化网站。", en: "A music visualization website.", href: "https://github.com/osophy/BeatTrace", accent: "blue", glyph: "♫", tag: "MUSIC · VISUAL" },
  { number: "02", name: "stock-pledge-default-prediction", zh: "基于财务与经营指标预测上市公司股权质押违约风险的机器学习小组项目。", en: "A group machine-learning project predicting listed-company stock pledge default risk from financial and operational indicators.", href: "https://github.com/osophy/stock-pledge-default-prediction", accent: "yellow", glyph: "↗", tag: "ML · RISK" },
  { number: "03", name: "ai-sovereignty-dashboard", zh: "可视化看板：探索35个虚构学生回应如何描述人工智能主权、隐私、日常依赖以及商业问题。", en: "A dashboard exploring how 35 fictional student responses describe AI sovereignty, privacy, everyday reliance, and business questions.", href: "https://github.com/osophy/ai-sovereignty-dashboard", accent: "mint", glyph: "◎", tag: "AI · DASHBOARD" },
];

const journey = [
  {
    key: "unsw",
    date: "02/2026 — 01/2027",
    place: "Sydney, Australia",
    zhTitle: "新南威尔士大学 · 商业分析硕士",
    enTitle: "UNSW · Master of Commerce in Business Analytics",
    zhBody: "WAM 78.5；课程涵盖商业分析方法、编程、分析基础设施与 AI 应用。",
    enBody: "WAM 78.5, with study across analytics methods, programming, IT infrastructure and AI in Action.",
    kind: "EDUCATION",
  },
  {
    key: "rudder",
    date: "09/2025 — 01/2026",
    place: "Shanghai, China",
    zhTitle: "上海赛舵智能科技 · 数据分析实习生",
    enTitle: "Shanghai AI Rudder Intelligent Technology · Data Analyst",
    zhBody: "为 5+ 核心客户搭建 Power BI 与飞书看板；用 Python 分析 AI 语音机器人通话转写，支持产品与运营改进。",
    enBody: "Built Power BI and Feishu dashboards for 5+ core clients and analysed AI voice-bot transcripts with Python to support product and operations improvements.",
    kind: "EXPERIENCE",
  },
  {
    key: "jiaming",
    date: "09/2024 — 08/2025",
    place: "Shanghai, China",
    zhTitle: "上海嘉铭旅游咨询 · 数据运营实习生",
    enTitle: "Shanghai Jiaming Tourism Consulting · Data Operations",
    zhBody: "维护 B2B 渠道经营看板并分析定价表现；协助 2025 年 5–6 月订单环比增长 10%，推动月度净利润率提升 3%。",
    enBody: "Maintained B2B channel dashboards and analysed pricing performance, contributing to 10% month-over-month order growth and a 3% lift in monthly net profit margin.",
    kind: "EXPERIENCE",
  },
  {
    key: "snu",
    date: "09/2023 — 06/2025",
    place: "Shanghai, China",
    zhTitle: "上海师范大学 · 管理学学士",
    enTitle: "Shanghai Normal University · Bachelor of Management",
    zhBody: "成绩 88.5%，专业排名 2/25；参与中医药复杂网络与深度学习数据驱动决策研究。",
    enBody: "Mark 88.5%, ranked 2/25; contributed to data-driven decision-making research in TCM using complex networks and deep learning.",
    kind: "EDUCATION",
  },
];

export default function Home() {
  const [language, setLanguage] = useState<"zh" | "en">("zh");
  const [selectedJourney, setSelectedJourney] = useState("unsw");
  const [mapZoom, setMapZoom] = useState(1);
  const zh = language === "zh";
  const activeJourney = journey.find((item) => item.key === selectedJourney) ?? journey[0];

  useEffect(() => {
    document.documentElement.lang = zh ? "zh-CN" : "en";
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [zh]);

  return (
    <main className="site-shell">
      <section className="portfolio-frame">
        <nav className="topbar" aria-label={zh ? "主导航" : "Main navigation"}>
          <a className="brand neo-button" href="#top" aria-label="Jace Li home">JL</a>
          <div className="nav-links">
            <a href="#top">{zh ? "首页" : "Home"}</a><a href="#about">{zh ? "关于" : "About"}</a>
            <a href="#journey">{zh ? "经历" : "Journey"}</a><a href="#work">{zh ? "作品" : "Work"}</a><a href="#contact">{zh ? "联系" : "Contact"}</a>
          </div>
          <a className="nav-cta neo-button" href="#contact">{zh ? "来聊聊！" : "Say hello!"}</a>
          <button className="language-switch neo-button" type="button" onClick={() => setLanguage(zh ? "en" : "zh")} aria-label={zh ? "Switch to English" : "切换到中文"}>
            <span className={zh ? "active" : ""}>中</span><span aria-hidden="true">/</span><span className={!zh ? "active" : ""}>EN</span>
          </button>
        </nav>

        <div className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{zh ? "嗨，你好！" : "Hi there!"} <span className="wave">👋</span></p>
            <h1>{zh ? "我是 " : "I'm "}<span>Jace LI</span><i>.</i></h1>
            <p className="role">UNSW · Business Analytics</p>
            <p className="intro">{zh ? "商业分析硕士生，专注将数据清洗、建模与可视化转化为可执行的业务洞察。" : "A Business Analytics postgraduate turning data cleaning, modelling and visualisation into actionable business insight."}</p>
            <div className="hero-actions">
              <a className="primary-cta neo-button" href="#work">{zh ? "看看我的作品" : "Explore my work"}<span>↗</span></a>
              <a className="icon-button neo-button" href="https://github.com/osophy" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
              <a className="icon-button neo-button" href="mailto:zixuanli0508@outlook.com" aria-label="Email">@</a>
            </div>
            <div className="scribble-note"><span>{zh ? "数据有节奏，创意有逻辑" : "Rhythm in data. Logic in creativity."}</span><b aria-hidden="true">↝</b></div>
          </div>

          <div className="hero-art" aria-label={zh ? "Jace Li 创意名片" : "Jace Li creative profile card"}>
            <div className="sticker sticker-code">&lt;/&gt;</div><div className="sticker sticker-chart">▥</div><div className="tape" />
            <div className="portrait-card avatar-card"><img src="./jace-avatar-simple.png" alt={zh ? "Jace Li 的简约 Q 版卡通虚拟形象" : "Minimal chibi cartoon avatar of Jace Li"} /></div>
            <div className="title-sticker">{zh ? "数据分析 × AI" : "DATA × AI"}</div>
          </div>
        </div>

        <div className="skill-strip" aria-label={zh ? "技能与兴趣" : "Skills and interests"}>
          <span>✦ {zh ? "数据分析" : "Data Analytics"}</span><span>◒ Business Analytics</span><span>♫ {zh ? "舞蹈" : "Dance"}</span>
        </div>

        <section className="about-section reveal" id="about">
          <div className="section-kicker">{zh ? "关于我" : "ABOUT ME"}</div>
          <div className="about-layout">
            <h2>{zh ? <>让数据说清问题，<em>让洞察推动行动。</em></> : <>Make data clear. <em>Make insight actionable.</em></>}</h2>
            <div className="about-copy">
              <p>{zh ? "我目前就读于 UNSW 商业分析硕士项目，具备 AI 语音机器人、B2B 渠道运营与数据产品场景的分析经验。擅长以 SQL、Python、Power BI 和 Excel 连接业务问题、数据质量与决策看板。" : "I am completing a Master of Commerce in Business Analytics at UNSW, with hands-on experience across AI voice-bot operations, B2B channel analytics and data-product contexts. I use SQL, Python, Power BI and Excel to connect business questions, data quality and decision dashboards."}</p>
              <div className="mini-cards"><div><b>ANALYTICS</b><span>{zh ? "数据建模 · 可视化 · 预测" : "Modelling · Visualisation · Forecasting"}</span></div><div><b>OPERATIONS</b><span>{zh ? "指标体系 · 业务洞察" : "KPIs · Business Insight"}</span></div></div>
            </div>
          </div>
        </section>

        <section className="journey-section reveal" id="journey">
          <div className="section-heading">
            <div><span className="section-kicker">{zh ? "经历轨迹" : "MY JOURNEY"}</span><h2>{zh ? "从上海，到悉尼。" : "From Shanghai to Sydney."}</h2></div>
            <div className="journey-note">{zh ? "点击节点查看详情" : "Tap a stop for details"}</div>
          </div>
          <div className="journey-layout">
            <div className="timeline" role="list">
              {journey.map((item) => (
                <button key={item.key} className={`timeline-item ${selectedJourney === item.key ? "is-active" : ""}`} type="button" onClick={() => { setSelectedJourney(item.key); setMapZoom(1); }} role="listitem">
                  <span className="timeline-dot" /><span className="timeline-date">{item.date}</span><strong>{zh ? item.zhTitle : item.enTitle}</strong><small>{item.kind}</small>
                </button>
              ))}
            </div>
            <aside className="journey-detail" aria-live="polite">
              <span className="detail-type">{activeJourney.kind}</span><h3>{zh ? activeJourney.zhTitle : activeJourney.enTitle}</h3>
              <p>{zh ? activeJourney.zhBody : activeJourney.enBody}</p><span className="detail-date">{activeJourney.date}</span>
            </aside>
            <div className="world-map-panel" aria-label={zh ? "上海与悉尼世界地图定位" : "World map locations for Shanghai and Sydney"}>
              <div className="map-toolbar"><span>{zh ? "世界地图 · 定位" : "WORLD MAP · LOCATIONS"}</span><div className="map-controls"><button type="button" onClick={() => setMapZoom(Math.min(1.24, mapZoom + 0.12))} aria-label={zh ? "放大地图" : "Zoom in"}>+</button><button type="button" onClick={() => setMapZoom(Math.max(0.9, mapZoom - 0.12))} aria-label={zh ? "缩小地图" : "Zoom out"}>−</button></div></div>
              <div className="world-map-viewport">
                <div className="world-map-canvas" style={{ transform: `scale(${mapZoom})` }}>
                  <svg className="world-map-svg" viewBox="0 0 1000 430" aria-hidden="true"><path d="M74 90 145 51 238 65 290 107 279 159 229 188 192 161 138 180 93 142Z" /><path d="m244 201 53 29 18 78-31 94-36-28-15-75Z" /><path d="m412 91 74-39 133 24 42 49-55 39-47-11-41 39-63-20-30-45Z" /><path d="m472 202 74 17 43 66-35 93-49-3-30-72Z" /><path d="m646 205 80 13 38 42-35 33-73-14-32-38Z" /><path d="m750 326 65-31 92 31-27 49-93 7Z" /></svg>
                  <svg className="map-route-svg" viewBox="0 0 1000 430" aria-hidden="true"><path d="M706 151 C798 193 824 286 810 329" /></svg>
                  <button type="button" className={`geo-pin geo-pin--shanghai ${activeJourney.place.startsWith("Shanghai") ? "is-active" : ""}`} onClick={() => setSelectedJourney("rudder")} aria-label={zh ? "定位到上海经历" : "Locate Shanghai experience"}><i>✦</i><b>{zh ? "上海" : "Shanghai"}</b><span>CN</span></button>
                  <button type="button" className={`geo-pin geo-pin--sydney ${activeJourney.place.startsWith("Sydney") ? "is-active" : ""}`} onClick={() => setSelectedJourney("unsw")} aria-label={zh ? "定位到悉尼经历" : "Locate Sydney experience"}><i>●</i><b>{zh ? "悉尼" : "Sydney"}</b><span>AU</span></button>
                  <div className="plane-mark" aria-hidden="true">✈</div>
                </div>
              </div>
              <div className={`map-stamp ${activeJourney.place.startsWith("Sydney") ? "is-sydney" : "is-shanghai"}`}>{zh ? `当前定位 · ${activeJourney.place.startsWith("Sydney") ? "悉尼" : "上海"}` : `NOW LOCATING · ${activeJourney.place}`}</div>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading reveal">
            <div><span className="section-kicker">{zh ? "精选作品" : "SELECTED WORK"}</span><h2>{zh ? "项目与探索" : "Projects & explorations"}</h2></div>
            <div className="hand-arrow" aria-hidden="true">↘</div>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.accent} reveal`} key={project.name} style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="project-top"><span>{project.number}</span><span>{project.tag}</span></div><div className="project-glyph" aria-hidden="true">{project.glyph}</div>
                <div className="project-body"><h3>{project.name}</h3><p>{zh ? project.zh : project.en}</p>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}><span>{zh ? "在 GitHub 查看" : "View on GitHub"}</span><b>↗</b></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div className="contact-doodle" aria-hidden="true">✦</div><p>{zh ? "保持联系" : "GET IN TOUCH"}</p>
          <h2>{zh ? "有数据，也有舞步。" : "Data, ideas, and a little rhythm."}</h2>
          <div className="contact-links">
            <a className="contact-link neo-button" href="mailto:zixuanli0508@outlook.com"><span>@</span><div><small>EMAIL</small><b>zixuanli0508@outlook.com</b></div><i>↗</i></a>
            <a className="contact-link neo-button" href="https://github.com/osophy" target="_blank" rel="noreferrer"><span>GH</span><div><small>GITHUB</small><b>github.com/osophy</b></div><i>↗</i></a>
          </div>
        </section>

        <footer><a href="#top">JACE LI</a><span>UNSW · BUSINESS ANALYTICS</span><a href="#top" aria-label={zh ? "返回顶部" : "Back to top"}>↑</a></footer>
      </section>
    </main>
  );
}
