"use client"

import { useState } from 'react'
import Header from './_components/Header'
import Navigation from './_components/Navigation'
import HeroCarousel from './_components/HeroCarousel'
import ProductGrid from './_components/ProductGrid'
import DealsSections from './_components/DealsSections'
import CategoryCards from './_components/CategoryCards'
import RecentlyViewed from './_components/RecentlyViewed'
import Footer from './_components/Footer'
import CartSidebar from './_components/CartSidebar'
import { CartProvider } from './_components/CartContext'
import './styles.css'

export default function AmazonClone() {
    const [isCartOpen, setIsCartOpen] = useState(false)

    return (
        <CartProvider>
            <div className="min-h-screen bg-gray-100">
                {/* Header */}
                <Header onCartClick={() => setIsCartOpen(true)} />

                {/* Navigation */}
                <Navigation />

                {/* Main Content */}
                <main>
                    {/* Hero Carousel */}
                    <HeroCarousel />

                    {/* Category Cards */}
                    <CategoryCards />

                    {/* Deals Section */}
                    <DealsSections />

                    {/* Product Grid */}
                    <ProductGrid />

                    {/* Recently Viewed */}
                    <RecentlyViewed />
                </main>

                {/* Footer */}
                <Footer />

                {/* Cart Sidebar */}
                <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div>
        </CartProvider>
    )
}
