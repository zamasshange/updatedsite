"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, ChevronDown, Star } from "lucide-react"
import { cn } from "@/lib/utils"

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
  "Social Strategy",
  "Video Editing",
  "Videography",
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
    label: "Projects and clients",
    title: "Practical execution",
    body: "Design, development, content, and growth work delivered with a clear focus on outcomes.",
  },
  {
    value: "24h",
    label: "Typical Reply Time",
    title: "Fast project clarity",
    body: "Quick responses, direct planning, and a smoother start for serious clients and collaborators.",
  },
]

const services = [
  {
    title: "Web Development",
    body: "Modern responsive websites built with clean structure, strong performance, and conversion-focused sections.",
    tags: ["Next.js", "SEO", "Responsive"],
  },
  {
    title: "UI/UX Design",
    body: "User flows, wireframes, polished screens, and design systems that make digital products feel clear and premium.",
    tags: ["Figma", "Prototypes", "Design Systems"],
  },
  {
    title: "App Development",
    body: "Cross-platform app planning and Flutter development for founders, businesses, and service platforms.",
    tags: ["Flutter", "Mobile UI", "Product Flow"],
  },
  {
    title: "Social Media Strategy",
    body: "Content pillars, growth systems, campaign planning, and community management for brands that want momentum.",
    tags: ["Instagram", "TikTok", "Analytics"],
  },
  {
    title: "Video Editing",
    body: "Short-form promo edits, launch videos, reels, captions, and scroll-ready creative for social campaigns.",
    tags: ["Reels", "Shorts", "Promo"],
  },
  {
    title: "Videography",
    body: "Shoot planning, visual direction, and social-first video capture for personal brands and business stories.",
    tags: ["Reels", "Events", "Brand Story"],
  },
]

type ProjectCategory = "All" | "UI/UX" | "Web Dev" | "App Dev" | "Social" | "Video"

const projectCategories: ProjectCategory[] = ["All", "UI/UX", "Web Dev", "App Dev", "Social", "Video"]

const projects = [
  {
    title: "Personal Brand Website",
    category: "Web Dev",
    price: "Next.js",
    date: "2026",
    body: "A modern portfolio and service website built around credibility, clear positioning, and fast contact.",
    color: "from-[#d8ff63] via-[#f0f0e8] to-[#5e7cff]",
  },
  {
    title: "Creator Booking Flow",
    category: "UI/UX",
    price: "Figma",
    date: "2026",
    body: "A premium client booking experience with service discovery, intake questions, and trust-led CTAs.",
    color: "from-[#ff7a3d] via-[#f7eadb] to-[#d8ff63]",
  },
  {
    title: "Flutter Service App",
    category: "App Dev",
    price: "Flutter",
    date: "2026",
    body: "A mobile app direction for bookings, status updates, and simple client communication.",
    color: "from-[#6ee7ff] via-[#f0f0e8] to-[#d8ff63]",
  },
  {
    title: "Instagram Growth System",
    category: "Social",
    price: "30K+",
    date: "Ongoing",
    body: "Content pillars, cadence, engagement loops, and performance checks for creator-led growth.",
    color: "from-[#ff4f9a] via-[#f7eadb] to-[#ffb347]",
  },
  {
    title: "Launch Promo Edits",
    category: "Video",
    price: "Reels",
    date: "2026",
    body: "Short-form edits with strong hooks, readable captions, and platform-specific pacing.",
    color: "from-[#1b1b1b] via-[#f0f0e8] to-[#ff3d3d]",
  },
  {
    title: "Brand Story Reels",
    category: "Video",
    price: "Shoot",
    date: "2026",
    body: "Videography and visual direction for brands that need personality, context, and social-ready clips.",
    color: "from-[#d8ff63] via-[#f7eadb] to-[#2f2f2f]",
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

function WorkPreview({ color, label }: { color: string; label: string }) {
  return (
    <div className={cn("relative aspect-[1.12] overflow-hidden rounded-[2rem] bg-gradient-to-br p-4", color)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.75),transparent_28%),linear-gradient(135deg,rgba(0,0,0,.22),transparent_45%)]" />
      <div className="relative flex h-full flex-col justify-between rounded-[1.4rem] border border-black/10 bg-black/75 p-4 text-[#f7f3e8] shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-20 rounded-full bg-[#d8ff63]" />
          <div className="h-9 w-9 rounded-full border border-white/20 bg-white/10" />
        </div>
        <div className="grid grid-cols-[1fr_.65fr] gap-3">
          <div className="space-y-2">
            <div className="h-20 rounded-2xl bg-white/14" />
            <div className="h-2 rounded-full bg-white/25" />
            <div className="h-2 w-2/3 rounded-full bg-white/20" />
          </div>
          <div className="rounded-2xl bg-[#d8ff63]/80" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/55">{label}</p>
          <div className="mt-3 h-10 rounded-full border border-white/15 bg-white/10" />
        </div>
      </div>
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
    <main className="min-h-screen bg-[#0b0b09] text-[#f7f3e8]">
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#0b0b09]/78 px-4 py-3 backdrop-blur-xl sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Zama Shange" width={96} height={40} className="h-9 w-auto brightness-0 invert" priority />
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-4 py-2 text-sm text-white/68 transition-colors hover:bg-white/10 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#d8ff63] px-4 py-2 text-sm font-semibold text-[#10100d] transition-transform hover:-translate-y-0.5 sm:px-5">
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 sm:pt-32 lg:min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(216,255,99,.24),transparent_26%),radial-gradient(circle_at_12%_20%,rgba(255,122,61,.18),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <FadeIn>
              <p className="mb-6 text-sm uppercase tracking-[0.34em] text-[#d8ff63]">Welcome to Zama Shange</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="max-w-4xl text-[clamp(3.4rem,12vw,10rem)] font-semibold uppercase leading-[0.86] tracking-[-0.04em]">
                Creative digital
                <span className="block text-[#d8ff63]">solution</span>
                <span className="block">studio</span>
              </h1>
            </FadeIn>
          </div>

          <FadeIn delay={0.18} className="space-y-5">
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/7 p-3">
              <div className="relative aspect-[4/4.55] overflow-hidden rounded-[1.8rem] bg-[#1b1b16]">
                <Image src="/zama-profile.jpg" alt="Zama Shange" fill priority sizes="(max-width: 1024px) 100vw, 560px" className="object-cover object-top grayscale-[18%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-white/55">Creative Developer</p>
                    <p className="mt-1 text-2xl font-semibold">Zama Shange</p>
                  </div>
                  <div className="rounded-full bg-[#d8ff63] px-4 py-2 text-sm font-semibold text-[#10100d]">Available</div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-[.72fr_1fr]">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5">
                <div className="mb-3 flex gap-1 text-[#d8ff63]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-semibold">4.9 / 5.0</p>
                <p className="mt-2 text-sm leading-6 text-white/58">Trusted creative support for brands, creators, and founders.</p>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-[#f7f3e8] p-5 text-[#10100d]">
                <p className="text-base leading-7">
                  I design interfaces, build websites and apps, manage growth strategy, and create video content that helps brands feel premium and clear.
                </p>
                <a href="#projects" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#10100d] px-5 py-3 text-sm font-semibold text-[#f7f3e8]">
                  View My Work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#d8ff63] py-5 text-[#10100d]">
        <div className="flex overflow-hidden">
          <div className="flex min-w-max animate-marquee items-center gap-10 pr-10">
            {[...brandStrip, ...brandStrip, ...brandStrip].map((item, index) => (
              <span key={`${item}-${index}`} className="text-lg font-semibold uppercase tracking-[-0.02em] sm:text-2xl">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.34em] text-[#d8ff63]">_About Me</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-[clamp(2rem,5.4vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
                I craft digital experiences that connect design, technology, content, and growth into one clear brand system.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-full bg-[#d8ff63] px-6 py-3 text-sm font-semibold text-[#10100d]">Contact Me</a>
                <a href="#services" className="rounded-full border border-white/14 px-6 py-3 text-sm font-semibold text-white">Explore Services</a>
              </div>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.06}>
                <div className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6">
                  <p className="text-5xl font-semibold tracking-[-0.05em] text-[#d8ff63]">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/44">{stat.label}</p>
                  <h3 className="mt-8 text-xl font-semibold">{stat.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{stat.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f7f3e8] px-4 py-20 text-[#10100d] sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.34em] text-black/50">_Services</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-[clamp(2.4rem,6.8vw,6.8rem)] font-semibold uppercase leading-[0.88] tracking-[-0.055em]">
                Creative solutions for every digital need
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-5">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.04}>
                <div className="group grid gap-5 rounded-[2rem] border border-black/10 bg-white p-4 transition-colors hover:bg-[#10100d] hover:text-[#f7f3e8] lg:grid-cols-[.8fr_1fr_.5fr] lg:items-center lg:p-6">
                  <div className="overflow-hidden rounded-[1.4rem] bg-[#efeadf]">
                    <WorkPreview color={index % 2 === 0 ? "from-[#d8ff63] to-[#ff7a3d]" : "from-[#10100d] to-[#6ee7ff]"} label={service.title} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-black/40 transition-colors group-hover:text-white/40">0{index + 1}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{service.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-black/62 transition-colors group-hover:text-white/62">{service.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/58 transition-colors group-hover:border-white/15 group-hover:text-white/58">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href="#contact" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d8ff63] text-[#10100d] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight className="h-6 w-6" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.34em] text-[#d8ff63]">_Projects</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-[clamp(2.3rem,6vw,6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em]">
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
                    ? "border-[#d8ff63] bg-[#d8ff63] text-[#10100d]"
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
                  <WorkPreview color={project.color} label={project.category} />
                  <div className="grid gap-4 p-2 pt-5 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div>
                      <p className="text-sm text-[#d8ff63]">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{project.title}</h3>
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

      <section className="bg-[#f7f3e8] px-4 py-20 text-[#10100d] sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.34em] text-black/50">_Client satisfaction</p>
              <h2 className="mt-5 text-[clamp(2.3rem,5.6vw,5.8rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em]">
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
                    <p className="text-xl leading-8 tracking-[-0.02em]">{quote}</p>
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
            <p className="text-sm uppercase tracking-[0.34em] text-[#d8ff63]">_Pricing</p>
            <h2 className="mt-5 text-[clamp(2.3rem,5.6vw,5.8rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em]">
              Flexible plans for serious growth
            </h2>
          </FadeIn>
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.06}>
                <div className={cn("h-full rounded-[2rem] border p-6", plan.featured ? "border-[#d8ff63] bg-[#d8ff63] text-[#10100d]" : "border-white/10 bg-white/[0.06]")}>
                  <p className="text-xl font-semibold">{plan.name}</p>
                  <p className="mt-5 text-5xl font-semibold tracking-[-0.05em]">{plan.price}</p>
                  <p className={cn("mt-4 text-sm leading-6", plan.featured ? "text-black/62" : "text-white/58")}>{plan.body}</p>
                  <a href="#contact" className={cn("mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold", plan.featured ? "bg-[#10100d] text-[#f7f3e8]" : "bg-[#f7f3e8] text-[#10100d]")}>
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

      <section className="bg-[#f7f3e8] px-4 py-20 text-[#10100d] sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.34em] text-black/50">_FAQ</p>
            <h2 className="mt-5 text-[clamp(2.3rem,5.6vw,5.8rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em]">
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
            <p className="text-sm uppercase tracking-[0.34em] text-[#d8ff63]">_Contact</p>
            <h2 className="mt-5 text-[clamp(2.6rem,7vw,7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.055em]">
              Let&apos;s build your next digital move
            </h2>
            <div className="mt-8 space-y-4 text-white/62">
              <p>Email: <a className="text-white" href="mailto:contact@zamashange.co.za">contact@zamashange.co.za</a></p>
              <p>Phone: <a className="text-white" href="tel:+27736701175">+27 73 670 1175</a></p>
              <p>Location: Johannesburg, South Africa</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <form className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-full border border-white/10 bg-white/8 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#d8ff63]" placeholder="First name" />
                <input className="rounded-full border border-white/10 bg-white/8 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#d8ff63]" placeholder="Last name" />
              </div>
              <input className="mt-4 w-full rounded-full border border-white/10 bg-white/8 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#d8ff63]" placeholder="Email address" />
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <select className="rounded-full border border-white/10 bg-[#1a1a16] px-5 py-4 text-sm text-white outline-none focus:border-[#d8ff63]">
                  <option>Project type</option>
                  <option>UI/UX Design</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Social Media Strategy</option>
                  <option>Video Editing</option>
                </select>
                <select className="rounded-full border border-white/10 bg-[#1a1a16] px-5 py-4 text-sm text-white outline-none focus:border-[#d8ff63]">
                  <option>Budget range</option>
                  <option>R2,500 - R5,000</option>
                  <option>R5,000 - R10,000</option>
                  <option>R10,000 - R25,000</option>
                  <option>R25,000+</option>
                </select>
              </div>
              <textarea className="mt-4 min-h-36 w-full resize-none rounded-[1.4rem] border border-white/10 bg-white/8 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#d8ff63]" placeholder="Tell me about your project" />
              <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d8ff63] px-6 py-4 text-sm font-semibold text-[#10100d]">
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
