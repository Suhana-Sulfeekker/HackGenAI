"use client";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import Image from "next/image";
import { LoadingScreen } from "./loading-screen";
import { ResultsPage } from "./results-page";
import axios from "axios";
import BGimage from "../public/assets/aiImage.jpg";
import { useRouter } from "next/router";

type Category = "brand" | "event";
type ViewState = "form" | "loading" | "results";

const contentTypes: Record<Category, { value: string; label: string }[]> = {
  brand: [
    { value: "product-launch", label: "Product Launch" },
    { value: "brand-awareness", label: "Brand Awareness" },
    { value: "service-promotion", label: "Service Promotion" },
    { value: "social-media-campaign", label: "Social Media Campaign" },
    { value: "content-marketing", label: "Content Marketing" },
  ],
  event: [
    { value: "event-marketing", label: "Event Marketing" },
    { value: "ticket-promotion", label: "Ticket Promotion" },
    { value: "sponsorship-campaign", label: "Sponsorship Campaign" },
    { value: "live-stream-promotion", label: "Live Stream Promotion" },
    { value: "post-event-engagement", label: "Post-Event Engagement" },
  ],
};

export function ResearchForm() {
  const [category, setCategory] = useState<Category>("brand");
  const [currentView, setCurrentView] = useState<ViewState>("form");
  const [apiResults, setApiResults] = useState<any>(null);
  const [formData, setFormData] = useState({
    brandName: "",
    productName: "",
    contentType: "",
    location: "",
    keywords: [] as string[],
    description: "",
    organizerName: "",
    eventName: "",
  });
  const [keywordInput, setKeywordInput] = useState("");

  const handleAddKeyword = () => {
    if (
      keywordInput.trim() &&
      !formData.keywords.includes(keywordInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        keywords: [...prev.keywords, keywordInput.trim()],
      }));
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((k) => k !== keyword),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend = {
      brandName: formData.brandName,
      productName: formData.productName,
      contentType: formData.contentType,
      location: formData.location,
      keywords: formData.keywords,
      description: formData.description,
      category,
      ...(category === "event"
        ? {
            organizerName: formData.organizerName,
            eventName: formData.eventName,
          }
        : {}),
    };
    try {
      setCurrentView("loading");
      const response = await axios.post(
        "https://fosslab123.app.n8n.cloud/webhook-test/5ecce52b-de2c-4f82-96f6-1ee3652cb252",
        dataToSend
      );
      if (response.status === 200) {
        console.log("API Response:", response.data);
        setApiResults(response.data);
        setCurrentView("results");
      } else {
        console.error("API Error: Unexpected status code", response.status);
        alert(
          "Failed to generate marketing strategy. Unexpected response. Please try again."
        );
        setCurrentView("form");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to generate marketing strategy. Please try again.");
      setCurrentView("form");
    }
  };

  const handleNewResearch = () => {
    setCurrentView("form");

    setApiResults(null);
    setFormData({
      brandName: "",
      productName: "",
      contentType: "",
      location: "",
      keywords: [],
      description: "",
      organizerName: "", // Clear organizerName
      eventName: "", // Clear eventName
    });
  };

  const dataToSend = {
    brandName: formData.brandName,
    productName: formData.productName,
    contentType: formData.contentType,
    location: formData.location,
    keywords: formData.keywords,
    description: formData.description,
    category,
    ...(category === "event"
      ? { organizerName: formData.organizerName, eventName: formData.eventName }
      : {}),
  };

  if (currentView === "loading") {
    return <LoadingScreen researchData={dataToSend} />;
  }

  if (currentView === "results") {
    return (
      <ResultsPage
        researchData={dataToSend}
        apiResults={apiResults}
        onNewResearch={handleNewResearch}
      />
    );
  }

  const labels = {
    brandName: category === "event" ? "Organizer / Brand *" : "Brand Name *",
    productName: category === "event" ? "Event Name *" : "Product Name *",
  };

  const isFormValid =
    formData.brandName &&
    formData.productName &&
    formData.contentType &&
    formData.location;

  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-[#0A0D1F]/90 backdrop-blur-md p-8 sm:p-12 lg:p-16 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Marketing Research
            </h2>
            <p className="text-gray-400">
              Choose a category and we'll tailor the rest of the form for you.
            </p>
          </div>
          <Card className="bg-[#1A2040]/60 backdrop-blur-xl border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-white">Category *</Label>
                <Select
                  value={category}
                  onValueChange={(val) => {
                    setCategory(val as Category);
                    setFormData((prev) => ({
                      ...prev,
                      contentType: "",
                      ...(val === "brand"
                        ? { organizerName: "", eventName: "" }
                        : { brandName: "", productName: "" }),
                    }));
                  }}
                >
                  <SelectTrigger className="bg-[#151B3B] border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A2040] border-white/10 text-white">
                    <SelectItem value="brand">Brand / Product</SelectItem>
                    <SelectItem value="event">Event / Campaign</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="brandName" className="text-white">
                    {labels.brandName}
                  </Label>
                  <Input
                    id="brandName"
                    value={formData.brandName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        brandName: e.target.value,
                      }))
                    }
                    placeholder={`Enter ${labels.brandName
                      .toLowerCase()
                      .replace("*", "")}`}
                    className="bg-[#151B3B] border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productName" className="text-white">
                    {labels.productName}
                  </Label>
                  <Input
                    id="productName"
                    value={formData.productName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        productName: e.target.value,
                      }))
                    }
                    placeholder={`Enter ${labels.productName
                      .toLowerCase()
                      .replace("*", "")}`}
                    className="bg-[#151B3B] border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contentType" className="text-white">
                    Content Type *
                  </Label>
                  <Select
                    value={formData.contentType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, contentType: value }))
                    }
                  >
                    <SelectTrigger className="bg-[#151B3B] border-white/20 text-white">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A2040] border-white/10 text-white">
                      {contentTypes[category].map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white">
                    Target Location *
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    placeholder="e.g., United States, Global"
                    className="bg-[#151B3B] border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="keywords" className="text-white">
                  Keywords for Research
                </Label>
                <div className="flex space-x-2">
                  <Input
                    id="keywords"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    placeholder="Enter keyword and press Add"
                    className="bg-[#151B3B] border-white/20 text-white placeholder:text-gray-400"
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      (e.preventDefault(), handleAddKeyword())
                    }
                  />
                  <Button
                    type="button"
                    onClick={handleAddKeyword}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Add
                  </Button>
                </div>
                {formData.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.keywords.map((keyword, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30 pr-1"
                      >
                        {keyword}
                        <button
                          type="button"
                          onClick={() => handleRemoveKeyword(keyword)}
                          className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">
                  {category === "event"
                    ? "Product / Campaign Description"
                    : "Product / Campaign Description"}
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder={`Describe your ${category}…`}
                  className="bg-[#151B3B] border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-full text-[12px] sm:text-xs md:text-sm lg:text-base xl:text-lg bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:from-[#00B8E6] hover:to-[#7C3AED] text-white font-semibold py-2 sm:py-2.5 md:py-3 shadow-lg shadow-[#00D4FF]/25 transition-all duration-300 hover:shadow-[#00D4FF]/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate Marketing Strategy
              </Button>
            </form>
          </Card>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2">
          <Image
            src={BGimage}
            alt="Background"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
