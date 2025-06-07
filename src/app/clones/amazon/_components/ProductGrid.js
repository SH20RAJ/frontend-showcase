"use client"

import { useState } from 'react'
import { Star, Heart, ShoppingCart, Filter } from 'lucide-react'

export default function ProductGrid() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortBy, setSortBy] = useState('featured')
    const [priceRange, setPriceRange] = useState([0, 1000])

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'electronics', name: 'Electronics' },
        { id: 'fashion', name: 'Fashion' },
        { id: 'home', name: 'Home & Kitchen' },
        { id: 'books', name: 'Books' },
        { id: 'sports', name: 'Sports' }
    ]

    const sortOptions = [
        { value: 'featured', label: 'Featured' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'rating', label: 'Customer Rating' },
        { value: 'newest', label: 'Newest Arrivals' }
    ]

    const products = [
        {
            id: 1,
            title: 'Wireless Noise Cancelling Headphones',
            category: 'electronics',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80',
            price: 149.99,
            originalPrice: 199.99,
            rating: 4.5,
            reviews: 2847,
            prime: true,
            freeShipping: true,
            badge: 'Best Seller'
        },
        {
            id: 2,
            title: 'Cotton Casual T-Shirt',
            category: 'fashion',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80',
            price: 24.99,
            originalPrice: 34.99,
            rating: 4.2,
            reviews: 892,
            prime: true,
            freeShipping: true,
            badge: null
        },
        {
            id: 3,
            title: 'Stainless Steel Coffee Maker',
            category: 'home',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&q=80',
            price: 89.99,
            originalPrice: 129.99,
            rating: 4.7,
            reviews: 1567,
            prime: false,
            freeShipping: true,
            badge: 'Amazon\'s Choice'
        },
        {
            id: 4,
            title: 'Programming JavaScript Applications',
            category: 'books',
            image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=80',
            price: 19.99,
            originalPrice: 29.99,
            rating: 4.4,
            reviews: 456,
            prime: true,
            freeShipping: false,
            badge: null
        },
        {
            id: 5,
            title: 'Yoga Mat Premium Quality',
            category: 'sports',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80',
            price: 39.99,
            originalPrice: 59.99,
            rating: 4.3,
            reviews: 1234,
            prime: true,
            freeShipping: true,
            badge: null
        },
        {
            id: 6,
            title: 'Smart Watch Fitness Tracker',
            category: 'electronics',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80',
            price: 199.99,
            originalPrice: 299.99,
            rating: 4.6,
            reviews: 3421,
            prime: true,
            freeShipping: true,
            badge: 'Best Seller'
        },
        {
            id: 7,
            title: 'Elegant Summer Dress',
            category: 'fashion',
            image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&q=80',
            price: 64.99,
            originalPrice: 89.99,
            rating: 4.1,
            reviews: 678,
            prime: false,
            freeShipping: true,
            badge: null
        },
        {
            id: 8,
            title: 'Non-Stick Cookware Set',
            category: 'home',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80',
            price: 129.99,
            originalPrice: 179.99,
            rating: 4.8,
            reviews: 2156,
            prime: true,
            freeShipping: true,
            badge: 'Amazon\'s Choice'
        }
    ]

    const filteredProducts = products.filter(product =>
        selectedCategory === 'all' || product.category === selectedCategory
    )

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
        <section className="product-grid-section">
            <div className="container">
                {/* Filters Header */}
                <div className="filters-header">
                    <div className="filters-left">
                        <h2 className="section-title">Products</h2>
                        <span className="results-count">
                            1-{filteredProducts.length} of {filteredProducts.length} results
                        </span>
                    </div>

                    <div className="filters-right">
                        <div className="filter-group">
                            <label htmlFor="sort-select">Sort by:</label>
                            <select
                                id="sort-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="sort-select"
                            >
                                {sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button className="filter-btn">
                            <Filter size={16} />
                            Filters
                        </button>
                    </div>
                </div>

                <div className="product-grid-container">
                    {/* Sidebar Filters */}
                    <aside className="filters-sidebar">
                        <div className="filter-section">
                            <h3 className="filter-title">Category</h3>
                            <div className="filter-options">
                                {categories.map(category => (
                                    <label key={category.id} className="filter-option">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={category.id}
                                            checked={selectedCategory === category.id}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                        />
                                        <span className="filter-label">{category.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="filter-section">
                            <h3 className="filter-title">Prime</h3>
                            <div className="filter-options">
                                <label className="filter-option">
                                    <input type="checkbox" />
                                    <span className="filter-label">Prime Eligible</span>
                                </label>
                            </div>
                        </div>

                        <div className="filter-section">
                            <h3 className="filter-title">Customer Rating</h3>
                            <div className="filter-options">
                                {[4, 3, 2, 1].map(rating => (
                                    <label key={rating} className="filter-option">
                                        <input type="checkbox" />
                                        <span className="filter-label">
                                            <div className="stars">
                                                {Array(rating).fill().map((_, i) => (
                                                    <Star key={i} size={12} fill="currentColor" />
                                                ))}
                                            </div>
                                            & Up
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="filter-section">
                            <h3 className="filter-title">Price</h3>
                            <div className="price-inputs">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="price-input"
                                />
                                <span>to</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="price-input"
                                />
                                <button className="price-go-btn">Go</button>
                            </div>
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                {product.badge && (
                                    <div className="product-badge">
                                        {product.badge}
                                    </div>
                                )}

                                <div className="product-image-container">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="product-image"
                                    />
                                    <button className="wishlist-btn">
                                        <Heart size={16} />
                                    </button>
                                </div>

                                <div className="product-content">
                                    <h3 className="product-title">{product.title}</h3>

                                    <div className="product-rating">
                                        <div className="stars">
                                            {renderStars(product.rating)}
                                        </div>
                                        <span className="review-count">({product.reviews.toLocaleString()})</span>
                                    </div>

                                    <div className="product-pricing">
                                        <span className="current-price">${product.price}</span>
                                        {product.originalPrice && (
                                            <span className="original-price">${product.originalPrice}</span>
                                        )}
                                    </div>

                                    <div className="product-shipping">
                                        {product.prime && (
                                            <span className="prime-badge">Prime</span>
                                        )}
                                        {product.freeShipping && (
                                            <span className="shipping-text">FREE Shipping</span>
                                        )}
                                    </div>

                                    <button className="add-to-cart-btn">
                                        <ShoppingCart size={16} />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
