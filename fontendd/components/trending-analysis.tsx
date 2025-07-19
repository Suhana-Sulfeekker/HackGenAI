"use client"

import { useState } from "react"
import { TrendingUp, Hash, Clock, Users, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TrendingAnalysis() {
  const [trendingTopics, setTrendingTopics] = useState([
    {
      id: 1,
      topic: "#SustainableFashion",
      growth: "+245%",
      volume: "1.2M",
      sentiment: "positive",
      platforms: ["Instagram", "TikTok"],
      timeframe: "2h ago",
      viralPotential: 92,
    },
    {
      id: 2,
      topic: "#TechInnovation",
      growth: "+189%",
      volume: "890K",
      sentiment: "neutral",
      platforms: ["Twitter", "LinkedIn"],
      timeframe: "4h ago",
      viralPotential: 87,
    },
    {
      id: 3,
      topic: "#HealthyLiving",
      growth: "+156%",
      volume: "2.1M",
      sentiment: "positive",
      platforms: ["YouTube", "Instagram"],
      timeframe: "6h ago",
      viralPotential: 78,
    },
    {
      id: 4,
      topic: "#CryptoNews",
      growth: "+134%",
      volume: "1.5M",
      sentiment: "mixed",
      platforms: ["Twitter", "Reddit"],
      timeframe: "1h ago",
      viralPotential: 85,
    },
  ])

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-[#39FF14]"
      case "negative":
        return "text-[#FF6B6B]"
      case "mixed":
        return "text-[#FFD700]"
      default:
        return "text-gray-400"
    }
  }

  const getViralPotentialColor = (score: number) => {
    if (score >= 90) return "from-[#39FF14] to-[#00D4FF]"
    if (score >= 80) return "from-[#00D4FF] to-[#8B5CF6]"
    if (score >= 70) return "from-[#8B5CF6] to-[#EC4899]"
    return "from-[#FFD700] to-[#FF6B6B]"
  }

  return (
    <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Trending Analysis</h3>
            <p className="text-sm text-gray-400">Real-time viral content insights</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#39FF14] rounded-full animate-pulse" />
          <span className="text-sm text-gray-400">Live Feed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trendingTopics.map((topic) => (
          <Card
            key={topic.id}
            className="bg-gradient-to-br from-[#151B3B] to-[#1A2040] border-white/10 p-5 hover:border-white/20 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Hash className="w-5 h-5 text-[#00D4FF]" />
                <h4 className="font-semibold text-white group-hover:text-[#00D4FF] transition-colors">{topic.topic}</h4>
              </div>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-[#39FF14]" />
                  <span className="text-lg font-bold text-[#39FF14]">{topic.growth}</span>
                </div>
                <div className="text-xs text-gray-400">Growth Rate</div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Users className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-lg font-bold text-white">{topic.volume}</span>
                </div>
                <div className="text-xs text-gray-400">Volume</div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{topic.timeframe}</span>
              </div>
              <div className={`text-sm font-medium ${getSentimentColor(topic.sentiment)}`}>
                {topic.sentiment} sentiment
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {topic.platforms.map((platform, index) => (
                <Badge key={index} variant="outline" className="border-white/20 text-gray-300 text-xs">
                  {platform}
                </Badge>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Viral Potential</span>
                <span className="text-white font-semibold">{topic.viralPotential}%</span>
              </div>
              <div className="w-full bg-[#0A0E27] rounded-full h-2">
                <div
                  className={`h-2 bg-gradient-to-r ${getViralPotentialColor(topic.viralPotential)} rounded-full transition-all duration-1000`}
                  style={{ width: `${topic.viralPotential}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:from-[#00B8E6] hover:to-[#7C3AED] text-white font-semibold px-8">
          Explore All Trends
        </Button>
      </div>
    </Card>
  )
}
