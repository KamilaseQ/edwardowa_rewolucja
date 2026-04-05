"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { ArrowUpRight, Zap } from "lucide-react"
import { useState } from "react"

export function OrganizersSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  })
  const [activeOrganizer, setActiveOrganizer] = useState<'kamil' | 'leon' | null>(null)

  return (
    <section
      ref={ref}
      id="organizatorzy"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-r from-gradient-start/12 via-gradient-mid/8 to-transparent rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-l from-gradient-end/12 via-gradient-mid/8 to-transparent rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium">Kto za tym stoi</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 to-transparent" />
          </div>
          
          <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none">
            <span className="text-foreground">DWÓCH LUDZI.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
              ZERO WYMÓWEK.
            </span>
          </h2>
        </div>

        {/* Cards layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Kamil */}
          <div 
            className={`lg:col-span-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: '200ms' }}
            onMouseEnter={() => setActiveOrganizer('kamil')}
            onMouseLeave={() => setActiveOrganizer(null)}
          >
            <div className={`group relative h-full p-8 lg:p-10 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
              activeOrganizer === 'kamil' 
                ? 'bg-card border-gradient-start/50 scale-[1.02]' 
                : 'bg-card/50 border-border/50 hover:border-gradient-start/30'
            }`}>
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br from-gradient-start/20 via-gradient-mid/10 to-transparent blur-2xl transition-opacity duration-500 ${activeOrganizer === 'kamil' ? 'opacity-100' : 'opacity-0'}`} />
              
              <div className="relative">
                {/* Number + Name */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-mid">01</span>
                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-2">Kamil</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['PW', 'Builder', 'Tech'].map((tag) => (
                    <span 
                      key={tag}
                      className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full border transition-all ${
                        activeOrganizer === 'kamil' 
                          ? 'border-gradient-start/50 bg-gradient-start/10 text-foreground' 
                          : 'border-border/50 text-muted-foreground'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Nie czeka aż ktoś mu pozwoli. 
                  <span className="text-gradient-start font-medium"> Buduje rzeczy, które mają sens.</span>
                </p>
                <p className="text-base leading-relaxed text-muted-foreground mb-8">
                  Projekty na styku AI, automatyzacji i realnego biznesu. 
                  Politechnika to baza — reszta dzieje się poza salami wykładowymi.
                </p>

                {/* Subtle line */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-px bg-gradient-to-r from-gradient-start to-transparent" />
                  <span>Politechnika Warszawska</span>
                </div>
              </div>

              {/* Arrow */}
              <ArrowUpRight className={`absolute top-8 right-8 w-6 h-6 transition-all duration-300 ${
                activeOrganizer === 'kamil' 
                  ? 'text-gradient-start translate-x-1 -translate-y-1' 
                  : 'text-border'
              }`} />
            </div>
          </div>

          {/* Middle connector */}
          <div 
            className={`lg:col-span-2 flex items-center justify-center transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative py-8 lg:py-0">
              {/* Vertical line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gradient-mid/40 to-transparent" />
              
              {/* Center element */}
              <div className="relative bg-background px-4 py-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center">
                  <Zap className="w-6 h-6 text-foreground" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-gradient-start mb-2">Studenci PW</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[160px] mx-auto">
                  Event studencki?
                  <br />
                  <span className="text-foreground/80 font-medium">Zapomnij o stereotypach.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Leon */}
          <div 
            className={`lg:col-span-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: '300ms' }}
            onMouseEnter={() => setActiveOrganizer('leon')}
            onMouseLeave={() => setActiveOrganizer(null)}
          >
            <div className={`group relative h-full p-8 lg:p-10 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
              activeOrganizer === 'leon' 
                ? 'bg-card border-gradient-mid/50 scale-[1.02]' 
                : 'bg-card/50 border-border/50 hover:border-gradient-mid/30'
            }`}>
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br from-gradient-mid/20 via-gradient-end/10 to-transparent blur-2xl transition-opacity duration-500 ${activeOrganizer === 'leon' ? 'opacity-100' : 'opacity-0'}`} />
              
              <div className="relative">
                {/* Number + Name */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient-mid to-gradient-end">02</span>
                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-2">Leon</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['PW', 'Strategy', 'Premium'].map((tag) => (
                    <span 
                      key={tag}
                      className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full border transition-all ${
                        activeOrganizer === 'leon' 
                          ? 'border-gradient-mid/50 bg-gradient-mid/10 text-foreground' 
                          : 'border-border/50 text-muted-foreground'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                  Wie, jak robić eventy, które 
                  <span className="text-gradient-mid font-medium"> ludzie zapamiętują.</span>
                </p>
                <p className="text-base leading-relaxed text-muted-foreground mb-8">
                  Porusza się tam, gdzie studenci rozmawiają z founderami jak równy z równym. 
                  Ma oko do detali i alergię na przeciętność.
                </p>

                {/* Subtle line */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-px bg-gradient-to-r from-gradient-mid to-transparent" />
                  <span>Politechnika Warszawska</span>
                </div>
              </div>

              {/* Arrow */}
              <ArrowUpRight className={`absolute top-8 right-8 w-6 h-6 transition-all duration-300 ${
                activeOrganizer === 'leon' 
                  ? 'text-gradient-mid translate-x-1 -translate-y-1' 
                  : 'text-border'
              }`} />
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-lg text-foreground/60 max-w-lg mx-auto">
            Dwóch studentów, którzy postanowili, że 
            <span className="text-gradient-start font-medium"> najlepsze rzeczy nie dzieją się same.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
