"use client";

import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Target,
  TrendingUp,
  Users,
  Hash,
  MessageSquare,
  Video,
  Search,
  Youtube,
  Download,
  Share,
  MessageCircle,
  BarChart3,
  Zap,
  Eye,
  Clock,
} from "lucide-react";

export function ResultsPage() {
  const searchParams = useSearchParams();

  // Extract data from URL parameters
  const researchData = {
    category: searchParams.get("category") || "",
    brandName: searchParams.get("brandName") || "",
    productName: searchParams.get("productName") || "",
    referenceUrl: searchParams.get("referenceUrl") || "",
    contentType: searchParams.get("contentType") || "",
    location: searchParams.get("location") || "",
    targetAudience: searchParams.get("targetAudience") || "",
    keywords: searchParams.get("keywords")?.split(",").filter(Boolean) || [],
    description: searchParams.get("description") || "",
    releaseDate: searchParams.get("releaseDate") || "",
    director: searchParams.get("director") || "",
    eventDate: searchParams.get("eventDate") || "",
    venue: searchParams.get("venue") || "",
  };

  const mockResults = {
    viralScore: 87,
    targetAudience: {
      primary: "Tech-savvy millennials (25-35)",
      secondary: "Early adopters and innovators",
      demographics: "Urban professionals, 60% male, 40% female",
    },
    trendingHashtags: [
      "#TechInnovation",
      "#FutureIsNow",
      "#SmartTech",
      "#Innovation2024",
      "#TechLife",
      "#DigitalTransformation",
      "#NextGen",
      "#TechTrends",
    ],
    contentStrategy: [
      {
        platform: "Reddit",
        icon: MessageCircle,
        color: "from-[#FF4500] to-[#FF6B35]",
        posts: 10,
        strategy:
          "Community engagement through valuable discussions and authentic product insights",
        bestTimes: ["10:00 AM", "2:00 PM", "8:00 PM"],
        contentTypes: [
          "AMA sessions",
          "Technical discussions",
          "Community posts",
        ],
      },
      {
        platform: "TikTok",
        icon: Video,
        color: "from-[#000000] to-[#FF0050]",
        posts: 8,
        strategy:
          "Short-form viral videos showcasing product benefits and user testimonials",
        bestTimes: ["6:00 AM", "10:00 AM", "7:00 PM"],
        contentTypes: [
          "Product demos",
          "Trending challenges",
          "User-generated content",
        ],
      },
      {
        platform: "Google Ads",
        icon: Search,
        color: "from-[#4285F4] to-[#34A853]",
        posts: 20,
        strategy:
          "Targeted search and display campaigns focusing on high-intent keywords",
        bestTimes: ["9:00 AM", "1:00 PM", "6:00 PM"],
        contentTypes: ["Search ads", "Display campaigns", "YouTube ads"],
      },
      {
        platform: "YouTube",
        icon: Youtube,
        color: "from-[#FF0000] to-[#CC0000]",
        posts: 4,
        strategy: "In-depth product reviews and educational content",
        bestTimes: ["2:00 PM", "8:00 PM"],
        contentTypes: ["Product reviews", "Tutorials", "Webinars"],
      },
    ],
    keyInsights: [
      "Video content performs 340% better than static images for your target audience",
      "User-generated content increases engagement by 67% in the tech sector",
      "Educational content drives 45% more qualified leads than promotional content",
      "Cross-platform campaigns show 23% higher conversion rates",
    ],
    competitorAnalysis: [
      {
        competitor: "TechCorp",
        strength: "Strong video content",
        weakness: "Limited user engagement",
        opportunity: "Better storytelling approach",
      },
      {
        competitor: "InnovateLab",
        strength: "High engagement rates",
        weakness: "Inconsistent posting",
        opportunity: "More consistent content calendar",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1A1B3A] to-[#2D1B69] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-6 bg-[#1A2040]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <div className="w-12 h-12 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Marketing Strategy Generated
              </h1>
              <p className="text-gray-400">
                For {researchData.brandName} {researchData.productName}
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:from-[#00B8E6] hover:to-[#7C3AED] text-white">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <Share className="w-4 h-4 mr-2" />
              Share Results
            </Button>
          </div>
        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Viral Score */}
          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6 col-span-1 md:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-5 h-5 text-[#39FF14]" />
                  <h3 className="text-lg font-semibold text-white">
                    Viral Potential
                  </h3>
                </div>
                <div className="text-4xl font-bold text-white mb-1">
                  {mockResults.viralScore}%
                </div>
                <p className="text-gray-400 text-sm">
                  High viral potential detected
                </p>
              </div>
              <div className="w-20 h-20 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#39FF14] to-[#00D4FF] p-1">
                  <div className="w-full h-full rounded-full bg-[#0A0E27] flex items-center justify-center">
                    <div className="text-xl font-bold text-white">
                      {mockResults.viralScore}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="w-5 h-5 text-[#00D4FF]" />
              <h3 className="text-sm font-semibold text-white">
                Reach Potential
              </h3>
            </div>
            <div className="text-2xl font-bold text-white">2.4M+</div>
            <p className="text-gray-400 text-xs">Estimated reach</p>
          </Card>

          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
            <div className="flex items-center space-x-2 mb-2">
              <BarChart3 className="w-5 h-5 text-[#8B5CF6]" />
              <h3 className="text-sm font-semibold text-white">Engagement</h3>
            </div>
            <div className="text-2xl font-bold text-white">12.8%</div>
            <p className="text-gray-400 text-xs">Expected rate</p>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Platform Strategies */}
            <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-[#8B5CF6]" />
                <h3 className="text-xl font-semibold text-white">
                  Platform Strategies
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockResults.contentStrategy.map((platform, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-[#151B3B] to-[#1A2040] border-white/10 p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center`}
                        >
                          <platform.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">
                            {platform.platform}
                          </h4>
                          <p className="text-xs text-gray-400">
                            {platform.posts} posts/month
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {platform.strategy}
                    </p>
                    <div className="space-y-2">
                      <div>
                        <div className="flex items-center space-x-1 mb-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <h5 className="text-xs font-medium text-white">
                            Best Times
                          </h5>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {platform.bestTimes
                            .slice(0, 2)
                            .map((time, timeIndex) => (
                              <Badge
                                key={timeIndex}
                                variant="outline"
                                className="border-white/20 text-gray-300 text-xs px-2 py-0"
                              >
                                {time}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Key Insights */}
            <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#FFD700]" />
                <h3 className="text-xl font-semibold text-white">
                  Key Insights
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mockResults.keyInsights.map((insight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gradient-to-r from-[#151B3B] to-[#1A2040] rounded-lg"
                  >
                    <div className="w-2 h-2 bg-[#39FF14] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{insight}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Target Audience */}
            <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-[#00D4FF]" />
                <h3 className="text-lg font-semibold text-white">
                  Target Audience
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-1 text-sm">
                    Primary
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {mockResults.targetAudience.primary}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-sm">
                    Secondary
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {mockResults.targetAudience.secondary}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-sm">
                    Demographics
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {mockResults.targetAudience.demographics}
                  </p>
                </div>
              </div>
            </Card>

            {/* Trending Hashtags */}
            <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Hash className="w-6 h-6 text-[#39FF14]" />
                <h3 className="text-lg font-semibold text-white">
                  Trending Hashtags
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {mockResults.trendingHashtags.map((hashtag, index) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 text-[#00D4FF] border-[#00D4FF]/30 hover:bg-[#00D4FF]/30 cursor-pointer text-xs"
                  >
                    {hashtag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Competitor Analysis */}
            <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-6 h-6 text-[#FF6B6B]" />
                <h3 className="text-lg font-semibold text-white">
                  Competitors
                </h3>
              </div>
              <div className="space-y-3">
                {mockResults.competitorAnalysis.map((competitor, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gradient-to-r from-[#151B3B] to-[#1A2040] rounded-lg"
                  >
                    <h4 className="font-semibold text-white mb-2 text-sm">
                      {competitor.competitor}
                    </h4>
                    <div className="space-y-1 text-xs">
                      <div>
                        <span className="text-[#39FF14] font-medium">
                          Strength:{" "}
                        </span>
                        <span className="text-gray-300">
                          {competitor.strength}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#FF6B6B] font-medium">
                          Weakness:{" "}
                        </span>
                        <span className="text-gray-300">
                          {competitor.weakness}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#FFD700] font-medium">
                          Opportunity:{" "}
                        </span>
                        <span className="text-gray-300">
                          {competitor.opportunity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
