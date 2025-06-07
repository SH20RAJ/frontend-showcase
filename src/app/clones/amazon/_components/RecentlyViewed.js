"use client"

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react'

export default function RecentlyViewed() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const scrollRef = useRef(null)

    const recentlyViewedItems = [
        {
            id: 1,
            title: 'Wireless Bluetooth Earbuds',
            image: 'https://images.unsplash.com/photo-1590658165737-15a047b3d5f9?w=200&q=80',
            price: 79.99,
            originalPrice: 129.99,
            rating: 4.4,
            reviews: 1245
        },
        {
            id: 2,
            title: 'Smart Home Speaker',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
            price: 49.99,
            originalPrice: 79.99,
            rating: 4.2,
            reviews: 892
        },
        {
            id: 3,
            title: 'Fitness Tracker Band',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80',
            price: 89.99,
            originalPrice: 149.99,
            rating: 4.5,
            reviews: 2156
        },
        {
            id: 4,
            title: 'Portable Charger',
            image: 'https://images.unsplash.com/photo-1609592091380-908fbb2b16ec?w=200&q=80',
            price: 24.99,
            originalPrice: 39.99,
            rating: 4.3,
            reviews: 567
        },
        {
            id: 5,
            title: 'Bluetooth Gaming Mouse',
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&q=80',
            price: 59.99,
            originalPrice: 89.99,
            rating: 4.6,
            reviews: 1834
        },
        {
            id: 6,
            title: 'LED Strip Lights',
            image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&q=80',
            price: 19.99,
            originalPrice: 34.99,
            rating: 4.1,
            reviews: 923
        },
        {
            id: 7,
            title: 'Laptop Stand Adjustable',
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&q=80',
            price: 34.99,
            originalPrice: 54.99,
            rating: 4.7,
            reviews: 678
        },
        {
            id: 8,
            title: 'Wireless Phone Charger',
            image: 'https://images.unsplash.com/photo-1609592091380-908fbb2b16ec?w=200&q=80',
            price: 29.99,
            originalPrice: 49.99,
            rating: 4.0,
            reviews: 445
        }
    ]

    const scroll = (direction) => {
        const container = scrollRef.current
        if (container) {
            const scrollAmount = 280
            const newPosition = direction === 'left'
                ? Math.max(0, scrollPosition - scrollAmount)
                : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)

            container.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            })
            setScrollPosition(newPosition)
        }
    }

    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} size={10} fill="currentColor" />)
        }

        if (hasHalfStar) {
            stars.push(<Star key="half" size={10} fill="currentColor" className="half-star" />)
        }

        return stars
    }

    return (
        <section className="recently-viewed-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Your Browsing History</h2>
                    <div className="navigation-controls">
                        <button
                            className="nav-btn nav-prev"
                            onClick={() => scroll('left')}
                            disabled={scrollPosition === 0}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            className="nav-btn nav-next"
                            onClick={() => scroll('right')}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="recently-viewed-container">
                    <div
                        ref={scrollRef}
                        className="recently-viewed-scroll"
                        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
                    >
                        {recentlyViewedItems.map((item) => (
                            <div key={item.id} className="recently-viewed-item">
                                <div className="item-image-container">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="item-image"
                                    />
                                </div>

                                <div className="item-content">
                                    <h3 className="item-title">{item.title}</h3>

                                    <div className="item-rating">
                                        <div className="stars">
                                            {renderStars(item.rating)}
                                        </div>
                                        <span className="review-count">({item.reviews})</span>
                                    </div>

                                    <div className="item-pricing">
                                        <span className="current-price">${item.price}</span>
                                        {item.originalPrice && (
                                            <span className="original-price">${item.originalPrice}</span>
                                        )}
                                    </div>

                                    <button className="view-item-btn">
                                        View Item
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Link */}
                <div className="view-all-container">
                    <a href="#" className="view-all-link">
                        View or edit your browsing history
                    </a>
                </div>
            </div>
        </section>
    )
}
