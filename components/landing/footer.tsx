"use client"

import { MapPin, Calendar, Mail, ArrowUpRight, Zap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gradient-start/20 bg-card/50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-gradient-start/15 via-gradient-mid/8 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-gradient-start" />
              <h3 className="font-display uppercase text-xl tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
                  CZŁOWIEKU! EDEK NA UCZELNI
                </span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Jedno wydarzenie. Jedna szansa. Jeden dzień, który zmieni Twoje spojrzenie na przyszłość.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://warchocki.pl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-gradient-start hover:text-foreground transition-colors"
              >
                warchocki.pl
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-gradient-mid/30">|</span>
              <a 
                href="https://merarobotics.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-gradient-mid hover:text-foreground transition-colors"
              >
                merarobotics.com
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Event details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gradient-start mb-4">
              Szczegóły wydarzenia
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-foreground/80 group">
                <Calendar className="w-4 h-4 text-gradient-start" />
                <span className="group-hover:text-foreground transition-colors">29 Kwietnia 2026</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/80 group">
                <MapPin className="w-4 h-4 text-gradient-mid" />
                <span className="group-hover:text-foreground transition-colors">Politechnika Warszawska</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gradient-end" />
                <a
                  href="mailto:kontakt@edwardowarewolucja.pl"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  kontakt@edwardowarewolucja.pl
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gradient-start mb-4">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {[
                { label: "O wydarzeniu", href: "#o-wydarzeniu" },
                { label: "Prelegent", href: "#prelegent" },
                { label: "FAQ", href: "#faq" },
                { label: "Zapisz się", href: "#zapisz-sie" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-gradient-start to-gradient-mid group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gradient-start/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground uppercase tracking-widest text-[10px]">
            © {currentYear} Edwardowa Rewolucja
          </p>
          <p className="text-sm text-foreground/50">
            350 miejsc. Zero powtórek. <span className="text-gradient-start font-semibold">Zapisz się, zanim znikną.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
