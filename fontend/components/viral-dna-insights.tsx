"use client"

import { useState } from "react"
import { Dna, Flame, Eye, Heart, Share } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ViralDNAInsights() {
  const [selectedPattern, setSelectedPattern] = useState(0)

  const patterns = [
    {
      type: "Emotional Hook",
      strength: 92,
      color: "from-[#FF6B6B] to-[#EC4899]",
      icon: Heart,
      description: "Strong emotional resonance detected",
    },
    {
      type: "Visual Appeal",
      strength: 87,
      color: "from-[#00D4FF] to-[#8B5CF6]",
      icon: Eye,
      description: "High visual engagement potential",
    },
    {
      type: "Shareability",
      strength: 94,
      color: "from-[#39FF14] to-[#00D4FF]",
      icon: Share,
      description: "Optimized for social sharing",
    },
    {
      type: "Trending Factor",
      strength: 78,
      color: "from-[#FFD700] to-[#FF6B6B]",
      icon: Flame,
      description: "Aligned with current trends",
    },
  ]

  const heatmapData = Array.from({ length: 7 }, (_, day) =>
    Array.from({ length: 24 }, (_, hour) => ({
      day,
      hour,
      intensity: Math.random() * 100,
    })),
  ).flat()

  return (
    <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center">
          <Dna className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Viral DNA Insights</h3>
          <p className="text-sm text-gray-400">Content pattern analysis</p>
        </div>
      </div>

      {/* Pattern Strength Indicators */}
      <div className="space-y-4 mb-6">
        {patterns.map((pattern, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              selectedPattern === index ? "border-white/20 bg-white/5" : "border-white/5 hover:border-white/10"
            }`}
            onClick={() => setSelectedPattern(index)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${pattern.color} rounded-lg flex items-center justify-center`}
                >
                  <pattern.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">{pattern.type}</span>
              </div>
              <Badge className={`bg-gradient-to-r ${pattern.color} text-white border-0`}>{pattern.strength}%</Badge>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#151B3B] rounded-full h-2 mb-2">
              <div
                className={`h-2 bg-gradient-to-r ${pattern.color} rounded-full transition-all duration-1000`}
                style={{ width: `${pattern.strength}%` }}
              />
            </div>

            <p className="text-xs text-gray-400">{pattern.description}</p>
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="bg-gradient-to-br from-[#151B3B] to-[#1A2040] rounded-lg p-4">
        <h4 className="text-sm font-medium text-white mb-3">Engagement Heatmap</h4>
        <div className="grid grid-cols-24 gap-px">
          {heatmapData.map((cell, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-sm transition-all duration-300 hover:scale-150"
              style={{
                backgroundColor: `rgba(${
                  cell.intensity > 70 ? "57, 255, 20" : cell.intensity > 40 ? "0, 212, 255" : "139, 92, 246"
                }, ${cell.intensity / 100})`,
              }}
              title={`Day ${cell.day + 1}, Hour ${cell.hour}: ${Math.round(cell.intensity)}%`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>
    </Card>
  )
}
