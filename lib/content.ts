export const site = {
  name: "Shakib Nabi",
  fullName: "Shakib Mahmud Nabi",
  role: "Full-Stack Engineer & Founder",
  location: "Dhaka, Bangladesh",
  remote: "Open to remote worldwide",
  availability: "Available for freelance & long-term builds",
  email: "shakibnabi@foxdosbd.com",
  emailAlt: "skbdevbd@gmail.com",
  whatsapp: "https://wa.me/8801781545752",
  upwork: "https://www.upwork.com/freelancers/~0158a02b1c82a3298d",
  siteUrl: "https://shakibnabi.github.io/",
  ogImage: "/images/about.jpg",
  socials: [
    { label: "GitHub", href: "https://github.com/shakibnabi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shakib-nabi/" },
    { label: "X", href: "https://x.com/nabishakib" },
    { label: "Facebook", href: "https://www.facebook.com/Shakibn" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~0158a02b1c82a3298d" },
  ],
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  greeting: "Hey, I'm",
  name: "Shakib",
  lastName: "Nabi",
  title: "Full-stack engineer, founder, and AI builder",
  headline:
    "I take messy product ideas and turn them into systems teams can ship, scale, and maintain.",
  support:
    "10+ years across web, mobile, SaaS, and AI — from architecture and APIs to the last deploy.",
  primaryCta: { label: "View selected work", href: "#work" },
  secondaryCta: { label: "Start a conversation", href: "#contact" },
  image: "/images/about.jpg",
  imageAlt: "Portrait of Shakib Nabi",
  banner: "/images/banner-01.jpg",
} as const;

export const marquee = [
  "Laravel",
  "Next.js",
  "React Native",
  "Node.js",
  "Python",
  "RAG / LLMs",
  "Shopify",
  "PostgreSQL",
  "Go",
  "FastAPI",
  "Vue",
  "AWS",
] as const;

export const proof = [
  { label: "Managed MRR", value: "$143K+", note: "9 startups supported" },
  { label: "Avg. ROI", value: "3.7×", note: "217 clients" },
  { label: "Projects", value: "210+", note: "15+ countries" },
  { label: "Experience", value: "10+", note: "Years hands-on" },
] as const;

export const projects = [
  {
    index: "01",
    title: "System Builder BD",
    blurb:
      "Custom PC builder and storefront — configuration, catalog, and checkout without the usual eCommerce friction.",
    outcome: "Production commerce platform for DIY PC buyers in Bangladesh.",
    tag: "Web · eCommerce",
    stack: ["Laravel", "MySQL", "Custom builder UX"],
    image: "/images/systembuilder.png",
    href: "https://systembuilder.com.bd/",
  },
  {
    index: "02",
    title: "Easy Bil Pay",
    blurb:
      "FinTech rails for utility bill payments where reliability and trust matter more than flashy screens.",
    outcome: "Live payment product used for everyday utility transactions.",
    tag: "Startup · FinTech",
    stack: ["Laravel", "APIs", "Payments"],
    image: "/images/easybilpay.png",
    href: "https://easybilpay.com/",
  },
  {
    index: "03",
    title: "Wasgeurtje",
    blurb:
      "Premium fragrance retail experience for a Netherlands brand — cleaner browse-to-buy path.",
    outcome: "Polished storefront for an international consumer brand.",
    tag: "Web · Retail",
    stack: ["eCommerce", "Theme work", "UX"],
    image: "/images/wasgeurtje.png",
    href: "https://wasgeurtje.nl",
  },
  {
    index: "04",
    title: "Green University Alumni",
    blurb:
      "Alumni network and management tooling without the usual admin maze.",
    outcome: "Alumni platform connecting graduates through a structured portal.",
    tag: "Web · Education",
    stack: ["Laravel", "Portal", "CMS"],
    image: "/images/gubalumni.png",
    href: "https://alumni.easybilpay.com/",
  },
  {
    index: "05",
    title: "Easy Bil Pay App",
    blurb:
      "Mobile companion for the FinTech product — payments and status checks on the go.",
    outcome: "Native-feeling mobile layer on top of the bill-pay backend.",
    tag: "App · FinTech",
    stack: ["React Native", "APIs", "FinTech"],
    image: "/images/app-ebp.jpg",
    href: null,
  },
  {
    index: "06",
    title: "TaskiPro",
    blurb:
      "Ride booking for drivers and riders — dispatch clarity over decorative chrome.",
    outcome: "Mobile booking flow focused on operational clarity.",
    tag: "App · Mobility",
    stack: ["React Native", "Realtime", "Maps"],
    image: "/images/app-taskipro.jpg",
    href: null,
  },
] as const;

export const about = {
  eyebrow: "About",
  title: "Engineer by trade. Founder by choice.",
  roleLine: "Full-Stack Developer · AI Engineer · Business Analyst",
  image: "/images/about.jpg",
  paragraphs: [
    "Computer Science & Engineering graduate from Daffodil International University. For more than a decade I've shipped software businesses actually run on — platforms, apps, and AI features that earn their place in production.",
    "As founder and Vice President of Foxdos, and founding chairman of the Foxdos Foundation, I've led products through growth: cleaner systems, clearer decisions, fewer fire drills.",
    "I care about measurable outcomes — architecture that holds up, AI that removes busywork, and code the next engineer can inherit without guessing.",
  ],
  education: {
    school: "Daffodil International University",
    degree: "B.Sc. in Computer Science & Engineering",
  },
  focus: [
    "SaaS architecture",
    "AI / RAG systems",
    "FinTech & payments",
    "Mobile products",
    "Shopify commerce",
    "Team leadership",
  ],
  links: [
    { label: "Hire on Upwork", href: site.upwork },
    { label: "Email", href: `mailto:${site.email}` },
    { label: "WhatsApp", href: site.whatsapp },
  ],
} as const;

export const experience = [
  {
    company: "Grench",
    role: "Chief Executive Officer",
    place: "Bangladesh",
    dates: "2024 — Present",
    current: true,
    highlights: [
      "Set vision, strategy, and day-to-day execution for farm-to-market digital platforms",
      "Led cross-functional teams across product, engineering, data, ops, and growth",
      "Shipped MVPs and used AI supply-chain work to cut waste and protect margins",
    ],
  },
  {
    company: "Foxdos",
    role: "Vice President of Engineering",
    place: "Bangladesh",
    dates: "2018 — Present",
    current: true,
    highlights: [
      "Owned architecture and delivery for web, mobile, and AI products for global clients",
      "Hired and mentored 30+ engineers; drove microservices, RAG features, and CI/CD",
      "Shipped PCI-aware payments and partnered on GTM and fundraising diligence",
    ],
  },
  {
    company: "FoodME",
    role: "Senior Software Engineer",
    place: "Australia",
    dates: "2024 — 2025",
    current: false,
    highlights: [
      "Scaled ordering and delivery backends, APIs, and third-party integrations",
      "Maintained Shopify storefront and shipped a custom Shopify app",
      "Owned infrastructure, deployments, and ongoing feature support",
    ],
  },
  {
    company: "CE Simple",
    role: "Full Stack Engineer",
    place: "United States",
    dates: "2023 — 2025",
    current: false,
    highlights: [
      "Migrated LearnDash Pro to headless WordPress with a Next.js frontend",
      "Built REST/GraphQL bridges, SSO, and course-progress syncing",
      "Automated enrollment webhooks and performance work for client scale",
    ],
  },
  {
    company: "Codixen",
    role: "Software Engineer L2",
    place: "Bangladesh",
    dates: "2019 — 2023",
    current: false,
    highlights: [
      "Delivered full-cycle SaaS and enterprise applications",
      "Focused on maintainability and systems that survive growth",
    ],
  },
] as const;

export const services = [
  {
    index: "01",
    title: "Backend & API engineering",
    description:
      "Laravel, Node, Python, Go, and more — auth, billing hooks, and APIs that stay boring under load.",
    icon: "server" as const,
  },
  {
    index: "02",
    title: "SaaS & platform builds",
    description:
      "Subscriptions, roles, dashboards, and the glue between them so onboarding doesn't need duct tape.",
    icon: "layers" as const,
  },
  {
    index: "03",
    title: "Frontend & mobile",
    description:
      "React, Next.js, Vue, and React Native — fast interfaces that stay readable next release.",
    icon: "monitor" as const,
  },
  {
    index: "04",
    title: "AI that earns its place",
    description:
      "LLM features, RAG pipelines, and automation when they cut real work — not just demo well.",
    icon: "sparkles" as const,
  },
  {
    index: "05",
    title: "Shopify & commerce",
    description:
      "Custom apps and themes when the default storefront can't match how you sell.",
    icon: "shoppingBag" as const,
  },
  {
    index: "06",
    title: "Cloud & delivery",
    description:
      "Pipelines, observability basics, and infra choices that keep Friday deploys quiet.",
    icon: "cloud" as const,
  },
] as const;

export const skills = {
  title: "Technical toolkit",
  note: "Stacks change. Judgment doesn't. I stay current without chasing every shiny framework.",
  groups: [
    {
      title: "Backend",
      items: [
        "Laravel",
        "Node.js",
        "Python",
        "Django",
        "FastAPI",
        "Go",
        "Spring Boot",
        ".NET",
      ],
    },
    {
      title: "Frontend & mobile",
      items: [
        "React",
        "Next.js",
        "Vue",
        "React Native",
        "MERN",
        "Shopify apps",
        "Webflow",
        "Framer",
      ],
    },
    {
      title: "Data & infra",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Firebase",
        "Supabase",
        "DynamoDB",
        "AWS",
      ],
    },
    {
      title: "AI & product",
      items: [
        "LLM integration",
        "RAG pipelines",
        "MCP workflows",
        "Automation",
        "Figma",
        "System design",
      ],
    },
  ],
} as const;

export const contact = {
  eyebrow: "Let's work",
  title: "Have a project in mind?",
  body: "Tell me what you're trying to ship. I'll help shape the architecture, stack, and what to leave alone for now.",
  note: "Typically replies within 24 hours · Dhaka · Remote worldwide",
  primary: { label: "WhatsApp", href: site.whatsapp },
  secondary: { label: "Email", href: `mailto:${site.emailAlt}` },
  tertiary: { label: "Upwork", href: site.upwork },
} as const;
