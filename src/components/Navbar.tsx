
import { useState } from "react";
import { Menu, X, Sun, Moon, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Crop Water Advisor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Home</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Dashboard</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors duration-200">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Contact</Link>
            
            {/* Theme Switcher */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-4"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-green-100">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200">Home</Link>
              <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200">Dashboard</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
