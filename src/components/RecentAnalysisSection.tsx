
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CropAnalysis } from "@/pages/Index";

interface RecentAnalysisSectionProps {
  analyses: CropAnalysis[];
}

const RecentAnalysisSection = ({ analyses }: RecentAnalysisSectionProps) => {
  return (
    <section className="py-16 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Analysis History
          </h2>
          <p className="text-lg text-gray-600">
            Track your irrigation recommendations over time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {analyses.map((analysis) => (
            <Card key={analysis.id} className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-gray-900 capitalize">
                      {analysis.cropType} Analysis
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{analysis.date}</p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {analysis.waterAmount} L/ha
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Soil Type</div>
                    <div className="font-medium capitalize">{analysis.soilType}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Region</div>
                    <div className="font-medium capitalize">{analysis.region}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Schedule</div>
                    <div className="font-medium">{analysis.irrigationSchedule}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Conditions</div>
                    <div className="font-medium">{analysis.temperature}°F, {analysis.humidity}%</div>
                  </div>
                </div>
                
                {analysis.warnings.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-sm text-orange-600 font-medium mb-2">Warnings:</div>
                    <div className="space-y-1">
                      {analysis.warnings.map((warning, index) => (
                        <div key={index} className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">
                          {warning}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentAnalysisSection;
