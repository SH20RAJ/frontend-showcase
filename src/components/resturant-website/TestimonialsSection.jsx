"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote, ThumbsUp, Calendar, MapPin, Camera, Play, ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialsSection() {
    const [currentReview, setCurrentReview] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [autoplay, setAutoplay] = useState(true)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                setCurrentReview((prev) => (prev + 1) % testimonials.length)
            }, 5000)
            return () => clearInterval(interval)
        }
    }, [autoplay])

    const testimonials = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "Food Critic",
            company: "Michelin Guide",
            rating: 5,
            review: "An absolutely transcendent dining experience. Every dish was a masterpiece of flavor, technique, and presentation. The 9-course tasting menu took us on a journey through innovative interpretations of classic cuisine. This restaurant deserves every accolade it receives.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            date: "2 weeks ago",
            location: "New York, NY",
            verified: true,
            helpful: 247,
            photos: 3
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "Executive Chef",
            company: "Le Bernardin",
            rating: 5,
            review: "As a fellow chef, I'm incredibly impressed by the innovation and execution here. The way they balance molecular gastronomy with classical French techniques is remarkable. The wagyu wellington was perfection on a plate. A true inspiration for any culinary professional.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            date: "1 month ago",
            location: "Manhattan, NY",
            verified: true,
            helpful: 189,
            photos: 5
        },
        {
            id: 3,
            name: "Emma Thompson",
            role: "Food Blogger",
            company: "@EmmaEats",
            rating: 5,
            review: "Celebrating our anniversary here was the perfect choice. The ambiance is romantic yet sophisticated, and the service was impeccable. Every course surprised and delighted us. The chocolate soufflé finale was absolutely divine. Already planning our next visit!",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            date: "3 weeks ago",
            location: "Brooklyn, NY",
            verified: true,
            helpful: 156,
            photos: 8
        },
        {
            id: 4,
            name: "James Wilson",
            role: "Wine Sommelier",
            company: "Wine Spectator",
            rating: 5,
            review: "The wine pairing program here is extraordinary. Their sommelier's knowledge and passion shine through every recommendation. The vertical tasting of Burgundy paired with the seasonal menu was a once-in-a-lifetime experience. Exceptional cellar selection.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            date: "1 week ago",
            location: "Manhattan, NY",
            verified: true,
            helpful: 203,
            photos: 2
        },
        {
            id: 5,
            name: "Isabella Martinez",
            role: "Travel Writer",
            company: "Condé Nast",
            rating: 5,
            review: "Having dined at Michelin-starred restaurants worldwide, I can confidently say this ranks among the very best. The attention to detail is remarkable - from the artisanal bread to the petit fours. This is destination dining at its finest.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            date: "2 months ago",
            location: "Los Angeles, CA",
            verified: true,
            helpful: 324,
            photos: 12
        }
    ]

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % testimonials.length)
        setAutoplay(false)
    }

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setAutoplay(false)
    }

    const currentTestimonial = testimonials[currentReview]

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-amber-100 to-orange-100 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm">
                        <Star className="w-4 h-4 mr-2 text-amber-600" />
                        Guest Reviews
                    </Badge>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        What Our Guests
                        <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent block">
                            Are Saying
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what food critics, industry professionals,
                        and guests have to say about their dining experience.
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className={`max-w-5xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <Card className="bg-white/70 backdrop-blur-lg border-0 shadow-2xl overflow-hidden">
                        <CardContent className="p-12">
                            <div className="flex flex-col lg:flex-row items-start gap-8">
                                {/* Quote and Content */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <Quote className="h-12 w-12 text-amber-500 opacity-50" />
                                        <div className="flex items-center space-x-1">
                                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                    </div>

                                    <blockquote className="text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed italic">
                                        "{currentTestimonial.review}"
                                    </blockquote>

                                    {/* Review Metadata */}
                                    <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {currentTestimonial.date}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            {currentTestimonial.location}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <ThumbsUp className="h-4 w-4 mr-2" />
                                            {currentTestimonial.helpful} helpful
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Camera className="h-4 w-4 mr-2" />
                                            {currentTestimonial.photos} photos
                                        </div>
                                    </div>
                                </div>

                                {/* Author Info */}
                                <div className="lg:w-80 space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="h-16 w-16 ring-4 ring-amber-100">
                                            <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                                            <AvatarFallback className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-lg font-semibold">
                                                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <h4 className="text-lg font-bold text-gray-900">{currentTestimonial.name}</h4>
                                                {currentTestimonial.verified && (
                                                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                                                        Verified
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="text-sm font-medium text-amber-600">{currentTestimonial.role}</p>
                                            <p className="text-sm text-gray-600">{currentTestimonial.company}</p>
                                        </div>
                                    </div>

                                    {/* Navigation Controls */}
                                    <div className="flex items-center justify-between pt-4">
                                        <div className="flex space-x-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={prevReview}
                                                className="hover:bg-amber-50 hover:border-amber-200"
                                            >
                                                <ChevronLeft className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={nextReview}
                                                className="hover:bg-amber-50 hover:border-amber-200"
                                            >
                                                <ChevronRight className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        <div className="flex space-x-2">
                                            {testimonials.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setCurrentReview(index)
                                                        setAutoplay(false)
                                                    }}
                                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReview
                                                        ? 'bg-amber-500 scale-125'
                                                        : 'bg-gray-300 hover:bg-gray-400'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Review Stats */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="text-center">
                        <div className="text-4xl font-black text-gray-900 mb-2">4.9</div>
                        <div className="flex justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <div className="text-sm text-gray-600">Average Rating</div>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-black text-gray-900 mb-2">2,847</div>
                        <div className="text-sm text-gray-600">Total Reviews</div>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-black text-gray-900 mb-2">98%</div>
                        <div className="text-sm text-gray-600">Would Recommend</div>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-black text-gray-900 mb-2">24</div>
                        <div className="text-sm text-gray-600">Industry Awards</div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Own Experience?</h3>
                        <p className="text-gray-600 mb-6">Join thousands of satisfied guests and experience what makes us special.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-amber-600 to-orange-500 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg"
                            >
                                Make a Reservation
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-amber-200 hover:bg-amber-50 px-8 py-6 text-lg"
                            >
                                View All Reviews
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
