
import { Droplets, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Droplets className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">Crop Water Advisor</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Empowering farmers with intelligent irrigation recommendations for sustainable agriculture and optimal crop yields.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <span className="text-2xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <span className="text-2xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Home</a></li>
              <li><a href="#dashboard" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Dashboard</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Contact</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">info@cropwateradvisor.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Agricultural Tech Center<br />123 Farm Innovation Blvd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Crop Water Advisor. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#support" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
