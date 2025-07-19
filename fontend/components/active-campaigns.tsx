"use client"
import { Play, Pause, MoreHorizontal, TrendingUp, Users, Eye } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ActiveCampaigns() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Fashion Launch",
      status: "active",
      platform: "Instagram",
      reach: "1.2M",
      engagement: "8.4%",
      viralScore: 87,
      progress: 65,
      color: "from-[#00D4FF] to-[#8B5CF6]",
    },
    {
      id: 2,
      name: "Tech Product Demo",
      status: "paused",
      platform: "TikTok",
      reach: "890K",
      engagement: "12.1%",
      viralScore: 92,
      progress: 45,
      color: "from-[#39FF14] to-[#00D4FF]",
    },
    {
      id: 3,
      name: "Brand Awareness",
      status: "active",
      platform: "YouTube",
      reach: "2.1M",
      engagement: "6.7%",
      viralScore: 78,
      progress: 80,
      color: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      id: 4,
      name: "Holiday Special",
      status: "scheduled",
      platform: "Twitter",
      reach: "0",
      engagement: "0%",
      viralScore: 85,
      progress: 100,
      color: "from-[#FFD700] to-[#FF6B6B]",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-[#39FF14]/20 text-[#39FF14] border-[#39FF14]/30"
      case "paused":
        return "bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/30"
      case "scheduled":
        return "bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Active Campaigns</h3>
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {campaigns.map((campaign) => (
          <Card
            key={campaign.id}
            className="bg-gradient-to-br from-[#151B3B] to-[#1A2040] border-white/10 p-4 hover:border-white/20 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    campaign.status === "active"
                      ? "bg-[#39FF14] animate-pulse"
                      : campaign.status === "paused"
                        ? "bg-[#FFD700]"
                        : "bg-[#00D4FF]"
                  }`}
                />
                <h4 className="font-semibold text-white">{campaign.name}</h4>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1A2040] border-white/10 text-white">
                  <DropdownMenuItem className="hover:bg-white/10">Edit</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/10">Duplicate</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/10 text-[#FF6B6B]">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center space-x-2 mb-3">
              <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
              <Badge variant="outline" className="border-white/20 text-gray-300">
                {campaign.platform}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Users className="w-4 h-4 text-[#00D4FF] mr-1" />
                  <span className="text-sm font-semibold text-white">{campaign.reach}</span>
                </div>
                <div className="text-xs text-gray-400">Reach</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Eye className="w-4 h-4 text-[#39FF14] mr-1" />
                  <span className="text-sm font-semibold text-white">{campaign.engagement}</span>
                </div>
                <div className="text-xs text-gray-400">Engagement</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="w-4 h-4 text-[#8B5CF6] mr-1" />
                  <span className="text-sm font-semibold text-white">{campaign.viralScore}</span>
                </div>
                <div className="text-xs text-gray-400">Viral Score</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{campaign.progress}%</span>
              </div>
              <div className="w-full bg-[#0A0E27] rounded-full h-2">
                <div
                  className={`h-2 bg-gradient-to-r ${campaign.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${campaign.progress}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                size="sm"
                className={`${
                  campaign.status === "active"
                    ? "text-[#FFD700] hover:bg-[#FFD700]/10"
                    : "text-[#39FF14] hover:bg-[#39FF14]/10"
                }`}
              >
                {campaign.status === "active" ? (
                  <>
                    <Pause className="w-4 h-4 mr-1" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-1" />
                    Start
                  </>
                )}
              </Button>
              <Button variant="ghost" size="sm" className="text-[#00D4FF] hover:bg-[#00D4FF]/10">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  )
}
