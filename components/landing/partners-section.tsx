"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const partners = [
  "POLITECHNIKA WARSZAWSKA",
  "MERA ROBOTICS",
  "TECH POLSKA",
  "INNOWACJE.PL",
  "ROBOT VALLEY",
  "AI VENTURES",
  "FUTURE LAB",
  "STARTUP POLAND",
]

export function PartnersSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      id="partnerzy"
      className="relative py-16 border-y border-gradient-start/20 overflow-hidden bg-gradient-to-b from-background via-gradient-start/[0.03] to-background"
    >
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Section label */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gradient-start font-medium">
            Partnerzy & Patroni
          </span>
        </div>

        {/* Scrolling partners */}
        <div className="relative">
          {/* Fade edges with gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-background via-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-background via-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling content - first row */}
          <div className="flex animate-scroll mb-6">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex-shrink-0 px-10 md:px-14 group"
              >
                <span className="text-base md:text-lg font-semibold text-foreground/30 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gradient-start group-hover:to-gradient-mid transition-all duration-300 whitespace-nowrap tracking-wider cursor-default">
                  {partner}
                </span>
              </div>
            ))}
          </div>

          {/* Second row - reverse direction */}
          <div className="flex animate-scroll-reverse">
            {[...partners.slice().reverse(), ...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
              <div
                key={`reverse-${partner}-${index}`}
                className="flex-shrink-0 px-10 md:px-14 group"
              >
                <span className="text-base md:text-lg font-semibold text-foreground/20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gradient-mid group-hover:to-gradient-end transition-all duration-300 whitespace-nowrap tracking-wider cursor-default">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient line accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gradient-start/30 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
