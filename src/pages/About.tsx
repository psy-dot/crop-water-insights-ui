
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">Crop Water Advisor</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering farmers with intelligent irrigation recommendations for sustainable agriculture and optimal crop yields.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Crop Water Advisor, we believe that smart irrigation is the key to sustainable farming. 
              Our mission is to provide farmers with data-driven insights that help optimize water usage, 
              reduce waste, and maximize crop yields.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By combining advanced agricultural science with modern technology, we make precision 
              irrigation accessible to farmers of all scales, from small family farms to large 
              commercial operations.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-green-100 rounded-full flex items-center justify-center">
                <Droplets className="w-32 h-32 text-green-600" />
              </div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-12 h-12 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Smart Irrigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get precise water recommendations based on your specific crop, soil type, and local weather conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Data-Driven Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Make informed decisions with comprehensive analytics and historical data tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join a community of forward-thinking farmers sharing knowledge and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">Farmers Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-gray-600">Water Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
              <div className="text-gray-600">Yield Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Crop Types</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Built by Agricultural Experts
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our team combines decades of agricultural expertise with cutting-edge technology. 
            We work closely with agronomists, soil scientists, and meteorologists to ensure 
            our recommendations are both scientifically sound and practically applicable.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
