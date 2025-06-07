"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Mail, Clock, Heart, Instagram, Facebook, Twitter, Youtube, ArrowUp, Award, Crown, Star, ChefHat } from 'lucide-react'

export function Footer() {
    const [email, setEmail] = useState('')
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const footerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (footerRef.current) {
            observer.observe(footerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 1000)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleNewsletterSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for subscribing to our newsletter!')
        setEmail('')
    }

    const quickLinks = [
        { name: 'Menu', href: '#menu' },
        { name: 'Reservations', href: '#reservations' },
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Gift Cards', href: '#gift-cards' },
        { name: 'Careers', href: '#careers' }
    ]

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Cookie Policy', href: '/cookies' }
    ]

    const socialLinks = [
        { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
        { icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-400' },
        { icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
        { icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-400' }
    ]

    const awards = [
        { icon: Crown, title: 'Michelin 3-Star' },
        { icon: Award, title: 'James Beard Award' },
        { icon: Star, title: 'AAA Five Diamond' },
        { icon: ChefHat, title: "World's 50 Best" }
    ]

    return (
        <>
            <footer ref={footerRef} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                    {/* Newsletter Section */}
                    <div className={`border-b border-white/10 py-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto text-center">
                                <h3 className="text-4xl font-bold text-white mb-4">
                                    Stay Connected
                                </h3>
                                <p className="text-xl text-gray-300 mb-8">
                                    Subscribe to our newsletter for exclusive events, seasonal menus, and culinary insights from our chefs.
                                </p>

                                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-400 py-6"
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-8 py-6 font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Main Footer Content */}
                    <div className={`py-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                {/* Restaurant Info */}
                                <div className="lg:col-span-2">
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-black text-white mb-4">
                                            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                                                Lumière
                                            </span>
                                        </h2>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            Where culinary artistry meets exceptional service. For over two decades,
                                            we've been creating unforgettable dining experiences that celebrate the
                                            finest in French cuisine and hospitality.
                                        </p>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl">
                                                <MapPin className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold">Address</h4>
                                                <p className="text-gray-300">123 Fine Dining Avenue, Manhattan, NY 10001</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                                                <Phone className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold">Phone</h4>
                                                <p className="text-gray-300">+1 (555) 123-4567</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl">
                                                <Mail className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold">Email</h4>
                                                <p className="text-gray-300">info@lumiere-restaurant.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                                                <Clock className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold">Hours</h4>
                                                <div className="text-gray-300 text-sm">
                                                    <p>Tue-Thu: 5:00 PM - 11:00 PM</p>
                                                    <p>Fri-Sat: 5:00 PM - 12:00 AM</p>
                                                    <p>Sun: 5:00 PM - 10:00 PM</p>
                                                    <p className="text-amber-400">Closed Mondays</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                                    <ul className="space-y-3">
                                        {quickLinks.map((link) => (
                                            <li key={link.name}>
                                                <a
                                                    href={link.href}
                                                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Awards & Social */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-6">Awards & Recognition</h3>
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {awards.map((award, index) => (
                                            <div key={index} className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                                                <award.icon className="h-8 w-8 mx-auto mb-2 text-amber-400" />
                                                <p className="text-xs text-gray-300 font-medium">{award.title}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                                    <div className="flex space-x-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 text-gray-300 ${social.color}`}
                                            >
                                                <social.icon className="h-5 w-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Separator className="bg-white/10" />

                    {/* Bottom Footer */}
                    <div className={`py-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <Heart className="h-4 w-4 text-red-400" />
                                    <span>© 2025 Lumière Restaurant. Made with passion in New York.</span>
                                </div>

                                <div className="flex flex-wrap justify-center gap-6">
                                    {legalLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
                >
                    <ArrowUp className="h-6 w-6" />
                </button>
            )}
        </>
    )
}
