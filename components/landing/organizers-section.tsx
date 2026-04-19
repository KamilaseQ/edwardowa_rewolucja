"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useState } from "react"
import { Camera, Zap, Phone } from "lucide-react"

const organizers = [
  {
    id: "kamil",
    number: "01",
    firstName: "Kamil",
    lastName: "Tański",
    initials: "KT",
    phone: "501747490",
    tags: ["AI", "Sprzedaż", "Wizja"],
    quote: "Myśli szerzej, niż większość odważa się planować.",
    description:
      "Specjalista od AI. Łączy sprzedaż i intuicję do projektów, które z pozoru wydają się niemożliwe do zrealizowania.",
    gradientFrom: "oklch(0.72 0.19 65)",
    gradientTo: "oklch(0.62 0.16 50)",
    borderColor: "oklch(0.72 0.19 65 / 0.20)",
    activeBorder: "oklch(0.72 0.19 65 / 0.45)",
  },
  {
    id: "leon",
    number: "02",
    firstName: "Leon",
    lastName: "Bednarski",
    initials: "LB",
    phone: "728561373",
    tags: ["Kontrola", "Porządek", "Precyzja"],
    quote: "Tam, gdzie on przejmuje kontrolę, wszystko zaczyna działać jak trzeba.",
    description:
      "Spokojny, konkretny i bezbłędnie uporządkowany. Kontroluje rzeczy tak, że chaos nie ma nigdy miejsca.",
    gradientFrom: "oklch(0.62 0.16 50)",
    gradientTo: "oklch(0.55 0.14 35)",
    borderColor: "oklch(0.62 0.16 50 / 0.20)",
    activeBorder: "oklch(0.62 0.16 50 / 0.45)",
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
      className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: delay }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
        style={{
          background: "oklch(0.10 0.008 270)",
          border: `1px solid ${isActive ? org.activeBorder : org.borderColor}`,
          transform: isActive ? "scale(1.01)" : "scale(1)",
        }}
      >
        {/* Glow overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${org.gradientFrom}14, transparent 60%)`,
            opacity: isActive ? 1 : 0,
          }}
        />

        {/* Photo placeholder */}
        <div className="p-4 pb-0">
          <div
            className="w-full aspect-video rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${org.gradientFrom}10, ${org.gradientTo}05)`,
              border: `1px solid ${org.borderColor}`,
            }}
          >
            <div className="flex flex-col items-center gap-2 opacity-50">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${org.gradientFrom}, ${org.gradientTo})` }}
              >
                <span className="text-base font-bold" style={{ color: "oklch(0.06 0.005 270)" }}>
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
          <div className="mb-4">
            <h3 className="text-2xl font-bold tracking-tight text-foreground leading-none">{org.firstName}</h3>
            <h3
              className="text-2xl font-bold tracking-tight leading-none mt-1 mb-3"
              style={{
                backgroundImage: `linear-gradient(90deg, ${org.gradientFrom}, ${org.gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {org.lastName}
            </h3>
            <a
              href={`tel:+48${org.phone}`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all hover:scale-105"
              style={{
                border: `1.5px solid ${org.gradientFrom}`,
                color: org.gradientFrom,
                backgroundColor: `${org.gradientFrom}10`,
              }}
              title="Zadzwoń"
            >
              <Phone className="w-4 h-4" />
              <span>+48 {org.phone.slice(0, 3)} {org.phone.slice(3, 6)} {org.phone.slice(6)}</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {org.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full transition-all duration-300"
                style={{
                  border: `1px solid ${isActive ? org.activeBorder : org.borderColor}`,
                  color: isActive ? "oklch(0.97 0.005 80)" : "oklch(0.50 0.015 270)",
                  backgroundColor: isActive ? `${org.gradientFrom}10` : "transparent",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm font-bold text-foreground mb-2">{org.quote}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {org.id === "kamil" ? (
              <>
                {org.description.split("niemożliwe do zrealizowania").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span
                        style={{
                          fontWeight: "600",
                          backgroundImage: `linear-gradient(90deg, ${org.gradientFrom}, ${org.gradientTo})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        niemożliwe do zrealizowania
                      </span>
                    )}
                  </span>
                ))}
              </>
            ) : org.id === "leon" ? (
              <>
                {org.description.split("nie ma nigdy miejsca").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span
                        style={{
                          fontWeight: "600",
                          backgroundImage: `linear-gradient(90deg, ${org.gradientFrom}, ${org.gradientTo})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        nie ma nigdy miejsca
                      </span>
                    )}
                  </span>
                ))}
              </>
            ) : (
              org.description
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

function CenterDivider({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`flex items-center justify-center transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      style={{ transitionDelay: "300ms" }}
    >
      <div className="relative py-8 lg:py-0 flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-card transition-transform hover:scale-105 cursor-default"
             style={{ border: "1px solid oklch(0.72 0.19 65 / 0.25)", boxShadow: "0 0 12px oklch(0.72 0.19 65 / 0.08)" }}>
          <Zap className="w-5 h-5" style={{ color: "oklch(0.72 0.19 65)" }} />
        </div>
        <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-center max-w-[160px] leading-snug"
           style={{ color: "oklch(0.72 0.19 65)" }}>
          Nie o przyszłości kiedyś.<br />O humanoidach już teraz
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
          style={{ background: "radial-gradient(circle, oklch(0.72 0.19 65 / 0.06), transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.14 35 / 0.06), transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium">Za kulisami</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 to-transparent" />
          </div>

          <h2 className="font-display uppercase leading-[1.15]" style={{ letterSpacing: "-0.02em" }}>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              ORGANIZATORZY
            </span>
            <span
              className="block text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{
                backgroundImage: "linear-gradient(90deg, oklch(0.72 0.19 65), oklch(0.82 0.14 75), oklch(0.62 0.16 50))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 5s linear infinite",
              }}
            >
              WYDARZENIA
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

      </div>
    </section>
  )
}
