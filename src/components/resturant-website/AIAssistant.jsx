"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Brain,
    MessageCircle,
    X,
    Send,
    Sparkles,
    Mic,
    MicOff,
    Calendar,
    Users,
    Clock,
    Utensils
} from 'lucide-react'

export function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            content: "Hi! I'm Lumière AI, your personal dining assistant. I can help you with reservations, menu recommendations, and any questions about our restaurant!",
            timestamp: new Date()
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isVoiceActive, setIsVoiceActive] = useState(false)
    const messagesEndRef = useRef(null)
    const chatContainerRef = useRef(null)

    // AI Response Templates
    const aiResponses = {
        greeting: [
            "Welcome to Lumière! How can I enhance your dining experience today?",
            "Hello! I'm here to help make your visit extraordinary. What can I assist with?",
            "Greetings! Ready to discover something amazing from our menu?"
        ],
        reservation: [
            "I'd be delighted to help with your reservation! What date and time work best for you?",
            "Perfect! Let me check our availability. How many guests will be joining you?",
            "Excellent choice! Our chef has something special planned for that evening."
        ],
        menu: [
            "Our chef's tasting menu is absolutely divine tonight! Would you like to hear about it?",
            "Based on current seasonal ingredients, I recommend our signature dishes. Any dietary preferences?",
            "Tonight's wine pairing with the tasting menu is exceptional. Shall I reserve it for you?"
        ],
        fallback: [
            "That's an interesting question! Let me connect you with our team for the best answer.",
            "I'm learning every day! Would you like me to have our manager reach out to you?",
            "Great question! I'll make sure our staff follows up with you about that."
        ]
    }

    // Scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    // Simulate AI typing and response
    const sendAIResponse = (category = 'fallback') => {
        setIsTyping(true)

        setTimeout(() => {
            const responses = aiResponses[category]
            const randomResponse = responses[Math.floor(Math.random() * responses.length)]

            setMessages(prev => [...prev, {
                id: Date.now(),
                type: 'ai',
                content: randomResponse,
                timestamp: new Date()
            }])
            setIsTyping(false)
        }, 1500 + Math.random() * 1000) // Realistic typing delay
    }

    // Analyze user input and categorize
    const analyzeMessage = (message) => {
        const lowerMessage = message.toLowerCase()

        if (lowerMessage.includes('reservation') || lowerMessage.includes('book') || lowerMessage.includes('table')) {
            return 'reservation'
        }
        if (lowerMessage.includes('menu') || lowerMessage.includes('food') || lowerMessage.includes('dish') || lowerMessage.includes('recommend')) {
            return 'menu'
        }
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return 'greeting'
        }
        return 'fallback'
    }

    const handleSendMessage = () => {
        if (!inputValue.trim()) return

        const newMessage = {
            id: Date.now(),
            type: 'user',
            content: inputValue,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, newMessage])

        const category = analyzeMessage(inputValue)
        setInputValue('')
        sendAIResponse(category)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const toggleVoice = () => {
        setIsVoiceActive(!isVoiceActive)
        // Simulate voice recognition
        if (!isVoiceActive) {
            setTimeout(() => {
                setInputValue("I'd like to make a reservation for tonight")
            }, 2000)
            setTimeout(() => {
                setIsVoiceActive(false)
            }, 3000)
        }
    }

    return (
        <>
            {/* AI Assistant Trigger Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={() => setIsOpen(true)}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl transition-all duration-300 group ${isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
                        }`}
                >
                    <Brain className="h-8 w-8 text-white group-hover:rotate-12 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <Sparkles className="h-3 w-3 text-white" />
                    </div>
                </Button>
            </div>

            {/* AI Assistant Panel */}
            <div className={`fixed bottom-6 right-6 w-96 h-[600px] bg-black/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 z-50 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                            <Brain className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">Lumière AI</h3>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-green-400 text-xs">Online</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                        className="text-white/60 hover:text-white hover:bg-white/10"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Messages */}
                <div
                    ref={chatContainerRef}
                    className="flex-1 p-4 overflow-y-auto max-h-[400px] space-y-4"
                >
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] p-3 rounded-2xl ${message.type === 'user'
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                : 'bg-white/10 text-white border border-white/20'
                                }`}>
                                <p className="text-sm">{message.content}</p>
                                <span className="text-xs opacity-70 mt-1 block">
                                    {message.timestamp.toLocaleTimeString()}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white/10 border border-white/20 p-3 rounded-2xl">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-150"></div>
                                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-300"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10">
                    <div className="flex space-x-2">
                        <div className="flex-1 relative">
                            <textarea
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything about Lumière..."
                                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-purple-500 resize-none"
                                rows="1"
                            />
                        </div>
                        <Button
                            onClick={toggleVoice}
                            variant="ghost"
                            size="icon"
                            className={`text-white hover:bg-white/10 ${isVoiceActive ? 'voice-active' : ''}`}
                        >
                            {isVoiceActive ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                        </Button>
                        <Button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim()}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50"
                        >
                            <Send className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex space-x-2 mt-3">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                setInputValue("I'd like to make a reservation")
                                setTimeout(handleSendMessage, 100)
                            }}
                            className="text-xs bg-white/5 border-white/20 text-white hover:bg-white/10"
                        >
                            <Calendar className="h-3 w-3 mr-1" />
                            Reserve
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                setInputValue("What do you recommend from the menu?")
                                setTimeout(handleSendMessage, 100)
                            }}
                            className="text-xs bg-white/5 border-white/20 text-white hover:bg-white/10"
                        >
                            <Utensils className="h-3 w-3 mr-1" />
                            Menu
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
