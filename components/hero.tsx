"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, MapPin, Sparkles, CheckCircle2, Star, Play } from "lucide-react"
import Image from "next/image"

const roles = [
  "UI/UX Designer",
  "Web Developer",
  "App Developer",
  "Social Media Manager",
  "Promo Video Creator",
  "Flutter Developer",
  "Instagram Strategist",
  "TikTok Marketing Specialist",
  "Digital Marketing Expert",
]

const stats = [
  { value: "45K+", label: "Total Followers" },
  { value: "30K+", label: "Instagram" },
  { value: "150+", label: "Happy Clients" },
]

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-20 sm:pt-24"
    >
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute right-0 top-1/4 h-[320px] w-[320px] rounded-full bg-primary/5 blur-3xl sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]" />
      <div className="absolute bottom-0 left-0 h-[240px] w-[240px] rounded-full bg-primary/3 blur-3xl sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:py-24"
      >
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Zama Shange
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-5 h-16 overflow-hidden sm:mb-6 sm:h-14"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="gradient-text block text-xl font-semibold leading-tight sm:text-2xl md:text-3xl lg:text-4xl"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2 text-base font-medium text-muted-foreground sm:mb-3 sm:text-lg md:text-xl"
            >
              Hero-level design. Business-level results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-body-lg mb-7 max-w-xl text-muted-foreground sm:mb-8"
            >
              I build premium websites, product experiences, and growth systems that make brands look world-class and convert attention into clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10 flex flex-col items-stretch gap-3 sm:mb-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:justify-start"
              >
                See My Portfolio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-border px-6 py-3.5 text-center font-medium transition-colors hover:bg-muted"
              >
                Hire Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="grid grid-cols-3 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-6"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="rounded-xl border border-border/80 bg-card/80 px-3 py-3 sm:min-w-[140px] sm:px-4">
                  <p className="text-xl font-bold text-foreground sm:text-2xl">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-muted-foreground sm:mt-7"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Based in South Africa</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative mt-2 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-7 rounded-[2rem] bg-gradient-to-br from-primary/25 via-fuchsia-500/15 to-cyan-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-border/80 bg-card/95 p-4 shadow-[0_30px_75px_-32px_rgba(79,70,229,0.55)] sm:p-5">
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl" />

                <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[230px] overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/10 via-primary/5 to-background sm:min-h-[250px]">
                    <Image
                      src="/zama-profile.jpg"
                      alt="Zama Shange"
                      fill
                      className="object-cover object-top mix-blend-normal"
                      sizes="(max-width: 640px) 100vw, 240px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-black/35 p-2.5 backdrop-blur-sm">
                      <p className="text-xs font-semibold text-white">Zama Shange</p>
                      <p className="text-[11px] text-white/80">Creative Developer</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-background/80 p-3.5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                      <Sparkles className="h-3 w-3" />
                      Portfolio Highlight
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-tight text-foreground">
                      Crafting brands that look expensive and convert.
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Design, development, and growth strategy in one workflow.
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {[
                        { k: "Engagement", v: "+210%" },
                        { k: "Leads", v: "+134%" },
                        { k: "Projects", v: "150+" },
                        { k: "Rating", v: "5.0" },
                      ].map((item) => (
                        <div key={item.k} className="rounded-xl border border-border/60 bg-card px-2.5 py-2">
                          <p className="text-sm font-semibold text-foreground">{item.v}</p>
                          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{item.k}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid gap-2">
                  {[
                    "Strategy session within 24 hours",
                    "Clear roadmap before you invest",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-background/85 px-3 py-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <p className="text-xs text-muted-foreground sm:text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-1 top-1 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:-right-3 sm:top-2"
            >
              <div className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-amber-500" />
                <p className="text-[11px] font-semibold text-foreground">Premium portfolio vibe</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-2 -left-1 rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:-left-3"
            >
              <div className="flex items-center gap-1.5">
                <Play className="h-3.5 w-3.5 text-primary" />
                <p className="text-[11px] font-semibold text-foreground">Ready to build your vision</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
          >
            <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
