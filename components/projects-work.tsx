"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Section, FadeIn } from "./ui/section"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { cn } from "@/lib/utils"

type ProjectCategory =
  | "All"
  | "UI/UX"
  | "Web Dev"
  | "App Dev"
  | "Social Strategy"
  | "Video Editing"
  | "Videography"

type Project = {
  title: string
  category: Exclude<ProjectCategory, "All">
  description: string
  impact: string
  preview: string
  palette: string
  linkLabel?: string
  linkHref?: string
  details: string[]
}

const categories: ProjectCategory[] = [
  "All",
  "UI/UX",
  "Web Dev",
  "App Dev",
  "Social Strategy",
  "Video Editing",
  "Videography",
]

const projects: Project[] = [
  {
    title: "Creator Booking Experience",
    category: "UI/UX",
    description: "A polished booking flow concept for creators and service providers who need faster client intake.",
    impact: "UX flow, high-fidelity screens, conversion-focused CTA structure",
    preview: "Figma-ready product screens",
    palette: "from-indigo-500/18 via-sky-400/12 to-emerald-400/16",
    linkLabel: "Request case study",
    linkHref: "#contact",
    details: [
      "Mapped the user journey from discovery to booking confirmation.",
      "Designed clean service cards, intake questions, and a trust-focused checkout path.",
      "Prepared a design system direction that can scale into a full web app.",
    ],
  },
  {
    title: "Personal Brand Website",
    category: "Web Dev",
    description: "A responsive portfolio and service website built to communicate credibility, skills, and clear next steps.",
    impact: "Next.js, responsive layout, SEO-ready structure",
    preview: "Live website build",
    palette: "from-slate-900/12 via-indigo-500/14 to-cyan-400/14",
    linkLabel: "View live",
    linkHref: "#",
    details: [
      "Built with a modern component structure and clear service pathways.",
      "Optimized section hierarchy so visitors understand the offer quickly.",
      "Added contact flows that support direct inquiries from mobile and desktop.",
    ],
  },
  {
    title: "Flutter Service App",
    category: "App Dev",
    description: "A mobile app product direction for service booking, status updates, and client communication.",
    impact: "Flutter planning, app screens, feature architecture",
    preview: "Mobile app interface",
    palette: "from-cyan-500/16 via-blue-500/12 to-lime-400/14",
    linkLabel: "Discuss app work",
    linkHref: "#contact",
    details: [
      "Defined core screens for onboarding, service selection, bookings, and notifications.",
      "Planned reusable UI patterns for fast cross-platform development.",
      "Focused the app experience around simple navigation and low-friction user actions.",
    ],
  },
  {
    title: "Instagram Growth System",
    category: "Social Strategy",
    description: "A structured content and engagement system for growing a creator-led audience with consistency.",
    impact: "30K+ Instagram audience, content pillars, weekly optimization",
    preview: "Campaign dashboard",
    palette: "from-pink-500/18 via-orange-400/14 to-violet-500/16",
    linkLabel: "Plan a campaign",
    linkHref: "#contact",
    details: [
      "Created content pillars that balance reach, authority, trust, and conversion.",
      "Used weekly performance checks to refine formats, hooks, and posting cadence.",
      "Built a repeatable management workflow for engagement and community growth.",
    ],
  },
  {
    title: "Launch Promo Edits",
    category: "Video Editing",
    description: "Short-form promotional edits designed for product launches, service announcements, and social ads.",
    impact: "Reels, Shorts, TikTok-ready cuts, thumbnail direction",
    preview: "Motion edit preview",
    palette: "from-red-500/16 via-zinc-900/10 to-amber-400/16",
    linkLabel: "Book a video",
    linkHref: "#contact",
    details: [
      "Structured edits around fast hooks, clear value, and platform-specific pacing.",
      "Prepared multiple export formats for vertical video and paid promo usage.",
      "Balanced motion, captions, and music so the message stays easy to follow.",
    ],
  },
  {
    title: "Brand Story Reels",
    category: "Videography",
    description: "Portfolio-style visual storytelling for creators, small businesses, and event-driven campaigns.",
    impact: "Shot planning, reels, social-first visual direction",
    preview: "Reel gallery",
    palette: "from-emerald-500/14 via-stone-500/10 to-sky-400/16",
    linkLabel: "Plan a shoot",
    linkHref: "#contact",
    details: [
      "Planned shots around brand personality, environment, and audience intent.",
      "Created social-first reels that can become ads, highlights, and website media.",
      "Focused on clean framing, natural movement, and practical editing handoff.",
    ],
  },
]

const testimonials = [
  {
    quote: "Zama brings design, content, and growth thinking into one process. That makes every project feel strategic from day one.",
    person: "Client feedback",
  },
  {
    quote: "The work is clean, fast, and easy to understand. You can tell the details are being considered.",
    person: "Project collaborator",
  },
]

const stats = [
  { value: "6", label: "Creative disciplines" },
  { value: "45K+", label: "Combined audience" },
  { value: "24h", label: "Typical reply time" },
]

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br", project.palette)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.2)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
      <div className="absolute left-4 right-4 top-4 rounded-md border border-white/45 bg-white/70 p-3 shadow-sm backdrop-blur">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-2 w-24 rounded-full bg-foreground/70" />
          <div className="h-2 w-10 rounded-full bg-primary/70" />
        </div>
        <div className="grid grid-cols-[1.2fr_.8fr] gap-2">
          <div className="space-y-2">
            <div className="h-14 rounded-md bg-foreground/10" />
            <div className="h-2 rounded-full bg-foreground/20" />
            <div className="h-2 w-2/3 rounded-full bg-foreground/20" />
          </div>
          <div className="rounded-md bg-primary/20" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 rounded-md border border-white/40 bg-background/82 p-3 backdrop-blur">
        <p className="text-xs font-medium text-foreground">{project.preview}</p>
        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{project.impact}</p>
      </div>
    </div>
  )
}

export function ProjectsWork() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <Section id="work" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="mb-4 inline-flex rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
                Projects & Work
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-5xl">
                A practical portfolio across design, code, content, and growth.
              </h2>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Explore selected work directions across UI/UX, websites, apps, social media strategy,
                video editing, and videography. Each piece is built around clear outcomes, not decoration.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:w-auto"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.22}>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <motion.button
              layout
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22 }}
              className="group h-full rounded-lg border border-border bg-card p-3 text-left shadow-sm transition-all hover:border-primary/35 hover:shadow-[0_18px_50px_-26px_rgba(20,30,60,0.35)]"
            >
              <ProjectPreview project={project} />
              <div className="p-2 pt-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <div className="rounded-lg border border-border bg-muted/40 p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">Built for trust at a glance</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                The goal is simple: make it easy for someone to understand what you do,
                see how you think, and contact you with confidence.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-xs leading-4 text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((item, index) => (
              <FadeIn key={item.person} delay={0.08 + index * 0.08}>
                <figure className="h-full rounded-lg border border-border bg-card p-5 sm:p-6">
                  <blockquote className="text-sm leading-7 text-foreground">"{item.quote}"</blockquote>
                  <figcaption className="mt-4 text-xs font-medium uppercase text-muted-foreground">
                    {item.person}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject ? (
          <DialogContent className="max-h-[90vh] overflow-y-auto p-4 sm:max-w-3xl sm:p-6">
            <ProjectPreview project={selectedProject} />
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {selectedProject.category}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {selectedProject.impact}
                </span>
              </div>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-sm leading-6">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3 sm:grid-cols-3">
              {selectedProject.details.map((detail) => (
                <div key={detail} className="rounded-lg border border-border bg-muted/35 p-4 text-sm leading-6 text-muted-foreground">
                  {detail}
                </div>
              ))}
            </div>
            {selectedProject.linkHref ? (
              <a
                href={selectedProject.linkHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-fit"
              >
                {selectedProject.linkLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </DialogContent>
        ) : null}
      </Dialog>
    </Section>
  )
}
