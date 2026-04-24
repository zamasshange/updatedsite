"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
  target?: string
}

export function MagneticButton({ 
  children, 
  className,
  strength = 0.3,
  onClick,
  href,
  target
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * strength
    const y = (clientY - top - height / 2) * strength
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const Component = href ? motion.a : motion.button

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="magnetic-wrap"
    >
      <Component
        href={href}
        target={target}
        onClick={onClick}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={cn(
          "relative inline-flex items-center justify-center",
          className
        )}
      >
        {children}
      </Component>
    </div>
  )
}
