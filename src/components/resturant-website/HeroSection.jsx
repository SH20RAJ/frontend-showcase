"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, ArrowRight, Sparkles, Crown, Star, MapPin, Clock } from 'lucide-react'

export function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const heroRef = useRef(null)

    const heroSlides = [
        {
            title: "Culinary Artistry Redefined",
            subtitle: "Where Innovation Meets Tradition",
            description: "Experience a symphony of flavors crafted by world-renowned chefs using the finest ingredients",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
            accent: "from-amber-600 to-orange-500"
        },
        {
            title: "A Journey Through Taste",
            subtitle: "Michelin-Starred Excellence",
            description: "Immerse yourself in an unforgettable dining experience that transcends ordinary cuisine",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=1080&fit=crop",
            accent: "from-rose-600 to-pink-500"
        },
        {
            title: "Elevated Dining Experience",
            subtitle: "Where Every Meal is a Masterpiece",
            description: "Discover the perfect harmony of ambiance, service, and extraordinary culinary craftsmanship",
            image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&h=1080&fit=crop",
            accent: "from-violet-600 to-purple-500"
        }
    ]

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect()
                setMousePosition({
                    x: (e.clientX - rect.left) / rect.width,
                    y: (e.clientY - rect.top) / rect.height
                })
            }
        }

        const heroElement = heroRef.current
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove)
            return () => heroElement.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const currentSlideData = heroSlides[currentSlide]

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
            }}
        >
            {/* Dynamic Background with Parallax */}
            <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-1000"
                    style={{
                        backgroundImage: `url(${currentSlideData.image})`,
                        transform: `scale(1.1) translateX(${mousePosition.x * 20 - 10}px) translateY(${mousePosition.y * 20 - 10}px)`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentSlideData.accent} opacity-20 mix-blend-overlay`} />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Status Badge */}
                <div className=" mt-40 animate-fade-in-up">
                    <Badge
                        variant="outline"
                        className="bg-white/10 backdrop-blur-md border-white/20 text-white px-6 py-2 text-sm font-medium hover:bg-white/20 transition-all duration-300"
                    >
                        <Crown className="w-4 h-4 mr-2 text-amber-400" />
                        Michelin 3-Star Excellence
                    </Badge>
                </div>

                {/* Main Heading */}
                <div className="mb-8 space-y-4">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight animate-fade-in-up">
                        <span className={`bg-gradient-to-r ${currentSlideData.accent} bg-clip-text text-transparent`}>
                            {currentSlideData.title.split(' ')[0]}
                        </span>
                        <br />
                        <span className="text-white/90">
                            {currentSlideData.title.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>

                    <h2 className={`text-2xl md:text-3xl font-light bg-gradient-to-r ${currentSlideData.accent} bg-clip-text text-transparent animate-fade-in-up delay-200`}>
                        {currentSlideData.subtitle}
                    </h2>
                </div>

                {/* Description */}
                <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
                    {currentSlideData.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-500">
                    <Button
                        size="lg"
                        className={`bg-gradient-to-r ${currentSlideData.accent} hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl group`}
                    >
                        Reserve Your Table
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg transition-all duration-300 group"
                        onClick={() => setIsVideoPlaying(true)}
                    >
                        <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Watch Our Story
                    </Button>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-700">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-center mb-3">
                            <Star className="h-6 w-6 text-amber-400 mr-2" />
                            <span className="text-white font-semibold">5.0 Rating</span>
                        </div>
                        <p className="text-white/70 text-sm">Based on 2,847 reviews</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-center mb-3">
                            <MapPin className="h-6 w-6 text-blue-400 mr-2" />
                            <span className="text-white font-semibold">Prime Location</span>
                        </div>
                        <p className="text-white/70 text-sm">Downtown Manhattan</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-center mb-3">
                            <Clock className="h-6 w-6 text-emerald-400 mr-2" />
                            <span className="text-white font-semibold">Open Daily</span>
                        </div>
                        <p className="text-white/70 text-sm">5:00 PM - 12:00 AM</p>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex space-x-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white/40 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    )
}
