"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Activity, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PerformanceOverview() {
  const [chartData, setChartData] = useState<number[]>([])

  useEffect(() => {
    // Simulate real-time data updates
    const generateData = () => {
      return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100))
    }

    setChartData(generateData())

    const interval = setInterval(() => {
      setChartData(generateData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const metrics = [
    {
      title: "Total Reach",
      value: "2.4M",
      change: "+23.5%",
      trend: "up",
      icon: Users,
      color: "from-[#00D4FF] to-[#8B5CF6]",
    },
    {
      title: "Engagement Rate",
      value: "8.7%",
      change: "+12.3%",
      trend: "up",
      icon: Activity,
      color: "from-[#39FF14] to-[#00D4FF]",
    },
    {
      title: "Viral Coefficient",
      value: "4.2x",
      change: "+45.2%",
      trend: "up",
      icon: TrendingUp,
      color: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      title: "Conversion Rate",
      value: "3.1%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingDown,
      color: "from-[#FF6B6B] to-[#FFD700]",
    },
  ]

  return (
    <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Performance Overview</h3>
        <Badge className="bg-[#39FF14]/20 text-[#39FF14] border-[#39FF14]/30">Live</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#151B3B] to-[#1A2040] rounded-lg p-4 border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`w-10 h-10 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                <metric.icon className="w-5 h-5 text-white" />
              </div>
              <div
                className={`flex items-center text-sm ${metric.trend === "up" ? "text-[#39FF14]" : "text-[#FF6B6B]"}`}
              >
                {metric.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {metric.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
            <div className="text-sm text-gray-400">{metric.title}</div>
          </div>
        ))}
      </div>

      {/* Animated Chart */}
      <div className="relative h-32 bg-gradient-to-r from-[#151B3B] to-[#1A2040] rounded-lg p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-[#8B5CF6]/10 to-[#39FF14]/10" />
        <div className="relative flex items-end justify-between h-full">
          {chartData.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-[#00D4FF] to-[#8B5CF6] rounded-t-sm transition-all duration-1000 ease-out"
              style={{
                height: `${value}%`,
                width: `${100 / chartData.length - 1}%`,
                animationDelay: `${index * 50}ms`,
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-2 left-4 text-xs text-gray-400">Real-time Performance</div>
      </div>
    </Card>
  )
}
