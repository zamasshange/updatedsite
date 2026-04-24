"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
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
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute right-0 top-1/4 h-[320px] w-[320px] rounded-full bg-primary/5 blur-3xl sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]" />
      <div className="absolute bottom-0 left-0 h-[240px] w-[240px] rounded-full bg-primary/3 blur-3xl sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]" />
      
      <motion.div 
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:py-24"
      >
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for projects
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Zama Shange
            </motion.h1>

            {/* Rotating Role Text */}
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

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-3 text-base font-medium text-muted-foreground sm:mb-4 sm:text-lg md:text-xl"
            >
              Where Code Meets Visual Storytelling
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-body-lg mb-7 max-w-lg text-muted-foreground sm:mb-8"
            >
              Crafting modern digital experiences through development, design, and 
              social media growth. I help creators, businesses, and artists expand 
              their reach across Instagram, TikTok, YouTube, and beyond.
            </motion.p>

            {/* CTA Buttons */}
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
                View Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-border px-6 py-3.5 text-center font-medium transition-colors hover:bg-muted"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="grid grid-cols-1 gap-5 sm:flex sm:flex-wrap sm:items-center sm:gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {index > 0 && (
                    <div className="w-px h-10 bg-border hidden sm:block" />
                  )}
                  <div className={index > 0 ? "sm:pl-8" : ""}>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7 flex items-center gap-2 text-muted-foreground sm:mt-8"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Based in South Africa</span>
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-first flex justify-center pb-2 lg:order-none lg:pb-0"
          >
            {/* Photo Container */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3" />
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform -rotate-3" />
              
              {/* Main Photo */}
              <div className="relative h-[17.5rem] w-[13rem] overflow-hidden rounded-3xl border-4 border-primary/20 bg-muted/40 shadow-2xl sm:h-[21rem] sm:w-[15.5rem]">
                <Image
                  src="/zama-profile.jpg"
                  alt="Zama Shange"
                  fill
                  className="scale-[1.08] transform-gpu object-cover object-[center_12%]"
                  sizes="(max-width: 640px) 232px, (max-width: 1024px) 272px, 320px"
                  loading="eager"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                
                {/* Name badge at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">Zama Shange</h3>
                  <p className="text-white/80 text-sm">Digital Creator</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 -top-3 rounded-xl border border-border bg-card p-3 shadow-lg sm:-right-6 lg:-right-8"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                    <Image
                      src="/Instagram_icon.png"
                      alt="Instagram"
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px] object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">30K+</p>
                    <p className="text-[10px] text-muted-foreground">Instagram</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-2 rounded-xl border border-border bg-card p-3 shadow-lg sm:-left-6 lg:-left-8"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">ZS</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">45K+</p>
                    <p className="text-[10px] text-muted-foreground">All Platforms</p>
                  </div>
                </div>
              </motion.div>
            </div>
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
