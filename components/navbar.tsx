"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])


  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          hasScrolled ? "py-3" : "py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <nav
            className={cn(
              "flex flex-nowrap items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 min-w-0",
              hasScrolled && "bg-background/95 backdrop-blur-md border border-border shadow-sm"
            )}
          >
            {/* Logo always visible, shrink on small screens */}
            <a href="#" className="relative z-10 flex items-center min-w-0">
              <Image
                src="/logo.png"
                alt="ZS"
                width={120}
                height={48}
                className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
                priority
              />
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1 flex-shrink-0">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop button */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Get Started
              </a>
            </div>

            {/* Hamburger for mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 -mr-1 flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-6 bg-foreground origin-center transition-colors"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-6 bg-foreground origin-center transition-colors"
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="text-3xl font-semibold tracking-tight hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-6 flex flex-col items-center gap-4"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-medium"
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
