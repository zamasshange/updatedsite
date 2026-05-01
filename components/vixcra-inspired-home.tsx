"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, ChevronDown, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { servicesData } from "@/lib/services-data"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const brandStrip = [
  "UI/UX Design",
  "Web Development",
  "App Development",
  "Social Media Management",
  "Promo Videos",
  "Instagram Growth",
  "TikTok Marketing",
  "YouTube Growth",
  "Analytics & Insights",
  "Flutter",
  "Next.js",
]

const stats = [
  {
    value: "45K+",
    label: "Total Audience",
    title: "Organic digital reach",
    body: "Building trust through content systems, platform strategy, and consistent brand storytelling.",
  },
  {
    value: "30K+",
    label: "Instagram Followers",
    title: "Social proof that compounds",
    body: "A growing creator-led audience shaped by positioning, creative direction, and community management.",
  },
  {
    value: "150+",
    label: "Happy Clients",
    title: "Practical execution",
    body: "Design, development, content, and growth work delivered with a clear focus on outcomes.",
  },
  {
    value: "2007",
    label: "Born in Durban",
    title: "Self-taught from early",
    body: "A journey shaped by curiosity, resilience, technology, design, and a hunger to build meaningful work.",
  },
]

const expertise = ["Full-Stack Development", "UI/UX Design", "Video Production"]

const impactPoints = [
  "Clients across Africa, Europe, and beyond",
  "Growth-first strategy with measurable outcomes",
  "Creative direction aligned to brand positioning",
]

const journey = [
  {
    year: "2007",
    phase: "Early Days",
    title: "The Spark",
    description: "Discovered a passion for technology and design in humble beginnings, teaching myself to code and create.",
  },
  {
    year: "2016",
    phase: "Growth",
    title: "Building Foundation",
    description: "Spent countless hours mastering full-stack development, UI/UX principles, and video production techniques.",
  },
  {
    year: "2020",
    phase: "Breakthrough",
    title: "Finding My Voice",
    description: "Combined technical skills with creative vision to develop a unique approach to digital experiences.",
  },
  {
    year: "Now",
    phase: "Present",
    title: "Making Impact",
    description: "Working with clients worldwide, building a community of 45K+ followers, and pushing creative boundaries daily.",
  },
]

type ProjectCategory = "All" | "UI/UX" | "Web Dev" | "App Dev" | "Social" | "Video" | "Videography"

const projectCategories: ProjectCategory[] = ["All", "UI/UX", "Web Dev", "App Dev", "Social", "Video", "Videography"]

const projects = [
  {
    title: "Personal Brand Website",
    category: "Web Dev",
    price: "Next.js",
    date: "2026",
    body: "A modern portfolio and service website built around credibility, clear positioning, and fast contact.",
    color: "from-[#d9ff5f] via-[#f4f0e6] to-[#5e7cff]",
  },
  {
    title: "Creator Booking Flow",
    category: "UI/UX",
    price: "Figma",
    date: "2026",
    body: "A premium client booking experience with service discovery, intake questions, and trust-led CTAs.",
    color: "from-[#f4f0e6] via-[#f4f0e6] to-[#d9ff5f]",
  },
  {
    title: "Flutter Service App",
    category: "App Dev",
    price: "Flutter",
    date: "2026",
    body: "A mobile app direction for bookings, status updates, and simple client communication.",
    color: "from-[#f4f0e6] via-[#f4f0e6] to-[#d9ff5f]",
  },
  {
    title: "Instagram Growth System",
    category: "Social",
    price: "30K+",
    date: "Ongoing",
    body: "Content pillars, cadence, engagement loops, and performance checks for creator-led growth.",
    color: "from-[#ff4f9a] via-[#f4f0e6] to-[#ffb347]",
  },
  {
    title: "Launch Promo Edits",
    category: "Video",
    price: "Reels",
    date: "2026",
    body: "Short-form edits with strong hooks, readable captions, and platform-specific pacing.",
    color: "from-[#1b1b1b] via-[#f4f0e6] to-[#ff3d3d]",
  },
  {
    title: "Brand Story Reels",
    category: "Videography",
    price: "Shoot",
    date: "2026",
    body: "Videography and visual direction for brands that need personality, context, and social-ready clips.",
    color: "from-[#d9ff5f] via-[#f4f0e6] to-[#2f2f2f]",
  },
]

const plans = [
  {
    name: "Starter",
    price: "R2,500+",
    body: "Best for a focused landing page, content refresh, or small brand upgrade.",
    features: ["Creative direction", "1 focused deliverable", "Mobile-ready output", "Basic launch support"],
  },
  {
    name: "Growth",
    price: "R5,000+",
    body: "Best for websites, social campaigns, UI kits, or monthly content systems.",
    features: ["Strategy session", "Multiple deliverables", "Weekly progress updates", "Performance review"],
    featured: true,
  },
  {
    name: "Custom",
    price: "Quote",
    body: "Best for apps, multi-page websites, full campaigns, and long-term support.",
    features: ["Custom scope", "Design and development", "Content and growth plan", "Priority communication"],
  },
]

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "I work on UI/UX design, websites, apps, social media strategy, video editing, and videography. I can also combine these into one launch or growth package.",
  },
  {
    q: "How fast can we start?",
    a: "Most projects start with a short discovery conversation. Once the scope is clear, I can usually send next steps within 24 hours.",
  },
  {
    q: "Can you work with my existing brand?",
    a: "Yes. I can follow existing guidelines or help refine the visual direction if your brand needs a more modern and consistent look.",
  },
  {
    q: "Do you offer monthly support?",
    a: "Yes. Monthly support works well for social media management, content editing, website updates, and growth strategy.",
  },
]

const creativeStack = [
  "UI/UX Designer",
  "Web & App Developer",
  "Social Media Manager & Strategist",
  "Video Editor & Videographer",
]

const stockImages = {
  hero:
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
  decor:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85",
  about:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
  services: [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85",
  ],
  projects: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=85",
  ],
  contact:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
}

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function CreativeHeroMedia() {
  return (
    <div className="relative min-h-[560px]">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-card p-3 shadow-[0_48px_130px_-80px_rgba(216,255,99,.9)]"
      >
        <div className="relative aspect-[4/4.65] overflow-hidden rounded-[1.85rem] bg-card">
          <img src={stockImages.hero} alt="Creative digital workspace" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-sm uppercase tracking-[0.28em] text-white/55">Creative Direction</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">Design, code, content, growth.</h3>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, 14, 0], y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute -left-2 bottom-20 max-w-[18rem] overflow-hidden rounded-[1.8rem] border border-white/12 bg-card p-3 shadow-2xl sm:left-[-2.25rem]"
      >
        <div className="relative h-36 overflow-hidden rounded-[1.2rem]">
          <img src={stockImages.decor} alt="Abstract technology detail" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <p className="text-sm font-semibold">4.9 / 5.0</p>
        </div>
        <p className="mt-2 text-sm leading-6 text-white/58">
          Trusted creative support for brands, creators, and founders.
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-8 rounded-[1.6rem] border border-black/10 bg-primary p-4 text-foreground shadow-2xl sm:right-[-1.5rem]"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-black/50">Impact</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <p className="text-3xl font-semibold">45K+</p>
            <p className="text-xs text-black/55">Audience</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">150+</p>
            <p className="text-xs text-black/55">Clients</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-2 rounded-[1.7rem] border border-white/10 bg-card/88 p-4 backdrop-blur sm:right-10"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-primary">Services</p>
        <div className="mt-3 grid gap-2">
          {creativeStack.slice(0, 3).map((item) => (
            <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/68">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export function VixcraInspiredHome() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")
  const [openFaq, setOpenFaq] = useState(0)

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border bg-background/80 px-4 py-3 backdrop-blur-xl sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Zama Shange" width={96} height={40} className="h-9 w-auto dark:brightness-0 dark:invert" priority />
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:px-5">
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 sm:pt-32 lg:min-h-screen bg-background text-foreground">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,255,95,.12),transparent_30%),linear-gradient(300deg,rgba(217,255,95,.08),transparent_34%)] dark:bg-[linear-gradient(120deg,rgba(217,255,95,.12),transparent_30%),linear-gradient(300deg,rgba(244,240,230,.08),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <FadeIn>
              <p className="mb-6 text-sm uppercase tracking-[0.34em] text-primary">Welcome to Zama Shange</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl xl:text-9xl">
                Creative digital
                <span className="block text-primary">solution</span>
                <span className="block">studio</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
                UI/UX design, full-stack web development, Flutter app development, social media strategy,
                organic growth, video editing, and videography brought together in one sharp creative system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-foreground">View My Work</a>
                <a href="#contact" className="rounded-full border border-white/14 px-6 py-3 text-sm font-semibold text-white">Contact Me</a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.18} className="space-y-5">
            <CreativeHeroMedia />
            <div className="grid gap-4 sm:grid-cols-[.72fr_1fr]">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5">
                <div className="mb-3 flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-semibold">4.9 / 5.0</p>
                <p className="mt-2 text-sm leading-6 text-white/58">Trusted creative support for brands, creators, and founders.</p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-card p-5 text-foreground">
                <p className="text-base leading-7">
                  I design interfaces, build websites and apps, manage growth strategy, and create video content that helps brands feel premium and clear.
                </p>
                <a href="#projects" className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-card>
                  View My Work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-white/10 bg-primary py-5 text-foreground">
        <div className="flex overflow-hidden">
          <div className="flex min-w-max animate-marquee items-center gap-10 pr-10">
            {[...brandStrip, ...brandStrip, ...brandStrip].map((item, index) => (
              <span key={`${item}-${index}`} className="text-lg font-semibold uppercase tracking-normal sm:text-2xl">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
            <FadeIn className="space-y-5">
              <p className="text-sm uppercase tracking-[0.34em] text-primary">_About Me</p>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                  <img src={stockImages.about} alt="Creative coding workspace" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/8 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-foreground">
                    Johannesburg, South Africa
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-3xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-7xl">
                I craft digital experiences that connect design, technology, content, and growth into one clear brand system.
              </h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-white/62">
                <p>
                  Born on <strong className="text-white">June 20, 2007</strong>, in Durban, I moved to Johannesburg at 9 and used curiosity,
                  an old computer, and online learning to build my foundation in code, design, content, and digital growth.
                </p>
                <p>
                  Today I help brands, creators, and businesses build stronger digital presence through websites,
                  Flutter apps, UI/UX systems, social media management, organic growth, paid advertising, analytics, and promo content.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {impactPoints.map((point) => (
                  <div key={point} className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-white/62">
                    {point}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-foreground">Contact Me</a>
                <a href="#services" className="rounded-full border border-white/14 px-6 py-3 text-sm font-semibold text-white">Explore Services</a>
              </div>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.06}>
                <div className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-5xl font-semibold tracking-normal text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/44">{stat.label}</p>
                  <h3 className="mt-8 text-xl font-semibold">{stat.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{stat.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {journey.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.05}>
                <div className="h-full rounded-[1.6rem] border border-white/10 bg-card p-5 text-foreground">
                  <p className="text-sm uppercase tracking-[0.24em] text-black/45">{item.phase}</p>
                  <p className="mt-5 text-4xl font-semibold tracking-normal">{item.year}</p>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/62">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-card px-4 py-20 text-foreground sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.34em] text-black/50">_Services</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-normal sm:text-6xl lg:text-8xl">
                Creative solutions for every digital need
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-5">
            {servicesData.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.04}>
                <div className="group grid gap-5 rounded-[2rem] border border-border bg-white p-4 transition-colors hover:bg-foreground hover:text-card lg:grid-cols-[.8fr_1fr_.5fr] lg:items-center lg:p-6">
                  <div className="overflow-hidden rounded-[1.4rem] bg-[#efeadf]">
                    <div className="relative aspect-[1.16] overflow-hidden">
                      <img
                        src={stockImages.services[index % stockImages.services.length]}
                        alt={`${service.title} stock preview`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-primary">Service</p>
                        <p className="mt-1 text-xl font-semibold text-white">{service.title}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-black/40 transition-colors group-hover:text-white/40">
                      {String(index + 1).padStart(2, "0")} / {service.deliveryTime}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">{service.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-black/62 transition-colors group-hover:text-white/62">{service.shortDescription}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {[...service.idealFor.slice(0, 2), ...service.deliverables.slice(0, 2)].map((tag) => (
                        <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/58 transition-colors group-hover:border-white/15 group-hover:text-white/58">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href={`/services/${service.slug}`} className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-label={`View ${service.title}`}>
                    <ArrowUpRight className="h-6 w-6" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.34em] text-primary">_Complete service menu</p>
            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              Every offer from the original site, kept visible
            </h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service, index) => (
              <FadeIn key={service.slug} delay={(index % 6) * 0.03}>
                <a href={`/services/${service.slug}`} className="group block h-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition-colors hover:border-primary/45 hover:bg-white/[0.1]">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-primary">{String(index + 1).padStart(2, "0")}</p>
                    <ArrowUpRight className="h-5 w-5 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-normal">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{service.shortDescription}</p>
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/35">{service.deliveryTime}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.34em] text-primary">_Projects</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-4xl font-semibold uppercase leading-[0.95] tracking-normal sm:text-6xl lg:text-8xl">
                Selected work that delivers results
              </h2>
            </FadeIn>
          </div>

          <FadeIn className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                  activeCategory === category
                    ? "border-primary bg-primary text-foreground"
                    : "border-white/12 bg-white/[0.06] text-white/62 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.04}>
                <article className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 transition-colors hover:bg-white/[0.1]">
                  <div className="relative aspect-[1.18] overflow-hidden rounded-[2rem] bg-card">
                    <img
                      src={stockImages.projects[index % stockImages.projects.length]}
                      alt={`${project.title} stock preview`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-primary">{project.category}</p>
                        <p className="mt-2 text-xl font-semibold text-white">{project.title}</p>
                      </div>
                      <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-foreground">{project.price}</span>
                    </div>
                  </div>
                  <div className="grid gap-4 p-2 pt-5 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div>
                      <p className="text-sm text-primary">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-normal sm:text-3xl">{project.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/58">{project.body}</p>
                    </div>
                    <div className="flex gap-2 sm:flex-col sm:items-end">
                      <span className="rounded-full bg-white/10 px-4 py-2 text-sm">{project.price}</span>
                      <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/55">{project.date}</span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card px-4 py-20 text-foreground sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.34em] text-black/50">_Client satisfaction</p>
              <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
                What people can expect from working with me
              </h2>
            </FadeIn>
            <div className="space-y-5">
              {[
                "A clear creative direction before execution starts, so every design, page, or video has a purpose.",
                "Fast communication, practical ideas, and polished delivery across design, development, and content.",
                "A growth-minded process that connects visuals to trust, engagement, and real business opportunities.",
              ].map((quote, index) => (
                <FadeIn key={quote} delay={index * 0.06}>
                  <div className="rounded-[2rem] border border-black/10 bg-white p-6">
                    <p className="text-xl leading-8 tracking-normal">{quote}</p>
                    <p className="mt-6 text-sm uppercase tracking-[0.22em] text-black/40">Zama Shange Studio</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.34em] text-primary">_Pricing</p>
            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              Flexible plans for serious growth
            </h2>
          </FadeIn>
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.06}>
                <div className={cn("h-full rounded-[2rem] border p-6", plan.featured ? "border-primary bg-primary text-foreground" : "border-white/10 bg-white/[0.06]")}>
                  <p className="text-xl font-semibold">{plan.name}</p>
                  <p className="mt-5 text-5xl font-semibold tracking-normal">{plan.price}</p>
                  <p className={cn("mt-4 text-sm leading-6", plan.featured ? "text-black/62" : "text-white/58")}>{plan.body}</p>
                  <a href="#contact" className={cn("mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold", plan.featured ? "bg-foreground text-card" : "bg-card text-foreground")}>
                    Get Started
                  </a>
                  <div className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <span className={cn("flex h-6 w-6 items-center justify-center rounded-full", plan.featured ? "bg-black/10" : "bg-white/10")}>
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card px-4 py-20 text-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.34em] text-black/50">_FAQ</p>
            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              Frequently asked questions
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.q} delay={index * 0.04}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full rounded-[1.4rem] border border-black/10 bg-white p-5 text-left"
                >
                  <span className="flex items-center justify-between gap-4 text-lg font-semibold">
                    {faq.q}
                    <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", openFaq === index && "rotate-180")} />
                  </span>
                  {openFaq === index ? <span className="mt-4 block text-sm leading-7 text-black/60">{faq.a}</span> : null}
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.34em] text-primary">_Contact</p>
            <h2 className="mt-5 text-5xl font-semibold uppercase leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl">
              Let&apos;s build your next digital move
            </h2>
            <div className="mt-8 space-y-4 text-white/62">
              <p>WhatsApp: <a className="text-white" href="https://wa.me/27736701175" target="_blank" rel="noopener noreferrer">+27 73 670 1175</a></p>
              <p>Email: <a className="text-white" href="mailto:contact@zamashange.co.za">contact@zamashange.co.za</a></p>
              <p>Phone: <a className="text-white" href="tel:+27736701175">+27 73 670 1175</a></p>
              <p>Location: Johannesburg, South Africa</p>
              <p>Response Time: Usually within 24 hours</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <form className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 sm:p-7">
              <div className="mb-5 overflow-hidden rounded-[1.5rem]">
                <div className="relative h-52">
                  <img src={stockImages.contact} alt="Modern creative studio workspace" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-primary">Start the project</p>
                    <p className="mt-1 text-xl font-semibold text-white">Tell me what you want to build.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-full border border-white/10 bg-white/8 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-primary" placeholder="First name" />
                <input className="rounded-full border border-white/10 bg-white/8 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-primary" placeholder="Last name" />
              </div>
              <input className="mt-4 w-full rounded-full border border-white/10 bg-white/8 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-primary" placeholder="Email address" />
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <select className="rounded-full border border-white/10 bg-card px-5 py-4 text-sm text-white outline-none focus:border-primary">
                  <option>Project type</option>
                  {servicesData.map((service) => (
                    <option key={service.slug}>{service.title}</option>
                  ))}
                  <option>Multiple Services</option>
                  <option>Other</option>
                </select>
                <select className="rounded-full border border-white/10 bg-card px-5 py-4 text-sm text-white outline-none focus:border-primary">
                  <option>Budget range</option>
                  <option>R2,500 - R5,000</option>
                  <option>R5,000 - R10,000</option>
                  <option>R10,000 - R25,000</option>
                  <option>R25,000+</option>
                </select>
              </div>
              <textarea className="mt-4 min-h-36 w-full resize-none rounded-[1.4rem] border border-white/10 bg-white/8 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-primary" placeholder="Tell me about your project" />
              <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-foreground">
                Submit Now
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Zama Shange. Digital design, development, and growth studio.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/zama-shange-344166298/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="#contact" className="hover:text-white">Instagram</a>
            <a href="#contact" className="hover:text-white">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
