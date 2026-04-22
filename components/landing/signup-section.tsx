"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { ArrowRight, Zap, Clock, Users, TrendingUp } from "lucide-react"
import { FORM_URL } from "@/lib/constants"

export function SignupSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      id="zapisz-sie"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gradient-start/8 via-gradient-mid/4 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-gradient-start/12 via-gradient-mid/6 to-gradient-end/12 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gradient-start font-medium mb-6">
            <Zap className="w-4 h-4" />
            Ostatni krok
          </span>
          <h2 className="font-display uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 leading-[1.15]" style={{ letterSpacing: "-0.02em" }}>
            <span className="text-foreground">NIE PRZEGAP</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
              SWOJEJ SZANSY
            </span>
          </h2>

          {/* Combined Info Strip */}
          <div
            className={`flex flex-wrap justify-center items-center gap-6 mb-12 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* 350 miejsc */}
            <div className="flex items-center gap-2 text-foreground">
              <Users className="w-5 h-5" style={{ color: "oklch(0.72 0.19 65)" }} />
              <span className="font-semibold">300 miejsc</span>
            </div>

            <span style={{ color: "oklch(0.72 0.19 65 / 0.4)" }}>|</span>

            {/* Wstęp wolny */}
            <div className="flex items-center gap-2 text-foreground">
              <TrendingUp className="w-5 h-5" style={{ color: "oklch(0.82 0.14 75)" }} />
              <span className="font-semibold">Wstęp wolny</span>
            </div>

            <span style={{ color: "oklch(0.72 0.19 65 / 0.4)" }}>|</span>

            {/* Data i miejsce */}
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Clock className="w-4 h-4" style={{ color: "oklch(0.62 0.16 50)" }} />
              <span>29 kwietnia, 14:00 · PW</span>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative bg-card border border-gradient-start/15 rounded-3xl p-8 md:p-12 overflow-hidden text-center">
            {/* Card glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-gradient-start/25 to-gradient-mid/25 rounded-full blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tl from-gradient-end/25 to-gradient-mid/25 rounded-full blur-[60px]" />

            <div className="relative">
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                Kliknij poniżej i wypełnij formularz rejestracyjny.
                <br />
                <span className="font-semibold" style={{ color: "oklch(0.72 0.19 65)" }}>Zapewnij swój udział.</span>
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full h-14 rounded-xl text-lg font-bold transition-all hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: "linear-gradient(90deg, oklch(0.72 0.19 65), oklch(0.82 0.14 75), oklch(0.62 0.16 50))",
                  color: "oklch(0.06 0.005 270)",
                  boxShadow: "0 0 20px oklch(0.72 0.19 65 / 0.25)",
                }}
              >
                Rezerwuję miejsce
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-xs text-center text-muted-foreground pt-4">
                Rejestrując się, zgadzasz się na otrzymywanie informacji o wydarzeniu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
