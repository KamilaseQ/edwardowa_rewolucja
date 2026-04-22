"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Dla kogo jest to wydarzenie?",
    answer:
      "Dla ludzi którzy chcą wejść w erę humanoidów i sztucznej inteligencji. Dla studentów, dla przedsiębiorców, dla tych którzy budują przyszłość. Teraz jest czas na odważny krok w nowy rynek. Jeśli roboty to Twoja przyszłość, to jest Twoje miejsce.",
  },
  {
    question: "Czy wstęp jest płatny?",
    answer:
      "Nie. Wystarczy zarezerwować miejsce przez formularz i pojawić się na czas.",
  },
  {
    question: "Gdzie i kiedy?",
    answer:
      "29 kwietnia 2026, godz. 14:00, Politechnika Warszawska, Gmach Główny, Mała Aula.",
  },
  {
    question: "Jak długo to potrwa?",
    answer:
      "Około 2 godziny. Keynote Edwarda Warchockiego, sesja Q&A, networking z innymi uczestnikami.",
  },
  {
    question: "Czy mogę zadawać pytania?",
    answer:
      "Tak. Dedykowana sesja Q&A Twoja szansa na rozmowę z Edwardem i innymi gośćmi.",
  },
  {
    question: "Czy będzie nagranie?",
    answer:
      "Nagrywamy fragmenty aby podzielić się z innymi. Ale żeby poczuć całą energię eventu i nawiązać kontakty, trzeba być na żywo.",
  },
]

export function FAQSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      id="faq"
      className="relative pt-32 pb-40 px-6"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gradient-mid/6 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-gradient-start mb-6">
            <span className="w-8 h-px bg-gradient-to-r from-gradient-start to-gradient-mid" />
            FAQ
            <span className="w-8 h-px bg-gradient-to-l from-gradient-end to-gradient-mid" />
          </span>
          <h2 className="font-display uppercase text-3xl md:text-4xl tracking-tight mb-6 text-foreground" style={{ letterSpacing: "-0.02em" }}>
            PYTANIA? ODPOWIEDZI.
          </h2>
          <p className="text-lg text-muted-foreground">
            Wszystko, co musisz wiedzieć w pigułce.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`pb-2 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-card data-[state=open]:border-gradient-start/25 transition-all duration-300 hover:border-gradient-start/15"
                style={{
                  transitionDelay: isVisible ? `${(index + 1) * 50}ms` : '0ms',
                }}
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline py-6 text-foreground [&[data-state=open]>svg]:text-gradient-start">
                  <span className="flex items-center gap-4">
                    <span className="text-sm text-gradient-start font-bold">0{index + 1}</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-10 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
