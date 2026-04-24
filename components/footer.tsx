"use client"

import { motion } from "framer-motion"
import { ArrowUp, Mail, MapPin } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/drakeoftlm_", icon: "/Instagram_icon.png" },
  { label: "Twitter", href: "https://twitter.com/zamashange", icon: "/Twitter_icon.jpg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zama-shange-344166298/", icon: "/LinkedIn_icon.png" },
  { label: "YouTube", href: "https://youtube.com/@zamashange", icon: "/Youtube_icon.png" },
]

const services = [
  { label: "UI/UX Design", href: "#services" },
  { label: "Web Development", href: "#services" },
  { label: "App Development", href: "#services" },
  { label: "Social Media Management", href: "#services" },
  { label: "Promo Videos", href: "#services" },
]

const company = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground pb-8 pt-14 text-background sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        {/* Main Footer Content */}
        <div className="mb-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border-2 border-background/20 sm:h-14 sm:w-14">
                <Image
                  src="/zama-profile.jpg"
                  alt="Zama Shange"
                  fill
                  className="object-cover object-top"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-base font-bold sm:text-lg">Zama Shange</p>
                <p className="text-background/60 text-sm">Digital Creator</p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-background/70">
              Your growth partner for social media success and mobile app development. 
              Based in Johannesburg, serving clients worldwide.
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-background/20"
                  aria-label={link.label}
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@zamashange.co.za"
                  className="flex items-center gap-3 break-all text-sm text-background/70 transition-colors hover:text-background"
                >
                  <Mail className="w-4 h-4" />
                  contact@zamashange.co.za
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4" />
                Johannesburg, South Africa
              </li>
            </ul>
            
            {/* Status Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-background/10 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-background/80">Open for Projects</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-center text-sm text-background/50 sm:text-left">
            &copy; {new Date().getFullYear()} Zama Shange. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
