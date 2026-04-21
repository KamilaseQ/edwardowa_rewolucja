"use client"

import { useRef, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface Partner {
  name: string
  role: string
  hue: number
  url: string
  faviconDomain: string
  logoUrl?: string
  logoBg?: string
}

const allPartners: Partner[] = [
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
    name: "WAiNS PW",
    role: "Wydział Administracji i Nauk Społecznych",
    hue: 65,
    url: "https://www.ans.pw.edu.pl",
    faviconDomain: "ans.pw.edu.pl",
    logoUrl: "/logos/wains.png",
    logoBg: "#ffffff",
  },
  {
    name: "Our Future Foundation",
    role: "Patron wydarzenia",
    hue: 220,
    url: "https://ourfuturefoundation.eu",
    faviconDomain: "ourfuturefoundation.eu",
    logoUrl: "/logos/off.png",
    logoBg: "#ffffff",
  },
  {
    name: "SSPW",
    role: "Samorząd Studentów PW",
    hue: 55,
    url: "https://sspw.pl",
    faviconDomain: "sspw.pl",
    logoUrl: "/logos/sspw.png",
    logoBg: "#ffffff",
  },
  {
    name: "Warszawski Czas",
    role: "Patron medialny",
    hue: 45,
    url: "https://warszawskiczas.pl",
    faviconDomain: "warszawskiczas.pl",
    logoBg: "oklch(0.09 0.008 60)",
  },
  {
    name: "RKN PW",
    role: "Rada Kół Naukowych",
    hue: 45,
    url: "https://rkn.sspw.pl",
    faviconDomain: "rkn.sspw.pl",
    logoUrl: "/logos/rkn.png",
    logoBg: "#ffffff",
  },
  {
    name: "Fundacja Econverse",
    role: "Patron wydarzenia",
    hue: 290,
    url: "https://econverse.pl",
    faviconDomain: "econverse.pl",
    logoUrl: "/logos/econverse.png",
    logoBg: "linear-gradient(135deg, oklch(0.28 0.15 295), oklch(0.22 0.12 295))",
  },
  {
    name: "WRS EITI",
    role: "Wydziałowa Rada Studentów WEiTI",
    hue: 235,
    url: "https://www.elka.pw.edu.pl/Studenci/Wydzialowy-Samorzad-Studencki",
    faviconDomain: "elka.pw.edu.pl",
    logoUrl: "/logos/wrseiti.png",
    logoBg: "linear-gradient(135deg, oklch(0.11 0.12 265), oklch(0.08 0.10 265))",
  },
  {
    name: "Warchocki.pl",
    role: "Partner technologiczny",
    hue: 55,
    url: "https://warchocki.pl",
    faviconDomain: "warchocki.pl",
    logoUrl: "/logos/warchocki.svg",
    logoBg: "#000000",
  },
]

const LOGO_W = 110
const LOGO_H = 78
const CARD_W = 260
const GAP = 20

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
      className="flex flex-shrink-0 items-center gap-5 px-5 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.015] group"
      style={{
        width: `${CARD_W}px`,
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
          <span className="text-lg font-bold select-none" style={{ color: `oklch(0.45 0.14 ${partner.hue})` }}>
            {initials}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-foreground leading-tight group-hover:text-white transition-colors">
          {partner.name}
        </p>
        <p className="text-[10px] mt-1 uppercase tracking-wider font-medium leading-tight" style={{ color: `oklch(0.65 0.12 ${partner.hue})` }}>
          {partner.role}
        </p>
      </div>
    </a>
  )
}


export function PartnersSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      id="partnerzy"
      className="relative py-20 overflow-hidden"
      style={{ background: "oklch(0.06 0.005 270)", borderBottom: "1px solid oklch(0.72 0.19 65 / 0.08)" }}
    >
      <div className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 px-6 max-w-7xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-l from-gradient-start/50 via-gradient-mid/30 to-transparent" />
          <h2 className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium text-center whitespace-nowrap">
            Partnerzy i patroni
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 via-gradient-mid/30 to-transparent" />
        </div>

        {/* Infinite carousel */}
        <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
          <div
            className="flex animate-marquee"
            style={{
              gap: `${GAP}px`,
              width: "max-content",
              willChange: "transform",
              ["--marquee-offset" as string]: `-${allPartners.length * (CARD_W + GAP)}px`,
              ["--marquee-duration" as string]: `${allPartners.length * 3.5}s`,
            }}
          >
            {[...allPartners, ...allPartners].map((p, i) => (
              <PartnerCard key={`${p.name}-${i}`} partner={p} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
