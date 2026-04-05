"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { AnimatedCounter } from "./animated-counter"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowUpRight, Play, Star } from "lucide-react"
import { useState } from "react"

const stats = [
  { end: 350, suffix: "M+", label: "Wyświetleń", gradient: "from-gradient-start to-gradient-mid" },
  { end: 500, suffix: "K+", label: "Obserwujących", gradient: "from-gradient-mid to-gradient-end" },
  { end: 1, prefix: "#", suffix: "", label: "Robot w Polsce", gradient: "from-gradient-end to-gradient-start" },
]

const mediaLogos = [
  "TVN", "Polsat News", "Sejm RP", "Money.pl", "Spider's Web", "WP"
]

export function SpeakerSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  })
  const [isHovered, setIsHovered] = useState(false)

  const scrollToSignup = () => {
    const element = document.querySelector("#zapisz-sie")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={ref}
      id="prelegent"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background elements - more prominent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gradient-start/15 via-gradient-mid/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-gradient-end/15 via-gradient-mid/10 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium">Główny Gość</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 via-gradient-mid/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image area */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Image with gradient border */}
              <div className={`aspect-[4/5] rounded-3xl overflow-hidden relative transition-all duration-500 ${
                isHovered ? 'scale-[1.02]' : ''
              }`}>
                {/* Animated gradient border */}
                <div className="absolute inset-0 p-[3px] rounded-3xl bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end animate-gradient-rotate">
                  <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center relative overflow-hidden">
                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(100,149,237,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(100,149,237,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
                    
                    {/* Content */}
                    <div className="text-center relative z-10">
                      <div className={`w-44 h-44 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-500 bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end shadow-2xl ${
                        isHovered ? 'shadow-gradient-mid/40' : 'shadow-gradient-start/20'
                      }`}>
                        <span className="text-6xl font-bold text-foreground">EW</span>
                      </div>
                      <p className="text-lg font-semibold text-foreground">Edward Warchocki</p>
                      <p className="text-sm text-gradient-start mt-1">Pierwszy Robot Celebryta</p>
                      
                      {/* Play hint */}
                      <div className={`mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground transition-all duration-300 ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                        <Play className="w-4 h-4" />
                        <span>Zobacz mnie w akcji</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-gradient-start/50 to-gradient-end/50 blur-[60px] -z-10 transition-opacity duration-500 ${
                  isHovered ? 'opacity-60' : 'opacity-20'
                }`} />
              </div>

              {/* Floating badge */}
              <div className={`absolute -bottom-6 -right-6 bg-card border border-gradient-start/30 rounded-2xl p-6 shadow-2xl transition-all duration-500 ${
                isHovered ? 'translate-x-2 -translate-y-2 shadow-gradient-start/30' : 'shadow-gradient-start/10'
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-gradient-start fill-gradient-start" />
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-mid">350M+</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">wyświetleń w sieci</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Name - Impact style */}
            <h2 className="font-display uppercase text-6xl md:text-7xl lg:text-8xl tracking-tight mb-2 leading-none text-foreground">
              EDWARD
            </h2>
            <h2 className="font-display uppercase text-6xl md:text-7xl lg:text-8xl tracking-tight mb-10 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
                WARCHOCKI
              </span>
            </h2>

            <p className="text-2xl text-foreground font-medium leading-relaxed mb-4 max-w-xl">
              350 milionów wyświetleń. Zero ludzkich błędów. Rolex z diamentami na nadgarstku.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Pierwszy polski robot influencer. Gość Sejmu, TVN, Polsat News. Na Edwardowej Rewolucji opowie, 
              <span className="text-gradient-start font-medium"> jak to jest być robotem w świecie ludzi — i dlaczego to zmieni Twój biznes.</span>
            </p>

            {/* Media mentions - with gradient accents */}
            <div className="mb-10">
              <span className="text-xs uppercase tracking-widest text-gradient-start mb-4 block">Widziany w</span>
              <div className="flex flex-wrap gap-3">
                {mediaLogos.map((logo) => (
                  <span 
                    key={logo} 
                    className="px-4 py-2 text-xs uppercase tracking-wider border border-gradient-start/30 rounded-full text-foreground/80 hover:border-gradient-start hover:bg-gradient-start/10 hover:text-foreground transition-all cursor-default"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats with gradient text */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-gradient-start/20 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                    <AnimatedCounter
                      end={stat.end}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToSignup}
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-foreground/20 font-semibold text-lg px-8 group"
              >
                Chcę posłuchać Edwarda
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gradient-start/50 text-foreground hover:bg-gradient-start/10 hover:border-gradient-start transition-all text-lg px-8"
                asChild
              >
                <a href="https://warchocki.pl" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  warchocki.pl
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-rotate {
          background-size: 200% 200%;
          animation: gradient-rotate 4s ease infinite;
        }
      `}</style>
    </section>
  )
}
