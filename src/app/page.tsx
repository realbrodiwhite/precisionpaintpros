
'use client'

import Contact from '@/components/home/contact'
import Hero from '@/components/home/hero'
import LimitedTimeOffer from '@/components/home/limited-time-offer'
import Services from '@/components/home/services'
import Testimonials from '@/components/home/testimonials'
import PromotionalBanner from '@/components/home/promotional-banner'


 export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen fade-in">
      <Hero />
      <LimitedTimeOffer />
      <Services />
      <PromotionalBanner />
      <Testimonials />
      <Contact />
    </div>
  )
}

