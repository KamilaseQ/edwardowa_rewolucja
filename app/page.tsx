"use client"

import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import { PartnersSection } from "@/components/landing/partners-section"
import { SpeakerSection } from "@/components/landing/speaker-section"
import { WhySection } from "@/components/landing/why-section"
import { OrganizersSection } from "@/components/landing/organizers-section"
import { FAQSection } from "@/components/landing/faq-section"
import { SignupSection } from "@/components/landing/signup-section"
import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PartnersSection />
      <SpeakerSection />
      <AboutSection />
      <WhySection />
      <OrganizersSection />
      <FAQSection />
      <SignupSection />
      <Footer />
    </main>
  )
}
