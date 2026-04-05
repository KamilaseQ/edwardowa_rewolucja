"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, MapPin, Calendar, Ticket } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSignup = () => {
    const element = document.querySelector("#zapisz-sie")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPartners = () => {
    const element = document.querySelector("#partnerzy")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] bg-gradient-to-br from-gradient-start/10 via-gradient-mid/5 to-transparent rounded-full blur-[150px]" 
        />
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-gradient-to-tl from-gradient-end/8 to-transparent rounded-full blur-[150px]" 
        />
      </div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Date badge */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/50 border border-border backdrop-blur-sm mb-10 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-sm font-medium tracking-wide text-foreground">
            29 Kwietnia 2025 &bull; Politechnika Warszawska
          </span>
        </div>

        {/* Main title - Space Grotesk like navbar */}
        <h1
          className={`font-sans tracking-tight leading-[1.1] mb-8 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">
            Edwardowa
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">
            Rewolucja
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`max-w-2xl mx-auto text-xl md:text-2xl text-foreground/80 mb-6 leading-relaxed transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Roboty humanoidalne wchodzą do gry. Ty też powinieneś.
        </p>

        <p
          className={`max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-12 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Jeden wieczór. Jeden robot celebryta. Setki osób, które nie chcą przegapić tego, co nadchodzi.
        </p>

        {/* Info badges */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-14 transition-all duration-1000 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <MapPin className="w-4 h-4 text-gradient-start" />
            <span>Politechnika Warszawska</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Calendar className="w-4 h-4 text-gradient-start" />
            <span>29 Kwietnia 2025</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Ticket className="w-4 h-4 text-gradient-start" />
            <span className="font-semibold">Wstęp wolny</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            onClick={scrollToSignup}
            size="lg"
            className="text-lg px-10 py-7 bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 font-semibold"
          >
            Zapisz się za darmo
          </Button>
          <Button
            onClick={scrollToPartners}
            variant="outline"
            size="lg"
            className="text-lg px-10 py-7 border-border text-foreground hover:bg-card hover:border-gradient-start/50 transition-all"
          >
            Zobacz kto wspiera
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToPartners}
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-all cursor-pointer duration-1000 delay-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Przewiń w dół"
        >
          <span className="text-xs uppercase tracking-widest">Przewiń</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
