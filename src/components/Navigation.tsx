import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav className={`${isHomePage ? 'absolute top-0 left-0 right-0 z-50' : 'relative'} px-4 sm:px-6 lg:px-8 py-4 sm:py-6 ${isHomePage ? '' : 'bg-white shadow-sm border-b'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
          <span className={isHomePage ? 'text-white' : 'text-foreground'}>
            MediTravel<span className="text-trust-blue">Plus</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            to="/" 
            className={`transition-colors text-sm lg:text-base ${
              isHomePage 
                ? 'text-white/90 hover:text-white' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/destinations" 
            className={`transition-colors text-sm lg:text-base ${
              isHomePage 
                ? 'text-white/90 hover:text-white' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Destinations
          </Link>
          <Link 
            to="/hospitals" 
            className={`transition-colors text-sm lg:text-base ${
              isHomePage 
                ? 'text-white/90 hover:text-white' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Hospitals
          </Link>
          <Link 
            to="/treatments" 
            className={`transition-colors text-sm lg:text-base ${
              isHomePage 
                ? 'text-white/90 hover:text-white' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Treatments
          </Link>
          <a 
            href={isHomePage ? "#calculator" : "/#calculator"} 
            className={`transition-colors text-sm lg:text-base ${
              isHomePage 
                ? 'text-white/90 hover:text-white' 
                : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            Cost Comparison
          </a>
          {isAuthenticated && (
            <div className="flex items-center space-x-2 lg:space-x-4">
              {user?.role === 'admin' && (
                <Link to="/admin">
                  <Button 
                    variant="outline" 
                    className={`text-xs lg:text-sm ${
                      isHomePage 
                        ? 'border-white text-white hover:bg-white hover:text-professional-navy bg-white/10 backdrop-blur-sm'
                        : 'border-gray-300 text-foreground hover:bg-gray-50'
                    }`}
                  >
                    <User className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                    <span className="hidden lg:inline">Admin Panel</span>
                    <span className="lg:hidden">Admin</span>
                  </Button>
                </Link>
              )}
              <div className={`flex items-center space-x-1 lg:space-x-2 ${
                isHomePage ? 'text-white/90' : 'text-foreground/70'
              }`}>
                <User className="h-3 w-3 lg:h-4 lg:w-4" />
                <span className="text-xs lg:text-sm">{user?.firstName}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleLogout}
                className={`text-xs lg:text-sm ${
                  isHomePage 
                    ? 'border-white text-white hover:bg-white hover:text-professional-navy bg-white/10 backdrop-blur-sm'
                    : 'border-gray-300 text-foreground hover:bg-gray-50'
                }`}
              >
                <LogOut className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Logout</span>
                <span className="lg:hidden">Out</span>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMobileMenu}
            className={`${
              isHomePage 
                ? 'border-white text-white hover:bg-white hover:text-professional-navy bg-white/10 backdrop-blur-sm'
                : 'border-gray-300 text-foreground hover:bg-gray-50'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-white/20 shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            {/* Navigation Links */}
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-foreground hover:text-trust-blue transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/destinations" 
                className="block text-foreground hover:text-trust-blue transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link 
                to="/hospitals" 
                className="block text-foreground hover:text-trust-blue transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hospitals
              </Link>
              <Link 
                to="/treatments" 
                className="block text-foreground hover:text-trust-blue transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Treatments
              </Link>
              <a 
                href={isHomePage ? "#calculator" : "/#calculator"} 
                className="block text-foreground hover:text-trust-blue transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Calculator
              </a>
            </div>

            {/* User Section */}
            {isAuthenticated && (
              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-foreground">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{user?.firstName} {user?.lastName}</span>
                  </div>
                  {user?.role === 'admin' && (
                    <Link 
                      to="/admin"
                      className="block w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button variant="outline" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Admin Panel
                      </Button>
                    </Link>
                  )}
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

