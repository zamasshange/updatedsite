"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
  once?: boolean
}

export function TextReveal({ 
  children, 
  className = "", 
  delay = 0,
  as: Component = "span",
  once = true
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, margin: "-10%" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const words = children.split(" ")

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  }

  const child: Variants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      variants={container}
      initial="hidden"
      animate={controls}
      className={`inline-flex flex-wrap ${className}`}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em]">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

interface CharRevealProps {
  children: string
  className?: string
  delay?: number
}

export function CharReveal({ children, className = "", delay = 0 }: CharRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const chars = children.split("")

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  }

  const child: Variants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={`inline-flex ${className}`}
      aria-label={children}
    >
      {chars.map((char, i) => (
        <span key={i} className="overflow-hidden">
          <motion.span className="inline-block" variants={child}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
