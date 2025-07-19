"use client"

import { ArrowLeft, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onBackToStart: () => void
  showBackButton: boolean
}

export function Header({ onBackToStart, showBackButton }: HeaderProps) {
  return (
    <header className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-[#1A2040]/80">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {showBackButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onBackToStart}
                className="text-gray-300 hover:text-white hover:bg-white/10 mr-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg blur-lg opacity-50 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
                ViraLab
              </h1>
              <p className="text-xs text-gray-400 -mt-1">AI Marketing Research</p>
            </div>
          </div>

          {/* Right side - empty for now */}
          <div className="flex items-center space-x-4">{/* Future: User menu, settings, etc. */}</div>
        </div>
      </div>
    </header>
  )
}
