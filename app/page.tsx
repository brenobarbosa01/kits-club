'use client'

import { Header } from '@/components/sections/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { UrgencyBanner } from '@/components/sections/UrgencyBanner'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ComparisonSection } from '@/components/sections/ComparisonSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      <HeroSection />
      <UrgencyBanner />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <SocialProofSection />
      <StatsSection />
      <ComparisonSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FAQSection />
      <NewsletterSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}