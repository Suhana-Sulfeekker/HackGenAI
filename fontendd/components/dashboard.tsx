"use client"
import { Header } from "./header"
import { HeroSection } from "./hero-section"
import { PerformanceOverview } from "./performance-overview"
import { ViralDNAInsights } from "./viral-dna-insights"
import { ActiveCampaigns } from "./active-campaigns"
import { TrendingAnalysis } from "./trending-analysis"
import { AIRecommendations } from "./ai-recommendations"

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#151B3B] to-[#0A0E27]">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#39FF14] rounded-full animate-pulse opacity-40" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-pulse opacity-50" />
      </div>

      <Header />
      <main className="relative z-10">
        <HeroSection />
        <div className="container mx-auto px-6 py-8 space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-8">
              <PerformanceOverview />
              <ActiveCampaigns />
            </div>
            <div className="space-y-8">
              <ViralDNAInsights />
              <AIRecommendations />
            </div>
          </div>
          <TrendingAnalysis />
        </div>
      </main>
    </div>
  )
}
