"use client"

import { useState } from "react"
import { Brain, Lightbulb, Target, Zap, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function AIRecommendations() {
  const [recommendations] = useState([
    {
      id: 1,
      type: "Content Optimization",
      title: "Increase video length by 15%",
      description: "AI analysis shows longer videos perform 23% better for your audience",
      confidence: 94,
      impact: "High",
      category: "performance",
      icon: Target,
      color: "from-[#39FF14] to-[#00D4FF]",
    },
    {
      id: 2,
      type: "Timing Strategy",
      title: "Post 2 hours earlier",
      description: "Optimal engagement window shifted based on audience behavior",
      confidence: 87,
      impact: "Medium",
      category: "timing",
      icon: Zap,
      color: "from-[#00D4FF] to-[#8B5CF6]",
    },
    {
      id: 3,
      type: "Hashtag Optimization",
      title: "Add trending hashtags",
      description: "Include #TechTrends and #Innovation for 34% more reach",
      confidence: 91,
      impact: "High",
      category: "reach",
      icon: Lightbulb,
      color: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      id: 4,
      type: "Audience Targeting",
      title: "Expand to Gen Z segment",
      description: "Untapped audience showing high engagement potential",
      confidence: 78,
      impact: "Medium",
      category: "audience",
      icon: Brain,
      color: "from-[#FFD700] to-[#FF6B6B]",
    },
  ])

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-[#39FF14]/20 text-[#39FF14] border-[#39FF14]/30"
      case "Medium":
        return "bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30"
      case "Low":
        return "bg-[#FF6B6B]/20 text-[#FF6B6B] border-[#FF6B6B]/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">AI Recommendations</h3>
          <p className="text-sm text-gray-400">Smart optimization suggestions</p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec) => (
          <Card
            key={rec.id}
            className="bg-gradient-to-br from-[#151B3B] to-[#1A2040] border-white/10 p-4 hover:border-white/20 transition-all group cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`w-10 h-10 bg-gradient-to-r ${rec.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
              >
                <rec.icon className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                      {rec.title}
                    </h4>
                    <Badge className={getImpactColor(rec.impact)}>{rec.impact}</Badge>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>

                <p className="text-sm text-gray-400 mb-3">{rec.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{rec.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Confidence:</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-16 bg-[#0A0E27] rounded-full h-1.5">
                        <div
                          className={`h-1.5 bg-gradient-to-r ${rec.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${rec.confidence}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-white">{rec.confidence}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex space-x-3">
        <Button className="flex-1 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:from-[#00B8E6] hover:to-[#7C3AED] text-white font-semibold">
          Apply All
        </Button>
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
          Customize
        </Button>
      </div>
    </Card>
  )
}
