"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { FORM_URL } from "@/lib/constants"

const navItems = [
  { label: "O wydarzeniu", href: "#o-wydarzeniu" },
  { label: "Prelegent", href: "#prelegent" },
  { label: "Dlaczego warto", href: "#dlaczego-warto" },
  { label: "FAQ", href: "#faq" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl border-b"
          : "bg-transparent"
      }`}
      style={
        isScrolled
          ? {
              backgroundColor: "oklch(0.06 0.005 270 / 0.92)",
              borderBottomColor: "oklch(0.68 0.20 150 / 0.15)",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            {/* Gold bar accent */}
            <div
              className="w-0.5 h-6 rounded-full"
              style={{
                background: "linear-gradient(to bottom, oklch(0.78 0.15 185), oklch(0.62 0.22 290))",
              }}
            />
            <span
              className="font-display text-sm sm:text-base uppercase tracking-[0.15em] font-bold"
              style={{
                backgroundImage: "linear-gradient(90deg, oklch(0.97 0.005 80), oklch(0.68 0.20 150) 50%, oklch(0.97 0.005 80))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: isScrolled ? "shimmer 4s linear infinite" : "none",
              }}
            >
              CZŁOWIEKU! EDEK NA UCZELNI
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium uppercase tracking-wider transition-colors group"
                style={{ color: "oklch(0.60 0.015 270)" }}
              >
                <span className="group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.68 0.20 150), oklch(0.58 0.17 240))",
                  }}
                />
              </button>
            ))}
            <Button
              onClick={() => window.open(FORM_URL, "_blank", "noopener,noreferrer")}
              className="font-bold tracking-wide border-0 px-6"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.68 0.20 150), oklch(0.78 0.15 185), oklch(0.58 0.17 240))",
                color: "oklch(0.06 0.005 270)",
                boxShadow: "0 0 20px oklch(0.68 0.20 150 / 0.35)",
              }}
            >
              Zapisz się
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-foreground/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 border-b backdrop-blur-xl"
            style={{
              backgroundColor: "oklch(0.06 0.005 270 / 0.97)",
              borderBottomColor: "oklch(0.68 0.20 150 / 0.15)",
            }}
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg transition-colors py-2"
                  style={{ color: "oklch(0.60 0.015 270)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.97 0.005 80)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.015 270)")}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => window.open(FORM_URL, "_blank", "noopener,noreferrer")}
                className="mt-4 w-full font-bold border-0"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.68 0.20 150), oklch(0.78 0.15 185), oklch(0.58 0.17 240))",
                  color: "oklch(0.06 0.005 270)",
                }}
              >
                Zapisz się
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
