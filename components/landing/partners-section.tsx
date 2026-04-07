"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { ArrowUpRight } from "lucide-react"

interface Partner {
  name: string
  role: string
  hue: number
}

const partners: Partner[] = [
  { name: "Politechnika Warszawska", role: "Partner akademicki", hue: 78 },
  { name: "Mera Robotics", role: "Partner technologiczny", hue: 65 },
  { name: "AI Ventures", role: "Partner inwestycyjny", hue: 70 },
  { name: "Tech Polska", role: "Patron medialny", hue: 55 },
  { name: "Robot Valley", role: "Partner branżowy", hue: 45 },
  { name: "Startup Poland", role: "Partner ekosystemu", hue: 80 },
  { name: "Innowacje.pl", role: "Patron medialny", hue: 85 },
  { name: "Future Lab", role: "Partner R&D", hue: 58 },
]

function PartnerCard({ partner }: { partner: Partner }) {
  const initials = partner.name.split(" ").map(w => w[0]).join("").slice(0, 2)

  return (
    <div
      className="flex-shrink-0 group cursor-default"
      style={{ width: "260px" }}
    >
      <div
        className="mx-3 flex items-center gap-5 px-6 py-7 rounded-2xl transition-all duration-300 group-hover:scale-[1.03]"
        style={{
          background: "oklch(0.09 0.008 60)",
          border: `1px solid oklch(0.82 0.18 ${partner.hue} / 0.18)`,
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
        {/* Logo */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, oklch(0.82 0.18 ${partner.hue} / 0.22), oklch(0.82 0.18 ${partner.hue} / 0.06))`,
            border: `1px solid oklch(0.82 0.18 ${partner.hue} / 0.30)`,
          }}
        >
          <span
            className="text-lg font-bold"
            style={{ color: `oklch(0.85 0.16 ${partner.hue})` }}
          >
            {initials}
          </span>
        </div>

        {/* Info */}
        <div className="min-w-0">
          <p className="text-base font-bold text-foreground leading-tight truncate group-hover:text-white transition-colors">
            {partner.name}
          </p>
          <p
            className="text-[11px] mt-1 uppercase tracking-wider font-medium"
            style={{ color: `oklch(0.65 0.12 ${partner.hue})` }}
          >
            {partner.role}
          </p>
        </div>
      </div>
    </div>
  )
}

export function PartnersSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })
  const quadrupled = [...partners, ...partners, ...partners, ...partners]

  const scrollToSignup = () => {
    document.querySelector("#zapisz-sie")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={ref}
      id="partnerzy"
      className="relative py-20 overflow-hidden"
      style={{ background: "oklch(0.06 0.005 60)", borderTop: "1px solid oklch(0.82 0.18 78 / 0.10)", borderBottom: "1px solid oklch(0.82 0.18 78 / 0.10)" }}
    >
      <div
        className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="font-display uppercase text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] font-bold" style={{ color: "oklch(0.82 0.18 78)" }}>
            Zaufali nam
          </h2>
        </div>

        {/* Single-row carousel */}
        <div className="relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, oklch(0.06 0.005 60), transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, oklch(0.06 0.005 60), transparent)" }}
          />

          <div className="partners-carousel flex">
            {quadrupled.map((p, i) => (
              <PartnerCard key={`p-${i}`} partner={p} />
            ))}
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <div
          className={`mt-14 text-center transition-all duration-1000 delay-500`}
        >
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

      <style jsx>{`
        @keyframes partners-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .partners-carousel {
          animation: partners-scroll 40s linear infinite;
        }
        .partners-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
