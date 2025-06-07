"use client"

import { useState } from 'react'
import { Menu, ChevronDown } from 'lucide-react'

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: "Today's Deals", highlight: true },
        { name: "Customer Service" },
        { name: "Registry" },
        { name: "Gift Cards" },
        { name: "Sell" },
        { name: "Electronics" },
        { name: "Books" },
        { name: "Home & Garden" },
        { name: "Fashion" },
        { name: "Sports & Outdoors" },
        { name: "Toys & Games" },
        { name: "Automotive" },
        { name: "Health & Personal Care" }
    ]

    return (
        <nav className="amazon-nav">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center space-x-6 overflow-x-auto custom-scrollbar">
                    {/* All Menu */}
                    <div 
                        className="flex items-center space-x-1 cursor-pointer hover:bg-gray-600 px-2 py-1 rounded whitespace-nowrap"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-4 w-4" />
                        <span className="text-sm font-semibold">All</span>
                    </div>

                    {/* Navigation Items */}
                    {navItems.map((item, index) => (
                        <div 
                            key={index}
                            className={`cursor-pointer hover:bg-gray-600 px-2 py-1 rounded whitespace-nowrap text-sm ${
                                item.highlight ? 'text-orange-400 font-semibold' : ''
                            }`}
                        >
                            {item.name}
                        </div>
                    ))}

                    {/* Prime */}
                    <div className="flex items-center space-x-1 cursor-pointer hover:bg-gray-600 px-2 py-1 rounded whitespace-nowrap">
                        <span className="text-sm">Prime</span>
                        <div className="text-xs bg-blue-600 px-1 rounded">✓</div>
                    </div>
                </div>
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-300 shadow-lg z-50 slide-in">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {/* Categories */}
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3">Shop by Department</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="hover:text-orange-600 cursor-pointer">Electronics</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Computers</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Smart Home</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Arts & Crafts</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Automotive</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3">Programs & Features</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="hover:text-orange-600 cursor-pointer">Prime Video</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Prime Music</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Prime Gaming</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Prime Reading</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Amazon Photos</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3">Help & Settings</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="hover:text-orange-600 cursor-pointer">Your Account</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Customer Service</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Contact Us</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Switch Language</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Switch Country</li>
                                </ul>
                            </div>
                            
                            <div className="hidden md:block">
                                <h3 className="font-semibold text-gray-800 mb-3">Fashion</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="hover:text-orange-600 cursor-pointer">Men's Fashion</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Women's Fashion</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Kids' Fashion</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Shoes</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Jewelry</li>
                                </ul>
                            </div>
                            
                            <div className="hidden lg:block">
                                <h3 className="font-semibold text-gray-800 mb-3">Home & Garden</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="hover:text-orange-600 cursor-pointer">Furniture</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Home Décor</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Kitchen</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Garden</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Tools</li>
                                </ul>
                            </div>
                            
                            <div className="hidden lg:block">
                                <h3 className="font-semibold text-gray-800 mb-3">Entertainment</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="hover:text-orange-600 cursor-pointer">Books</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Movies & TV</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Music</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Video Games</li>
                                    <li className="hover:text-orange-600 cursor-pointer">Toys</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
