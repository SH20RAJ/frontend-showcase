"use client"

import { createContext, useContext, useReducer } from 'react'

// Cart Context
const CartContext = createContext()

// Cart Actions
const CART_ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART',
    TOGGLE_WISHLIST: 'TOGGLE_WISHLIST'
}

// Cart Reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTIONS.ADD_ITEM:
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            }

        case CART_ACTIONS.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }

        case CART_ACTIONS.UPDATE_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ).filter(item => item.quantity > 0)
            }

        case CART_ACTIONS.CLEAR_CART:
            return {
                ...state,
                items: []
            }

        case CART_ACTIONS.TOGGLE_WISHLIST:
            const isInWishlist = state.wishlist.find(item => item.id === action.payload.id)
            if (isInWishlist) {
                return {
                    ...state,
                    wishlist: state.wishlist.filter(item => item.id !== action.payload.id)
                }
            }
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }

        default:
            return state
    }
}

// Initial State
const initialState = {
    items: [],
    wishlist: [],
    isOpen: false
}

// Cart Provider Component
export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (product) => {
        dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product })
    }

    const removeFromCart = (productId) => {
        dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId })
    }

    const updateQuantity = (productId, quantity) => {
        dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: productId, quantity } })
    }

    const clearCart = () => {
        dispatch({ type: CART_ACTIONS.CLEAR_CART })
    }

    const toggleWishlist = (product) => {
        dispatch({ type: CART_ACTIONS.TOGGLE_WISHLIST, payload: product })
    }

    const getTotalItems = () => {
        return state.items.reduce((total, item) => total + item.quantity, 0)
    }

    const getTotalPrice = () => {
        return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    const isInWishlist = (productId) => {
        return state.wishlist.some(item => item.id === productId)
    }

    const value = {
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        getTotalItems,
        getTotalPrice,
        isInWishlist
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

// Custom Hook
export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export default CartContext
