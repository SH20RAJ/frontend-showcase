"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Menu, X, Star, Phone, Calendar, Crown, Mic, MicOff, Brain } from 'lucide-react'

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isVoiceActive, setIsVoiceActive] = useState(false)
    const [aiSuggestion, setAiSuggestion] = useState('')
    const [currentTime, setCurrentTime] = useState(new Date())

    // AI-powered navigation suggestions
    useEffect(() => {
        const suggestions = [
            "Best time to visit: 7:30 PM for optimal ambiance",
            "Chef's special tonight: Wagyu Tasting Menu",
            "Live jazz performance starts at 8:00 PM",
            "Wine pairing recommended for tonight's menu"
        ]

        const interval = setInterval(() => {
            const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)]
            setAiSuggestion(randomSuggestion)
        }, 8000)

        return () => clearInterval(interval)
    }, [])

    // Real-time clock
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Voice navigation (2025 feature)
    const toggleVoiceNavigation = () => {
        setIsVoiceActive(!isVoiceActive)
        if (!isVoiceActive) {
            // Simulate voice activation
            setTimeout(() => {
                setAiSuggestion("Voice navigation activated. Say 'Menu' or 'Reservations'")
            }, 500)
        }
    }

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Reservations', href: '#reservations' }
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-2xl'
                : 'bg-transparent'
            }`}>
            {/* AI Suggestion Banner */}
            {aiSuggestion && (
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-b border-purple-500/30 py-2 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <Brain className="h-4 w-4 text-purple-400 animate-pulse" />
                        <span className="text-sm text-purple-200">{aiSuggestion}</span>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                <Crown className="h-7 w-7 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                                <span className="text-xs text-white font-bold">3</span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white">
                                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                                    Lumière
                                </span>
                            </h1>
                            <div className="flex items-center space-x-1">
                                {[...Array(3)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                                ))}
                                <span className="text-xs text-amber-400 font-medium ml-1">Michelin</span>
                            </div>
                        </div>
                    </div>

                    {/* 2025 Real-time Status */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <div className="text-center">
                            <div className="text-sm text-emerald-400 font-semibold">OPEN NOW</div>
                            <div className="text-xs text-white/70">{currentTime.toLocaleTimeString()}</div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white hover:text-amber-400 transition-colors duration-300 font-medium text-lg relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/10 transition-all duration-300"
                        >
                            <Phone className="h-4 w-4 mr-2" />
                            Call
                        </Button>
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <Calendar className="h-4 w-4 mr-2" />
                            Reserve
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:bg-white/10 transition-all duration-300"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-white hover:text-amber-400 transition-colors duration-300 font-medium text-lg py-2"
                            >
                                {item.name}
                            </a>
                        ))}

                        <div className="pt-4 space-y-3 border-t border-white/10">
                            <Button
                                variant="outline"
                                className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Phone className="h-4 w-4 mr-2" />
                                Call Now
                            </Button>
                            <Button
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Calendar className="h-4 w-4 mr-2" />
                                Make Reservation
                            </Button>
                        </div>

                        {/* Mobile Status Badge */}
                        <div className="pt-4 border-t border-white/10">
                            <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
                                <Crown className="w-3 h-3 mr-1 text-amber-400" />
                                3-Star Michelin Restaurant
                            </Badge>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
