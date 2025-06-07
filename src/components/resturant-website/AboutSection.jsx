"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChefHat, Award, Users, Clock, Utensils, Wine, Coffee, Leaf, Flame, Crown } from 'lucide-react'

export function AboutSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const achievements = [
        { icon: Crown, number: "3", label: "Michelin Stars", color: "text-amber-500" },
        { icon: Award, number: "25+", label: "International Awards", color: "text-purple-500" },
        { icon: Users, number: "50K+", label: "Happy Guests", color: "text-blue-500" },
        { icon: ChefHat, number: "15", label: "Master Chefs", color: "text-emerald-500" }
    ]

    const features = [
        {
            icon: Leaf,
            title: "Farm-to-Table Philosophy",
            description: "We source ingredients directly from local organic farms, ensuring the freshest and most sustainable dining experience.",
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            icon: Flame,
            title: "Innovative Culinary Techniques",
            description: "Our chefs employ cutting-edge molecular gastronomy and traditional methods to create extraordinary flavor profiles.",
            gradient: "from-red-500 to-orange-600"
        },
        {
            icon: Wine,
            title: "Curated Wine Selection",
            description: "Our sommelier has carefully selected over 500 wines from the world's finest vineyards to complement every dish.",
            gradient: "from-purple-500 to-pink-600"
        }
    ]

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm">
                        <Utensils className="w-4 h-4 mr-2 text-amber-600" />
                        Our Story
                    </Badge>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        Where Passion Meets
                        <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent block">
                            Perfection
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        For over two decades, we've been crafting extraordinary culinary experiences that celebrate the art of fine dining.
                        Our commitment to excellence has earned us recognition among the world's finest restaurants.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column - Image Collage */}
                    <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl group hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop"
                                        alt="Executive Chef"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="font-semibold">Chef Marcus Laurent</h4>
                                        <p className="text-sm text-white/80">Executive Chef</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl group hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
                                        alt="Restaurant Interior"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl group hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop"
                                        alt="Signature Dish"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl group hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&h=500&fit=crop"
                                        alt="Fine Dining Experience"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Decoration */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000" />
                    </div>

                    {/* Right Column - Content */}
                    <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                A Legacy of Culinary Excellence
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Founded in 2001 by renowned Chef Marcus Laurent, our restaurant has become a beacon of gastronomic innovation.
                                We believe that dining is not just about food—it's about creating memories, fostering connections, and celebrating life's precious moments.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Every dish tells a story, every ingredient is carefully selected, and every guest becomes part of our extended family.
                                Our commitment to sustainable practices and community support drives everything we do.
                            </p>
                        </div>

                        {/* Achievement Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {achievements.map((achievement, index) => (
                                <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <CardContent className="p-6 text-center">
                                        <achievement.icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color}`} />
                                        <div className="text-3xl font-black text-gray-900 mb-1">{achievement.number}</div>
                                        <div className="text-sm font-medium text-gray-600">{achievement.label}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-500 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg">
                            Meet Our Team
                        </Button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="space-y-12">
                    <h3 className={`text-4xl font-bold text-center text-gray-900 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        What Makes Us Unique
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className={`group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <CardContent className="p-8 text-center">
                                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
