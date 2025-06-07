"use client"

import { useState } from 'react'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from './CartContext'

export default function CartSidebar({ isOpen, onClose }) {
    const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId)
        } else {
            updateQuantity(productId, newQuantity)
        }
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)
    }

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={onClose}
                />
            )}

            {/* Cart Sidebar */}
            <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <ShoppingBag size={20} />
                            Shopping Cart ({items.length})
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-gray-100 rounded"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {items.length === 0 ? (
                            <div className="text-center py-8">
                                <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500 mb-2">Your cart is empty</p>
                                <p className="text-sm text-gray-400">Add some products to get started</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm line-clamp-2 mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-2">
                                                {formatPrice(item.price)}
                                            </p>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center border rounded">
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-gray-100"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="px-3 py-1 text-sm">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-gray-100"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="border-t p-4 space-y-4">
                            {/* Total */}
                            <div className="flex justify-between items-center text-lg font-semibold">
                                <span>Total:</span>
                                <span>{formatPrice(getTotalPrice())}</span>
                            </div>

                            {/* Actions */}
                            <div className="space-y-2">
                                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-medium transition-colors">
                                    Proceed to Checkout
                                </button>
                                <button
                                    onClick={clearCart}
                                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Clear Cart
                                </button>
                            </div>

                            {/* Prime Notice */}
                            <div className="text-xs text-center text-gray-500 bg-blue-50 p-2 rounded">
                                <span className="text-blue-600 font-medium">Prime</span> members get FREE shipping
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
