"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, CalendarDays, MapPin, Phone, Mail, Clock, Users, Car, Wifi, Utensils, Wine, Music, Gift, Camera, Heart, Star } from 'lucide-react'

export function ReservationSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
        requests: ''
    })
    const [isVisible, setIsVisible] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
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

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        alert('Reservation request submitted successfully! We will contact you shortly to confirm.')
        setIsSubmitting(false)
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: '',
            occasion: '',
            requests: ''
        })
    }

    const timeSlots = [
        '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
        '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
    ]

    const occasions = [
        'Regular Dining', 'Anniversary', 'Birthday', 'Business Dinner',
        'Date Night', 'Celebration', 'Proposal', 'Family Gathering'
    ]

    const amenities = [
        { icon: Car, title: 'Valet Parking', description: 'Complimentary valet service' },
        { icon: Wifi, title: 'Free WiFi', description: 'High-speed internet access' },
        { icon: Wine, title: 'Sommelier Service', description: 'Expert wine pairings' },
        { icon: Music, title: 'Live Music', description: 'Jazz ensemble weekends' },
        { icon: Camera, title: 'Private Dining', description: 'Intimate spaces available' },
        { icon: Gift, title: 'Special Events', description: 'Customized celebrations' }
    ]

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-amber-500/10 to-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm border-white/20 text-white">
                        <CalendarDays className="w-4 h-4 mr-2 text-amber-400" />
                        Reserve Your Table
                    </Badge>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Book Your
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent block">
                            Unforgettable Experience
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Secure your table at one of the world's most sought-after dining destinations.
                        Every reservation includes our signature welcome experience and personalized service.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Reservation Form */}
                    <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
                            <CardContent className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold text-white">Make a Reservation</h3>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-white">Full Name *</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="Your full name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-400"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-white">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-400"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+1 (555) 123-4567"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-400"
                                            required
                                        />
                                    </div>

                                    {/* Reservation Details */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="date" className="text-white">Preferred Date *</Label>
                                            <Input
                                                id="date"
                                                type="date"
                                                value={formData.date}
                                                onChange={(e) => handleInputChange('date', e.target.value)}
                                                className="bg-white/10 border-white/20 text-white focus:border-amber-400"
                                                min={new Date().toISOString().split('T')[0]}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="time" className="text-white">Preferred Time *</Label>
                                            <Select onValueChange={(value) => handleInputChange('time', value)} required>
                                                <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-amber-400">
                                                    <SelectValue placeholder="Select time" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {timeSlots.map((time) => (
                                                        <SelectItem key={time} value={time}>{time}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="guests" className="text-white">Number of Guests *</Label>
                                            <Select onValueChange={(value) => handleInputChange('guests', value)} required>
                                                <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-amber-400">
                                                    <SelectValue placeholder="Select guests" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {[...Array(12)].map((_, i) => (
                                                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                                                            {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="occasion" className="text-white">Special Occasion</Label>
                                            <Select onValueChange={(value) => handleInputChange('occasion', value)}>
                                                <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-amber-400">
                                                    <SelectValue placeholder="Select occasion" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {occasions.map((occasion) => (
                                                        <SelectItem key={occasion} value={occasion}>{occasion}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="requests" className="text-white">Special Requests</Label>
                                        <Textarea
                                            id="requests"
                                            placeholder="Dietary restrictions, seating preferences, celebration details..."
                                            value={formData.requests}
                                            onChange={(e) => handleInputChange('requests', e.target.value)}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-400 min-h-[100px]"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span>Processing...</span>
                                            </div>
                                        ) : (
                                            'Confirm Reservation'
                                        )}
                                    </Button>

                                    <p className="text-sm text-gray-400 text-center">
                                        We'll send you a confirmation email within 24 hours
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Restaurant Information & Amenities */}
                    <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        {/* Contact Information */}
                        <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Visit Us</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl">
                                            <MapPin className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Address</h4>
                                            <p className="text-gray-300">123 Fine Dining Avenue<br />Manhattan, NY 10001</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                                            <Phone className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Phone</h4>
                                            <p className="text-gray-300">+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Email</h4>
                                            <p className="text-gray-300">reservations@restaurant.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                                            <Clock className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Hours</h4>
                                            <div className="text-gray-300 space-y-1">
                                                <p>Monday - Thursday: 5:00 PM - 11:00 PM</p>
                                                <p>Friday - Saturday: 5:00 PM - 12:00 AM</p>
                                                <p>Sunday: 5:00 PM - 10:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Amenities */}
                        <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    {amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                                            <amenity.icon className="h-6 w-6 text-amber-400" />
                                            <div>
                                                <h4 className="text-white font-medium text-sm">{amenity.title}</h4>
                                                <p className="text-gray-400 text-xs">{amenity.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="outline"
                                className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 py-6"
                            >
                                <Calendar className="h-5 w-5 mr-2" />
                                View Availability
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 py-6"
                            >
                                <Users className="h-5 w-5 mr-2" />
                                Private Events
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
