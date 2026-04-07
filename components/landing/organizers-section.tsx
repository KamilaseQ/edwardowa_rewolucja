"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useState } from "react"
import { Camera, Zap } from "lucide-react"

const organizers = [
  {
    id: "kamil",
    number: "01",
    firstName: "Kamil",
    lastName: "Tański",
    initials: "KT",
    tags: ["PW", "Builder", "AI"],
    quote: "Nie czeka aż ktoś mu pozwoli.",
    description:
      "Projekty na styku AI, automatyzacji i realnego biznesu. Politechnika to baza, reszta dzieje się poza salami wykładowymi.",
    gradientFrom: "oklch(0.82 0.18 78)",
    gradientTo: "oklch(0.70 0.20 55)",
    borderColor: "oklch(0.82 0.18 78 / 0.25)",
    activeBorder: "oklch(0.82 0.18 78 / 0.55)",
  },
  {
    id: "leon",
    number: "02",
    firstName: "Leon",
    lastName: "Bednarski",
    initials: "LB",
    tags: ["PW", "Strategy", "Events"],
    quote: "Wie, jak robić rzeczy, które ludzie zapamiętują.",
    description:
      "Porusza się tam, gdzie studenci rozmawiają z founderami jak równy z równym. Ma oko do detali i alergię na przeciętność.",
    gradientFrom: "oklch(0.70 0.20 55)",
    gradientTo: "oklch(0.58 0.18 38)",
    borderColor: "oklch(0.70 0.20 55 / 0.25)",
    activeBorder: "oklch(0.70 0.20 55 / 0.55)",
  },
]

function OrganizerCard({
  org,
  isActive,
  onEnter,
  onLeave,
  delay,
  isVisible,
}: {
  org: (typeof organizers)[0]
  isActive: boolean
  onEnter: () => void
  onLeave: () => void
  delay: string
  isVisible: boolean
}) {
  return (
    <div
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: delay }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
        style={{
          background: "oklch(0.10 0.008 60)",
          border: `1px solid ${isActive ? org.activeBorder : org.borderColor}`,
          transform: isActive ? "scale(1.015)" : "scale(1)",
        }}
      >
        {/* Glow overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${org.gradientFrom}16, transparent 60%)`,
            opacity: isActive ? 1 : 0,
          }}
        />

        {/* Photo placeholder */}
        <div className="p-4 pb-0">
          <div
            className="w-full aspect-video rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${org.gradientFrom}12, ${org.gradientTo}06)`,
              border: `1px dashed ${org.borderColor}`,
            }}
          >
            <div className="flex flex-col items-center gap-2 opacity-50">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${org.gradientFrom}, ${org.gradientTo})` }}
              >
                <span className="text-base font-bold" style={{ color: "oklch(0.06 0.005 60)" }}>
                  {org.initials}
                </span>
              </div>
              <div className="flex items-center gap-1.5" style={{ color: org.gradientFrom }}>
                <Camera className="w-3 h-3" />
                <span className="text-[10px] uppercase tracking-wider">Zdjęcie wkrótce</span>
              </div>
            </div>
            <span
              className="absolute top-2 left-3 text-2xl font-bold tabular-nums opacity-40"
              style={{
                backgroundImage: `linear-gradient(90deg, ${org.gradientFrom}, ${org.gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {org.number}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 relative">
          <div className="mb-3">
            <h3 className="text-2xl font-bold tracking-tight text-foreground leading-none">{org.firstName}</h3>
            <h3
              className="text-2xl font-bold tracking-tight leading-none mt-1"
              style={{
                backgroundImage: `linear-gradient(90deg, ${org.gradientFrom}, ${org.gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {org.lastName}
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {org.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full transition-all duration-300"
                style={{
                  border: `1px solid ${isActive ? org.activeBorder : org.borderColor}`,
                  color: isActive ? "oklch(0.97 0.005 80)" : "oklch(0.50 0.025 70)",
                  backgroundColor: isActive ? `${org.gradientFrom}12` : "transparent",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm font-bold text-foreground mb-2">{org.quote}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{org.description}</p>
        </div>
      </div>
    </div>
  )
}

function CenterDivider({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`flex items-center justify-center transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      style={{ transitionDelay: "300ms" }}
    >
      <div className="relative py-8 lg:py-0 flex flex-col items-center gap-3">
        {/* Simple icon + text */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-card shadow-[0_0_15px_rgba(var(--gradient-start),0.1)] transition-transform hover:scale-105 cursor-default"
             style={{ border: "1px solid oklch(0.82 0.18 78 / 0.3)" }}>
          <Zap className="w-5 h-5" style={{ color: "oklch(0.82 0.18 78)" }} />
        </div>
        <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-center max-w-[140px] leading-snug"
           style={{ color: "oklch(0.82 0.18 78)" }}>
          To nie jest kolejna studencka konferencja
        </p>
      </div>
    </div>
  )
}

export function OrganizersSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })
  const [activeOrganizer, setActiveOrganizer] = useState<string | null>(null)

  return (
    <section ref={ref} id="organizatorzy" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, oklch(0.82 0.18 78 / 0.08), transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, oklch(0.58 0.18 38 / 0.08), transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium">Za kulisami</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 to-transparent" />
          </div>

          <h2 className="font-display uppercase leading-[1.15]">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              ORGANIZATORZY
            </span>
            <span
              className="block text-5xl md:text-6xl lg:text-7xl font-bold"
              style={{
                backgroundImage: "linear-gradient(90deg, oklch(0.82 0.18 78), oklch(0.88 0.20 85), oklch(0.70 0.20 55))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 4s linear infinite",
              }}
            >
              WYDARZENIA.
            </span>
          </h2>
        </div>

        {/* 3-column grid: card | circle | card */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-5 items-center mb-14">
          <OrganizerCard
            org={organizers[0]}
            isActive={activeOrganizer === "kamil"}
            onEnter={() => setActiveOrganizer("kamil")}
            onLeave={() => setActiveOrganizer(null)}
            delay="100ms"
            isVisible={isVisible}
          />

          <CenterDivider isVisible={isVisible} />

          <OrganizerCard
            org={organizers[1]}
            isActive={activeOrganizer === "leon"}
            onEnter={() => setActiveOrganizer("leon")}
            onLeave={() => setActiveOrganizer(null)}
            delay="200ms"
            isVisible={isVisible}
          />
        </div>

        {/* Bottom statement */}
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div
            className="inline-flex items-center gap-4 px-7 py-3.5 rounded-full"
            style={{ background: "oklch(0.10 0.008 60)", border: "1px solid oklch(0.82 0.18 78 / 0.18)" }}
          >
            <span className="text-muted-foreground text-sm">Dwóch studentów Politechniki Warszawskiej</span>
            <span className="w-px h-4" style={{ backgroundColor: "oklch(0.82 0.18 78 / 0.30)" }} />
            <span className="text-sm font-semibold" style={{ color: "oklch(0.82 0.18 78)" }}>
              200 osób, jeden robot, zero kompromisów
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
