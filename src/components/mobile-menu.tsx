"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 150)
  }

  return (
    <div className="relative">
      <button
        className="p-2 text-white hover:text-zinc-300 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 bg-black/90 backdrop-blur-[120px] border border-white/10 rounded-2xl px-6 py-4 flex flex-col gap-4 min-w-[160px] shadow-lg">
          <a
            href="#services"
            onClick={scrollTo("services")}
            className="text-white hover:text-zinc-300 transition-colors duration-200 cursor-pointer py-1"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={scrollTo("pricing")}
            className="text-white hover:text-zinc-300 transition-colors duration-200 cursor-pointer py-1"
          >
            Pricing
          </a>
        </div>
      )}
    </div>
  )
}
