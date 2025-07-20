"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Zap, Globe, Search, Brain, TrendingUp, Target } from "lucide-react";

interface LoadingScreenProps {
  researchData: any;

}

export function LoadingScreen({ researchData }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: "Analyzing Your Product",
      description: `Researching ${researchData?.brandName} ${researchData?.productName}`,
      color: "from-[#00D4FF] to-[#8B5CF6]",
    },
    {
      icon: Globe,
      title: "Scraping Web Content",
      description: "Gathering competitor data and market insights",
      color: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      icon: TrendingUp,
      title: "Identifying Trends",
      description: "Finding viral patterns and trending topics",
      color: "from-[#39FF14] to-[#00D4FF]",
    },
    {
      icon: Target,
      title: "Analyzing Target Audience",
      description: `Studying ${researchData?.location} market preferences`,
      color: "from-[#FFD700] to-[#FF6B6B]",
    },
    {
      icon: Brain,
      title: "AI Strategy Generation",
      description: "Creating personalized marketing recommendations",
      color: "from-[#EC4899] to-[#8B5CF6]",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        const newStep = Math.floor(newProgress / 20);
        setCurrentStep(Math.min(newStep, steps.length - 1));

        // When progress reaches 100%, call onComplete
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
  
          }, 500); // Small delay for better UX
        }

        return Math.min(newProgress, 100);
      });
    }, 160);

    return () => clearInterval(timer);
  }, [researchData]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#151B3B] to-[#0A0E27] flex items-center justify-center p-6">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#39FF14] rounded-full animate-pulse opacity-40" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-pulse opacity-50" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Generating Your Marketing Strategy
            </h2>
            <p className="text-gray-400">
              Our AI is analyzing your product and market to create the perfect
              viral strategy
            </p>
          </div>

          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-8 mb-8">
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white font-medium">Processing...</span>
                  <span className="text-gray-400">{progress}%</span>
                </div>
                <Progress value={progress} className="h-3 bg-[#151B3B]" />
              </div>

              {/* Current Step */}
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#151B3B] to-[#1A2040] rounded-lg border border-white/10">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${steps[currentStep]?.color} rounded-lg flex items-center justify-center animate-pulse`}
                >
                  {/* {steps[currentStep]?.icon && (
                    <steps[currentStep].icon className="w-6 h-6 text-white" />
                  )} */}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {steps[currentStep]?.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {steps[currentStep]?.description}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Steps Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-all ${
                  index <= currentStep
                    ? "bg-white/5 border-white/20"
                    : "bg-[#151B3B]/50 border-white/5"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    index <= currentStep
                      ? `bg-gradient-to-r ${step.color}`
                      : "bg-gray-600"
                  }`}
                >
                  {step.icon && <step.icon className="w-4 h-4 text-white" />}
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-medium ${
                      index <= currentStep ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </h4>
                </div>
                {index < currentStep && (
                  <div className="w-5 h-5 bg-[#39FF14] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
