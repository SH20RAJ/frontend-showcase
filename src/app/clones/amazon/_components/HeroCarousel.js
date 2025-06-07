"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
            title: 'Electronics Sale',
            subtitle: 'Up to 70% off on electronics',
            buttonText: 'Shop now',
            gradient: 'from-blue-600 to-purple-700'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
            title: 'Fashion Week',
            subtitle: 'Discover the latest trends',
            buttonText: 'Explore fashion',
            gradient: 'from-pink-500 to-rose-600'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80',
            title: 'Home & Garden',
            subtitle: 'Transform your living space',
            buttonText: 'Shop home',
            gradient: 'from-green-500 to-emerald-600'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
            title: 'Tech Gadgets',
            subtitle: 'Latest innovations at great prices',
            buttonText: 'Discover tech',
            gradient: 'from-orange-500 to-red-600'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [slides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div className="hero-carousel">
            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={slide.id} className="carousel-slide">
                            <div className="slide-background">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    width={1200}
                                    height={400}
                                    className="slide-image"
                                    priority={index === 0}
                                />
                                <div className={`slide-overlay bg-gradient-to-r ${slide.gradient}`} />
                            </div>
                            <div className="slide-content">
                                <div className="slide-text">
                                    <h2 className="slide-title">{slide.title}</h2>
                                    <p className="slide-subtitle">{slide.subtitle}</p>
                                    <button className="slide-button">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    className="carousel-nav carousel-nav-prev"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="carousel-nav carousel-nav-next"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
