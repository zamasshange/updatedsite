"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Globe,
  Instagram,
  Megaphone,
  Music2,
  Palette,
  Radio,
  Share2,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react"
import { Section, FadeIn } from "./ui/section"
import { servicesData } from "@/lib/services-data"

const iconMap = {
  Palette,
  Globe,
  Smartphone,
  Share2,
  Video,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Megaphone,
  Instagram,
  TikTok: Music2,
  Twitter: Radio,
  YouTube: Video,
  Twitch: Radio,
  Spotify: Music2,
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <Section id="services" className="relative overflow-hidden bg-muted/30 py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-24 bottom-24 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <FadeIn>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur-sm sm:px-4 sm:text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Services
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-5xl lg:text-6xl">
              Everything You Need
              <span className="gradient-text block">to Build and Grow</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-body-lg text-muted-foreground">
              From design and development to social media management and promotional content. 
              Complete digital solutions to help you build a powerful online presence.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-3 max-[430px]:grid-cols-1 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconKey as keyof typeof iconMap] ?? Share2

            return (
              <FadeIn key={service.title} delay={0.05 + index * 0.03}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-4 transition-all hover:border-primary/35 hover:shadow-[0_18px_45px_-22px_rgba(79,70,229,0.55)] sm:p-6"
                  >
                    <div className={`pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-30`} />

                    <div className={`mb-4 inline-flex rounded-xl p-3 ring-1 ring-black/5 sm:mb-5 ${service.bgColor}`}>
                      {service.logoSrc ? (
                        <Image src={service.logoSrc} alt={service.title} width={24} height={24} className="h-6 w-6 object-contain" />
                      ) : (
                        <Icon className={`h-6 w-6 ${service.textColor}`} />
                      )}
                    </div>

                    <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">{service.deliveryTime}</span>
                      <div className="flex items-center text-xs font-medium text-primary">
                        View service
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            )
          })}
        </div>

        {/* CTA Section */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex w-full max-w-3xl flex-col items-stretch gap-4 rounded-2xl border border-border/80 bg-card p-5 text-left shadow-sm sm:w-auto sm:flex-row sm:items-center sm:p-6">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Ready to bring your vision to life?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get a custom strategy tailored to your goals
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
