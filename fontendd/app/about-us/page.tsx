"use client";

import {
  Users,
  Award,
  TrendingUp,
  Globe,
  Zap,
  Heart,
  Brain,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AboutUsProps {
  onStartResearch: () => void;
}

export function AboutUs({ onStartResearch }: AboutUsProps) {
  const stats = [
    { label: "Products Analyzed", value: "10K+", icon: TrendingUp },
    { label: "Viral Campaigns", value: "2.5K+", icon: Zap },
    { label: "Success Rate", value: "89%", icon: Award },
    { label: "Countries", value: "50+", icon: Globe },
  ];

  const values = [
    {
      icon: Brain,
      title: "AI-Powered Innovation",
      description:
        "We leverage cutting-edge artificial intelligence to analyze market trends and predict viral potential with unprecedented accuracy.",
    },
    {
      icon: Users,
      title: "Community-Driven",
      description:
        "Our platform is built by marketers, for marketers. We understand the challenges because we've faced them ourselves.",
    },
    {
      icon: Heart,
      title: "Success-Focused",
      description:
        "Your success is our success. We're committed to helping every product find its viral moment and achieve market breakthrough.",
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
              ViraLab
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize viral marketing through AI-powered
            insights and data-driven strategies
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-12 sm:mb-16">
          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6 sm:p-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Every great product deserves its moment to shine. ViraLab was
                born from the belief that with the right insights, any product
                can achieve viral success. We combine advanced AI technology
                with deep marketing expertise to help businesses of all sizes
                create campaigns that capture attention, drive engagement, and
                deliver results.
              </p>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6 sm:p-8 hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="mb-12 sm:mb-16">
          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Our Story
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                ViraLab was founded by a team of marketing professionals and AI
                researchers who experienced firsthand the challenges of creating
                viral content. After years of trial and error, late nights
                analyzing competitor strategies, and countless failed campaigns,
                we realized there had to be a better way.
              </p>
              <p>
                We discovered that viral success isn't just about luck or
                creativity—it's about understanding patterns, timing, and market
                dynamics. By combining our marketing expertise with advanced AI
                technology, we created a platform that can identify these
                patterns and predict viral potential with remarkable accuracy.
              </p>
              <p>
                Today, ViraLab helps thousands of businesses worldwide transform
                their products into viral sensations. From startups launching
                their first product to established brands seeking their next
                breakthrough, we're proud to be the catalyst for viral success
                stories across every industry.
              </p>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8">
              Let's work together to make your product the next viral sensation
            </p>
            <Button
              onClick={onStartResearch}
              className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:from-[#00B8E6] hover:to-[#7C3AED] text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg shadow-lg shadow-[#00D4FF]/25 transition-all duration-300 hover:shadow-[#00D4FF]/40 hover:scale-105"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
