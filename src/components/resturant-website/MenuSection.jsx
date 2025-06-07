"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Star,
    Heart,
    Clock,
    Utensils,
    Leaf,
    Flame,
    Sparkles,
    Crown,
    ChefHat,
    Wine,
    Eye,
    Camera,
    Scan,
    Zap,
    TrendingUp,
    Award
} from 'lucide-react'

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState('signature')
    const [favorites, setFavorites] = useState(new Set())
    const [isVisible, setIsVisible] = useState(false)
    const [arView, setArView] = useState(false)
    const [nutritionView, setNutritionView] = useState(false)
    const [popularityData, setPopularityData] = useState({})
    const sectionRef = useRef(null)

    // Simulate real-time popularity tracking
    useEffect(() => {
        const simulatePopularity = () => {
            const dishes = ['wagyu-masterpiece', 'ocean-symphony', 'forest-treasure', 'desert-bloom']
            const newData = {}
            dishes.forEach(dish => {
                newData[dish] = {
                    orders: Math.floor(Math.random() * 50) + 20,
                    rating: (4.5 + Math.random() * 0.5).toFixed(1),
                    trending: Math.random() > 0.7
                }
            })
            setPopularityData(newData)
        }

        simulatePopularity()
        const interval = setInterval(simulatePopularity, 10000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const categories = [
        {
            id: 'signature',
            name: 'Signature Dishes',
            icon: Crown,
            gradient: 'from-amber-500 to-orange-600',
            description: 'Our chef\'s masterpieces'
        },
        {
            id: 'appetizers',
            name: 'Appetizers',
            icon: Sparkles,
            gradient: 'from-emerald-500 to-teal-600',
            description: 'Perfect way to start'
        },
        {
            id: 'mains',
            name: 'Main Courses',
            icon: ChefHat,
            gradient: 'from-purple-500 to-pink-600',
            description: 'Culinary excellence'
        },
        {
            id: 'desserts',
            name: 'Desserts',
            icon: Sparkles,
            gradient: 'from-rose-500 to-red-600',
            description: 'Sweet perfection'
        }
    ]

    // Enhanced menu data with 2025 features
    const menuData = {
        signature: [
            {
                id: 'wagyu-masterpiece',
                name: 'Wagyu Masterpiece',
                description: 'A5 Japanese Wagyu with truffle essence, microgreens, and gold leaf',
                price: '$185',
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
                allergens: ['gluten'],
                dietary: ['premium'],
                cookTime: '25 mins',
                calories: 650,
                nutrition: { protein: '45g', fat: '38g', carbs: '12g' },
                ingredients: ['A5 Wagyu', 'Black Truffle', 'Gold Leaf', 'Microgreens'],
                chefNote: "Our signature dish represents the pinnacle of culinary artistry",
                awards: ['Michelin Recommended', 'Best Dish 2024']
            },
            {
                id: 'ocean-symphony',
                name: 'Ocean Symphony',
                description: 'Lobster thermidor with caviar, champagne foam, and crystallized seaweed',
                price: '$165',
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
                allergens: ['shellfish'],
                dietary: ['pescatarian'],
                cookTime: '30 mins',
                calories: 580,
                nutrition: { protein: '42g', fat: '32g', carbs: '8g' },
                ingredients: ['Maine Lobster', 'Ossetra Caviar', 'Champagne', 'Seaweed Crystal'],
                chefNote: "A celebration of the ocean's finest treasures"
            }
        ],
        appetizers: [
            {
                id: 'truffle-fries',
                name: 'Truffle Parmesan Fries',
                description: 'Crispy fries tossed in truffle oil, parmesan, and fresh herbs',
                price: '$15',
                image: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
                allergens: ['dairy'],
                dietary: ['vegetarian'],
                cookTime: '10 mins',
                calories: 350,
                nutrition: { protein: '5g', fat: '20g', carbs: '45g' },
                ingredients: ['Potatoes', 'Truffle Oil', 'Parmesan', 'Herbs'],
                chefNote: "Aromatic and indulgent, a perfect start to your meal",
                awards: ['Best Appetizer 2024']
            },
            {
                id: 'salmon-roe-blini',
                name: 'Salmon Roe Blini',
                description: 'Russian blini with salmon roe, sour cream, and chives',
                price: '$22',
                image: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
                allergens: ['gluten', 'fish', 'dairy'],
                dietary: ['pescatarian'],
                cookTime: '15 mins',
                calories: 250,
                nutrition: { protein: '10g', fat: '15g', carbs: '20g' },
                ingredients: ['Blini', 'Salmon Roe', 'Sour Cream', 'Chives'],
                chefNote: "A classic Russian delicacy with a modern twist",
                awards: ['Best Presentation 2024']
            }
        ],
        mains: [
            {
                id: 'forest-treasure',
                name: 'Forest Treasure',
                description: 'Wild mushroom risotto with truffle oil and parmesan crisp',
                price: '$38',
                image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
                allergens: ['gluten', 'dairy'],
                dietary: ['vegetarian'],
                cookTime: '40 mins',
                calories: 600,
                nutrition: { protein: '15g', fat: '18g', carbs: '85g' },
                ingredients: ['Arborio Rice', 'Wild Mushrooms', 'Truffle Oil', 'Parmesan'],
                chefNote: "A creamy and decadent risotto featuring seasonal mushrooms",
                awards: ['Vegetarian Dish of the Year 2024']
            },
            {
                id: 'seafood-paella',
                name: 'Seafood Paella',
                description: 'Saffron-infused rice with shrimp, mussels, and chorizo',
                price: '$48',
                image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
                allergens: ['shellfish', 'gluten'],
                dietary: ['pescatarian'],
                cookTime: '50 mins',
                calories: 750,
                nutrition: { protein: '40g', fat: '25g', carbs: '90g' },
                ingredients: ['Bomba Rice', 'Saffron', 'Shrimp', 'Mussels', 'Chorizo'],
                chefNote: "A traditional Spanish dish with a rich and savory flavor",
                awards: ['Best Main Course 2024']
            }
        ],
        desserts: [
            {
                id: 'chocolate-souffle',
                name: 'Chocolate Soufflé',
                description: 'Warm chocolate soufflé with vanilla bean ice cream and gold leaf',
                price: '$35',
                image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop',
                allergens: ['gluten', 'dairy', 'egg'],
                dietary: ['vegetarian'],
                cookTime: '30 mins',
                calories: 450,
                nutrition: { protein: '8g', fat: '25g', carbs: '50g' },
                ingredients: ['Dark Chocolate', 'Butter', 'Sugar', 'Eggs', 'Vanilla Bean'],
                chefNote: "A classic French dessert, light as air and rich in flavor",
                awards: ['Dessert of the Year 2024']
            },
            {
                id: 'tiramisu',
                name: 'Tiramisu',
                description: 'Espresso-soaked ladyfingers with mascarpone cream and cocoa',
                price: '$30',
                image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
                allergens: ['gluten', 'dairy', 'egg'],
                dietary: ['vegetarian'],
                cookTime: '20 mins',
                calories: 400,
                nutrition: { protein: '10g', fat: '22g', carbs: '38g' },
                ingredients: ['Ladyfingers', 'Mascarpone', 'Espresso', 'Cocoa Powder'],
                chefNote: "An Italian classic, combining coffee and chocolate in a delightful way",
                awards: ['Best Flavor 2024']
            }
        ],
        wines: [
            {
                id: 'chateau-margaux',
                name: 'Château Margaux 2010',
                description: 'Full-bodied Bordeaux with notes of blackcurrant and cedar',
                price: '$850',
                image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop',
                allergens: [],
                dietary: [],
                cookTime: '',
                calories: 0,
                nutrition: {},
                ingredients: ['Cabernet Sauvignon', 'Merlot', 'Petit Verdot'],
                chefNote: "A prestigious wine from one of the top Bordeaux estates",
                awards: ['Wine Spectator Top 100', 'Decanter Platinum']
            }
        ]
    }

    const toggleFavorite = (dishId) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(dishId)) {
            newFavorites.delete(dishId)
        } else {
            newFavorites.add(dishId)
        }
        setFavorites(newFavorites)
    }

    const MenuCard = ({ dish }) => {
        const popularity = popularityData[dish.id] || { orders: 0, rating: '4.8', trending: false }

        return (
            <Card className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 quantum-hover glass-morphism-advanced ${favorites.has(dish.id) ? 'ring-2 ring-rose-500' : ''
                }`}>
                <CardContent className="p-0">
                    {/* Image Section with AR Preview */}
                    <div className="relative h-64 overflow-hidden">
                        <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* AR View Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setArView(!arView)}
                            className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
                        >
                            <Eye className="h-4 w-4" />
                        </Button>

                        {/* Real-time Popularity Badge */}
                        {popularity.trending && (
                            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 animate-pulse">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Trending
                            </Badge>
                        )}

                        {/* Favorite Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFavorite(dish.id)}
                            className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
                        >
                            <Heart
                                className={`h-4 w-4 transition-colors ${favorites.has(dish.id) ? 'fill-rose-500 text-rose-500' : ''
                                    }`}
                            />
                        </Button>

                        {/* Live Orders Counter */}
                        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-white text-xs">
                                {popularity.orders} orders today
                            </span>
                        </div>

                        {/* Dietary Badges */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {dish.dietary?.includes('premium') && (
                                <Badge variant="outline" className="bg-amber-500/20 border-amber-500 text-amber-300">
                                    <Crown className="h-3 w-3 mr-1" />
                                    Premium
                                </Badge>
                            )}
                            {dish.dietary?.includes('vegan') && (
                                <Badge variant="outline" className="bg-green-500/20 border-green-500 text-green-300">
                                    <Leaf className="h-3 w-3 mr-1" />
                                    Vegan
                                </Badge>
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2 holographic-text">
                                    {dish.name}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-3">
                                    {dish.description}
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                                    {dish.price}
                                </span>
                                <div className="flex items-center space-x-1 mt-1">
                                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                    <span className="text-white/70 text-xs">{popularity.rating}</span>
                                </div>
                            </div>
                        </div>

                        {/* Chef's Note */}
                        {dish.chefNote && (
                            <div className="bg-white/5 rounded-lg p-3 border-l-2 border-amber-500">
                                <p className="text-amber-200 text-xs italic">
                                    Chef's Note: {dish.chefNote}
                                </p>
                            </div>
                        )}

                        {/* Nutrition & Details Toggle */}
                        <div className="flex justify-between items-center text-white/60 text-xs">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{dish.cookTime}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Zap className="h-3 w-3" />
                                    <span>{dish.calories} cal</span>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setNutritionView(!nutritionView)}
                                className="text-xs text-white/60 hover:text-white p-1"
                            >
                                Nutrition
                            </Button>
                        </div>

                        {/* Awards */}
                        {dish.awards && (
                            <div className="flex flex-wrap gap-1">
                                {dish.awards.map((award, index) => (
                                    <Badge
                                        key={index}
                                        variant="outline"
                                        className="bg-purple-500/20 border-purple-500 text-purple-300 text-xs"
                                    >
                                        <Award className="h-3 w-3 mr-1" />
                                        {award}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-2">
                            <Button
                                size="sm"
                                className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium"
                            >
                                Add to Order
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                            >
                                <Scan className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <section
            ref={sectionRef}
            className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
        >
            {/* Enhanced background effects */}
            <div className="absolute inset-0 neural-pattern opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="bg-white/10 backdrop-blur-md border-white/20 text-white px-6 py-2 mb-6"
                    >
                        <Utensils className="w-4 h-4 mr-2 text-amber-400" />
                        Michelin-Starred Menu
                    </Badge>

                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 holographic-text">
                        Culinary Artistry
                    </h2>

                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Experience our revolutionary menu featuring AI-enhanced flavor profiles,
                        real-time nutrition tracking, and AR visualization
                    </p>
                </div>

                {/* 2025 Enhanced Category Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <Button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                variant={activeCategory === category.id ? "default" : "outline"}
                                className={`group relative overflow-hidden px-6 py-4 transition-all duration-300 ${activeCategory === category.id
                                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl scale-105`
                                    : 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105'
                                    } quantum-hover`}
                            >
                                <Icon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                <div className="text-left">
                                    <div className="font-semibold">{category.name}</div>
                                    <div className="text-xs opacity-70">{category.description}</div>
                                </div>
                            </Button>
                        )
                    })}
                </div>

                {/* Menu Grid with Enhanced Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(menuData[activeCategory] || []).map((dish, index) => (
                        <div
                            key={dish.id}
                            className={`animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <MenuCard dish={dish} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
