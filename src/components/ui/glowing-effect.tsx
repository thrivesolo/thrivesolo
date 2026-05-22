"use client"

import type React from "react"

import { memo, useCallback, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { animate } from "motion/react"

interface GlowingEffectProps {
  blur?: number
  inactiveZone?: number
  proximity?: number
  spread?: number
  variant?: "default" | "white"
  glow?: boolean
  className?: string
  movementDuration?: number
  borderWidth?: number
  disabled?: boolean
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const lastPosition = useRef({ x: 0, y: 0 })
    const animationFrameRef = useRef<number>(0)
    const cachedRect = useRef<{ left: number; top: number; width: number; height: number } | null>(null)

    const updateCachedRect = useCallback(() => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      cachedRect.current = {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height,
      }
    }, [])

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current
          if (!element || !cachedRect.current) return

          const mouseX = e?.x ?? lastPosition.current.x
          const mouseY = e?.y ?? lastPosition.current.y

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY }
          }

          const { left: cachedLeft, top: cachedTop, width, height } = cachedRect.current
          const left = cachedLeft - window.scrollX
          const top = cachedTop - window.scrollY

          const center = [left + width * 0.5, top + height * 0.5]
          const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1])
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0")
            return
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity

          element.style.setProperty("--active", isActive ? "1" : "0")

          if (!isActive) return

          const currentAngle = Number.parseFloat(element.style.getPropertyValue("--start")) || 0
          const targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180
          const newAngle = currentAngle + angleDiff

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value))
            },
          })
        })
      },
      [inactiveZone, proximity, movementDuration],
    )

    useEffect(() => {
      if (disabled) return

      updateCachedRect()

      const resizeObserver = new ResizeObserver(() => {
        updateCachedRect()
      })

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current)
      }

      window.addEventListener("resize", updateCachedRect, { passive: true })

      const handlePointerMove = (e: PointerEvent) => handleMove(e)

      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      })

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        resizeObserver.disconnect()
        window.removeEventListener("resize", updateCachedRect)
        document.body.removeEventListener("pointermove", handlePointerMove)
      }
    }, [handleMove, disabled, updateCachedRect])

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block",
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient":
                variant === "white"
                  ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`
                  : `radial-gradient(circle at 50% 50%, #EC00B8 15%, #EC00B800 35%),
                radial-gradient(circle at 30% 30%, #FF00711a 8%, #FF007100 18%),
                radial-gradient(circle at 70% 70%, #FF683E66 8%, #FF683E00 18%), 
                radial-gradient(circle at 50% 80%, #FFBB3340 8%, #FFBB3300 18%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #EC00B8 0%,
                  #FF0071 calc(20% / var(--repeating-conic-gradient-times)),
                  #FF683E calc(40% / var(--repeating-conic-gradient-times)), 
                  #FFBB33 calc(60% / var(--repeating-conic-gradient-times)),
                  #F9F871 calc(80% / var(--repeating-conic-gradient-times)),
                  #EC00B8 calc(100% / var(--repeating-conic-gradient-times))
                )`,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden",
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
            )}
          />
        </div>
      </>
    )
  },
)

GlowingEffect.displayName = "GlowingEffect"

export { GlowingEffect }
