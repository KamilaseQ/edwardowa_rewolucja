"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { ArrowRight, Zap, Clock } from "lucide-react"
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
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gradient-start/10 via-gradient-mid/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-gradient-start/15 via-gradient-mid/8 to-gradient-end/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gradient-start font-medium mb-6">
            <Zap className="w-4 h-4" />
            Ostatni krok
          </span>
          <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-[1.15]">
            <span className="text-foreground">NIE PRZEGAP</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
              SWOJEJ SZANSY
            </span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed mb-2">
            350 miejsc. Jedno wydarzenie. Zero powtórek.
          </p>
          <p className="text-base font-medium" style={{ color: "oklch(0.68 0.20 150)" }}>
            Zapisz się teraz, za darmo.
          </p>
        </div>

        {/* Date indicator */}
        <div
          className={`flex justify-center mb-10 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Clock className="w-4 h-4 text-gradient-mid" />
            <span>29 kwietnia 2026, godz. 14:00, Politechnika Warszawska</span>
          </div>
        </div>

        {/* CTA Card */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-card border border-gradient-start/20 rounded-3xl p-8 md:p-12 overflow-hidden text-center">
            {/* Card glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-gradient-start/30 to-gradient-mid/30 rounded-full blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tl from-gradient-end/30 to-gradient-mid/30 rounded-full blur-[60px]" />

            <div className="relative">
              <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                Miejsca są ograniczone. Kliknij poniżej, wypełnij formularz rejestracyjny i zagwarantuj sobie miejsce.
              </p>

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full h-14 rounded-xl text-lg font-bold transition-all hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: "linear-gradient(90deg, oklch(0.68 0.20 150), oklch(0.78 0.15 185), oklch(0.58 0.17 240))",
                  color: "oklch(0.06 0.005 270)",
                  boxShadow: "0 0 24px oklch(0.68 0.20 150 / 0.3)",
                }}
              >
                Rezerwuję miejsce
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-xs text-center text-muted-foreground pt-4">
                Rejestrując się, zgadzasz się na otrzymywanie informacji o wydarzeniu.
                <br />
                Twoje dane są bezpieczne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
