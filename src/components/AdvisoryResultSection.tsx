
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CropAnalysis } from "@/pages/Index";

interface AdvisoryResultSectionProps {
  analysis: CropAnalysis;
}

const AdvisoryResultSection = ({ analysis }: AdvisoryResultSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Water Advisory Results
          </h2>
          <p className="text-lg text-gray-600">
            Based on your {analysis.cropType} crop in {analysis.region} conditions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Water Amount Card */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💧</span>
              </div>
              <CardTitle className="text-lg text-gray-900">Recommended Water Amount</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {analysis.waterAmount}
              </div>
              <div className="text-gray-600 text-lg">liters/hectare</div>
              <div className="mt-4 text-sm text-gray-500">
                Optimal for {analysis.cropType} in current conditions
              </div>
            </CardContent>
          </Card>

          {/* Irrigation Schedule Card */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <CardTitle className="text-lg text-gray-900">Irrigation Schedule</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {analysis.irrigationSchedule}
              </div>
              <div className="text-gray-600 text-lg">Frequency</div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="text-sm text-green-700 font-medium">
                  Best irrigation times: Early morning (6-8 AM)
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warnings Card */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <CardTitle className="text-lg text-gray-900">Advisory Warnings</CardTitle>
            </CardHeader>
            <CardContent>
              {analysis.warnings.length > 0 ? (
                <div className="space-y-3">
                  {analysis.warnings.map((warning, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-start p-3 text-orange-700 border-orange-200 bg-orange-50">
                      {warning}
                    </Badge>
                  ))}
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">✅</div>
                  <div className="text-green-700 font-medium">All conditions optimal</div>
                  <div className="text-sm text-gray-600 mt-2">No warnings for current settings</div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analysis Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Crop</div>
                  <div className="font-medium text-gray-900 capitalize">{analysis.cropType}</div>
                </div>
                <div>
                  <div className="text-gray-500">Soil</div>
                  <div className="font-medium text-gray-900 capitalize">{analysis.soilType}</div>
                </div>
                <div>
                  <div className="text-gray-500">Temperature</div>
                  <div className="font-medium text-gray-900">{analysis.temperature}°F</div>
                </div>
                <div>
                  <div className="text-gray-500">Humidity</div>
                  <div className="font-medium text-gray-900">{analysis.humidity}%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryResultSection;
