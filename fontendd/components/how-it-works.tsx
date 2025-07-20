"use client";

import { Search, Brain, Target, Rocket, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  onStartResearch: () => void;
}

export function HowItWorks({ onStartResearch }: HowItWorksProps) {
  const steps = [
    {
      icon: Search,
      title: "Product Analysis",
      description:
        "Input your product details and target market. Our AI analyzes your offering to understand its unique value proposition and potential viral angles.",
      color: "from-[#00D4FF] to-[#8B5CF6]",
    },
    {
      icon: Brain,
      title: "Market Intelligence",
      description:
        "We scrape competitor content, analyze trending topics, and identify market gaps to find the perfect positioning for your product.",
      color: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      icon: Target,
      title: "Strategy Generation",
      description:
        "AI creates data-driven marketing strategies, identifies viral content opportunities, and suggests optimal timing for maximum impact.",
      color: "from-[#39FF14] to-[#00D4FF]",
    },
    {
      icon: Rocket,
      title: "Action Plan",
      description:
        "Receive a complete social media strategy with content ideas, posting schedules, and performance metrics to track your viral success.",
      color: "from-[#FFD700] to-[#FF6B6B]",
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Viral IQ
            </span>{" "}
            Works
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform transforms your product into viral success
            through a proven 4-step process
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step Card */}
                <div className="flex-1 w-full">
                  <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                          <span className="text-2xl sm:text-3xl font-bold text-gray-500">
                            0{index + 1}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Visual Element */}
                <div className="flex-1 w-full flex justify-center">
                  <div
                    className={`w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r ${step.color} rounded-full opacity-20 blur-3xl animate-pulse`}
                  />
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6 sm:my-8">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Go Viral?
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8">
              Join thousands of successful marketers who have transformed their
              products into viral sensations
            </p>
            <Button
              onClick={onStartResearch}
              className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:from-[#00B8E6] hover:to-[#7C3AED] text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg shadow-lg shadow-[#00D4FF]/25 transition-all duration-300 hover:shadow-[#00D4FF]/40 hover:scale-105"
            >
              Start Your Research Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
