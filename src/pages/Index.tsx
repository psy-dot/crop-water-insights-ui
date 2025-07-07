
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InputFormSection from "@/components/InputFormSection";
import AdvisoryResultSection from "@/components/AdvisoryResultSection";
import RecentAnalysisSection from "@/components/RecentAnalysisSection";
import Footer from "@/components/Footer";
import { useState } from "react";

export interface CropAnalysis {
  id: string;
  date: string;
  cropType: string;
  soilType: string;
  region: string;
  temperature: number;
  humidity: number;
  waterAmount: number;
  irrigationSchedule: string;
  warnings: string[];
}

const Index = () => {
  const [currentAnalysis, setCurrentAnalysis] = useState<CropAnalysis | null>(null);
  const [recentAnalyses, setRecentAnalyses] = useState<CropAnalysis[]>([]);

  const handleAnalysisSubmit = (formData: any) => {
    // Mock analysis logic
    const analysis: CropAnalysis = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      cropType: formData.cropType,
      soilType: formData.soilType,
      region: formData.region,
      temperature: parseFloat(formData.temperature),
      humidity: parseFloat(formData.humidity),
      waterAmount: Math.round(200 + Math.random() * 300), // Mock calculation
      irrigationSchedule: Math.random() > 0.5 ? "3-4 times/week" : "2-3 times/week",
      warnings: Math.random() > 0.7 ? ["Monitor soil moisture closely", "Risk of overwatering in current weather"] : []
    };

    setCurrentAnalysis(analysis);
    setRecentAnalyses(prev => [analysis, ...prev.slice(0, 4)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <main>
        <HeroSection />
        <InputFormSection onSubmit={handleAnalysisSubmit} />
        {currentAnalysis && <AdvisoryResultSection analysis={currentAnalysis} />}
        {recentAnalyses.length > 0 && <RecentAnalysisSection analyses={recentAnalyses} />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
