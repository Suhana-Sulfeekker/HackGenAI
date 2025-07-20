"use client";

import { ArrowLeft, Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderProps {
  onBackToStart: () => void;
  showBackButton: boolean;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({
  onBackToStart,
  showBackButton,
  currentPage = "hero",
  onNavigate,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", value: "hero" },
    { label: "How It Works", value: "how-it-works" },
    { label: "About Us", value: "about" },
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-[#1A2040]/80">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {showBackButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onBackToStart}
                className="text-gray-300 hover:text-white hover:bg-white/10 mr-1 sm:mr-2 w-8 h-8 sm:w-10 sm:h-10"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            )}
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg blur-lg opacity-50 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
                Viral IQ
              </h1>
              <p className="text-xs text-gray-400 -mt-1 hidden sm:block">
                AI Marketing Research
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          {!showBackButton && (
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavigation(item.value)}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    currentPage === item.value ? "text-white" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          {/* Mobile Menu Button */}
          {!showBackButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white hover:bg-white/10 w-8 h-8 sm:w-10 sm:h-10"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Button>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {!showBackButton && isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavigation(item.value)}
                  className={`text-left text-sm font-medium transition-colors hover:text-white ${
                    currentPage === item.value ? "text-white" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
