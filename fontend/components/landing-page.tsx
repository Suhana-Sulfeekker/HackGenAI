"use client"

import { useState } from "react"
import { Header } from "./header"
import { HeroSection } from "./hero-section"
import { ResearchForm } from "./research-form"
import { LoadingScreen } from "./loading-screen"
import { ResultsPage } from "./results-page"

export function LandingPage() {
  const [currentStep, setCurrentStep] = useState<"hero" | "form" | "loading" | "results">("hero")
  const [researchData, setResearchData] = useState<any>(null)

  const handleStartResearch = () => {
    setCurrentStep("form")
  }

  const handleFormSubmit = (data: any) => {
    setResearchData(data)
    setCurrentStep("loading")

    // Simulate processing time
    setTimeout(() => {
      setCurrentStep("results")
    }, 8000)
  }

  const handleBackToStart = () => {
    setCurrentStep("hero")
    setResearchData(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#151B3B] to-[#0A0E27]">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#39FF14] rounded-full animate-pulse opacity-40" />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-pulse opacity-50" />
      </div>

      <Header onBackToStart={handleBackToStart} showBackButton={currentStep !== "hero"} />

      <main className="relative z-10">
        {currentStep === "hero" && <HeroSection onStartResearch={handleStartResearch} />}
        {currentStep === "form" && <ResearchForm onSubmit={handleFormSubmit} />}
        {currentStep === "loading" && <LoadingScreen researchData={researchData} />}
        {currentStep === "results" && <ResultsPage researchData={researchData} />}
      </main>
    </div>
  )
}
