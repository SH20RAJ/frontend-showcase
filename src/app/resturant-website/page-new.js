"use client"

import { useState, useEffect, useRef } from 'react'
import './styles.css'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
    Star,
    Clock,
    MapPin,
    Phone,
    Mail,
    ChefHat,
    Utensils,
    Wine,
    Coffee,
    Instagram,
    Facebook,
    Twitter,
    Quote,
    Award,
    Users,
    Calendar,
    ArrowRight,
    Menu,
    X,
    Play,
    Heart,
    Sparkles,
    Crown,
    Zap,
    Globe,
    BookOpen,
    Gift,
    Flame,
    Mountain,
    Mic,
    Shield,
    Leaf
} from 'lucide-react'

export default function RestaurantWebsite() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('mousemove', handleMouseMove)
        
        // Auto-advance hero slides
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3)
        }, 5000)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('mousemove', handleMouseMove)
            clearInterval(slideInterval)
        }
    }, [])

    const heroSlides = [
        {
            title: "Culinary Excellence",
            subtitle: "Where Art Meets Flavor",
            description: "Experience an extraordinary journey through taste, crafted by world-renowned chefs",
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            cta: "Begin Your Journey"
        },
        {
            title: "Michelin-Starred",
            subtitle: "Dining Experience", 
            description: "Three-star excellence with every dish, creating memories that last a lifetime",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            cta: "Reserve Now"
        },
        {
            title: "Artisanal Mastery",
            subtitle: "Handcrafted Perfection",
            description: "Every element carefully curated to deliver an unparalleled dining symphony",
            image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            cta: "Discover More"
        }
    ]

    const menuCategories = [
        {
            category: "Signature Creations",
            icon: Crown,
            color: "from-amber-400 to-orange-500",
            items: [
                { 
                    name: "Wagyu Tenderloin Symphony", 
                    description: "Grade A5 Wagyu with truffle foam, roasted bone marrow, and seasonal microgreens", 
                    price: "$185",
                    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    dietary: ["gluten-free"]
                },
                { 
                    name: "Ocean Treasure Platter", 
                    description: "Fresh lobster, sea urchin, caviar service with champagne pearls and citrus caviar", 
                    price: "$145",
                    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    dietary: ["pescatarian"]
                },
                { 
                    name: "Garden of Eden", 
                    description: "Molecular gastronomy vegetable tasting with edible flowers and herb essences", 
                    price: "$95",
                    image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                    dietary: ["vegan", "gluten-free"]
                }
            ]
        },
        {
            category: "Artisanal Appetizers",
            icon: Sparkles,
            color: "from-emerald-400 to-teal-500",
            items: [
                { 
                    name: "Golden Truffle Arancini", 
                    description: "Crispy saffron risotto spheres with black truffle and aged parmesan", 
                    price: "$28",
                    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                { 
                    name: "Tuna Tataki Perfection", 
                    description: "Sesame-crusted yellowfin with wasabi aioli and pickled daikon", 
                    price: "$32",
                    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
            ]
        },
        {
            category: "Divine Desserts",
            icon: Gift,
            color: "from-purple-400 to-pink-500",
            items: [
                { 
                    name: "Chocolate Nebula", 
                    description: "Dark chocolate sphere with surprise center, gold dust, and raspberry pearls", 
                    price: "$24",
                    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                { 
                    name: "Levitating Tiramisu", 
                    description: "Deconstructed tiramisu with coffee caviar and mascarpone clouds", 
                    price: "$22",
                    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
            ]
        }
    ]

    const experiences = [
        {
            title: "Chef Table",
            description: "An intimate 8-course journey with our Michelin-starred chef",
            price: "From $295",
            duration: "3.5 hours",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Wine Pairing", "Meet the Chef", "Exclusive Menu"]
        },
        {
            title: "Wine Cellar Experience",
            description: "Private dining in our 200-year-old wine cellar",
            price: "From $195",
            duration: "2.5 hours", 
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Sommelier Guide", "Rare Vintages", "Private Setting"]
        },
        {
            title: "Rooftop Garden",
            description: "Al fresco dining surrounded by our organic herb garden",
            price: "From $125",
            duration: "2 hours",
            image: "https://images.unsplash.com/photo-1559329007-40df8213de32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            features: ["Garden Tour", "Fresh Herbs", "City Views"]
        }
    ]

    const testimonials = [
        {
            name: "James Morrison",
            role: "Food Critic, Michelin Guide",
            content: "Absolutely transcendent. This restaurant redefines fine dining with every single dish. A masterpiece.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
        {
            name: "Sophie Chen",
            role: "Celebrity Chef",
            content: "The artistry and precision here is unmatched. Every bite tells a story of passion and excellence.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108755-2616b332c4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
        {
            name: "Alexander Kane",
            role: "Luxury Travel Blogger",
            content: "This is not just dinner - it is a journey through culinary perfection. Absolutely unforgettable.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        }
    ]

    const stats = [
        { number: "3", label: "Michelin Stars", icon: Star },
        { number: "12", label: "Years Excellence", icon: Award },
        { number: "50K+", label: "Happy Guests", icon: Heart },
        { number: "15", label: "Master Chefs", icon: ChefHat }
    ]

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Menu", href: "#menu" },
        { name: "Experience", href: "#experience" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" }
    ]

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Cursor Follower */}
            <div 
                className="cursor-follower"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
            />

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
            }`}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-light tracking-wider">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                                LUMIÈRE
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white/80 hover:text-white transition-colors duration-300 relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-300 transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        <Button className="hidden md:block bg-gradient-to-r from-yellow-400 to-orange-300 text-black hover:from-yellow-500 hover:to-orange-400 transition-all duration-300">
                            Reserve Table
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ${
                    isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden bg-black/95 backdrop-blur-xl`}>
                    <div className="container mx-auto px-6 py-4 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block text-white/80 hover:text-white transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-300 text-black">
                            Reserve Table
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Slides */}
                <div className="absolute inset-0">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/50" />
                        </div>
                    ))}
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <div className="mb-6">
                        <Crown className="w-16 h-16 mx-auto text-yellow-400 mb-4 animate-pulse" />
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-extralight mb-6 leading-tight">
                        <span className="block overflow-hidden">
                            <span className="block transform translate-y-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                {heroSlides[currentSlide].title}
                            </span>
                        </span>
                        <span className="block text-2xl md:text-4xl text-yellow-400 font-light overflow-hidden">
                            <span className="block transform translate-y-full animate-slide-up" style={{ animationDelay: '0.4s' }}>
                                {heroSlides[currentSlide].subtitle}
                            </span>
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white/80 mb-12 font-light max-w-2xl mx-auto overflow-hidden">
                        <span className="block transform translate-y-full animate-slide-up" style={{ animationDelay: '0.6s' }}>
                            {heroSlides[currentSlide].description}
                        </span>
                    </p>
                    
                    <div className="space-x-4 overflow-hidden">
                        <Button 
                            size="lg" 
                            className="bg-gradient-to-r from-yellow-400 to-orange-300 text-black hover:from-yellow-500 hover:to-orange-400 px-8 py-3 text-lg transform translate-y-full animate-slide-up"
                            style={{ animationDelay: '0.8s' }}
                        >
                            {heroSlides[currentSlide].cta}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg transform translate-y-full animate-slide-up"
                            style={{ animationDelay: '1s' }}
                        >
                            <Play className="mr-2 w-5 h-5" />
                            Watch Story
                        </Button>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide === index ? 'bg-yellow-400' : 'bg-white/30'
                            }`}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 right-8 text-white/60">
                    <div className="flex flex-col items-center">
                        <span className="text-sm mb-2 transform rotate-90 origin-center">Scroll</span>
                        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-4">
                                    <stat.icon className="w-12 h-12 mx-auto text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-white/60 text-sm uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-extralight mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                                Culinary
                            </span>
                            {" "}Artistry
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Each dish is a masterpiece, crafted with the finest ingredients and innovative techniques
                        </p>
                    </div>

                    <div className="space-y-20">
                        {menuCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="relative">
                                <div className="flex items-center justify-center mb-12">
                                    <div className={`p-4 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                                        <category.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-light text-white">
                                        {category.category}
                                    </h3>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {category.items.map((item, itemIndex) => (
                                        <Card key={itemIndex} className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-500 group overflow-hidden backdrop-blur-sm">
                                            <div className="relative overflow-hidden">
                                                <AspectRatio ratio={16/9}>
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.name}
                                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                </AspectRatio>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                                <div className="absolute top-4 right-4">
                                                    <Badge className="bg-yellow-400 text-black">{item.price}</Badge>
                                                </div>
                                                {item.dietary && (
                                                    <div className="absolute bottom-4 left-4 flex space-x-2">
                                                        {item.dietary.map((diet, i) => (
                                                            <Badge key={i} variant="outline" className="border-white/30 text-white/80 text-xs">
                                                                {diet === 'vegan' && <Leaf className="w-3 h-3 mr-1" />}
                                                                {diet === 'gluten-free' && <Shield className="w-3 h-3 mr-1" />}
                                                                {diet === 'pescatarian' && <Mountain className="w-3 h-3 mr-1" />}
                                                                {diet}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <CardContent className="p-6">
                                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                                                    {item.name}
                                                </h4>
                                                <p className="text-white/70 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-24 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-extralight mb-6">
                            Exclusive
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                                {" "}Experiences
                            </span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Immerse yourself in unforgettable dining journeys crafted for the most discerning palates
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {experiences.map((experience, index) => (
                            <Card key={index} className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 group overflow-hidden backdrop-blur-sm">
                                <div className="relative overflow-hidden">
                                    <AspectRatio ratio={4/3}>
                                        <img 
                                            src={experience.image} 
                                            alt={experience.title}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </AspectRatio>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-white text-black">{experience.duration}</Badge>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                                        {experience.title}
                                    </h3>
                                    <p className="text-white/70 mb-4 leading-relaxed">
                                        {experience.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {experience.features.map((feature, i) => (
                                            <Badge key={i} variant="outline" className="border-yellow-400/30 text-yellow-400">
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-light text-yellow-400">{experience.price}</span>
                                        <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500">
                                            Book Now
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-extralight mb-6">
                            What Critics
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                                {" "}Say
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="bg-gray-900/30 border-gray-800 hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <Quote className="w-8 h-8 text-yellow-400 mb-4" />
                                    <p className="text-white/80 text-lg leading-relaxed mb-6 italic">
                                        &quot;{testimonial.content}&quot;
                                    </p>
                                    <div className="flex items-center">
                                        <Avatar className="w-12 h-12 mr-4">
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-semibold text-white">{testimonial.name}</div>
                                            <div className="text-sm text-white/60">{testimonial.role}</div>
                                            <div className="flex mt-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-gradient-to-t from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-extralight mb-8">
                                Reserve Your
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                                    {" "}Table
                                </span>
                            </h2>
                            <p className="text-xl text-white/70 mb-8 leading-relaxed">
                                Step into a world where culinary artistry meets unparalleled service. 
                                Every reservation is an invitation to experience the extraordinary.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-full flex items-center justify-center mr-4">
                                        <MapPin className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Location</h4>
                                        <p className="text-white/70">123 Culinary Avenue, Gourmet District</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-full flex items-center justify-center mr-4">
                                        <Phone className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Reservations</h4>
                                        <p className="text-white/70">+1 (555) 123-DINE</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-full flex items-center justify-center mr-4">
                                        <Clock className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Hours</h4>
                                        <p className="text-white/70">Tue-Sat: 6:00 PM - 11:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-4 mt-8">
                                <Button className="bg-gradient-to-r from-yellow-400 to-orange-300 text-black hover:from-yellow-500 hover:to-orange-400 px-8 py-3">
                                    Make Reservation
                                </Button>
                                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                                    Private Events
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Restaurant Interior"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-full flex items-center justify-center">
                                <Crown className="w-16 h-16 text-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-gray-800 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="text-2xl font-light tracking-wider mb-4">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                                    LUMIÈRE
                                </span>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Where culinary excellence meets artistic expression. A three-Michelin-starred journey through taste.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                            <div className="space-y-2">
                                {navItems.map((item) => (
                                    <a key={item.name} href={item.href} className="block text-white/60 hover:text-white transition-colors duration-300 text-sm">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Experiences</h4>
                            <div className="space-y-2 text-sm text-white/60">
                                <p>Chef Table</p>
                                <p>Wine Cellar Dining</p>
                                <p>Private Events</p>
                                <p>Culinary Classes</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300">
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <Separator className="bg-gray-800 mb-8" />
                    
                    <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
                        <p>&copy; 2024 Lumière Restaurant. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
