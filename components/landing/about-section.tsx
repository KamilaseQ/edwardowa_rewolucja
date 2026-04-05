"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Cpu, Users, Lightbulb, Rocket, ArrowUpRight, Clock } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Cpu,
    title: "Roboty",
    subtitle: "humanoidalne",
    description: "Technologia, o której słyszysz w newsach. Na żywo. Na wyciągnięcie ręki.",
    stat: "350M+",
    statLabel: "wyświetleń",
    gradient: "from-gradient-start to-gradient-mid",
  },
  {
    icon: Lightbulb,
    title: "Insider",
    subtitle: "knowledge",
    description: "Perspektywa od ludzi, którzy budują przyszłość — nie komentują ją z boku.",
    stat: "#1",
    statLabel: "robot w PL",
    gradient: "from-gradient-mid to-gradient-end",
  },
  {
    icon: Users,
    title: "Networking",
    subtitle: "premium",
    description: "Liderzy, founderzy, inwestorzy. Jeden wieczór. Zero barier.",
    stat: "200+",
    statLabel: "miejsc",
    gradient: "from-gradient-end to-gradient-start",
  },
  {
    icon: Rocket,
    title: "Early",
    subtitle: "access",
    description: "Bądź pierwszy. W temacie. W kontaktach. W działaniu.",
    stat: "1",
    statLabel: "wieczór",
    gradient: "from-gradient-start to-gradient-end",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      id="o-wydarzeniu"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background gradient accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gradient-start/8 via-gradient-mid/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gradient-end/8 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div
          className={`max-w-3xl mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-gradient-start mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-gradient-start to-gradient-mid" />
            Co cię czeka
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="text-foreground">Rynek robotyki eksploduje.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
              Będziesz na tym?
            </span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Jeden wieczór z człowiekiem, który wie więcej o robotyce humanoidalnej niż 99% ludzi w Polsce. 
            <span className="text-gradient-start font-medium"> Nie teoria. Praktyka. Na żywo.</span>
          </p>
        </div>

        {/* Features grid - bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                hoveredIndex === index 
                  ? "bg-gradient-to-br from-card via-card to-card/50 border-gradient-start/50 scale-[1.02]" 
                  : "bg-card/50 border-border/50 hover:border-gradient-start/30"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl transition-opacity duration-500 -z-10 ${hoveredIndex === index ? 'opacity-30' : 'opacity-0'}`} />
              
              <div className="relative">
                {/* Icon with gradient */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 bg-gradient-to-br ${feature.gradient} ${
                  hoveredIndex === index ? "shadow-lg" : "opacity-80"
                }`}>
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  {feature.title}
                  <span className="text-gradient-start font-medium"> {feature.subtitle}</span>
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Stat */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                      {feature.stat}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {feature.statLabel}
                    </div>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${
                    hoveredIndex === index 
                      ? "text-gradient-start translate-x-0.5 -translate-y-0.5" 
                      : "text-border"
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency banner */}
        <div 
          className={`mt-12 p-6 rounded-2xl border border-gradient-start/30 bg-gradient-to-r from-gradient-start/10 via-gradient-mid/5 to-gradient-end/10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center">
                <Clock className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Limitowana liczba miejsc</p>
                <p className="text-sm text-muted-foreground">Sala pomieści tylko 200 osób. Rezerwacje zamykamy przed eventem.</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-mid">0 zł</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Wstęp wolny</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
