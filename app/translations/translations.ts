type TranslationKeys = {
  [key: string]: string;
};

export const translations: Record<"en" | "zh" | "ar", TranslationKeys> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.expertise": "Expertise",
    "nav.whyicr": "Why ICR",
    "nav.about": "About",
    "nav.careers": "Careers",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.language": "Language",

    // Languages
    "lang.english": "English",
    "lang.chinese": "中文",
    "lang.arabic": "العربية",

    // Home page - Hero Section
    "home.hero.title": "Turning Evidence into",
    "home.hero.subtitle": "Confident Decisions",
    "home.hero.description":
      "Insight Consultancy & Research (ICR) is an independent research and advisory firm supporting public sector, corporate, and international organisations with decision-focused research, evaluation, and insight.",
    "home.hero.description2":
      "We design and deliver rigorous evidence and clear analysis to support strategic, operational, and policy decisions in complex environments.",

    // Home page - Feature Cards
    "home.feature.research": "Research",
    "home.feature.research.desc":
      "Rigorous, objective methodologies designed for real-world decision-making.",
    "home.feature.insight": "Insight",
    "home.feature.insight.desc":
      "Clear interpretation of evidence, grounded in context.",
    "home.feature.clarity": "Strategic Clarity",
    "home.feature.clarity.desc":
      "Decision-ready guidance for leaders and stakeholders.",

    // Home page - CTA Buttons
    "home.cta.discuss": "Discuss Your Requirements",
    "home.cta.services": "Explore Our Services",

    // Home page - Expertise Section
    "home.expertise.title": "Our Expertise",
    "home.expertise.description":
      "At Insight Consultancy & Research (ICR), we provide tailored research and advisory services designed to support strategic planning, policy development, and organisational growth.",
    "home.expertise.market": "Market & Social Research",
    "home.expertise.market.desc":
      "Generating data and insight to understand markets, communities, and stakeholders.",
    "home.expertise.advisory": "Strategic Advisory",
    "home.expertise.advisory.desc":
      "Supporting informed decision-making through analysis and foresight.",
    "home.expertise.monitoring": "Monitoring & Evaluation",
    "home.expertise.monitoring.desc":
      "Assessing performance, impact, and effectiveness of programmes and initiatives.",
    "home.expertise.data": "Data Analysis & Reporting",
    "home.expertise.data.desc":
      "Transforming complex data into clear, actionable insight.",

    // Home page - Why Choose ICR
    "home.why.title": "Why Choose Insight Consultancy & Research",
    "home.why.description":
      "We support organisations to move from evidence to insight — and from insight to clear, defensible decisions.",
    "home.why.evidence": "Evidence-Driven Decisions",
    "home.why.contextual": "Contextual Insights",
    "home.why.monitoring": "Continuous Monitoring",
    "home.why.practical": "Practical Market Insights",
    "home.why.strategic": "Strategic Market Clarity",
    "home.why.actionable": "Actionable Strategies",

    // Home page - ICR in Numbers
    "home.numbers.title": "ICR in Numbers",
    "home.numbers.interviews": "100,000+ Interviews Conducted",
    "home.numbers.projects": "100+ Projects Delivered",
    "home.numbers.experience": "55+ Years of Combined Team Experience",

    // Home page - Why Trust ICR
    "home.trust.title": "Why Organisations Trust ICR",
    "home.trust.description":
      "Our work is grounded in methodological rigour, independence, and a clear focus on decision-maker needs.",
    "home.trust.delivery": "Evidence-Led Delivery",
    "home.trust.engagement": "Decision-Focused Engagements",
    "home.trust.team": "Experienced Research & Advisory Team",

    // Home page - Final CTA
    "home.final.title": "Let's Work Together",
    "home.final.description":
      "If you require independent research, evaluation, or decision support, ICR can support your objectives with rigorous evidence and clear insight.",

    // Footer
    "footer.tagline": "Research • Insight • Strategic Clarity",
    "footer.quicklinks": "Quick Links",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Settings",

    // Services Page
    "services.hero.title": "Explore Our",
    "services.hero.subtitle": "Services",
    "services.hero.description":
      "Our services are designed to support complex decisions through rigorous research, structured analysis, and clear, decision-ready outputs.",

    "services.why.title": "Why Choose Insight Consultancy & Research",
    "services.why.description":
      "At Insight Consultancy & Research (ICR), we support organisations to move from evidence to insight — and from insight to clear, defensible decisions.",

    "services.quantitative.title": "Quantitative Research",
    "services.quantitative.desc":
      "Survey design, modelling, and analytical techniques used to generate robust evidence and support defensible strategic, operational, and policy decisions at scale.",

    "services.qualitative.title": "Qualitative Research",
    "services.qualitative.desc":
      "In-depth interviews and qualitative methods to understand behaviours, perceptions, and contextual drivers behind observed outcomes, informing interpretation and decision-making.",

    "services.tracking.title": "Tracking Studies",
    "services.tracking.desc":
      "Ongoing tracking frameworks designed to monitor performance over time, identify emerging trends and support longitudinal insight.",

    "services.retail.title": "Retail & Shopper Research",
    "services.retail.desc":
      "Structured field audits and observational research designed to generate reliable evidence from real-world environments and operating contexts.",

    "services.market.title": "Market Assessments & Opportunity Analysis",
    "services.market.desc":
      "Market assessments, segmentation, and comparative analysis to inform prioritisation, strategy, and investment decisions in complex markets.",

    "services.strategic.title": "Strategic Consulting",
    "services.strategic.desc":
      "Advisory and decision-support services translating research findings into clear options, implications, and recommendations for leadership.",

    "services.process.title": "5 Step Work Process",
    "services.process.description":
      "We combine rigorous methods and practical experience to deliver research that informs confident decisions.",

    "services.process.step1": "Clear Decisions",
    "services.process.step1.desc": "Decision requirements clarified upfront.",

    "services.process.step2": "Structured Delivery",
    "services.process.step2.desc":
      "Structured delivery and quality assurance processes.",

    "services.process.step3": "Continuous Oversight",
    "services.process.step3.desc": "Ongoing validation and oversight.",

    "services.process.step4": "Actionable Reporting",
    "services.process.step4.desc": "Clear, decision-ready reporting.",

    "services.process.step5": "Governed Engagements",
    "services.process.step5.desc":
      "Engagements scoped and governed to meet client, regulatory, and stakeholder requirements.",

    "services.cta.discuss": "Discuss Your Research or Evaluation Requirements",
    "services.cta.request": "Request an Initial Discussion",

    // Careers Page
    "careers.hero.title": "Join a team turning",
    "careers.hero.subtitle": "data into decisions",
    "careers.hero.description":
      "At ICR, we believe insight starts with people. We're always looking for thoughtful, curious professionals who want to do work that matters.",

    "careers.why.title": "Real projects. Smart people. Growth that matters.",
    "careers.why.description":
      "At ICR, you won't just do a job — you'll contribute to work that informs real decisions across industries and regions.",

    "careers.purpose.title": "Purpose-Driven Work",
    "careers.purpose.desc":
      "Help leading brands solve business challenges through research, insight, and strategy that make a difference.",

    "careers.collaborative.title": "Collaborative Environment",
    "careers.collaborative.desc":
      "Work closely with a regional team of researchers, consultants, and analysts who share ideas, not just tasks.",

    "careers.learning.title": "Continuous Learning",
    "careers.learning.desc":
      "Grow through hands-on experience, mentorship, and structured development designed to sharpen your skills.",

    "careers.regional.title": "Regional Exposure",
    "careers.regional.desc":
      "Gain experience across projects in Saudi Arabia, GCC, and MENA — from local launches to multi-market studies.",

    "careers.flexible.title": "Flexible Culture",
    "careers.flexible.desc":
      "We focus on results, not rigid rules. Take ownership, share ideas, and work in a space that values adaptability.",

    "careers.impact.title": "Meaningful Impact",
    "careers.impact.desc":
      "Your work shapes real decisions — from product launches to strategy pivots. We don't collect data, we guide action.",

    "careers.form.title": "We want to hear from you",
    "careers.form.description":
      "Use the form below to submit your CV. We review every submission and keep qualified profiles for future roles.",

    "careers.form.name": "Full Name",
    "careers.form.email": "Email",
    "careers.form.phone": "Phone Number",
    "careers.form.position": "Area of Interest / Position",
    "careers.form.resume": "Upload Resume",
    "careers.form.cover": "Cover Note / Message (optional)",
    "careers.form.submit": "Submit",

    "careers.process.title": "How We Process Your Application",
    "careers.process.description": "Clear steps from submission to selection.",

    "careers.process.review": "Resume Review",
    "careers.process.review.desc":
      "We evaluate your resume for role fit and experience.",

    "careers.process.screening": "Initial Screening",
    "careers.process.screening.desc":
      "Shortlisted candidates are contacted for a quick phone or video screen.",

    "careers.process.interviews": "Interviews",
    "careers.process.interviews.desc":
      "You'll meet with relevant team leads and managers across 1–2 rounds.",

    "careers.process.final": "Final Review",
    "careers.process.final.desc":
      "We assess skill, fit, and cultural alignment before making an offer.",

    "careers.process.offer": "Offer & Onboarding",
    "careers.process.offer.desc":
      "Selected candidates receive a formal offer and onboarding plan.",

    // About Page
    "about.hero.title": "About Insight Consultancy & Research",
    "about.hero.subtitle": "Who We Are",
    "about.hero.description1":
      "Insight Consultancy & Research (ICR) is an independent consultancy specialising in research-led advisory and evidence-based decision support.",
    "about.hero.description2":
      "We work with organisations that operate in complex environments and require clear, defensible insight to inform policy, strategy, and implementation.",
    "about.hero.description3":
      "Our role is not to advocate predetermined solutions, but to help decision-makers understand realities on the ground, assess options objectively, and move forward with confidence.",
    "about.cta.discuss": "Discuss Your Requirements",

    "about.positioning.title": "Our Positioning",
    "about.positioning.desc1":
      "ICR is positioned at the intersection of rigorous research and practical decision-making.",
    "about.positioning.desc2":
      "We operate as a trusted analytical partner, supporting leaders who must balance evidence, context, and constraints when making high-stakes decisions.",
    "about.positioning.desc3":
      "We deliberately maintain a focused scope: research, analysis, and advisory support that translates evidence into clarity.",
    "about.positioning.desc4":
      "This allows us to remain independent, methodologically sound, and outcome-oriented across all engagements.",

    "about.integrity.title": "Integrity and Independence",
    "about.integrity.desc1":
      "Integrity underpins all of ICR's work. We maintain independence in our analysis and recommendations, ensuring that findings are guided by evidence rather than assumptions or external pressures.",
    "about.integrity.desc2":
      "Our governance and quality assurance practices are designed to safeguard objectivity, protect data confidentiality, and ensure methodological robustness across all projects.",

    "about.experience.title": "Experience Across Contexts",
    "about.experience.desc1":
      "ICR has supported organisations operating across diverse sectors and institutional contexts, including public sector bodies, private enterprises, and international stakeholders.",
    "about.experience.desc2":
      "While each engagement is unique, our work is consistently grounded in an understanding of local realities, stakeholder dynamics, and decision environments.",
    "about.experience.desc3":
      "Rather than promoting generic frameworks, we adapt our thinking to the specific context in which decisions are being made.",

    "about.future.title": "Looking Ahead",
    "about.future.desc1":
      "As decision environments become more complex and data availability increases, the need for structured, responsible, and transparent analysis continues to grow.",
    "about.future.desc2":
      "ICR remains committed to evolving its tools and approaches while maintaining its core principles of independence, rigour, and clarity.",
    "about.future.desc3":
      "Our focus remains on supporting organisations as they navigate uncertainty and make informed decisions with confidence.",

    "about.clients.title": "How We Work with Clients",
    "about.clients.description":
      "We engage closely with clients throughout the lifecycle of an assignment, beginning with a clear understanding of decision needs and ending with outputs designed for real-world use.",
    "about.clients.subtitle":
      "We value long-term partnerships built on trust, transparency, and consistent delivery.",

    "about.clients.approach1":
      "Careful framing of questions before data collection begins",
    "about.clients.approach2":
      "Ongoing dialogue to ensure relevance and alignment",
    "about.clients.approach3":
      "Structured outputs that support decision-making, not just reporting",

    "about.research.insight":
      "RESEARCH · INSIGHT · STRATEGIC CLARITY深研 · 洞察 · 战略明晰",

    // Expertise Page
    "expertise.hero.title": "Our Expertise",
    "expertise.hero.description1":
      "At Insight Consultancy & Research (ICR), our expertise is built on delivering rigorous research and analysis to support complex decision-making across public, corporate, and international contexts.",
    "expertise.hero.description2":
      "We combine sector knowledge, methodological rigour, and advanced analytical capabilities to address strategic, operational, and policy challenges.",
    "expertise.hero.description3":
      "Our approach integrates established research practices with modern analytical tools, including the responsible use of AI-enabled techniques to enhance accuracy, efficiency, and insight generation.",
    "expertise.cta.discuss": "Discuss Your Requirements",

    "expertise.government.title": "Governmental & Public Sector Projects",
    "expertise.government.desc1":
      "We have extensive experience supporting governmental and public sector entities through research, evaluation, and advisory engagements.",
    "expertise.government.desc2":
      "Our work reflects an understanding of governance frameworks, accountability requirements, and the need for evidence that can withstand public and regulatory scrutiny.",
    "expertise.government.includes": "What it includes:",
    "expertise.government.item1": "Policy research and programme monitoring",
    "expertise.government.item2": "Public service performance assessment",
    "expertise.government.item3": "Stakeholder and beneficiary research",
    "expertise.government.item4":
      "Impact studies to inform policy and programme improvement",

    "expertise.corporate.title": "Corporate & Market-Focused Expertise",
    "expertise.corporate.desc1":
      "Alongside public sector work, we support corporate organisations operating in complex and competitive environments.",
    "expertise.corporate.desc2":
      "Our expertise helps organisations understand market dynamics, consumer behaviour, and operational performance to inform strategic planning and investment decisions.",
    "expertise.corporate.includes": "What it includes",
    "expertise.corporate.item1": "Market and opportunity assessments",
    "expertise.corporate.item2": "Consumer and shopper research",
    "expertise.corporate.item3": "Brand and performance tracking",
    "expertise.corporate.item4": "Market entry and competitive analysis",

    "expertise.methodological.title": "Methodological & Analytical Strengths",
    "expertise.methodological.desc1":
      "Our expertise is underpinned by strong methodological capabilities across quantitative, qualitative, and mixed-method approaches.",
    "expertise.methodological.desc2":
      "Each study is designed closely with the decision context in mind, ensuring methodological fit, reliability, and clarity.",
    "expertise.methodological.includes": "What it includes:",
    "expertise.methodological.item1": "Large-scale quantitative surveys",
    "expertise.methodological.item2": "Qualitative interviews and focus groups",
    "expertise.methodological.item3": "Longitudinal tracking frameworks",
    "expertise.methodological.item4":
      "Integrated analysis across multiple data sources",

    "expertise.ai.title": "Use of AI in the Research Process",
    "expertise.ai.desc1":
      "We incorporate AI-enabled tools within our research and analytical processes to enhance efficiency, consistency, and insight generation.",
    "expertise.ai.desc2":
      "These tools are applied with full methodological oversight and human judgement.",
    "expertise.ai.includes": "What it includes:",
    "expertise.ai.item1": "AI-supported data preparation and cleaning",
    "expertise.ai.item2": "Pattern identification and trend analysis",
    "expertise.ai.item3": "Text and qualitative data processing",
    "expertise.ai.item4": "AI-assisted analytical modelling with human review",

    "expertise.decision.title": "Decision-Focused Application",
    "expertise.decision.desc1":
      "Across all areas of expertise, our work is guided by a clear focus on decision-making.",
    "expertise.decision.desc2":
      "We prioritise clarity, relevance, and practical application, ensuring outputs are accessible to senior stakeholders and aligned with organisational objectives.",
    "expertise.decision.includes": "What it includes:",
    "expertise.decision.item1":
      "Policy development and programme evaluation support",
    "expertise.decision.item2":
      "Strategic prioritisation and investment planning",
    "expertise.decision.item3": "Executive-ready reporting and recommendations",

    "expertise.closing.title": "Closing Statement",
    "expertise.closing.desc1":
      "Our expertise reflects a balance of sector knowledge, methodological rigour, and analytical innovation.",
    "expertise.closing.desc2":
      "By combining experience across governmental and corporate projects with advanced research capabilities, we support organisations in making informed, confident, and defensible decisions.",
    "expertise.closing.item1": "Sector knowledge and methodological rigour",
    "expertise.closing.item2": "Analytical innovation and integrated insight",
    "expertise.closing.item3":
      "Decision-ready delivery for senior stakeholders",

    "expertise.final.title": "Let's explore how we can support your goals",
    "expertise.final.cta": "Explore our services",

    // Why ICR Page
    "whyicr.hero.title": "Turning Research Into Strategic Growth",
    "whyicr.hero.description":
      "ICR goes beyond data — we partner with you to drive better business outcomes through focused research, practical insights, and strategic recommendations.",
    "whyicr.cta.discuss": "Discuss Your Requirements",
    "whyicr.cta.services": "Explore Our Services",

    "whyicr.partnerships.title": "Strategic Partnerships",
    "whyicr.partnerships.desc":
      "We go beyond one-time projects — ICR acts as a strategic ally. We manage research relationships, streamline vendor communication, and ensure insights are tied to your business KPIs.",

    "whyicr.marketing.title": "Marketing Strategy Support",
    "whyicr.marketing.desc":
      "We help shape your strategy by turning insights into action. From brand positioning to market entry planning, we focus on measurable tactics that deliver results.",

    "whyicr.retail.title": "Retail Audit Expertise",
    "whyicr.retail.desc":
      "We help you get the most out of your retail audit programs by improving quality, speed, and actionability at every stage.",

    "whyicr.agency.title": "Agency Coordination",
    "whyicr.agency.desc":
      "We act as your liaison — managing agency communications directly to speed up response times and ensure swift issue resolution.",

    "whyicr.accuracy.title": "Data Accuracy",
    "whyicr.accuracy.desc":
      "Our experts validate and enhance data coverage and consistency, helping you trust what the numbers say — every time.",

    "whyicr.analytics.title": "Advanced Analytics",
    "whyicr.analytics.desc":
      "We apply statistical and modelling techniques to uncover patterns and insights hidden within your retail data.",

    "whyicr.reporting.title": "Actionable Reporting",
    "whyicr.reporting.desc":
      "No fluff. Just focused, decision-ready outputs that help your teams move fast and execute better.",

    "whyicr.process.title": "How We Work",
    "whyicr.process.description":
      "We follow a simple, proven process to turn insight into action — from scoping and research to strategy and implementation support.",

    "whyicr.process.step1": "01 Understand",
    "whyicr.process.step1.desc":
      "Clarifying decisions, objectives, and evidence requirements.",

    "whyicr.process.step2": "02 Research",
    "whyicr.process.step2.desc":
      "Structured field management and quality assurance.",

    "whyicr.process.step3": "03 Strategize",
    "whyicr.process.step3.desc":
      "Continuous monitoring and validation for data integrity.",

    "whyicr.process.step4": "04 Support",
    "whyicr.process.step4.desc":
      "Decision-ready reporting focused on implications and next steps.",

    "whyicr.industries.title": "Industries We Serve",
    "whyicr.industries.description": "We support clients across:",

    "whyicr.industry.consumer": "Consumer Goods",
    "whyicr.industry.healthcare": "Healthcare & Pharma",
    "whyicr.industry.telecom": "Telecom & Tech",
    "whyicr.industry.automotive": "Automotive",
    "whyicr.industry.media": "Media & Entertainment",

    "whyicr.success.title": "Why We Succeed",
    "whyicr.success.description":
      "ICR delivers consistent value through six key strengths — built on trust, insight, and innovation.",

    "whyicr.success.relationships": "Strong Client Relationships",
    "whyicr.success.expertise": "Local Market Expertise",
    "whyicr.success.innovation": "Continuous Innovation",
    "whyicr.success.tools": "Smart Analytical Tools",
    "whyicr.success.process": "Insight-Led Process",
    "whyicr.success.talent": "Senior Research Talent",

    // Contact Page
    "contact.hero.title": "Let’s discuss",
    "contact.hero.subtitle": "your requirements",
    "contact.hero.description1":
      "Whether you are planning a study, assessing a market, or seeking research or advisory support, our team is available to discuss your requirements and how we can support informed decision-making.",
    "contact.hero.description2":
      "We work with public sector bodies, corporate organisations, and international stakeholders.",
    "contact.cta.discuss": "Discuss Your Requirements",
    "contact.cta.services": "Explore Our Services",

    "contact.getintouch.title": "Get in Touch",
    "contact.email.title": "Email",
    "contact.email.desc":
      "For general enquiries, project discussions, and partnership opportunities, please email:",
    "contact.social.title": "Follow Us",

    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company Name",
    "contact.form.message": "Message",
    "contact.form.upload": "Upload a brief (optional)",
    "contact.form.upload.instruction": "Click to upload or drag and drop",
    "contact.form.upload.note":
      "You may upload a project brief, TOR, or background document to support your enquiry.",
    "contact.form.upload.format": "PDF or DOCX (max 10MB)",
    "contact.form.submit": "Submit",
    "contact.form.submitting": "Submitting...",
    "contact.form.confidentiality": "All enquiries are treated confidentially.",

    "contact.next.badge": "Next Steps",
    "contact.next.title": "What Happens Next",
    "contact.next.description":
      "Our consulting team will review all enquiries and respond if there is a clear match with our specialist areas.",

    "contact.next.step1": "Review",
    "contact.next.step1.desc":
      "Our team will review your enquiry within 24-48 hours to understand your needs and requirements.",

    "contact.next.step2": "Initial Contact",
    "contact.next.step2.desc":
      "If there is a clear match, we will contact you to arrange an initial consultation and discuss your goals.",

    "contact.next.step3": "Proposal",
    "contact.next.step3.desc":
      "We will prepare a tailored proposal outlining our approach, schedule, and how we can support your objectives.",

    "contact.urgent": "Need urgent assistance? Please contact us directly",

    // Add more translations as needed
  },
  zh: {
    // Header
    "nav.home": "首页",
    "nav.services": "服务",
    "nav.expertise": "专业知识",
    "nav.whyicr": "为什么选择ICR",
    "nav.about": "关于",
    "nav.careers": "职业",
    "nav.contact": "联系",
    "nav.menu": "菜单",
    "nav.language": "语言",

    // Languages
    "lang.english": "English",
    "lang.chinese": "中文",
    "lang.arabic": "العربية",

    // Home page - Hero Section
    "home.hero.title": "将证据转化为",
    "home.hero.subtitle": "自信决策",
    "home.hero.description":
      "Insight Consultancy & Research（ICR）是一家独立的智库咨询机构，专注于以研究为基础的咨询服务与循证决策支持。",
    "home.hero.description2":
      "我们在复杂环境中设计并交付严谨的证据与清晰的分析，为战略、运营及政策决策提供有力支持。",

    // Home page - Feature Cards
    "home.feature.research": "研究",
    "home.feature.research.desc":
      "以严谨、客观的方法论为基础，专为现实世界中的决策需求而设计。",
    "home.feature.insight": "洞察",
    "home.feature.insight.desc":
      "在具体情境中对证据进行清晰解读，提供有深度的理解。",
    "home.feature.clarity": "战略清晰度",
    "home.feature.clarity.desc":
      "为领导者和利益相关方提供可直接用于决策的指导建议。",

    // Home page - CTA Buttons
    "home.cta.discuss": "垂询您的研究或评估议程",
    "home.cta.services": "探索我们的服务",

    // Home page - Expertise Section
    "home.expertise.title": "我们的专业领域",
    "home.expertise.description":
      "我们提供量身定制的研究与咨询服务，旨在支持战略规划、政策制定以及组织发展。",
    "home.expertise.market": "市场与社会研究",
    "home.expertise.market.desc":
      "生成数据与洞察，帮助理解市场、社区及利益相关方。",
    "home.expertise.advisory": "战略咨询",
    "home.expertise.advisory.desc":
      "通过分析与前瞻研究，支持科学、理性的决策制定。",
    "home.expertise.monitoring": "监测与评估",
    "home.expertise.monitoring.desc": "评估项目与计划的绩效、影响力及有效性。",
    "home.expertise.data": "数据分析与报告",
    "home.expertise.data.desc": "将复杂数据转化为清晰、可执行的洞察成果。",

    // Home page - Why Choose ICR
    "home.why.title": "为什么选择洞察咨询与研究",
    "home.why.description":
      "我们帮助组织实现从证据到洞察，再从洞察到清晰、可论证的决策的转变。",
    "home.why.evidence": "以证据为基础的决策",
    "home.why.contextual": "情境化洞察",
    "home.why.monitoring": "持续监测",
    "home.why.practical": "实用的市场洞察",
    "home.why.strategic": "清晰的战略市场认知",
    "home.why.actionable": "可执行的战略方案",

    // Home page - ICR in Numbers
    "home.numbers.title": "ICR 数据概览",
    "home.numbers.interviews": "100,000+ 访谈执行量",
    "home.numbers.projects": "100+ 已交付项目",
    "home.numbers.experience": "55+ 年 团队综合执业经验",

    // Home page - Why Trust ICR
    "home.trust.title": "为什么各组织信任 ICR？",
    "home.trust.description":
      "我们的工作根植于严谨的方法论、高度的独立性，并始终以决策者的核心需求为导向。",
    "home.trust.delivery": "证据引领的交付标准",
    "home.trust.engagement": "决策导向的咨询项目",
    "home.trust.team": "资深的研究与顾问专家团队",

    // Home page - Final CTA
    "home.final.title": "携手共创未来",
    "home.final.description":
      "如果您需要独立的研究支持、项目评估或决策辅助，ICR 将凭借严密的证据与深度的洞见，协助您达成战略目标。",

    // Footer
    "footer.tagline": "深研 · 洞察 · 战略明晰",
    "footer.quicklinks": "快速链接",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.cookies": "Cookie 设置",

    // Services Page
    "services.hero.title": "探索我们的",
    "services.hero.subtitle": "专业服务",
    "services.hero.description":
      "我们的服务旨在通过严谨的研究、结构化分析以及面向决策的清晰成果，支持复杂环境下的关键决策。",

    "services.why.title": "为什么选择 Insight Consultancy & Research (ICR)",
    "services.why.description":
      "在 ICR，我们致力于协助组织实现从 ''证据''走向''洞察''，并将洞察转化为清晰、经得起推敲的决策方案。",

    "services.quantitative.title": "定量研究 (Quantitative Research)",
    "services.quantitative.desc":
      "运用科学的问卷设计、建模与分析技术，生成稳健、可验证的证据，为战略、运营及公共政策制定提供规模化支持。",

    "services.qualitative.title": "定性研究 (Qualitative Research)",
    "services.qualitative.desc":
      "通过深度访谈及系统化定性方法，拆解行为背后的认知逻辑与情境因素，为结果解读与决策判断提供背景支撑。",

    "services.tracking.title": "追踪研究 (Tracking Studies)",
    "services.tracking.desc":
      "构建持续性的监测框架，长期追踪指标变化，精准识别新兴趋势并支持纵向洞察。",

    "services.retail.title": "零售与购物者研究 (Retail & Shopper Research)",
    "services.retail.desc":
      "基于结构化的线下审计与实地观察研究，在真实商业生态中获取一手可靠数据。",

    "services.market.title":
      "市场评估与机会分析 (Market Assessments & Opportunity Analysis)",
    "services.market.desc":
      "开展市场规模评估、细分研究及对标分析，为复杂市场中的战略优先级、进入路径及投资决策提供依据。",

    "services.strategic.title": "战略咨询 (Strategic Consulting)",
    "services.strategic.desc":
      "提供研究导向的咨询与决策支持服务，将研究结论转化为清晰的决策选项、影响分析与管理层建议。",

    "services.process.title": "五步卓越流程",
    "services.process.description":
      "我们将严谨的方法论与实践经验深度融合，确保每一项研究都能切实支撑高层决策。",

    "services.process.step1": "明确决策目标",
    "services.process.step1.desc": "在项目启动阶段清晰界定决策需求与核心问题。",

    "services.process.step2": "结构化交付",
    "services.process.step2.desc":
      "依托标准化流程与严密的质量控制体系确保执行质量。",

    "services.process.step3": "持续监督与校验",
    "services.process.step3.desc":
      "在项目全程进行方法论与数据的持续验证与把控。",

    "services.process.step4": "可执行型成果输出",
    "services.process.step4.desc":
      "提供面向决策、清晰易读且具备实效性的研究报告。",

    "services.process.step5": "规范化项目治理",
    "services.process.step5.desc":
      "确保项目范围、流程与成果完全符合客户、监管及利益相关方的要求。",

    "services.cta.discuss": "垂询您的研究或评估需求",
    "services.cta.request": "开启专业咨询",

    // Careers Page
    "careers.hero.title": "加入 ICR：",
    "careers.hero.subtitle": "共筑明策",
    "careers.hero.description":
      "在ICR，我们坚信：卓越洞察，始于人才。我们始终在寻找深思熟虑、充满好奇心，并渴望投身于产生真实影响力工作的专业人士。",

    "careers.why.title": "直面挑战 · 顶尖同僚 · 卓越成长",
    "careers.why.description":
      "在 ICR，您不仅仅是在完成一项工作 —而是在参与影响各行业、跨地区真实决策的进程。",

    "careers.purpose.title": "使命驱动，创造价值",
    "careers.purpose.desc":
      "协助领先品牌通过研究、洞察与战略应对商业挑战，创造与众不同的影响力。",

    "careers.collaborative.title": "协同共创，灵感共享",
    "careers.collaborative.desc":
      "与由研究员、顾问和分析师组成的区域团队紧密协作。在这里，我们分享的是灵感，而非仅仅是任务。",

    "careers.learning.title": "终身学习，进阶成长",
    "careers.learning.desc":
      "通过实战经验、导师指导和系统化的职业发展规划，不断精进您的专业技能。",

    "careers.regional.title": "区域视野",
    "careers.regional.desc":
      "深度参与沙特阿拉伯、海湾阿拉伯国家合作委员会 (GCC) 及中东和北非 (MENA) 地区的项目——从本土品牌发布到跨市场研究。",

    "careers.flexible.title": "灵活开放，结果导向",
    "careers.flexible.desc":
      "我们关注成果，而非刻板规则。鼓励担当，尊重创意，并在一个强调适应力的空间内工作。",

    "careers.impact.title": "深远影响，驱动变革",
    "careers.impact.desc":
      "您的工作将塑造真正的决策——从产品发布到战略转型。我们不只是收集数据，我们指引行动。",

    "careers.form.title": "期待您的加入",
    "careers.form.description":
      "我们渴望听到您的声音。请通过下方表格提交您的简历。我们会认真评估每一份申请，并将优秀的候选人纳入人才储备库。",

    "careers.form.name": "姓名",
    "careers.form.email": "电子邮箱",
    "careers.form.phone": "联系电话",
    "careers.form.position": "意向领域或职位",
    "careers.form.resume": "上传简历",
    "careers.form.cover": "求职信或留言（选填）",
    "careers.form.submit": "即刻开启职业新篇章",

    "careers.process.title": "我们的人才筛选流程",
    "careers.process.description": "",

    "careers.process.review": "简历评估",
    "careers.process.review.desc":
      "我们会根据职位的契合度与过往经验对简历进行初步评估。",

    "careers.process.screening": "初步甄选",
    "careers.process.screening.desc":
      "入围的候选人将受邀进行简短的电话或视频沟通。",

    "careers.process.interviews": "深度面谈",
    "careers.process.interviews.desc":
      "您将与相关的团队负责人及管理层进行 1-2 轮面试。",

    "careers.process.final": "综合评审",
    "careers.process.final.desc":
      "在发出正式录用通知前，我们将对专业技能、团队契合度及文化一致性进行最终评估。",

    "careers.process.offer": "录用与入职",
    "careers.process.offer.desc":
      "获选候选人将收到正式的录用通知及详细的入职计划。",

    // About Page
    "about.hero.title": "关于Insight Consultancy Research",
    "about.hero.subtitle": "我们是谁",
    "about.hero.description1":
      "Insight Consultancy & Research（ICR）是一家独立的智库咨询机构，专注于以研究为基础的咨询服务与循证决策支持。",
    "about.hero.description2":
      "在面对复杂环境中的决策时，我们提供及时的、可验证的专业分析，服务于政策制定、战略决策与执行评估。",
    "about.hero.description3":
      "我们不预设结论，而是通过事实分析与客观评估，支持决策者形成稳健、理性的决策判断。",
    "about.cta.discuss": "欢迎与我们沟通您的具体需求。",

    "about.positioning.title": "我们的定位",
    "about.positioning.desc1": "ICR 立足于严谨研究与实际决策之间的交汇点。",
    "about.positioning.desc2":
      "我们作为值得信赖的分析合作伙伴，支持决策者在证据、情境与现实约束之间进行理性权衡，应对高风险、高复杂度的环境。",
    "about.positioning.desc3":
      "我们有意识地保持清晰而专注的业务边界，以研究、分析与咨询支持为核心，将证据转化为清晰、可执行的决策认知。",
    "about.positioning.desc4":
      "这一定位使我们能够在所有项目中保持独立性、方法论的严谨性，以及以结果为导向的工作方式。",

    "about.integrity.title": "诚信与独立性",
    "about.integrity.desc1":
      "诚信是 ICR 一切工作的基础。\n我们在分析与建议过程中始终保持独立，确保研究结论由证据驱动，而非基于假设、立场或外部压力。",
    "about.integrity.desc2":
      "为此，我们建立了完善的管理与质量控制体系，以保障研究的客观性、数据与信息的机密性，以及研究方法在各类项目中的一致性与可靠性。",

    "about.experience.title": "跨越行业与制度壁垒",
    "about.experience.desc1":
      "ICR 在多个行业与制度环境中为各类组织提供研究与分析支持，服务对象包括政府部门、私营企业及国际机构。",
    "about.experience.desc2":
      "尽管各项目背景不同，我们的工作始终建立在对本地现实的深入理解、对关键利益相关方的准确判断，以及对具体决策环境的充分认知之上。",
    "about.experience.desc3":
      "我们坚持情境化分析，不套用通用模型，而是根据实际决策场景调整研究视角与分析框架。",

    "about.future.title": "未来发展与展望",
    "about.future.desc1":
      "随着决策环境日益复杂、数据资源持续增长，对结构化、负责任且透明的分析需求不断提升。",
    "about.future.desc2":
      "ICR 将持续优化研究工具与方法，同时坚守独立性、严谨性与清晰性的核心原则。",
    "about.future.desc3":
      "我们的目标始终如一：洞观浮像，智启未来，在变化的世界里，作您可靠的伙伴。",

    "about.clients.title": "我们如何与客户合作",
    "about.clients.description":
      "以您的需求为起点，贯穿全流程协作，交付可直接应用的研究成果。",
    "about.clients.subtitle":
      "我们重视建立基于信任、透明与稳定交付的长期合作关系，具体体现在：",

    "about.clients.approach1": "在数据采集前对研究问题进行充分、审慎的界定",
    "about.clients.approach2":
      "在项目过程中保持持续沟通，确保研究方向与决策需求保持一致",
    "about.clients.approach3":
      "提供以支持决策为目标的结构化成果，而不仅仅是研究报告本身",

    "about.research.insight":
      "RESEARCH · INSIGHT · STRATEGIC CLARITY深研 · 洞察 · 战略明晰",

    // Expertise Page
    "expertise.hero.title": "我们的专业领域",
    "expertise.hero.description1":
      "在 Insight Consultancy & Research (ICR)，我们的专业核心在于通过严谨的研究与分析，支持公共、企业及国际领域的复杂决策。",
    "expertise.hero.description2":
      "我们将深厚的行业知识、严密的方法论以及前沿的分析能力相结合，致力于解决战略、运营及政策层面的核心挑战。",
    "expertise.hero.description3":
      "我们的方法论将成熟的研究实践与现代分析工具（包括负责任地应用 AI 技术）深度融合，以提升研究的精准度、执行效率及洞察深度。",
    "expertise.cta.discuss": "垂询您的具体需求",

    "expertise.government.title": "政府与公共部门项目",
    "expertise.government.desc1":
      "我们拥有支持政府及公共部门实体的深厚经验，提供包括研究、评估及顾问咨询在内的全方位服务。",
    "expertise.government.desc2":
      "我们的工作深刻体现了对治理框架、问责要求以及实证支撑（以应对公众与监管审查）的理解。",
    "expertise.government.includes": "核心服务包括：",
    "expertise.government.item1": "政策研究与项目监测",
    "expertise.government.item2": "公共服务绩效评估",
    "expertise.government.item3": "利益相关者与受益人研究",
    "expertise.government.item4": "旨在驱动政策与项目优化的影响评估研究",

    "expertise.corporate.title": "企业与市场导向专业服务",
    "expertise.corporate.desc1":
      "除公共部门外，我们也为在复杂竞争环境中运营的企业组织提供专业支持。",
    "expertise.corporate.desc2":
      "我们的洞察协助组织精准把握市场动态、消费者行为及运营表现，为战略规划和投资决策提供科学依据。",
    "expertise.corporate.includes": "核心服务包括",
    "expertise.corporate.item1": "市场与机会评估",
    "expertise.corporate.item2": "消费者与购物者研究",
    "expertise.corporate.item3": "品牌表现追踪",
    "expertise.corporate.item4": "市场准入与竞争分析",

    "expertise.methodological.title": "方法论与分析优势",
    "expertise.methodological.desc1":
      "我们的专业能力建立在定量、定性及混合研究方法的强大实力之上。",
    "expertise.methodological.desc2":
      "每一项研究均紧密结合决策情境量身定制，确保方法适配、数据可靠且逻辑明晰。",
    "expertise.methodological.includes": "技术专长包括",
    "expertise.methodological.item1": "大规模定量调查",
    "expertise.methodological.item2": "定性访谈与焦点小组",
    "expertise.methodological.item3": "纵向追踪研究框架",
    "expertise.methodological.item4": "跨多源数据的综合分析",

    "expertise.ai.title": "人工智能在研究流程中的应用",
    "expertise.ai.desc1":
      "我们在研究与分析流程中引入 AI 赋能工具，以提升效率、确保一致性并增强洞察生成能力。",
    "expertise.ai.desc2":
      "这些工具的应用始终处于严密的方法论监督与人类专业判断之下。",
    "expertise.ai.includes": "应用场景包括：",
    "expertise.ai.item1": "AI 支持的数据准备与清洗",
    "expertise.ai.item2": "模式识别与趋势分析",
    "expertise.ai.item3": "文本与定性数据处理",
    "expertise.ai.item4": "结合专家审核的 AI 辅助分析建模",

    "expertise.decision.title": "决策导向型应用",
    "expertise.decision.desc1":
      "在所有专业领域中，我们的工作始终以决策为指引。",
    "expertise.decision.desc2":
      "我们优先考虑洞察的明晰性、相关性与实际应用价值，确保产出成果能够直接呈递至高层管理者，并与组织战略目标高度对齐。",
    "expertise.decision.includes": "交付成果包括：",
    "expertise.decision.item1": "政策制定与项目评估支持",
    "expertise.decision.item2": "战略优先级排序与投资规划建议",
    "expertise.decision.item3": "面向管理层的决策就绪型报告与建议",

    "expertise.closing.title": "结语",
    "expertise.closing.desc1":
      "我们的专业水准体现了行业知识、严谨方法与分析创新的完美平衡。",
    "expertise.closing.desc2":
      "通过将政府与企业项目的丰富经验与先进研究能力相结合，我们协助各组织做出明智、自信且经得起推敲的决策。",
    "expertise.closing.item1": "行业知识与严谨方法论",
    "expertise.closing.item2": "分析创新与整合洞察",
    "expertise.closing.item3": "面向高层的决策就绪型交付",

    "expertise.final.title": "让我们共同探讨如何助力您的目标",
    "expertise.final.cta": "探索我们的服务",

    // Why ICR Page
    "whyicr.hero.title": "将研究转化为战略增长",
    "whyicr.hero.description":
      "ICR 不止于数据。 我们通过精准的研究、实操性的洞察以及战略建议，与您深度协作，共同驱动卓越的商业成果。",
    "whyicr.cta.discuss": "垂询您的战略议程",
    "whyicr.cta.services": "探索我们的专业服务",

    "whyicr.partnerships.title": "战略合作伙伴关系",
    "whyicr.partnerships.desc":
      "我们不只是执行单次项目，更是您的战略盟友。ICR 负责管理研究合作关系，优化供应商沟通，并确保所有洞察均与您的企业 KPI 深度挂钩。",

    "whyicr.marketing.title": "营销战略支持",
    "whyicr.marketing.desc":
      "我们协助您将洞察转化为行动，赋能战略决策。从品牌定位到市场准入规划，我们专注于可衡量的战术落地，确保成果产出。",

    "whyicr.retail.title": "零售审计专长",
    "whyicr.retail.desc":
      "我们助力您最大化零售审计项目的价值。在每一个阶段，我们都致力于提升研究质量、响应速度以及结论的可执行性。",

    "whyicr.agency.title": "代理机构协调",
    "whyicr.agency.desc":
      "我们作为您的官方联络人，直接管理各类代理机构的沟通，旨在缩短响应时间并确保问题得到快速解决。",

    "whyicr.accuracy.title": "数据精准性",
    "whyicr.accuracy.desc":
      "我们的专家负责验证并强化数据的覆盖面与一致性。让您在每一次决策时，都能完全信赖数据背后的事实。",

    "whyicr.analytics.title": "高级分析",
    "whyicr.analytics.desc":
      "我们运用统计学方法与建模技术，深挖隐藏在零售数据背后的模式与核心洞察。",

    "whyicr.reporting.title": "实效性报告",
    "whyicr.reporting.desc":
      "拒绝繁文缛节。我们仅提供聚焦重点、面向决策的成果产出，协助您的团队快速反应并高效执行。",

    "whyicr.process.title": "工作流程：从洞察到行动",
    "whyicr.process.description":
      "我们遵循化繁为简、行之有效的工作方法，确保研究成果能够无缝对接战略执行：",

    "whyicr.process.step1": "01 深度理解",
    "whyicr.process.step1.desc": "明晰决策背景、业务目标及证据需求。",

    "whyicr.process.step2": "02 严谨研究",
    "whyicr.process.step2.desc": "开展结构化的实地管理与质量保证。",

    "whyicr.process.step3": "03 策略研判",
    "whyicr.process.step3.desc": "通过持续监测与验证，确保数据完整性。",

    "whyicr.process.step4": "04 决策支持",
    "whyicr.process.step4.desc":
      "提供聚焦于业务启示与行动建议的决策就绪型报告。",

    "whyicr.industries.title": "我们服务的行业与领域：",
    "whyicr.industries.description": "",

    "whyicr.industry.consumer": "消费品 (FMCG/Consumer Goods)",
    "whyicr.industry.healthcare": "医疗与制药 (Healthcare & Pharma)",
    "whyicr.industry.telecom": "电信与科技 (Telecom & Tech)",
    "whyicr.industry.automotive": "汽车 (Automotive)",
    "whyicr.industry.media": "媒体与娱乐 (Media & Entertainment)",

    "whyicr.success.title": "我们的成功基石",
    "whyicr.success.description": "ICR 的价值源自于以下六大核心优势：",

    "whyicr.success.relationships": "深厚的客户伙伴关系",
    "whyicr.success.expertise": "本土市场专长",
    "whyicr.success.innovation": "持续的创新能力",
    "whyicr.success.tools": "智能分析工具",
    "whyicr.success.process": "洞察引领的专业流程",
    "whyicr.success.talent": "资深的研究专家人才",

    // Contact Page
    "contact.hero.title": "让我们讨论",
    "contact.hero.subtitle": "您的需求",
    "contact.hero.description1":
      "无论您是在规划研究、评估市场，还是寻求研究或顾问支持，我们的团队随时准备与您讨论需求，并协助您做出明智的决策。",
    "contact.hero.description2":
      "我们与公共部门机构、企业组织和国际利益相关方合作。",
    "contact.cta.discuss": "讨论您的需求",
    "contact.cta.services": "探索我们的服务",

    "contact.getintouch.title": "立即开启专业咨询",
    "contact.email.title": "电子邮箱",
    "contact.email.desc": "通用查询、项目讨论及合作伙伴意向请发送邮件至：",
    "contact.social.title": "关注我们",

    "contact.form.name": "姓名",
    "contact.form.email": "电子邮箱",
    "contact.form.company": "公司名称",
    "contact.form.message": "留言内容",
    "contact.form.upload": "上传简介（选填）",
    "contact.form.upload.instruction": "点击上传或将文件拖拽至此",
    "contact.form.upload.note":
      "您可以上传项目简介、职责范围 (TOR) 或背景文档以支持您的咨询。",
    "contact.form.upload.format": "PDF 或 DOCX（最大 10MB）",
    "contact.form.submit": "提交",
    "contact.form.submitting": "提交中...",
    "contact.form.confidentiality": "所有咨询内容将严格保密。",

    "contact.next.badge": "后续步骤",
    "contact.next.title": "后续流程",
    "contact.next.description":
      "我们的咨询团队会审核所有咨询，并在与我们的专业领域明确匹配时予以回复。",

    "contact.next.step1": "评估审核",
    "contact.next.step1.desc":
      "我们的团队会在 24-48 小时内审核您的咨询，以了解您的需求和要求。",

    "contact.next.step2": "初步对接",
    "contact.next.step2.desc":
      "如果明确匹配，我们会联系您安排初步咨询，讨论您的目标。",

    "contact.next.step3": "方案建议",
    "contact.next.step3.desc":
      "我们会准备量身定制的提案，概述我们的方法、时间表以及如何支持您的目标。",

    "contact.urgent": "需要紧急协助？请直接联系",

    // Add more translations as needed
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.expertise": "مجالات الخبرة",
    "nav.whyicr": "لماذا ICR",
    "nav.about": "من نحن",
    "nav.careers": "الوظائف",
    "nav.contact": "تواصل معنا",
    "nav.menu": "القائمة",
    "nav.language": "اللغة",

    // Languages
    "lang.english": "English",
    "lang.chinese": "中文",
    "lang.arabic": "العربية",

    // Home page - Hero Section
    "home.hero.title": "تحويل الأدلة إلى",
    "home.hero.subtitle": "قرارات استراجية واثقة",
    "home.hero.description":
      "شركة Insight للاستشارات والبحوث (ICR) هي شركة مستقلة متخصصة في الأبحاث والاستشارات، تقدم الدعم للجهات الحكومية، والقطاع الخاص، والمنظمات الدولية من خلال أبحاث وتقييمات ورؤى تحليلية موجهة لدعم عملية اتخاذ القرار.",
    "home.hero.description2":
      "نقوم بتصميم وتنفيذ دراسات وأدلة بحثية محكمة وتحليلات دقيقة لدعم القرارات الاستراتيجية والتشغيلية وصنع السياسات العامة في بيئات عمل معقدة ومتغيرة.",

    // Home page - Feature Cards
    "home.feature.research": "البحوث",
    "home.feature.research.desc":
      "منهجيات بحثية علمية دقيقة وموضوعية، مصممة خصيصاً لدعم اتخاذ القرار في سياق عملي وموضوعي.",
    "home.feature.insight": "الرؤى التحليلية",
    "home.feature.insight.desc":
      "تحليل وتفسير منهجي للأدلة يستند إلى فهم عميق للسياق المؤسسي والاقتصادي والاجتماعي.",
    "home.feature.clarity": "الوضوح الاستراتيجي",
    "home.feature.clarity.desc":
      "تقديم إرشادات استراتيجية واضحة وقابلة للتنفيذ، تدعم متخذي القرار وأصحاب المصلحة على مختلف المستويات.",

    // Home page - CTA Buttons
    "home.cta.discuss": "ناقش متطلباتكم",
    "home.cta.services": "استعرض خدماتنا",

    // Home page - Expertise Section
    "home.expertise.title": "خبراتنا",
    "home.expertise.description":
      "في شركة Insight للاستشارات والبحوث (ICR)، نقدم خدمات بحثية واستشارية متخصصة ومصممة وفق احتياجات كل عميل، بما يدعم التخطيط الاستراتيجي، وتطوير السياسات، وتعزيز النمو المؤسسي المستدام.",
    "home.expertise.market": "أبحاث السوق والأبحاث الاجتماعية",
    "home.expertise.market.desc":
      "إنتاج وتحليل البيانات لفهم الأسواق والمجتمعاتوالطراف المعنية، بما يسهم في صياغة قرارات قائمة على أسس علمية راسخة.",
    "home.expertise.advisory": "الاستشارات الاستراتيجية",
    "home.expertise.advisory.desc":
      "تقديم المشورة الاستراتيجية المبنية على التحليل المتقدم والتخطيط المستقبلي لدعم القرارات المؤسسية.",
    "home.expertise.monitoring": "المتابعة والتقييم",
    "home.expertise.monitoring.desc":
      "تقييم الأداء وقياس الأثر وفعالية البرامج والمبادرات وفق أطر منهجية ومعايير معتمدة.",
    "home.expertise.data": "تحليل البيانات وإعداد التقارير",
    "home.expertise.data.desc":
      "تحويل البيانات المعقدة إلى تقارير تحليلية واضحة ورؤى قابلة للتنفيذ لدعم متخذي القرار.",

    // Home page - Why Choose ICR
    "home.why.title": "لماذا تختار Insight للاستشارات والبحوث",
    "home.why.description":
      "نُمكّن المؤسسات من الانتقال المنهجي من الأدلة إلى الرؤى التحليلية، ومن ثم إلى قرارات واضحة ومدعومة وقابلة للتوثيق والمراجعة.",
    "home.why.evidence": "قرارات مبنية على الأدلة",
    "home.why.contextual": "رؤى تحليلية قائمة على قراءة السياق العام",
    "home.why.monitoring": "متابعة وتقييم على نحو مستمر و منهجي.",
    "home.why.practical": "رؤى تسوقية و تطبيقية.",
    "home.why.strategic": "وضوح استراتيجي للأسواق",
    "home.why.actionable": "استراتيجيات عملية قابلة للتنفيذ",

    // Home page - ICR in Numbers
    "home.numbers.title": "ICR بالأرقام",
    "home.numbers.interviews": "أكثر من 100,000 مقابلة منفذة",
    "home.numbers.projects": "أكثر من 100 مشروع تم تنفيذه",
    "home.numbers.experience":
      "فريق عمل يتمتع بحصيلة خبرات تمتد لأكثر من 55 عاماً",

    // Home page - Why Trust ICR
    "home.trust.title": "لماذا تحظى ICR بثقة المؤسسات",
    "home.trust.description":
      "تستند أعمالنا إلى أعلى مستويات الإلتزام بالمعايير والاستقلالية المهنية، مع تركيز واضح على تلبية احتياجات متخذي القرار.",
    "home.trust.delivery": "تنفيذ قائم على الأدلة والمنهجيات العلمية",
    "home.trust.engagement": "نماذج عمل مصممة لدعم اتخاذ القرار",
    "home.trust.team": "فريق بحثي واستشاري ذو خبرة محلية ودولية",

    // Home page - Final CTA
    "home.final.title": "لنعمل معاً",
    "home.final.description":
      "في حال حاجتكم إلى أبحاث مستقلة، أو دراسات تقييمية، أو دعم مؤسسي لاتخاذ القرار، فإن ICR تقدم لكم حلولاً قائمة على أدلة دقيقة ورؤى تحليلية واضحة.",

    // Footer
    "footer.tagline": "البحوث • الرؤى التحليلية • الوضوح الاستراتيجي",
    "footer.quicklinks": "روابط سريعة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.cookies": "إعدادات ملفات تعريف الارتباط",

    // Services Page
    "services.hero.title": "استكشف",
    "services.hero.subtitle": "خدماتنا",
    "services.hero.description":
      "تم تصميم خدماتنا لدعم القرارات المعقدة من خلال بحوث دقيقة، وتحليل منظم، ومخرجات واضحة وجاهزة لاتخاذ القرار.",

    "services.why.title": "لماذا تختار Insight للاستشارات والبحوث",
    "services.why.description":
      "في شركة Insight للاستشارات والبحوث (ICR)، نُمكّن المؤسسات من الانتقال من الأدلة إلى الرؤى التحليلية، ومن ثم إلى قرارات واضحة ومدعومة وقابلة للتبرير المؤسسي.",

    "services.quantitative.title": "البحوث الكمية",
    "services.quantitative.desc":
      "تصميم الاستبيانات، والنمذجة، وتقنيات التحليل الإحصائي لإنتاج أدلة قوية تدعم القرارات الاستراتيجية والتشغيلية وصنع السياسات على نطاق واسع.",

    "services.qualitative.title": "البحوث النوعية",
    "services.qualitative.desc":
      "مقابلات معمقة ومنهجيات نوعية لفهم السلوكيات والتصورات والعوامل السياقية الكامنة خلف النتائج المرصودة، بما يدعم التفسير وصنع القرار.",

    "services.tracking.title": "دراسات المتابعة البحثية",
    "services.tracking.desc":
      "أطر دراسات تتبعية مستمرة لمراقبة الأداء، ورصد الاتجاهات الناشئة، وتوفير رؤى تحليلية طويلة المدى.",

    "services.retail.title": "أبحاث التجزئة والمتسوقين",
    "services.retail.desc":
      "عمليات تدقيق ميدانية منظمة وأبحاث رقابية مصممة لإنتاج أدلة موثوقة من بيئات العمل الواقعية والسياقات التشغيلية.",

    "services.market.title": "تقييم الأسواق وتحليل الفرص",
    "services.market.desc":
      "تقييمات الأسواق، وتقسيم الفئات، والتحليل المقارن لدعم تحديد الأولويات، وصياغة الاستراتيجيات، واتخاذ قرارات الاستثمار في الأسواق ذات الطبيعة المعقدة.",

    "services.strategic.title": "الاستشارات الاستراتيجية",
    "services.strategic.desc":
      "خدمات استشارية ودعم اتخاذ القرار لتحويل نتائج الأبحاث إلى خيارات واضحة، وتأثيرات متوقعة، وتوصيات عملية لدعم القيادات المؤسسية.",

    "services.process.title": "منهجية عمل متكاملة من خمس مراحل",
    "services.process.description":
      "نجمع بين الانضباط المنهجي والخبرة العملية لتقديم أبحاث تدعم اتخاذ قرارات واثقة.",

    "services.process.step1": "قرارات واضحة",
    "services.process.step1.desc": "تحديد متطلبات القرار بوضوح منذ البداية.",

    "services.process.step2": "تنفيذ منظم",
    "services.process.step2.desc":
      "تنفيذ منظم مدعوم بإجراءات دقيقة لضمان الجودة.",

    "services.process.step3": "إشراف مستمر",
    "services.process.step3.desc": "تحقق ومتابعة مستمران طوال مراحل التنفيذ.",

    "services.process.step4": "تقارير قابلة للتنفيذ",
    "services.process.step4.desc": "تقارير واضحة وجاهزة لدعم اتخاذ القرار.",

    "services.process.step5": "إدارة التنفيذ",
    "services.process.step5.desc":
      "تنفيذ المشاريع ضمن أطر إدارية واضحة تلبي متطلبات العملاء والجهات التنظيمية وأصحاب المصلحة.",

    "services.cta.discuss": "مناقشة متطلبات البحث أو التقييم",
    "services.cta.request": "اطلب مناقشة مبدئية",

    // Careers Page
    "careers.hero.title": "انضم إلى فريق يحول",
    "careers.hero.subtitle": "البيانات إلى قرارات",
    "careers.hero.description":
      "في ICR، نؤمن بأن الرؤى تبدأ بالإنسان. نبحث دائماً عن مهنيين متميزين  يسعون إلى أداء عمل ذي قيمة وتأثير حقيقي.",

    "careers.why.title": "مشاريع حقيقية. كفاءات متميزة. نمو مهني له قيمة.",
    "careers.why.description":
      "في ICR، لن تؤدي وظيفة تقلدبة، بل ستسهم في أعمال تؤثر في قرارات حقيقية عبر مختلف القطاعات والمناطق.",

    "careers.purpose.title": "عمل قائم على الهدف",
    "careers.purpose.desc":
      "المساهمة في مساعدة علامات تجارية رائدة على مواجهة تحديات الأعمال من خلال البحث والرؤى والاستراتيجيات المؤثرة.",

    "careers.collaborative.title": "بيئة عمل مرنة",
    "careers.collaborative.desc":
      "العمل عن قرب مع فريق إقليمي من الباحثين والاستشاريين والمحللين الذين يتشاركون الأفكار، وليس فقط المهام.",

    "careers.learning.title": "تعلّم مستمر",
    "careers.learning.desc":
      "التطور من خلال الخبرة العملية، والتوجيه المهني، وبرامج تطوير منظمة تهدف إلى صقل مهاراتك.",

    "careers.regional.title": "خبرة إقليمية",
    "careers.regional.desc":
      "اكتساب خبرة عبر مشاريع في المملكة العربية السعودية ودول الخليج والشرق الأوسط وشمال أفريقيا، من الانطلاقات المحلية إلى الدراسات متعددة الأسواق.",

    "careers.flexible.title": "ثقافة عمل مرنة",
    "careers.flexible.desc":
      "نركز على النتائج لا على القواعد الجامدة، مع تشجيع المبادرة، ومشاركة الأفكار، والعمل في بيئة تقدّر المرونة.",

    "careers.impact.title": "نتائج ملموسة",
    "careers.impact.desc":
      "يسهم عملك في توجيه قرارات حقيقية، من إطلاق المنتجات إلى التحولات الاستراتيجية. نحن لا نجمع البيانات فقط، بل نوجّه العمل.",

    "careers.form.title": "نود الاستماع إليك",
    "careers.form.description":
      "استخدم النموذج أدناه لتقديم سيرتك الذاتية. نقوم بمراجعة جميع الطلبات والاحتفاظ بالملفات المؤهلة للفرص المستقبلية.",

    "careers.form.name": "الاسم الكامل",
    "careers.form.email": "البريد الإلكتروني",
    "careers.form.phone": "رقم الهاتف",
    "careers.form.position": "مجال الاهتمام / الوظيفة",
    "careers.form.resume": "تحميل السيرة الذاتية",
    "careers.form.cover": "رسالة تعريفية / ملاحظات (اختياري)",
    "careers.form.submit": "إرسال",

    "careers.process.title": "كيف نعالج طلب التوظيف",
    "careers.process.description": "خطوات واضحة من بدء التقديم حتى الاختيار.",

    "careers.process.review": "مراجعة السيرة الذاتية",
    "careers.process.review.desc":
      "نقوم بتقييم سيرتك الذاتية من حيث مدى ملاءمتها للوظيفة والخبرة.",

    "careers.process.screening": "الفرز المبدئي",
    "careers.process.screening.desc":
      "يتم التواصل مع المرشحين المدرجين في القائمة المختصرة لإجراء مقابلة هاتفية أو مرئية مبدئية.",

    "careers.process.interviews": "المقابلات",
    "careers.process.interviews.desc":
      "ستُجرى مقابلات مع مشرفي الفرق والمديرين المعنيين",

    "careers.process.final": "المراجعة النهائية",
    "careers.process.final.desc":
      "نقيّم المهارات ومدى الملاءمة والتوافق الثقافي قبل تقديم العرض.",

    "careers.process.offer": "العرض والتهيئة",
    "careers.process.offer.desc":
      "يحصل المرشحون المختارون على عرض رسمي وخطة تهيئة للانضمام.",

    // About Page
    "about.hero.title": "نبذة عن شركة Insight للاستشارات والبحوث",
    "about.hero.subtitle": "من نحن",
    "about.hero.description1":
      "شركة Insight للاستشارات والبحوث (ICR) هي شركة استشارية مستقلة متخصصة في الاستشارات القائمة على البحوث ودعم اتخاذ القرار المبني على الأدلة.",
    "about.hero.description2":
      "نعمل مع مؤسسات تعمل في بيئات معقدة وتتطلب رؤى واضحة لدعم السياسات والاستراتيجيات والتنفيذ.",
    "about.hero.description3":
      "لا يتمثل دورنا في الترويج لحلول جاهزة مسبقاً، بل نعمل على تمكين متخذي القرار من فهم الواقع العملي، وتقييم البدائل بموضوعية، والمضي قدماً بثقة.",
    "about.cta.discuss": "دعونا نطلع كيف يمكننا دعم أهدافكم",

    "about.positioning.title": "موقعنا الاستراتيجي",
    "about.positioning.desc1":
      "تتمركز ICR عند نقطة التقاء البحث الرصين مع متطلبات اتخاذ القرار العملي.",
    "about.positioning.desc2":
      "نعمل كشريك تحليلي موثوق لدعم القيادات التي يتعين عليها الموازنة بين الأدلة التناسق والقيود عند اتخاذ قرارات مصيرية.",
    "about.positioning.desc3":
      "نحرص على الحفاظ على نطاق عمل مركز يشمل البحث والتحليل والدعم الاستشاري الذي يحول الأدلة إلى نتائج واضحة قابلة للتنفيذ.",
    "about.positioning.desc4":
      "يتيح لنا ذلك الحفاظ على الاستقلالية والالتزام المنهجي المنهجية والتركيز على تحقيق النتائج في جميع مهامنا.",

    "about.integrity.title": "النزاهة والاستقلالية",
    "about.integrity.desc1":
      "تشكل النزاهة الأساس لجميع أعمال ICR، حيث نحافظ على الاستقلالية في التحليل والتوصيات، ونضمن أن تكون النتائج مبنية على الأدلة وليس على الافتراضات أو الضغوط الخارجية.",
    "about.integrity.desc2":
      "تم تصميم أطر الإدارة وإجراءات ضمان الجودة لدينا لحماية الموضوعية، والحفاظ على سرية البيانات، وضمان قوة المنهجية في جميع المشاريع.",

    "about.experience.title": "خبرة عبر سياقات متعددة",
    "about.experience.desc1":
      "قدمت ICR الدعم لمؤسسات تعمل في قطاعات وسياقات مؤسسية متنوعة، بما في ذلك الجهات الحكومية، والشركات الخاصة، وأصحاب المصلحة.",
    "about.experience.desc2":
      "ورغم اختلاف كل مهمة عن الأخرى، فإن أعمالنا تستند دائماً إلى فهم عميق للواقع المحلي، وديناميكيات أصحاب المصلحة، وبيئات اتخاذ القرار.",
    "about.experience.desc3":
      "وبدلاً من الترويج لأطر عامة، نقوم بتكييف منهجياتنا وتحليلاتنا وفق السياق المحدد الذي تُتخذ فيه القرارات.",

    "about.future.title": "نظرة إلى المستقبل",
    "about.future.desc1":
      "مع تزايد تعقيد بيئات اتخاذ القرار وتوفر البيانات بشكل أكبر، تكثر الحاجة إلى تحليلات منظمة ومسؤولة وشفافة.",
    "about.future.desc2":
      "تواصل ICR التزامها بتطوير أدواتها ونهجها، مع الحفاظ على مبادئها الأساسية المتمثلة في الاستقلالية الشفافية والوضوح.",
    "about.future.desc3":
      "ويظل تركيزنا منصباً على دعم المؤسسات في مواجهة حالات عدم اليقين واتخاذ قرارات مدروسة بثقة.",

    "about.clients.title": "كيف نعمل مع عملائنا",
    "about.clients.description":
      "نعمل عن قرب مع عملائنا طوال دورة حياة المهمة، بدءاً من الفهم الدقيق لاحتياجات القرار، وانتهاءً بمخرجات مصممة للاستخدام العملي.",
    "about.clients.subtitle":
      "نولي أهمية كبيرة للشراكة طويلة الأمد المبنية على الثقة والشفافية والالتزام بالتنفيذ المتسق.",

    "about.clients.approach1": "صياغة دقيقة للأسئلة قبل بدء جمع البيانات",
    "about.clients.approach2": "حوار مستمر لضمان الملاءمة والتوافق",
    "about.clients.approach3":
      "مخرجات منظمة تدعم اتخاذ القرار وليس مجرد إعداد التقارير",

    "about.research.insight": "البحوث • الرؤى التحليلية • الوضوح الاستراتيجي",

    // Expertise Page
    "expertise.hero.title": "خبراتنا",
    "expertise.hero.description1":
      "في شركة Insight للاستشارات والبحوث (ICR)، ترتكز خبراتنا على تقديم أبحاث وتحليلات دقيقة لدعم عمليات اتخاذ القرارات المعقدة في القطاعات الحكومية، والخاصة، والدولية.",
    "expertise.hero.description2":
      "نجمع بين المعرفة القطاعية، والانضباط المنهجي، والقدرات التحليلية المتقدمة لمعالجة التحديات الاستراتيجية والتشغيلية وتحديات السياسات العامة.",
    "expertise.hero.description3":
      "يعتمد منهج عملنا على دمج ممارسات البحث المعتمدة مع أدوات تحليل حديثة، بما في ذلك الاستخدام المسؤول للتقنيات المدعومة بالذكاء الاصطناعي، لتعزيز الدقة والكفاءة واستخلاص الرؤى التحليلية.",
    "expertise.cta.discuss": "ناقش متطلباتك",

    "expertise.government.title": "مشاريع القطاع الحكومي والعام",
    "expertise.government.desc1":
      "نمتلك خبرة واسعة في دعم الجهات الحكومية وقطاع الخدمة العامة من خلال مهام بحثية وتقييمية واستشارية متخصصة.",
    "expertise.government.desc2":
      "تعكس أعمالنا فهماً عميقاً لأطر الإداره، ومتطلبات الشفافية والمحاسبة ، والحاجة إلى أدلة قادرة على الثبات أمام التدقيق العام والتنظيمي.",
    "expertise.government.includes": "يشمل ذلك:",
    "expertise.government.item1": "سياسة البحوث ومتابعة البرامج",
    "expertise.government.item2": "تقييم أداء الخدمات العامة",
    "expertise.government.item3": "أبحاث أصحاب المصلحة والمستفيدين",
    "expertise.government.item4": "دراسة النتائج لدعم تحسين السياسات والبرامج",

    "expertise.corporate.title": "الخبرة في مجال الشركات والاسوق",
    "expertise.corporate.desc1":
      "إلى جانب عملنا مع القطاع العام، ندعم المؤسسات والشركات العاملة في بيئات تنافسية ومعقدة.",
    "expertise.corporate.desc2":
      "تساعد خبراتنا المؤسسات على فهم ديناميكيات الأسواق، وسلوك المستهلكين، والأداء التشغيلي، بما يدعم التخطيط الاستراتيجي وقرارات الاستثمار.",
    "expertise.corporate.includes": "يشمل ذلك:",
    "expertise.corporate.item1": "تقييم الأسواق والفرص",
    "expertise.corporate.item2": "أبحاث تسوقية عن المستهلكين والمتسوقين",
    "expertise.corporate.item3": "تتبع العلامات التجارية والأداء",
    "expertise.corporate.item4":
      "تحليل استراتيجيات دخول السوق وتقيم القدرة التنافسية",

    "expertise.methodological.title": "نقاط القوة في المنهجية والتحليلية",
    "expertise.methodological.desc1":
      "ترتكز خبراتنا على قدرات منهجية قوية تشمل الأساليب الكمية، والنوعية، والمختلطة.",
    "expertise.methodological.desc2":
      "يتم تصميم كل دراسة بما يتلاءم مع سياق القرار المستهدف، بما يضمن الملاءمة المنهجية، والموثوقية، والوضوح.",
    "expertise.methodological.includes": "يشمل ذلك:",
    "expertise.methodological.item1": "مسح البيانات بشكل واسع النطاق",
    "expertise.methodological.item2": "مقابلات نوعية ومجموعات التركيز",
    "expertise.methodological.item3": "أطر تتبع طويلة المدى",
    "expertise.methodological.item4": "تحليل متكامل عبر مصادر بيانات متعددة",

    "expertise.ai.title": "استخدام الذكاء الاصطناعي في العملية البحثية",
    "expertise.ai.desc1":
      "نُدرج أدوات مدعومة بالذكاء الاصطناعي ضمن عمليات البحث والتحليل لتعزيز الكفاءة والاتساق واستخلاص  النتائج.",
    "expertise.ai.desc2":
      "يتم تطبيق هذه الأدوات ضمن أطر منهجية واضحة وبإشراف بشري كامل.",
    "expertise.ai.includes": "يشمل ذلك:",
    "expertise.ai.item1": "إعداد وتنقيح البيانات بدعم من الذكاء الاصطناعي",
    "expertise.ai.item2": "تحديد الأنماط وتحليل الاتجاهات",
    "expertise.ai.item3": "معالجة النصوص والبيانات النوعية",
    "expertise.ai.item4":
      "نمذجة تحليلية مدعومة بالذكاء الاصطناعي مع مراجعة بشرية",

    "expertise.decision.title": "منصات رقمية لدعم أتخاذ القرار",
    "expertise.decision.desc1":
      "في جميع مجالات خبراتنا، يرتكز عملنا على تركيز واضح على دعم عملية اتخاذ القرار.",
    "expertise.decision.desc2":
      "نُعطي الأولوية للوضوح والتوافق والتطبيق العملي، بما يضمن أن تكون المخرجات مفهومة لكبار أصحاب المصلحة ومتوافقة مع الأهداف المؤسسية.",
    "expertise.decision.includes": "يشمل ذلك:",
    "expertise.decision.item1": "دعم تطوير السياسات وتقييم البرامج",
    "expertise.decision.item2":
      "تحديد الأولويات الاستراتيجية وتخطيط الاستثمارات",
    "expertise.decision.item3":
      "تقارير وتوصيات جاهزة للعرض على القيادات التنفيذية",

    "expertise.closing.title": "البيان الختامي",
    "expertise.closing.desc1":
      "تعكس خبراتنا توازناً بين المعرفة القطاعية، والدقة المنهجية، والابتكار التحليلي.",
    "expertise.closing.desc2":
      "ومن خلال الجمع بين الخبرة في المشاريع الحكومية والشركات الخاصة والقدرات البحثية المتقدمة، ندعم المؤسسات في اتخاذ قرارات مدروسة وواثقة.",
    "expertise.closing.item1": "معرفة قطاعية مقرونة بصرامة منهجية",
    "expertise.closing.item2": "ابتكار تحليلي ورؤى متكاملة",
    "expertise.closing.item3": "نتأئج جاهزة لدعم قرارات كبار أصحاب المصلحة",

    "expertise.final.title": "دعونا نطلع كيف يمكننا دعم أهدافكم",
    "expertise.final.cta": "تعرف على خدماتنا",

    // Why ICR Page
    "whyicr.hero.title": "توظيف البحاث لدعم النمو استراتيجي",
    "whyicr.hero.description":
      "تتجاوز ICR حدود جمع البيانات، حيث نعمل كشريك استراتيجي لدعم تحقيق نتائج أعمال أفضل من خلال أبحاث مركزة، ورؤى عملية، وتوصيات استراتيجية مدروسة.",
    "whyicr.cta.discuss": "دعونا نطلع كيف يمكننا دعم أهدافكم",
    "whyicr.cta.services": "تعرف على خدماتنا",

    "whyicr.partnerships.title": "شراكة استراتيجية",
    "whyicr.partnerships.desc":
      "نحن لا نعمل وفق منهجية المشاريع المؤقتة فقط، بل تعمل ICR كشريك استراتيجي طويل الأمد، حيث ندير البحوت وننسق مع الجهات المنفذة، ونضمن ارتباط الرؤى البحثية بمؤشرات الأداء الرئيسية لأعمالكم.",

    "whyicr.marketing.title": "دعم الاستراتيجية التسويقية",
    "whyicr.marketing.desc":
      "نساعد في صياغة الاستراتيجيات التسويقية من خلال تحويل الرؤى إلى خطوات عملية، بدءاً من تحدد موقع العلامة التجارية وصولاً إلى تخطيط دخول الأسواق، مع التركيز على مبادرات قابلة للقياس تحقق نتائج ملموسة.",

    "whyicr.retail.title": "خبرات تدقيق قطاع التجزئة",
    "whyicr.retail.desc":
      "نساعدكم على الاستفادة من برامج تدقيق قطاع التجزئة من خلال تحسين الجودة، وتسريع التنفيذ، وتعزيز قابلية تطبيق النتائج في كل مرحلة.",

    "whyicr.agency.title": "التنسيق بين الجهات المنفذة",
    "whyicr.agency.desc":
      "نقوم بدور حلقة الوصل مع الجهات المنفذة، وندير التواصل المباشر لتسريع الاستجابات وضمان معالجة التحديات بكفاءة.",

    "whyicr.accuracy.title": "دقة البيانات",
    "whyicr.accuracy.desc":
      "يتولى خبراؤنا التحقق من دقة البيانات وتعزيز شموليتها واتساقها، بما يضمن دقة النتائج في جميع الأوقات.",

    "whyicr.analytics.title": "تحليلات متطورة",
    "whyicr.analytics.desc":
      "نطبق تقنيات إحصائية ونماذج تحليلية متطورة لاستخلاص الأنماط والرؤى الكامنة في بيانات قطاع التجزئة.",

    "whyicr.reporting.title": "تقارير قابلة للتنفيذ",
    "whyicr.reporting.desc":
      "نقدم تقارير مركزة وجاهزة لاتخاذ القرار، دون تعقيد، بما يساعد فرقكم على سرعة التنفيذ وتحسين الأداء.",

    "whyicr.process.title": "كيف نعمل",
    "whyicr.process.description":
      "نتبع منهجية واضحة ومجربة لتحويل الرؤى إلى أفعال، بدءاً من تحديد النطاق والبحث، وصولاً إلى الاستراتيجية ودعم التنفيذ.",

    "whyicr.process.step1": "01 الفهم",
    "whyicr.process.step1.desc":
      "تحديد القرارات، والأهداف، ومتطلبات الأدلة بوضوح.",

    "whyicr.process.step2": "02 البحث",
    "whyicr.process.step2.desc":
      "إدارة ميدانية منظمة مدعومة بإجراءات منضبطة لضمان الجودة.",

    "whyicr.process.step3": "03 التخطيط الاستراتيجي",
    "whyicr.process.step3.desc": "متابعة مستمرة والتحقق من دقة البيانات.",

    "whyicr.process.step4": "04 الدعم",
    "whyicr.process.step4.desc":
      "تقارير جاهزة لاتخاذ القرار تركز على النتائج والخطوات التالية.",

    "whyicr.industries.title": "القطاعات التي نخدمها",
    "whyicr.industries.description":
      "نقدم خدماتنا لعملائنا في القطاعات التالية:",

    "whyicr.industry.consumer": "السلع الاستهلاكية",
    "whyicr.industry.healthcare": "الرعاية الصحية والصناعات الدوائية",
    "whyicr.industry.telecom": "الاتصالات والتقنية",
    "whyicr.industry.automotive": "قطاع السيارات",
    "whyicr.industry.media": "الإعلام والترفيه",

    "whyicr.success.title": "سبب نجحنا",
    "whyicr.success.description":
      "تقدم ICR قيمة مستدامة من خلال ست ركائز أساسية تقوم على الثقة، والرؤى التحليلية، والابتكار.",

    "whyicr.success.relationships": "علاقات قوية مع العملاء",
    "whyicr.success.expertise": "خبرة عميقة في الأسواق المحلية",
    "whyicr.success.innovation": "ابتكارات مستمرة",
    "whyicr.success.tools": "أدوات تحليلية تقنية متطورة",
    "whyicr.success.process": "منهجية قائمة على النتائج",
    "whyicr.success.talent": "كفاءات بحثية رفيعة المستوى",

    // Contact Page
    "contact.hero.title": "دعنا نناقش",
    "contact.hero.subtitle": "متطلباتك",
    "contact.hero.description1":
      "سواء كنت تخطط لدراسة، أو تقيم سوقاً، أو تبحث عن دعم بحثي أو استشاري، فإن فريقنا جاهز لمناقشة متطلباتك وكيف يمكننا دعم اتخاذ القرار المبني على المعرفة.",
    "contact.hero.description2":
      "نعمل مع الجهات الحكومية، والمؤسسات الخاصة، وأصحاب المصلحة الدوليين.",
    "contact.cta.discuss": "ناقش متطلباتك",
    "contact.cta.services": "اطّلع على خدماتنا",

    "contact.getintouch.title": "تواصل معنا",
    "contact.email.title": "البريد الإلكتروني",
    "contact.email.desc": "للاستفسارات العامة، مناقشة المشاريع، وفرص الشراكة:",
    "contact.social.title": "تابعنا",

    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.company": "الشركة",
    "contact.form.message": "الرسالة",
    "contact.form.upload": "ارفع ملخص المشروع (اختياري)",
    "contact.form.upload.instruction": "اضغط للرفع أو اسحب وأفلت الملف",
    "contact.form.upload.note":
      "يمكنك رفع ملخص، أو نطاق العمل (TOR)، أو مستند خلفية لدعم استفسارك.",
    "contact.form.upload.format": "PDF أو DOCX (حد أقصى 10 ميجابايت)",
    "contact.form.submit": "إرسال",
    "contact.form.submitting": "جارٍ الإرسال...",
    "contact.form.confidentiality": "جميع الاستفسارات تُعامل بسرية تامة.",

    "contact.next.badge": "الخطوات التالية",
    "contact.next.title": "ماذا يحدث بعد ذلك",
    "contact.next.description":
      "تتم مراجعة جميع الاستفسارات من قبل فريقنا الاستشاري، ونقوم بالرد عندما يكون هناك توافق واضح مع خبراتنا.",

    "contact.next.step1": "المراجعة",
    "contact.next.step1.desc":
      "يقوم فريقنا بمراجعة استفسارك خلال 24-48 ساعة لفهم احتياجاتك ومتطلباتك.",

    "contact.next.step2": "التواصل الأولي",
    "contact.next.step2.desc":
      "إذا كان هناك توافق واضح، سنتواصل معك لجدولة استشارة أولية لمناقشة أهدافك.",

    "contact.next.step3": "المقترح",
    "contact.next.step3.desc":
      "نقوم بإعداد مقترح مخصص يوضح منهجيتنا، والجدول الزمني، وكيف يمكننا دعم أهدافك.",

    "contact.urgent": "هل تحتاج مساعدة عاجلة؟ تواصل معنا مباشرة على",

    // Add more translations as needed
  },
};
