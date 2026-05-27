"use client"

import { useEffect, useState } from "react"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 px-6 w-full max-w-7xl transition-all duration-700 ease-in-out ${
        isVisible ? "top-8 opacity-100" : "-top-24 opacity-0"
      }`}
    >
      <div className="bg-black/50 backdrop-blur-[120px] rounded-full px-8 py-3 flex items-center gap-8 shadow-lg border border-white/10 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/thrivesolo-logo.png" alt="ThriveSolo" width={180} height={48} className="h-12 w-auto" />
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center justify-end gap-8 flex-1">
          <a
            href="#services"
            onClick={scrollTo("services")}
            className="text-white hover:text-zinc-300 transition-colors duration-200 cursor-pointer"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={scrollTo("pricing")}
            className="text-white hover:text-zinc-300 transition-colors duration-200 cursor-pointer"
          >
            Pricing
          </a>
          <button onClick={() => window.open("https://thrivesolo.fillout.com/quote", "_blank")} className="px-[18px] py-[10px] rounded-full border border-[#0500FF] bg-[#0500FF]/50 text-white font-medium hover:scale-105 transition-transform duration-500 cursor-pointer">
            Get a price
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center justify-end flex-1 pr-4">
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
