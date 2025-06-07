"use client"

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
    Zap,
    Eye,
    Gauge,
    Wifi,
    Smartphone,
    Monitor,
    Battery,
    TrendingUp,
    Award,
    Star
} from 'lucide-react'

export function PerformanceMonitor() {
    const [metrics, setMetrics] = useState({
        pageSpeed: 98,
        accessibility: 100,
        bestPractices: 96,
        seo: 100,
        loadTime: 1.2,
        interactivity: 0.8,
        visualStability: 0.95
    })

    const [realTimeStats, setRealTimeStats] = useState({
        activeUsers: 1247,
        pageViews: 5632,
        averageSession: '4:32',
        conversionRate: 23.4
    })

    const [awards, setAwards] = useState([
        'Fastest Restaurant Website 2025',
        'Best UX Design - Webby Awards',
        'Most Innovative Interface',
        'Carbon Neutral Website'
    ])

    // Simulate real-time performance monitoring
    useEffect(() => {
        const interval = setInterval(() => {
            setRealTimeStats(prev => ({
                ...prev,
                activeUsers: Math.floor(Math.random() * 100) + 1200,
                pageViews: prev.pageViews + Math.floor(Math.random() * 10),
                conversionRate: (23 + Math.random() * 2).toFixed(1)
            }))
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const MetricCard = ({ icon: Icon, label, value, suffix = '', color = 'blue' }) => (
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-4 text-center">
                <Icon className={`h-8 w-8 mx-auto mb-3 text-${color}-400`} />
                <div className={`text-2xl font-bold text-${color}-400 mb-1`}>
                    {value}{suffix}
                </div>
                <div className="text-white/70 text-sm">{label}</div>
            </CardContent>
        </Card>
    )

    return (
        <div className="fixed bottom-4 left-4 z-40 max-w-sm">
            {/* Performance Dashboard Toggle */}
            <Card className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <Zap className="h-5 w-5 text-green-400" />
                            <span className="text-white font-semibold">Live Performance</span>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Optimal
                        </Badge>
                    </div>

                    {/* Core Web Vitals */}
                    <div className="space-y-3 mb-6">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-white/70">PageSpeed Score</span>
                                <span className="text-green-400 font-semibold">{metrics.pageSpeed}/100</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${metrics.pageSpeed}%` }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-white/70">Load Time</span>
                                <span className="text-blue-400 font-semibold">{metrics.loadTime}s</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full"
                                    style={{ width: '95%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Real-time Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="text-center">
                            <div className="text-lg font-bold text-purple-400">
                                {realTimeStats.activeUsers.toLocaleString()}
                            </div>
                            <div className="text-xs text-white/70">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-amber-400">
                                {realTimeStats.conversionRate}%
                            </div>
                            <div className="text-xs text-white/70">Conversion</div>
                        </div>
                    </div>

                    {/* Achievement Badges */}
                    <div className="space-y-2">
                        <div className="text-xs text-white/70 font-semibold">2025 Achievements</div>
                        <div className="flex flex-wrap gap-1">
                            <Badge variant="outline" className="bg-amber-500/20 border-amber-500/50 text-amber-300 text-xs">
                                <Award className="h-3 w-3 mr-1" />
                                Webby Winner
                            </Badge>
                            <Badge variant="outline" className="bg-green-500/20 border-green-500/50 text-green-300 text-xs">
                                <Zap className="h-3 w-3 mr-1" />
                                Carbon Neutral
                            </Badge>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex justify-between text-xs text-white/60">
                            <span>Response Time: 0.1ms</span>
                            <span>Uptime: 99.99%</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
