"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Clock, Star, ShoppingCart } from 'lucide-react'
import { useCart } from './CartContext'

export default function DealsSections() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 12,
        minutes: 34,
        seconds: 56
    })
    const { addToCart } = useCart()

    // Lightning deals data
    const lightningDeals = [
        {
            id: 1,
            title: 'Wireless Bluetooth Headphones',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80',
            originalPrice: 199.99,
            salePrice: 89.99,
            discount: 55,
            rating: 4.5,
            reviews: 2847,
            claimed: 67,
            timeLeft: { hours: 2, minutes: 15, seconds: 30 }
        },
        {
            id: 2,
            title: 'Smart Watch Fitness Tracker',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80',
            originalPrice: 299.99,
            salePrice: 149.99,
            discount: 50,
            rating: 4.3,
            reviews: 1923,
            claimed: 45,
            timeLeft: { hours: 1, minutes: 42, seconds: 18 }
        },
        {
            id: 3,
            title: 'Portable Bluetooth Speaker',
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&q=80',
            originalPrice: 129.99,
            salePrice: 64.99,
            discount: 50,
            rating: 4.7,
            reviews: 3456,
            claimed: 78,
            timeLeft: { hours: 3, minutes: 8, seconds: 45 }
        },
        {
            id: 4,
            title: 'USB-C Fast Charging Cable',
            image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80',
            originalPrice: 24.99,
            salePrice: 9.99,
            discount: 60,
            rating: 4.2,
            reviews: 892,
            claimed: 89,
            timeLeft: { hours: 0, minutes: 45, seconds: 22 }
        }
    ]

    // Today's deals data
    const todaysDeals = [
        {
            id: 1,
            title: 'Kitchen Stand Mixer',
            image: 'https://images.unsplash.com/photo-1574781330855-d0db3580afe0?w=300&q=80',
            originalPrice: 349.99,
            salePrice: 199.99,
            discount: 43,
            rating: 4.8,
            reviews: 1567
        },
        {
            id: 2,
            title: 'Organic Cotton Bed Sheets',
            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&q=80',
            originalPrice: 89.99,
            salePrice: 49.99,
            discount: 44,
            rating: 4.6,
            reviews: 2134
        },
        {
            id: 3,
            title: 'Wireless Mouse',
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&q=80',
            originalPrice: 59.99,
            salePrice: 29.99,
            discount: 50,
            rating: 4.4,
            reviews: 987
        },
        {
            id: 4,
            title: 'LED Desk Lamp',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
            originalPrice: 79.99,
            salePrice: 39.99,
            discount: 50,
            rating: 4.5,
            reviews: 756
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const newSeconds = prev.seconds - 1
                if (newSeconds >= 0) {
                    return { ...prev, seconds: newSeconds }
                }

                const newMinutes = prev.minutes - 1
                if (newMinutes >= 0) {
                    return { ...prev, minutes: newMinutes, seconds: 59 }
                }

                const newHours = prev.hours - 1
                if (newHours >= 0) {
                    return { hours: newHours, minutes: 59, seconds: 59 }
                }

                return { hours: 0, minutes: 0, seconds: 0 }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (time) => time.toString().padStart(2, '0')

    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} size={12} fill="currentColor" />)
        }

        if (hasHalfStar) {
            stars.push(<Star key="half" size={12} fill="currentColor" className="half-star" />)
        }

        return stars
    }

    return (
        <div className="deals-sections">
            {/* Lightning Deals */}
            <section className="lightning-deals-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="lightning-icon">⚡</span>
                            Lightning Deals
                        </h2>
                        <div className="deals-timer">
                            <Clock size={16} />
                            <span>
                                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                            </span>
                        </div>
                    </div>

                    <div className="deals-grid">
                        {lightningDeals.map((deal) => (
                            <div key={deal.id} className="deal-card lightning-deal">
                                <div className="deal-badge">
                                    <span className="discount-badge">-{deal.discount}%</span>
                                    <span className="lightning-badge">⚡ Lightning Deal</span>
                                </div>

                                <div className="deal-image-container">
                                    <Image
                                        src={deal.image}
                                        alt={deal.title}
                                        width={300}
                                        height={300}
                                        className="deal-image"
                                    />
                                </div>

                                <div className="deal-content">
                                    <h3 className="deal-title">{deal.title}</h3>

                                    <div className="deal-rating">
                                        <div className="stars">
                                            {renderStars(deal.rating)}
                                        </div>
                                        <span className="review-count">({deal.reviews.toLocaleString()})</span>
                                    </div>

                                    <div className="deal-pricing">
                                        <span className="sale-price">${deal.salePrice}</span>
                                        <span className="original-price">${deal.originalPrice}</span>
                                    </div>

                                    <div className="deal-progress">
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{ width: `${deal.claimed}%` }}
                                            />
                                        </div>
                                        <span className="progress-text">{deal.claimed}% claimed</span>
                                    </div>

                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() => addToCart(deal)}
                                    >
                                        <ShoppingCart size={16} />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Today's Deals */}
            <section className="todays-deals-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Today's Deals</h2>
                        <a href="#" className="see-all-link">See all deals</a>
                    </div>

                    <div className="deals-grid">
                        {todaysDeals.map((deal) => (
                            <div key={deal.id} className="deal-card">
                                <div className="deal-badge">
                                    <span className="discount-badge">-{deal.discount}%</span>
                                </div>

                                <div className="deal-image-container">
                                    <Image
                                        src={deal.image}
                                        alt={deal.title}
                                        width={300}
                                        height={300}
                                        className="deal-image"
                                    />
                                </div>

                                <div className="deal-content">
                                    <h3 className="deal-title">{deal.title}</h3>

                                    <div className="deal-rating">
                                        <div className="stars">
                                            {renderStars(deal.rating)}
                                        </div>
                                        <span className="review-count">({deal.reviews.toLocaleString()})</span>
                                    </div>

                                    <div className="deal-pricing">
                                        <span className="sale-price">${deal.salePrice}</span>
                                        <span className="original-price">${deal.originalPrice}</span>
                                    </div>

                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() => addToCart(deal)}
                                    >
                                        <ShoppingCart size={16} />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
