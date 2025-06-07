"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Heart, Share2, Clock, Users } from 'lucide-react'

export function MenuCard({ item, category }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isShared, setIsShared] = useState(false)

    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
        // Add haptic feedback or animation here
    }

    const handleShare = () => {
        setIsShared(true)
        setTimeout(() => setIsShared(false), 2000)
        // Add share functionality here
    }

    return (
        <Card className="menu-card hover-lift overflow-hidden group">
            <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="menu-image w-full h-full object-cover transition-transform duration-500"
                    />
                </div>

                {/* Overlay with actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white shadow-lg"
                        onClick={handleFavorite}
                    >
                        <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white shadow-lg"
                        onClick={handleShare}
                    >
                        <Share2 className={`h-4 w-4 ${isShared ? 'text-green-500' : 'text-gray-600'}`} />
                    </Button>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-amber-600 text-white">
                        {category}
                    </Badge>
                </div>

                {/* Popular indicator */}
                {item.popular && (
                    <div className="absolute bottom-4 left-4">
                        <Badge className="bg-green-600 text-white">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Popular
                        </Badge>
                    </div>
                )}
            </div>

            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {item.name}
                    </h3>
                    <Badge variant="outline" className="text-amber-600 border-amber-600 font-bold">
                        {item.price}
                    </Badge>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                </p>

                {/* Additional info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                        {item.prepTime && (
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{item.prepTime}</span>
                            </div>
                        )}
                        {item.serves && (
                            <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>Serves {item.serves}</span>
                            </div>
                        )}
                    </div>

                    {item.rating && (
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span>{item.rating}</span>
                        </div>
                    )}
                </div>

                {/* Dietary indicators */}
                {item.dietary && (
                    <div className="flex gap-1 mt-3">
                        {item.dietary.map((diet, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="text-xs px-2 py-1"
                            >
                                {diet}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export function TestimonialCard({ testimonial, index }) {
    return (
        <Card className="testimonial-card bg-gray-800 border-gray-700 text-white animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}>
            <CardContent className="p-6">
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-4">
                    <div className="text-amber-400 text-4xl font-serif">"</div>
                    <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                        ))}
                    </div>
                </div>

                {/* Review text */}
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {testimonial.content}
                </p>

                {/* Reviewer info */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                        {testimonial.location && (
                            <p className="text-xs text-gray-500">{testimonial.location}</p>
                        )}
                    </div>
                </div>

                {/* Review date */}
                {testimonial.date && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-xs text-gray-500">Reviewed on {testimonial.date}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export function TeamCard({ member, index }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Card
            className="team-card overflow-hidden hover-lift animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Overlay with additional info */}
                <div className={`overlay ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    <div className="text-center text-white p-6">
                        <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                        <p className="text-lg mb-4">{member.role}</p>
                        {member.awards && (
                            <div className="space-y-2">
                                {member.awards.map((award, i) => (
                                    <Badge key={i} variant="outline" className="text-white border-white">
                                        {award}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>

                <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-amber-600 border-amber-600">
                        {member.speciality}
                    </Badge>
                    {member.experience && (
                        <Badge variant="outline" className="text-gray-600">
                            {member.experience} years
                        </Badge>
                    )}
                </div>

                {/* Social links */}
                {member.social && (
                    <div className="flex gap-2 mt-4">
                        {member.social.map((link, i) => (
                            <Button key={i} size="icon" variant="ghost" className="text-gray-400 hover:text-amber-600">
                                {/* Add social icons here */}
                            </Button>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export function StatCard({ stat, index }) {
    return (
        <div
            className="text-center text-white animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-amber-400" />
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
        </div>
    )
}
