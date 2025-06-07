"use client"

import './styles.css'
import { Navigation } from '@/components/resturant-website/Navigation'
import { HeroSection } from '@/components/resturant-website/HeroSection'
import { AboutSection } from '@/components/resturant-website/AboutSection'
import { MenuSection } from '@/components/resturant-website/MenuSection'
import { TestimonialsSection } from '@/components/resturant-website/TestimonialsSection'
import { ReservationSection } from '@/components/resturant-website/ReservationSection'
import { Footer } from '@/components/resturant-website/Footer'
import { AIAssistant } from '@/components/resturant-website/AIAssistant'
// import { PerformanceMonitor } from '@/components/resturant-website/PerformanceMonitor'

export default function RestaurantWebsite() {
    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            {/* Revolutionary Background Effects */}
            <div className="quantum-bg"></div>
            <div className="neural-pattern"></div>
            
            {/* Navigation */}
            <Navigation />

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <div id="about">
                <AboutSection />
            </div>

            {/* Menu Section */}
            <div id="menu">
                <MenuSection />
            </div>

            {/* Testimonials Section */}
            <div id="reviews">
                <TestimonialsSection />
            </div>

            {/* Reservation Section */}
            <div id="reservations">
                <ReservationSection />
            </div>

            {/* Footer */}
            <Footer />
            
            {/* Revolutionary AI Assistant */}
            <AIAssistant />
        </div>
    )
}
