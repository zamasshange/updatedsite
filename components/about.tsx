"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Section, FadeIn } from "./ui/section"
import { MapPin, Instagram, Users, Calendar, Award, Briefcase, Code, Video, Palette, ArrowRight } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "30K+", label: "Instagram Followers", icon: Instagram },
  { value: "45K+", label: "Total Followers", icon: Users },
  { value: "150+", label: "Happy Clients", icon: Award },
  { value: "2007", label: "Born", icon: Calendar },
]

const expertise = [
  { icon: Code, label: "Full-Stack Development" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Video, label: "Video Production" },
]

const impactPoints = [
  "Clients across Africa, Europe, and beyond",
  "Growth-first strategy with measurable outcomes",
  "Creative direction aligned to brand positioning",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <Section id="about" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Photo */}
          <FadeIn>
            <div className="relative lg:sticky lg:top-28">
              <div className="relative mx-auto max-w-[18rem] sm:max-w-[21rem] lg:mx-0">
                {/* Photo Container - zamashange style */}
                <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-2xl">
                  {/* Main Image */}
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/zama-profile.jpg"
                      alt="Zama Shange"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 450px"
                      priority
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  </div>
                  
                  {/* Info Overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent p-4 sm:p-5">
                    <div className="flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">Zama Shange</h3>
                        <p className="text-white/80 text-sm">Digital Creator & Developer</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-xs font-medium">Available for work</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 max-[430px]:grid-cols-1">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-xl border border-border bg-card p-3 shadow-md sm:p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/15 via-pink-500/15 to-orange-400/15 sm:h-12 sm:w-12">
                        <Image
                          src="/Instagram_icon.png"
                          alt="Instagram"
                          width={24}
                          height={24}
                          className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-foreground sm:text-xl">30K+</p>
                        <p className="text-xs text-muted-foreground">Instagram Followers</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="rounded-xl border border-border bg-card p-3 shadow-md sm:p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 sm:h-12 sm:w-12">
                        <MapPin className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Based In</p>
                        <p className="text-xs text-muted-foreground">South Africa</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-4 rounded-2xl border border-border bg-card/90 p-4 shadow-md sm:p-5">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Briefcase className="h-3.5 w-3.5" />
                    Global Impact
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Building effective digital experiences for brands and creators who want real results and measurable impact.
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {impactPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-foreground">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Let&apos;s build something exceptional
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right - Content */}
          <div>
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                My Journey
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-5xl">
                The Story Behind
                <span className="gradient-text block">the Pixels</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 mb-8 space-y-5 leading-relaxed text-muted-foreground">
                <p className="text-sm sm:text-base md:text-lg">
                  From humble beginnings to pioneering digital experiences - my journey is 
                  a testament to what&apos;s possible with relentless determination.
                </p>
                <p>
                  Born on <strong className="text-foreground">June 20, 2007</strong>, in the vibrant 
                  coastal city of Durban, I discovered my passion for technology at an early age. 
                  When I was just <strong className="text-foreground">9 years old</strong>, I made a 
                  life-changing move to Johannesburg to live with my aunt, seeking better 
                  opportunities that would ultimately shape my future.
                </p>
                <p>
                  Growing up, I didn&apos;t have access to the resources many take for granted. What I 
                  did have was an insatiable curiosity and an old computer that became my gateway 
                  to a new world. I taught myself to code through online tutorials, designed 
                  interfaces that existed only in my imagination, and dreamed of creating 
                  experiences that would one day inspire others.
                </p>
                <p>
                  The path wasn&apos;t easy. There were countless nights of debugging, failed projects, 
                  and moments of doubt. But every setback became a stepping stone. Every challenge 
                  taught me resilience. I realized that success isn&apos;t about where you start - 
                  it&apos;s about the fire that keeps you moving forward.
                </p>
                <p>
                  Today, with over <strong className="text-foreground">30,000 followers on Instagram</strong> and 
                  a total community of more than <strong className="text-foreground">45,000 followers across all platforms</strong>, 
                  I help brands, creators, and businesses achieve the same growth. From organic 
                  social media strategies to building Flutter mobile applications, I bring the 
                  same hunger and dedication that got me here to every single project.
                </p>
              </div>
            </FadeIn>

            {/* Expertise Badges */}
            <FadeIn delay={0.25}>
              <div className="flex flex-wrap gap-3 mb-8">
                {expertise.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Stats Grid */}
            <FadeIn delay={0.3}>
              <div className="mb-8 grid grid-cols-2 gap-3 max-[430px]:grid-cols-1 sm:gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-muted/50 p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-foreground sm:text-xl">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* What Drives Me */}
            <FadeIn delay={0.35}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-4">What Drives Me</h4>
                <div className="space-y-3">
                  {[
                    { num: "1", title: "Authenticity Over Perfection", desc: "Real connections come from genuine work, not polished facades." },
                    { num: "2", title: "Continuous Growth", desc: "Every project is an opportunity to learn something new." },
                    { num: "3", title: "Impact That Matters", desc: "Creating work that inspires and empowers others." },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                        {item.num}
                      </span>
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-20 sm:mt-24">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                My Journey
              </span>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl md:text-4xl">
                From Durban to Digital Success
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4 max-[520px]:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                year: "2007",
                phase: "Early Days",
                title: "The Spark",
                description: "Discovered a passion for technology and design in humble beginnings, teaching myself to code and create."
              },
              {
                year: "2016",
                phase: "Growth",
                title: "Building Foundation",
                description: "Spent countless hours mastering full-stack development, UI/UX principles, and video production techniques."
              },
              {
                year: "2020",
                phase: "Breakthrough",
                title: "Finding My Voice",
                description: "Combined technical skills with creative vision to develop a unique approach to digital experiences."
              },
              {
                year: "Now",
                phase: "Present",
                title: "Making Impact",
                description: "Working with clients worldwide, building a community of 45K+ followers, and pushing creative boundaries daily."
              }
            ].map((item, index) => (
              <FadeIn key={item.year} delay={0.1 + index * 0.1}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/30 sm:p-6">
                  <div className="absolute -top-3 left-6 flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.phase}</span>
                  <h4 className="mb-2 mt-2 text-base font-semibold text-foreground sm:text-lg">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
