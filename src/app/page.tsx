
'use client'

import { useEffect, useRef } from 'react'
import { ContactSection } from '@/components/home/contact-section'
import { HeroSection } from '@/components/home/hero-section'
import { LimitedTimeOfferSection as LimitedTimeOffer } from '@/components/home/limited-time-offer-section' // Corrected import
import { PromotionalBanner } from '@/components/home/promotional-banner'
import { ServicesSection } from '@/components/home/services-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import Image from 'next/image';


 export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    if (heroRef.current) observer.observe(heroRef.current)
    if (servicesRef.current) observer.observe(servicesRef.current)
    if (contactRef.current) observer.observe(contactRef.current)
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
      if (servicesRef.current) observer.unobserve(servicesRef.current)
      if (contactRef.current) observer.unobserve(contactRef.current)
    }
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection/>
      <LimitedTimeOffer />
      <ServicesSection ref={servicesRef} />
      <PromotionalBanner />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

