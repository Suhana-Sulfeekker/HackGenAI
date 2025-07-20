"use client";

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
  BarChart3,
  Zap,
  Eye,
  Instagram,
  Play,
  Lightbulb,
  ExternalLink,
  ThumbsUp,
  Calendar,
} from "lucide-react";

interface ResultsPageProps {
  researchData: any;
  apiResults?: any;
  onNewResearch: () => void;
}

export function ResultsPage({
  researchData,
  apiResults,
  onNewResearch,
}: ResultsPageProps) {
  // Extract data from API response or use fallback
  const apiData = apiResults?.data?.results;
  const researchInfo = apiResults?.data?.researchData;

  // Fallback mock data for when API data is empty
  const mockResults = {
    viralScore: 75,
    targetAudience: {
      ageGroup: "25-35 years",
      audienceCategory: "Tech-savvy millennials",
      demographics: "Urban professionals, 60% male, 40% female",
    },
    trendingHashtags: [
      "#TechInnovation",
      "#FutureIsNow",
      "#SmartTech",
      "#Innovation2024",
    ],
    contentStrategy: [
      {
        platform: "Google Search Engine",
        linkCount: 15,
        topResults: [
          {
            title: "Sample Search Result",
            url: "https://example.com",
            description: "Sample description for search result",
          },
        ],
        trendAnalysis: "High search volume for related keywords",
      },
      {
        platform: "YouTube",
        linkCount: 8,
        topVideos: [
          {
            title: "Sample Video Title",
            thumbnailUrl: "",
            channelUrl: "https://youtube.com/channel/sample",
            publishedAt: "2024-01-15",
            viewCount: 50000,
            likeCount: 1200,
            description: "Sample video description",
          },
        ],
        trendAnalysis: "Growing interest in video content",
      },
    ],
    keyInsightsAcrossPlatforms: [
      "Video content shows 340% better engagement",
      "Search volume increasing by 25% monthly",
      "User-generated content drives 67% more engagement",
    ],
    aiGeneratedIdeas: {
      youtubeReelsIdeas: [
        {
          title: "Quick Product Demo",
          idea: "Show your product in action within 30 seconds",
        },
      ],
      youtubeVideoIdeas: [
        {
          title: "Complete Product Tutorial",
          description: "In-depth guide showing all features and benefits",
        },
      ],
      adsIdeas: [
        {
          title: "Problem-Solution Ad",
          description: "Highlight the problem your product solves",
        },
      ],
      instagramReelsIdeas: [
        {
          reelIdea: "Behind-the-scenes content",
          caption: "See how we create amazing products! #BehindTheScenes",
        },
      ],
    },
  };

  // Use API data if available, otherwise use mock data
  const results =
    apiData && Object.keys(apiData).length > 0 ? apiData : mockResults;

  // Helper function to get platform icon
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "google search engine":
        return Search;
      case "youtube":
        return Youtube;
      case "instagram":
        return Instagram;
      default:
        return MessageSquare;
    }
  };

  // Helper function to get platform color
  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "google search engine":
        return "from-[#4285F4] to-[#34A853]";
      case "youtube":
        return "from-[#FF0000] to-[#CC0000]";
      case "instagram":
        return "from-[#E4405F] to-[#833AB4]";
      default:
        return "from-[#8B5CF6] to-[#EC4899]";
    }
  };

  // Format numbers for display
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
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
                For {researchInfo?.brandOrOrganizer || researchData.brandName}{" "}
                {researchInfo?.productOrEvent || researchData.productName}
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
            <Button
              onClick={onNewResearch}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              New Research
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
                  {results.viralScore || 0}%
                </div>
                <p className="text-gray-400 text-sm">
                  {results.viralScore > 70
                    ? "High"
                    : results.viralScore > 40
                    ? "Medium"
                    : "Low"}{" "}
                  viral potential detected
                </p>
              </div>
              <div className="w-20 h-20 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#39FF14] to-[#00D4FF] p-1">
                  <div className="w-full h-full rounded-full bg-[#0A0E27] flex items-center justify-center">
                    <div className="text-xl font-bold text-white">
                      {results.viralScore || 0}%
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
              <h3 className="text-sm font-semibold text-white">Total Links</h3>
            </div>
            <div className="text-2xl font-bold text-white">
              {results.contentStrategy?.reduce(
                (total: number, platform: any) =>
                  total + (platform.linkCount || 0),
                0
              ) || 0}
            </div>
            <p className="text-gray-400 text-xs">Across platforms</p>
          </Card>

          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
            <div className="flex items-center space-x-2 mb-2">
              <Hash className="w-5 h-5 text-[#8B5CF6]" />
              <h3 className="text-sm font-semibold text-white">Hashtags</h3>
            </div>
            <div className="text-2xl font-bold text-white">
              {results.trendingHashtags?.length || 0}
            </div>
            <p className="text-gray-400 text-xs">Trending tags</p>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Platform Analysis */}
            <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="w-6 h-6 text-[#8B5CF6]" />
                <h3 className="text-xl font-semibold text-white">
                  Platform Analysis
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {results.contentStrategy?.map(
                  (platform: any, index: number) => {
                    const PlatformIcon = getPlatformIcon(platform.platform);
                    return (
                      <Card
                        key={index}
                        className="bg-gradient-to-br from-[#151B3B] to-[#1A2040] border-white/10 p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-8 h-8 bg-gradient-to-r ${getPlatformColor(
                                platform.platform
                              )} rounded-lg flex items-center justify-center`}
                            >
                              <PlatformIcon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-sm">
                                {platform.platform}
                              </h4>
                              <p className="text-xs text-gray-400">
                                {platform.linkCount || 0} results found
                              </p>
                            </div>
                          </div>
                        </div>

                        {platform.trendAnalysis && (
                          <p className="text-gray-300 text-sm mb-3">
                            {platform.trendAnalysis}
                          </p>
                        )}

                        {/* Platform-specific content */}
                        {platform.platform === "YouTube" &&
                          platform.topVideos?.length > 0 && (
                            <div className="space-y-2">
                              <h5 className="text-xs font-medium text-white mb-2">
                                Top Videos
                              </h5>
                              {platform.topVideos
                                .slice(0, 2)
                                .map((video: any, videoIndex: number) => (
                                  <div
                                    key={videoIndex}
                                    className="bg-[#0A0E27]/50 rounded p-2"
                                  >
                                    <div className="flex items-center space-x-2 mb-1">
                                      <Play className="w-3 h-3 text-red-400" />
                                      <p className="text-xs text-white font-medium truncate">
                                        {video.title}
                                      </p>
                                    </div>
                                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                                      <span className="flex items-center space-x-1">
                                        <Eye className="w-3 h-3" />
                                        <span>
                                          {formatNumber(video.viewCount || 0)}
                                        </span>
                                      </span>
                                      <span className="flex items-center space-x-1">
                                        <ThumbsUp className="w-3 h-3" />
                                        <span>
                                          {formatNumber(video.likeCount || 0)}
                                        </span>
                                      </span>
                                      {video.publishedAt && (
                                        <span className="flex items-center space-x-1">
                                          <Calendar className="w-3 h-3" />
                                          <span>
                                            {new Date(
                                              video.publishedAt
                                            ).toLocaleDateString()}
                                          </span>
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )}

                        {platform.platform === "Google Search Engine" &&
                          platform.topResults?.length > 0 && (
                            <div className="space-y-2">
                              <h5 className="text-xs font-medium text-white mb-2">
                                Top Results
                              </h5>
                              {platform.topResults
                                .slice(0, 2)
                                .map((result: any, resultIndex: number) => (
                                  <div
                                    key={resultIndex}
                                    className="bg-[#0A0E27]/50 rounded p-2"
                                  >
                                    <div className="flex items-center space-x-2 mb-1">
                                      <ExternalLink className="w-3 h-3 text-blue-400" />
                                      <p className="text-xs text-white font-medium truncate">
                                        {result.title}
                                      </p>
                                    </div>
                                    <p className="text-xs text-gray-400 line-clamp-2">
                                      {result.description}
                                    </p>
                                  </div>
                                ))}
                            </div>
                          )}
                      </Card>
                    );
                  }
                )}
              </div>
            </Card>

            {/* AI Generated Ideas */}
            <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[#FFD700]" />
                <h3 className="text-xl font-semibold text-white">
                  AI Generated Ideas
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* YouTube Video Ideas */}
                {results.aiGeneratedIdeas?.youtubeVideoIdeas?.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Youtube className="w-4 h-4 text-red-400" />
                      <h4 className="font-semibold text-white text-sm">
                        YouTube Videos
                      </h4>
                    </div>
                    {results.aiGeneratedIdeas.youtubeVideoIdeas
                      .slice(0, 3)
                      .map((idea: any, index: number) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-[#151B3B] to-[#1A2040] rounded-lg p-3"
                        >
                          <h5 className="text-sm font-medium text-white mb-1">
                            {idea.title}
                          </h5>
                          <p className="text-xs text-gray-300">
                            {idea.description}
                          </p>
                        </div>
                      ))}
                  </div>
                )}

                {/* YouTube Reels Ideas */}
                {results.aiGeneratedIdeas?.youtubeReelsIdeas?.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Video className="w-4 h-4 text-red-400" />
                      <h4 className="font-semibold text-white text-sm">
                        YouTube Shorts
                      </h4>
                    </div>
                    {results.aiGeneratedIdeas.youtubeReelsIdeas
                      .slice(0, 3)
                      .map((idea: any, index: number) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-[#151B3B] to-[#1A2040] rounded-lg p-3"
                        >
                          <h5 className="text-sm font-medium text-white mb-1">
                            {idea.title}
                          </h5>
                          <p className="text-xs text-gray-300">{idea.idea}</p>
                        </div>
                      ))}
                  </div>
                )}

                {/* Instagram Reels Ideas */}
                {results.aiGeneratedIdeas?.instagramReelsIdeas?.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <h4 className="font-semibold text-white text-sm">
                        Instagram Reels
                      </h4>
                    </div>
                    {results.aiGeneratedIdeas.instagramReelsIdeas
                      .slice(0, 3)
                      .map((idea: any, index: number) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-[#151B3B] to-[#1A2040] rounded-lg p-3"
                        >
                          <p className="text-sm text-white mb-1">
                            {idea.reelIdea}
                          </p>
                          <p className="text-xs text-gray-300">
                            {idea.caption}
                          </p>
                        </div>
                      ))}
                  </div>
                )}

                {/* Ads Ideas */}
                {results.aiGeneratedIdeas?.adsIdeas?.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-green-400" />
                      <h4 className="font-semibold text-white text-sm">
                        Ad Campaigns
                      </h4>
                    </div>
                    {results.aiGeneratedIdeas.adsIdeas
                      .slice(0, 3)
                      .map((idea: any, index: number) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-[#151B3B] to-[#1A2040] rounded-lg p-3"
                        >
                          <h5 className="text-sm font-medium text-white mb-1">
                            {idea.title}
                          </h5>
                          <p className="text-xs text-gray-300">
                            {idea.description}
                          </p>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Key Insights */}
            {results.keyInsightsAcrossPlatforms?.length > 0 && (
              <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#FFD700]" />
                  <h3 className="text-xl font-semibold text-white">
                    Key Insights
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {results.keyInsightsAcrossPlatforms.map(
                    (insight: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-gradient-to-r from-[#151B3B] to-[#1A2040] rounded-lg"
                      >
                        <div className="w-2 h-2 bg-[#39FF14] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{insight}</p>
                      </div>
                    )
                  )}
                </div>
              </Card>
            )}
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
                {results.targetAudience?.ageGroup && (
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm">
                      Age Group
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {results.targetAudience.ageGroup}
                    </p>
                  </div>
                )}
                {results.targetAudience?.audienceCategory && (
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm">
                      Category
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {results.targetAudience.audienceCategory}
                    </p>
                  </div>
                )}
                {results.targetAudience?.demographics && (
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm">
                      Demographics
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {results.targetAudience.demographics}
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* Trending Hashtags */}
            {results.trendingHashtags?.length > 0 && (
              <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Hash className="w-6 h-6 text-[#39FF14]" />
                  <h3 className="text-lg font-semibold text-white">
                    Trending Hashtags
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {results.trendingHashtags.map(
                    (hashtag: string, index: number) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 text-[#00D4FF] border-[#00D4FF]/30 hover:bg-[#00D4FF]/30 cursor-pointer text-xs"
                      >
                        {hashtag.startsWith("#") ? hashtag : `#${hashtag}`}
                      </Badge>
                    )
                  )}
                </div>
              </Card>
            )}

            {/* Research Summary */}
            <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-[#8B5CF6]" />
                <h3 className="text-lg font-semibold text-white">
                  Research Summary
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white">
                    {researchInfo?.category || researchData.category || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white">
                    {researchInfo?.location || researchData.location || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Content Type:</span>
                  <span className="text-white">
                    {researchInfo?.contentType ||
                      researchData.contentType ||
                      "N/A"}
                  </span>
                </div>
                {(researchInfo?.keywords?.length > 0 ||
                  researchData.keywords?.length > 0) && (
                  <div>
                    <span className="text-gray-400">Keywords:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {(
                        researchInfo?.keywords ||
                        researchData.keywords ||
                        []
                      ).map((keyword: string, index: number) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-white/20 text-gray-300 text-xs"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
