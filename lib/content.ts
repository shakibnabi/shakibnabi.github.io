export const site = {
  name: "Shakib Nabi",
  fullName: "Shakib Mahmud Nabi",
  role: "Full-stack engineer & founder",
  location: "Dhaka · Remote worldwide",
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
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  greeting: "Hey — I'm",
  name: "Shakib Nabi",
  headline: "I build the messy parts of products so teams can ship with less drama.",
  support:
    "Web, mobile, and AI systems for startups that need someone who can own architecture, delivery, and the boring ops in between.",
  primaryCta: { label: "See selected work", href: "#work" },
  secondaryCta: { label: "Talk through a project", href: "#contact" },
  image: "/images/banner-01.jpg",
  imageAlt: "Portrait of Shakib Nabi",
} as const;

export const proof = [
  {
    label: "Managed MRR",
    value: "$143K+",
    note: "Across work with 9 startups",
  },
  {
    label: "Avg. ROI delivered",
    value: "3.7×",
    note: "With 217 clients over the years",
  },
  {
    label: "Projects shipped",
    value: "210+",
    note: "Teams in 15+ countries",
  },
  {
    label: "Years in the work",
    value: "10+",
    note: "Still hands-on in the code",
  },
] as const;

export const projects = [
  {
    title: "System Builder BD",
    blurb:
      "A custom PC builder and storefront where shoppers configure machines without fighting the catalog.",
    tag: "Web · eCommerce",
    image: "/images/systembuilder.png",
    href: "https://systembuilder.com.bd/",
  },
  {
    title: "Easy Bil Pay",
    blurb:
      "Fintech rails for utility bill payments — built for reliability when money and trust are on the line.",
    tag: "Startup · FinTech",
    image: "/images/easybilpay.png",
    href: "https://easybilpay.com/",
  },
  {
    title: "Wasgeurtje",
    blurb:
      "Premium fragrance commerce with a cleaner browse-to-buy path for a Netherlands brand.",
    tag: "Web · Retail",
    image: "/images/wasgeurtje.png",
    href: "https://wasgeurtje.nl",
  },
  {
    title: "Green University Alumni",
    blurb:
      "Alumni network tooling that keeps graduates connected without a clunky admin maze.",
    tag: "Web · Education",
    image: "/images/gubalumni.png",
    href: "https://alumni.easybilpay.com/",
  },
  {
    title: "Easy Bil Pay App",
    blurb:
      "Mobile companion for the same FinTech product — payments and status checks on the go.",
    tag: "App · FinTech",
    image: "/images/app-ebp-crop.jpg",
    href: null,
  },
  {
    title: "TaskiPro",
    blurb:
      "Ride booking flow for drivers and riders, focused on dispatch clarity over flashy chrome.",
    tag: "App · Mobility",
    image: "/images/app-taskipro-crop.jpg",
    href: null,
  },
] as const;

export const about = {
  eyebrow: "About",
  title: "Who I am when the deck is closed",
  roleLine: "Full-stack developer · AI engineer · business analyst",
  image: "/images/about.jpg",
  paragraphs: [
    "I'm a Computer Science & Engineering graduate from Daffodil International University. For more than a decade I've been shipping software that businesses actually depend on — web platforms, mobile apps, and the AI pieces that earn their keep.",
    "As founder and Vice President of Foxdos, and founding chairman of the Foxdos Foundation, I've led products that had to grow with real customers: cleaner systems, clearer decisions, fewer late-night fire drills.",
    "I care about measurable outcomes. High-performance architecture when it matters. AI when it removes busywork. Code that still makes sense when the next engineer inherits it.",
  ],
  links: [
    { label: "Hire on Upwork", href: site.upwork },
    { label: "Email me", href: `mailto:${site.email}` },
    { label: "WhatsApp", href: site.whatsapp },
  ],
} as const;

export const experience = [
  {
    company: "Grench",
    role: "Chief Executive Officer",
    place: "Bangladesh",
    dates: "2024 – Present",
    current: true,
    summary:
      "Running vision, strategy, and day-to-day execution for farm-to-market platforms. Built cross-functional teams across product, engineering, data, ops, and growth; shipped MVPs; and used AI-driven supply-chain and predictive work to cut waste and protect margins.",
  },
  {
    company: "Foxdos",
    role: "Vice President of Engineering",
    place: "Bangladesh",
    dates: "2018 – Present",
    current: true,
    summary:
      "Own product strategy, architecture, and delivery for web, mobile, and AI work for local and international clients. Hire and mentor 30+ engineers, keep platforms reliable, and drive initiatives like microservices migration, RAG features, PCI-aware payments, and CI/CD that actually gets used.",
  },
  {
    company: "FoodME",
    role: "Senior Software Engineer",
    place: "Australia",
    dates: "2024 – 2025",
    current: false,
    summary:
      "Scaled food ordering and delivery services, APIs, and integrations. Kept the Shopify store healthy, shipped a custom Shopify app, and handled infra, deploys, and ongoing support.",
  },
  {
    company: "CE Simple",
    role: "Full Stack Engineer",
    place: "United States",
    dates: "2023 – 2025",
    current: false,
    summary:
      "Led a LearnDash Pro migration to headless WordPress with a Next.js frontend. Built REST/GraphQL bridges, SSO, course-progress sync, enrollment webhooks, and performance work for client-ready scale.",
  },
  {
    company: "Codixen",
    role: "Software Engineer L2",
    place: "Bangladesh",
    dates: "2019 – 2023",
    current: false,
    summary:
      "Full-cycle SaaS and enterprise builds with an eye on maintainability and systems that don't collapse under growth.",
  },
] as const;

export const services = [
  {
    title: "Backend & APIs",
    description:
      "Solid services in Laravel, Node, Python, Go, and friends — auth, billing hooks, and APIs that stay boring under load.",
    icon: "server" as const,
  },
  {
    title: "SaaS & platforms",
    description:
      "Subscriptions, roles, dashboards, and the glue between them so your product can onboard without duct tape.",
    icon: "layers" as const,
  },
  {
    title: "Frontend & mobile",
    description:
      "React, Next.js, Vue, and React Native UIs that feel fast and stay readable for the next release cycle.",
    icon: "monitor" as const,
  },
  {
    title: "AI that earns its place",
    description:
      "LLM features, RAG pipelines, and automation when they cut real work — not when they just look impressive in a demo.",
    icon: "sparkles" as const,
  },
  {
    title: "Shopify & commerce",
    description:
      "Custom apps and themes when the default storefront isn't enough for how you actually sell.",
    icon: "shoppingBag" as const,
  },
  {
    title: "Cloud & delivery",
    description:
      "Deploy pipelines, observability basics, and infrastructure choices that keep Friday deploys uneventful.",
    icon: "cloud" as const,
  },
] as const;

export const skills = {
  title: "What I reach for",
  note: "Stacks change. Judgment doesn't. I stay current without chasing every shiny framework.",
  groups: [
    {
      title: "Backend",
      items: "Laravel, Node.js, Python, Django, FastAPI, Go, Spring Boot, .NET",
    },
    {
      title: "Frontend & mobile",
      items: "React, Next.js, Vue, React Native, Shopify apps & themes",
    },
    {
      title: "Data & infra",
      items: "PostgreSQL, MySQL, MongoDB, Redis, Firebase, Supabase, DynamoDB",
    },
    {
      title: "AI & product tools",
      items: "LLM integration, RAG, MCP workflows, Webflow, Framer, Figma",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "Got something in mind?",
  body: "Tell me what you're trying to ship. I'll help you pick the shape of the build — architecture, stack, and what to leave alone for now.",
  note: "I usually reply within 24 hours.",
  primary: { label: "WhatsApp me", href: site.whatsapp },
  secondary: { label: "Email me", href: `mailto:${site.emailAlt}` },
  tertiary: { label: "Hire on Upwork", href: site.upwork },
} as const;
