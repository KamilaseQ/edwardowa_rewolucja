"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Phone, Linkedin } from "lucide-react"
import Image from "next/image"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z" />
    </svg>
  )
}

type Organizer = {
  id: string
  firstName: string
  lastName: string
  phone: string
  linkedinUrl?: string
  instagramUrl?: string
  quote: string
  description: string
  highlightPhrase: string
  gradientFrom: string
  gradientTo: string
  borderColor: string
}

const organizers: Organizer[] = [
  {
    id: "kamil",
    firstName: "Kamil",
    lastName: "Tański",
    phone: "501747490",
    linkedinUrl: "https://www.linkedin.com/in/kamil-ta%C5%84ski-05141736a/",
    instagramUrl: "https://www.instagram.com/kamilaseq/",
    quote: "Myśli szerzej, niż większość odważa się planować.",
    description:
      "Specjalista od AI. Łączy sprzedaż i intuicję do projektów, które z pozoru wydają się niemożliwe do zrealizowania.",
    highlightPhrase: "niemożliwe do zrealizowania",
    gradientFrom: "oklch(0.72 0.19 65)",
    gradientTo: "oklch(0.62 0.16 50)",
    borderColor: "oklch(0.72 0.19 65 / 0.20)",
  },
  {
    id: "leon",
    firstName: "Leon",
    lastName: "Bednarski",
    phone: "728561373",
    linkedinUrl: "https://www.linkedin.com/in/kamil-ta%C5%84ski-05141736a/",
    instagramUrl: "https://www.instagram.com/bednarski_leon/",
    quote: "Gdy przejmuje kontrolę, wszystko działa jak trzeba.",
    description:
      "Creative Strategist. Spokojny, konkretny i bezbłędnie uporządkowany. Kontroluje rzeczy tak, że chaos nie ma nigdy miejsca.",
    highlightPhrase: "nie ma nigdy miejsca",
    gradientFrom: "oklch(0.62 0.16 50)",
    gradientTo: "oklch(0.55 0.14 35)",
    borderColor: "oklch(0.62 0.16 50 / 0.20)",
  },
]

const sharedSocials = {
  instagramUrl: "https://www.instagram.com/kamil_i_leon/",
  tiktokUrl: "https://www.tiktok.com/@kamilileon",
}

function PersonCard({
  org,
  isVisible,
  delay,
}: {
  org: Organizer
  isVisible: boolean
  delay: string
}) {
  return (
    <div
      className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: delay }}
    >
      <div
        className="rounded-2xl p-5 h-full"
        style={{
          background: "oklch(0.10 0.008 270)",
          border: `1px solid ${org.borderColor}`,
        }}
      >
        <h3 className="text-xl font-bold tracking-tight text-foreground leading-none">{org.firstName}</h3>
        <h3
          className="text-xl font-bold tracking-tight leading-none mt-0.5 mb-3"
          style={{
            backgroundImage: `linear-gradient(90deg, ${org.gradientFrom}, ${org.gradientTo})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {org.lastName}
        </h3>

        {/* Phone + LinkedIn + Instagram */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <a
            href={`tel:+48${org.phone}`}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
            style={{
              border: `1.5px solid ${org.gradientFrom}`,
              color: org.gradientFrom,
              backgroundColor: `${org.gradientFrom}10`,
            }}
            title="Zadzwoń"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+48 {org.phone.slice(0, 3)} {org.phone.slice(3, 6)} {org.phone.slice(6)}</span>
          </a>
          {org.linkedinUrl && (
            <a
              href={org.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all hover:scale-110"
              style={{
                border: `1.5px solid ${org.gradientFrom}`,
                color: org.gradientFrom,
                backgroundColor: `${org.gradientFrom}10`,
              }}
              title="LinkedIn"
              aria-label={`LinkedIn ${org.firstName} ${org.lastName}`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
          {org.instagramUrl && (
            <a
              href={org.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all hover:scale-110"
              style={{
                border: `1.5px solid ${org.gradientFrom}`,
                color: org.gradientFrom,
                backgroundColor: `${org.gradientFrom}10`,
              }}
              title="Instagram"
              aria-label={`Instagram ${org.firstName} ${org.lastName}`}
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <p className="text-sm font-bold text-foreground mb-1.5">{org.quote}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {org.description.split(org.highlightPhrase).map((part, i, arr) => (
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
                  {org.highlightPhrase}
                </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export function OrganizersSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

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
          className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium">Za kulisami</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 to-transparent" />
          </div>
          <h2 className="font-display uppercase leading-[1.15]" style={{ letterSpacing: "-0.02em" }}>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">ORGANIZATORZY</span>
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

        {/* Two-column layout: portrait photo | content */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Portrait photo */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 p-[3px] rounded-3xl bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end">
                <div className="w-full h-full rounded-3xl bg-card relative overflow-hidden">
                  <Image
                    src="/organizers-photo.webp"
                    alt="Kamil Tański i Leon Bednarski"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-[center_10%]"
                  />
                </div>
              </div>
              <div
                className="absolute inset-0 blur-[60px] -z-10"
                style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 65 / 0.25), oklch(0.55 0.14 35 / 0.25))" }}
              />
            </div>
          </div>

          {/* Right column: shared text + person cards + social */}
          <div
            className={`lg:col-span-8 flex flex-col gap-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
          >
            {/* Shared intro */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "oklch(0.10 0.008 270)",
                border: "1px solid oklch(0.72 0.19 65 / 0.12)",
              }}
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Dwóch przyjaciół, którzy łączą biznes, technologię i konkretne działanie. Gaszą pożary, pokonują smoki i biorą na siebie to, czego inni wolą nie ruszać, aby zawsze dowieźć projekt do końca. Na co dzień studenci PW i część zespołu Edwarda Warchockiego. Odpowiedzialni za sprzedaż i wdrożenia IT w Warszawskim Czasie. 
              </p>
            </div>

            {/* Individual cards side by side */}
            <div className="grid sm:grid-cols-2 gap-5">
              {organizers.map((org, i) => (
                <PersonCard
                  key={org.id}
                  org={org}
                  isVisible={isVisible}
                  delay={`${300 + i * 100}ms`}
                />
              ))}
            </div>

            {/* Shared social */}
            <div
              className="rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{
                background: "oklch(0.10 0.008 270)",
                border: "1px solid oklch(0.72 0.19 65 / 0.12)",
              }}
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Śledź wydarzenie</span>
              <div className="flex items-center gap-3">
                <a
                  href={sharedSocials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                  style={{
                    border: "1.5px solid oklch(0.72 0.19 65 / 0.4)",
                    color: "oklch(0.72 0.19 65)",
                    backgroundColor: "oklch(0.72 0.19 65 / 0.08)",
                  }}
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href={sharedSocials.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                  style={{
                    border: "1.5px solid oklch(0.72 0.19 65 / 0.4)",
                    color: "oklch(0.72 0.19 65)",
                    backgroundColor: "oklch(0.72 0.19 65 / 0.08)",
                  }}
                >
                  <TikTokIcon className="w-4 h-4" />
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
