"use client"

import { useEffect, useRef, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { ArrowUpRight } from "lucide-react"

interface Partner {
  name: string
  role: string
  hue: number
  url: string
  faviconDomain: string
  logoUrl?: string
  logoBg?: string // custom logo background (default: white)
}

const partners: Partner[] = [
  {
    name: "Politechnika Warszawska",
    role: "Organizator i gospodarz",
    hue: 10,
    url: "https://pw.edu.pl",
    faviconDomain: "pw.edu.pl",
    logoUrl: "/logos/pw.png",
  },
  {
    name: "TVN",
    role: "Patron medialny",
    hue: 30,
    url: "https://tvn.pl",
    faviconDomain: "tvn.pl",
  },
  {
    name: "VOX FM",
    role: "Patron medialny",
    hue: 200,
    url: "https://voxfm.pl",
    faviconDomain: "voxfm.pl",
  },
  {
    name: "MERA Robotics",
    role: "Partner technologiczny",
    hue: 78,
    url: "https://merarobotics.com",
    faviconDomain: "merarobotics.com",
    logoUrl: "/logos/mera.svg",
    logoBg: "linear-gradient(135deg, oklch(0.13 0.02 78), oklch(0.09 0.01 78))",
  },
  {
    name: "Warchocki.pl",
    role: "Partner technologiczny",
    hue: 65,
    url: "https://warchocki.pl",
    faviconDomain: "warchocki.pl",
    logoUrl: "/logos/warchocki.svg",
  },
  {
    name: "Warszawski Czas",
    role: "Sponsor i patron medialny",
    hue: 50,
    url: "https://warszawskiczas.pl",
    faviconDomain: "warszawskiczas.pl",
  },
]

/* ── Fixed card width for uniform sizing ── */
const CARD_GAP = 24 // px gap between cards
const CARD_INNER_W = 340 // px card content width — wide enough for "Politechnika Warszawska"
const CARD_SLOT = CARD_INNER_W + CARD_GAP

/* ── Uniform logo dimensions ── */
const LOGO_W = 110
const LOGO_H = 78

function PartnerCard({ partner }: { partner: Partner }) {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${partner.faviconDomain}&sz=128`
  const displayImg = partner.logoUrl ?? faviconUrl
  const initials = partner.name.split(" ").map(w => w[0]).join("").slice(0, 2)
  const [imgFailed, setImgFailed] = useState(false)
  const logoBg = partner.logoBg ?? "#ffffff"

  return (
    <div className="flex-shrink-0" style={{ width: `${CARD_SLOT}px`, padding: `0 ${CARD_GAP / 2}px` }}>
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-5 px-5 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.03] group"
        style={{
          background: "oklch(0.09 0.008 60)",
          border: `1px solid oklch(0.82 0.18 ${partner.hue} / 0.18)`,
          height: "100px",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.borderColor = `oklch(0.82 0.18 ${partner.hue} / 0.50)`
          el.style.boxShadow = `0 0 30px oklch(0.82 0.18 ${partner.hue} / 0.15)`
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.borderColor = `oklch(0.82 0.18 ${partner.hue} / 0.18)`
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
            border: `1px solid oklch(0.82 0.18 ${partner.hue} / 0.25)`,
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
              style={{ color: `oklch(0.45 0.16 ${partner.hue})` }}
            >
              {initials}
            </span>
          )}
        </div>

        {/* Info — no truncation, allow wrapping */}
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
    </div>
  )
}

export function PartnersSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  const wrapperRef = useRef<HTMLDivElement>(null)
  const track1Ref = useRef<HTMLDivElement>(null)
  const track2Ref = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const isPausedRef = useRef(false)
  const speedRef = useRef(0.8) // slightly slower for smoother feel

  useEffect(() => {
    let animId: number
    let heightSet = false

    const animate = () => {
      const t1 = track1Ref.current
      const t2 = track2Ref.current
      const wrapper = wrapperRef.current

      if (t1 && t2 && wrapper) {
        const trackWidth = partners.length * CARD_SLOT

        if (!heightSet && t1.offsetHeight > 0) {
          wrapper.style.height = `${t1.offsetHeight}px`
          heightSet = true
        }

        if (!isPausedRef.current) {
          posRef.current -= speedRef.current

          if (posRef.current <= -trackWidth) {
            posRef.current += trackWidth
          }

          t1.style.transform = `translate3d(${posRef.current}px, 0, 0)`
          t2.style.transform = `translate3d(${posRef.current + trackWidth}px, 0, 0)`
        }
      }

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  const pause = () => { isPausedRef.current = true }
  const resume = () => { isPausedRef.current = false }

  const scrollToSignup = () => {
    document.querySelector("#zapisz-sie")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={ref}
      id="partnerzy"
      className="relative py-20 overflow-hidden"
      style={{ background: "oklch(0.06 0.005 60)", borderBottom: "1px solid oklch(0.82 0.18 78 / 0.10)" }}
    >
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 px-6 max-w-7xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-l from-gradient-start/50 via-gradient-mid/30 to-transparent" />
          <h2 className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium text-center whitespace-nowrap">
            Sponsorzy i partnerzy
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 via-gradient-mid/30 to-transparent" />
        </div>

        {/* Carousel wrapper */}
        <div
          className="relative overflow-hidden"
          ref={wrapperRef}
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, oklch(0.06 0.005 60), transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, oklch(0.06 0.005 60), transparent)" }}
          />

          {/* Track A */}
          <div
            ref={track1Ref}
            className="absolute top-0 left-0 flex will-change-transform"
            style={{ transform: "translate3d(0px, 0, 0)" }}
          >
            {partners.map((p, i) => <PartnerCard key={`a-${i}`} partner={p} />)}
          </div>

          {/* Track B */}
          <div
            ref={track2Ref}
            className="absolute top-0 left-0 flex will-change-transform"
            style={{ transform: `translate3d(${partners.length * CARD_SLOT}px, 0, 0)` }}
          >
            {partners.map((p, i) => <PartnerCard key={`b-${i}`} partner={p} />)}
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Takie podmioty wierzą w to wydarzenie.
            <span className="text-gradient-start font-semibold"> A Ty?</span>
          </p>
          <button
            onClick={scrollToSignup}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 cursor-pointer"
            style={{ color: "oklch(0.82 0.18 78)" }}
          >
            Dołącz za darmo
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
