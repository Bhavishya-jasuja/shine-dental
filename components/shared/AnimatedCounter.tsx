"use client"

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter"
import { useInView } from "@/hooks/useInView"

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  decimals?: number
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView(0.3)
  const count = useAnimatedCounter(target, duration, inView)

  const displayValue =
    decimals > 0 ? (count / Math.pow(10, decimals)).toFixed(decimals) : count.toLocaleString()

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
