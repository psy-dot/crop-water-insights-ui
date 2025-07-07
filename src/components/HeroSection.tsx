
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('input-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Smarter Irrigation,
            <span className="text-green-600 block">Healthier Crops</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get water usage advice based on your crop, soil, and weather conditions. 
            Optimize your irrigation for better yields and sustainable farming.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Analysis</h3>
              <p className="text-gray-600">AI-powered recommendations based on real agricultural data</p>
            </div>

            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Optimization</h3>
              <p className="text-gray-600">Reduce water waste while maximizing crop health</p>
            </div>

            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Insights</h3>
              <p className="text-gray-600">Track your irrigation history and improve over time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
