"use client"

import { useEffect, useRef, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { ArrowUpRight } from "lucide-react"
import { FORM_URL } from "@/lib/constants"

interface Partner {
  name: string
  role: string
  hue: number
  url: string
  faviconDomain: string
  logoUrl?: string
  logoBg?: string
}

const partners: Partner[] = [
  {
    name: "MERA Robotics",
    role: "Partner technologiczny",
    hue: 65,
    url: "https://merarobotics.com",
    faviconDomain: "merarobotics.com",
    logoUrl: "/logos/mera.svg",
    logoBg: "linear-gradient(135deg, oklch(0.13 0.02 65), oklch(0.09 0.01 65))",
  },
  {
    name: "Warchocki.pl",
    role: "Partner technologiczny",
    hue: 55,
    url: "https://warchocki.pl",
    faviconDomain: "warchocki.pl",
    logoUrl: "/logos/warchocki.svg",
  },
  {
    name: "Warszawski Czas",
    role: "Sponsor i patron medialny",
    hue: 45,
    url: "https://warszawskiczas.pl",
    faviconDomain: "warszawskiczas.pl",
  },
]

const LOGO_W = 110
const LOGO_H = 78

function PartnerCard({ partner }: { partner: Partner }) {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${partner.faviconDomain}&sz=128`
  const displayImg = partner.logoUrl ?? faviconUrl
  const initials = partner.name.split(" ").map(w => w[0]).join("").slice(0, 2)
  const [imgFailed, setImgFailed] = useState(false)
  const logoBg = partner.logoBg ?? "#ffffff"

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 px-5 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.015] group"
      style={{
        background: "oklch(0.09 0.008 60)",
        border: `1px solid oklch(0.82 0.16 ${partner.hue} / 0.15)`,
        height: "100px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = `oklch(0.82 0.16 ${partner.hue} / 0.40)`
        el.style.boxShadow = `0 0 25px oklch(0.82 0.16 ${partner.hue} / 0.10)`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = `oklch(0.82 0.16 ${partner.hue} / 0.15)`
        el.style.boxShadow = "none"
      }}
    >
      {/* Uniform logo frame */}
      <div
        className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-xl"
        style={{
          width: `${LOGO_W}px`,
          height: `${LOGO_H}px`,
          background: logoBg,
          border: `1px solid oklch(0.82 0.16 ${partner.hue} / 0.20)`,
          padding: "6px 8px",
        }}
      >
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={displayImg}
            alt={partner.name}
            className="max-w-full max-h-full object-contain"
            style={{ width: "auto", height: "auto" }}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span
            className="text-lg font-bold select-none"
            style={{ color: `oklch(0.45 0.14 ${partner.hue})` }}
          >
            {initials}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-foreground leading-tight group-hover:text-white transition-colors">
          {partner.name}
        </p>
        <p
          className="text-[10px] mt-1 uppercase tracking-wider font-medium leading-tight"
          style={{ color: `oklch(0.65 0.12 ${partner.hue})` }}
        >
          {partner.role}
        </p>
      </div>
    </a>
  )
}

export function PartnersSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  const openForm = () => window.open(FORM_URL, "_blank", "noopener,noreferrer")

  return (
    <section
      ref={ref}
      id="partnerzy"
      className="relative py-20 overflow-hidden"
      style={{ background: "oklch(0.06 0.005 270)", borderBottom: "1px solid oklch(0.72 0.19 65 / 0.08)" }}
    >
      <div className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 px-6 max-w-7xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-l from-gradient-start/50 via-gradient-mid/30 to-transparent" />
          <h2 className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium text-center whitespace-nowrap">
            Sponsorzy i partnerzy
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 via-gradient-mid/30 to-transparent" />
        </div>

        {/* Static grid instead of carousel — better for 3 partners */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>
        </div>

        {/* Bottom CTA nudge — lightly salesy */}
        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Ci partnerzy wierzą w to, co robimy.
            <span className="text-gradient-start font-semibold"> Dołącz do nas.</span>
          </p>
          <button
            onClick={openForm}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 cursor-pointer"
            style={{ color: "oklch(0.72 0.19 65)" }}
          >
            Zarezerwuj miejsce
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
