"use client"

import { useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, ArrowRight, Loader2, Zap, Clock, Users } from "lucide-react"

export function SignupSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return

    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section
      ref={ref}
      id="zapisz-sie"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background gradients - stronger */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gradient-start/15 via-gradient-mid/8 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-gradient-start/25 via-gradient-mid/15 to-gradient-end/25 rounded-full blur-[100px]" />
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
          <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-none">
            <span className="text-foreground">NIE PRZEGAP</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
              TEGO WIECZORU
            </span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed mb-2">
            200 miejsc. Jeden wieczór. Zero powtórek.
          </p>
          <p className="text-base text-muted-foreground">
            Zapisz się teraz — za darmo.
          </p>
        </div>

        {/* Urgency indicators */}
        <div 
          className={`flex justify-center gap-6 mb-10 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Users className="w-4 h-4 text-gradient-start" />
            <span>Miejsca znikają</span>
          </div>
          <div className="w-px h-4 bg-gradient-mid/30" />
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <Clock className="w-4 h-4 text-gradient-mid" />
            <span>29 kwietnia 2025</span>
          </div>
        </div>

        {/* Form */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {isSubmitted ? (
            <div className="text-center py-16 px-8 bg-card border border-gradient-start/30 rounded-3xl relative overflow-hidden">
              {/* Success animation background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/20 via-transparent to-gradient-end/20 blur-2xl" />
              
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-gradient-start/40">
                  <Check className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="font-display uppercase text-3xl mb-4 text-foreground">JESTEŚ NA LIŚCIE!</h3>
                <p className="text-muted-foreground text-lg">
                  Potwierdzenie leci na Twój email.
                  <br />
                  <span className="text-gradient-start font-semibold">29 kwietnia, Politechnika Warszawska.</span>
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative bg-card border border-gradient-start/20 rounded-3xl p-8 md:p-12 overflow-hidden"
            >
              {/* Form glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-gradient-start/40 to-gradient-mid/40 rounded-full blur-[60px]" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tl from-gradient-end/40 to-gradient-mid/40 rounded-full blur-[60px]" />
              
              <div className="relative space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Imię i nazwisko
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jan Kowalski"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-14 bg-background border-border focus:border-gradient-start focus:ring-gradient-start/30 rounded-xl text-base transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Adres email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 bg-background border-border focus:border-gradient-start focus:ring-gradient-start/30 rounded-xl text-base transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading || !email || !name}
                  className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 transition-all group text-lg font-semibold rounded-xl hover:shadow-xl hover:shadow-foreground/20 hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Zapisywanie...
                    </>
                  ) : (
                    <>
                      Rezerwuję miejsce
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  Rejestrując się, zgadzasz się na otrzymywanie informacji o wydarzeniu.
                  <br />
                  Twoje dane są bezpieczne.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
