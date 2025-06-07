"use client"

import { useState } from 'react'
import { Search, MapPin, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react'

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchCategory, setSearchCategory] = useState('All')
    const [cartCount, setCartCount] = useState(3)

    const categories = [
        'All', 'Electronics', 'Books', 'Home & Garden', 'Fashion',
        'Sports', 'Toys', 'Automotive', 'Health', 'Beauty'
    ]

    return (
        <header className="amazon-header">
            {/* Top Header */}
            <div className="bg-gray-800 text-white px-4 py-2 text-sm hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span>Free shipping on orders over $25</span>
                    <div className="flex items-center space-x-4">
                        <span>English</span>
                        <span>USD</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="px-4 py-2">
                <div className="max-w-7xl mx-auto flex items-center space-x-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 flex-shrink-0">
                        <div className="amazon-logo cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="text-white font-bold text-xl">amazon</div>
                        </div>
                        <span className="text-orange-400 text-xs">.com</span>
                    </div>

                    {/* Delivery Location */}
                    <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded">
                        <MapPin className="h-4 w-4 text-white" />
                        <div className="text-xs">
                            <div className="text-gray-300">Deliver to</div>
                            <div className="text-white font-semibold">New York 10001</div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-3xl">
                        <div className="amazon-search-bar">
                            {/* Category Dropdown */}
                            <select
                                className="amazon-search-dropdown text-sm"
                                value={searchCategory}
                                onChange={(e) => setSearchCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>

                            {/* Search Input */}
                            <input
                                type="text"
                                className="amazon-search-input"
                                placeholder="Search Amazon"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            {/* Search Button */}
                            <button className="amazon-search-btn hover:bg-orange-600 transition-colors">
                                <Search className="h-4 w-4 text-gray-800" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Language */}
                        <div className="hidden md:flex items-center cursor-pointer hover:bg-gray-700 px-2 py-1 rounded">
                            <span className="text-white text-sm">EN</span>
                            <ChevronDown className="h-3 w-3 text-white ml-1" />
                        </div>

                        {/* Account */}
                        <div className="cursor-pointer hover:bg-gray-700 px-2 py-1 rounded">
                            <div className="text-xs text-gray-300">Hello, Sign in</div>
                            <div className="text-sm font-semibold text-white flex items-center">
                                Account & Lists
                                <ChevronDown className="h-3 w-3 ml-1" />
                            </div>
                        </div>

                        {/* Returns & Orders */}
                        <div className="hidden md:block cursor-pointer hover:bg-gray-700 px-2 py-1 rounded">
                            <div className="text-xs text-gray-300">Returns</div>
                            <div className="text-sm font-semibold text-white">& Orders</div>
                        </div>

                        {/* Cart */}
                        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 py-1 rounded relative">
                            <div className="relative">
                                <ShoppingCart className="h-6 w-6 text-white" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-white font-semibold ml-1 hidden sm:block">Cart</span>
                        </div>

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <Menu className="h-6 w-6 text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
