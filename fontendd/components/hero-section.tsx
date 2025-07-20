"use client";

import { Zap, Target, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface HeroSectionProps {
  onStartResearch: () => void;
}

export function HeroSection({ onStartResearch }: HeroSectionProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Hero Content */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            Transform Your Product Into
            <span className="block bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              Viral Success
            </span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            AI-powered marketing research that analyzes your product,
            competitors, and market trends to create data-driven viral marketing
            strategies.
          </p>
          <Button
            onClick={onStartResearch}
            className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:from-[#00B8E6] hover:to-[#7C3AED] text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg shadow-lg shadow-[#00D4FF]/25 transition-all duration-300 hover:shadow-[#00D4FF]/40 hover:scale-105"
          >
            Start New Research
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-4 sm:p-6 hover:scale-105 transition-transform">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Smart Analysis
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              AI analyzes your product and market to identify viral
              opportunities
            </p>
          </Card>

          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-4 sm:p-6 hover:scale-105 transition-transform">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Web Scraping
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Scrapes competitor content and trending topics for insights
            </p>
          </Card>

          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-4 sm:p-6 hover:scale-105 transition-transform">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#39FF14] to-[#00D4FF] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Trend Detection
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Identifies trending keywords and viral content patterns
            </p>
          </Card>

          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-4 sm:p-6 hover:scale-105 transition-transform">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FFD700] to-[#FF6B6B] rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              Action Plan
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Generates complete social media strategy and content ideas
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
