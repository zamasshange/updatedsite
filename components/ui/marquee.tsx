"use client"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: "slow" | "normal" | "fast"
  pauseOnHover?: boolean
  reverse?: boolean
}

export function Marquee({ 
  children, 
  className,
  speed = "normal",
  pauseOnHover = true,
  reverse = false
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "[animation-duration:15s]"
  }

  return (
    <div 
      className={cn(
        "flex overflow-hidden",
        pauseOnHover && "[&:hover_.marquee-content]:pause",
        className
      )}
    >
      <div 
        className={cn(
          "marquee-content flex shrink-0 items-center gap-8",
          speedClass[speed],
          reverse && "[animation-direction:reverse]"
        )}
        style={{ animationPlayState: "running" }}
      >
        {children}
        {children}
      </div>
      <div 
        className={cn(
          "marquee-content flex shrink-0 items-center gap-8",
          speedClass[speed],
          reverse && "[animation-direction:reverse]"
        )}
        aria-hidden
        style={{ animationPlayState: "running" }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
