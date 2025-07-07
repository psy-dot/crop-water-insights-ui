
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFormSectionProps {
  onSubmit: (data: any) => void;
}

const InputFormSection = ({ onSubmit }: InputFormSectionProps) => {
  const [formData, setFormData] = useState({
    cropType: "",
    soilType: "",
    region: "",
    temperature: "",
    humidity: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every(value => value !== "")) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="input-form" className="py-16 bg-white/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Water Advisory
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your crop and environmental conditions to receive personalized irrigation recommendations
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-900">Crop Analysis Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Crop Type */}
                <div className="space-y-2">
                  <Label htmlFor="cropType" className="text-sm font-medium text-gray-700">
                    Select Crop Type
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("cropType", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose your crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">🌾 Wheat</SelectItem>
                      <SelectItem value="rice">🌾 Rice</SelectItem>
                      <SelectItem value="corn">🌽 Corn</SelectItem>
                      <SelectItem value="soybeans">🫘 Soybeans</SelectItem>
                      <SelectItem value="tomatoes">🍅 Tomatoes</SelectItem>
                      <SelectItem value="potatoes">🥔 Potatoes</SelectItem>
                      <SelectItem value="cotton">☁️ Cotton</SelectItem>
                      <SelectItem value="barley">🌾 Barley</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Soil Type */}
                <div className="space-y-2">
                  <Label htmlFor="soilType" className="text-sm font-medium text-gray-700">
                    Soil Type
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("soilType", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">🟤 Clay</SelectItem>
                      <SelectItem value="sandy">🟡 Sandy</SelectItem>
                      <SelectItem value="loam">🟫 Loam</SelectItem>
                      <SelectItem value="silt">⚪ Silt</SelectItem>
                      <SelectItem value="rocky">🪨 Rocky</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Region */}
                <div className="space-y-2">
                  <Label htmlFor="region" className="text-sm font-medium text-gray-700">
                    Region
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("region", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="midwest">🌾 Midwest</SelectItem>
                      <SelectItem value="southwest">🌵 Southwest</SelectItem>
                      <SelectItem value="southeast">🌴 Southeast</SelectItem>
                      <SelectItem value="northeast">🍂 Northeast</SelectItem>
                      <SelectItem value="pacific">🌊 Pacific</SelectItem>
                      <SelectItem value="mountain">⛰️ Mountain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Temperature */}
                <div className="space-y-2">
                  <Label htmlFor="temperature" className="text-sm font-medium text-gray-700">
                    Temperature (°F)
                  </Label>
                  <Input
                    id="temperature"
                    type="number"
                    placeholder="Enter temperature"
                    value={formData.temperature}
                    onChange={(e) => handleInputChange("temperature", e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Humidity */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="humidity" className="text-sm font-medium text-gray-700">
                    Humidity (%)
                  </Label>
                  <Input
                    id="humidity"
                    type="number"
                    placeholder="Enter humidity percentage"
                    value={formData.humidity}
                    onChange={(e) => handleInputChange("humidity", e.target.value)}
                    className="w-full"
                    min="0"
                    max="100"
                  />
                </div>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={Object.values(formData).some(value => value === "")}
                >
                  🔍 Analyze Water Requirement
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InputFormSection;
