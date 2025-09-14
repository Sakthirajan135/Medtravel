import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-medical-tourism.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Medical tourism destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left py-20">
        <div className="lg:max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            <span className="text-white drop-shadow-2xl block">World-Class Healthcare</span>
            <span className="text-white drop-shadow-2xl block">Adventures Await</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white drop-shadow-lg mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Discover premium medical care in breathtaking destinations. 
            Save up to 80% on procedures while exploring new cultures and creating unforgettable memories.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-12">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white shadow-lg border border-white/30">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-sm font-bold">JCI Accredited</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white shadow-lg border border-white/30">
              <DollarSign className="h-5 w-5 text-white" />
              <span className="text-sm font-bold">Save 50-80%</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white shadow-lg border border-white/30">
              <Globe className="h-5 w-5 text-white" />
              <span className="text-sm font-bold">Global Network</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
            <Link to="/destinations">
              <Button 
                size="lg" 
                className="bg-trust-blue hover:bg-trust-blue/90 text-white shadow-xl px-8 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
              >
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-trust-blue px-8 py-4 text-lg font-semibold backdrop-blur-md bg-black/20 transition-all duration-200 w-full sm:w-auto"
              onClick={() => {
                const calculatorSection = document.getElementById('calculator');
                if (calculatorSection) {
                  calculatorSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Calculate Savings
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl lg:text-3xl font-bold text-white drop-shadow-xl mb-1">50</div>
              <div className="text-white/90 text-sm font-medium">Happy Patients</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl lg:text-3xl font-bold text-white drop-shadow-xl mb-1">7+</div>
              <div className="text-white/90 text-sm font-medium">Countries</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl lg:text-3xl font-bold text-white drop-shadow-xl mb-1">60-80%</div>
              <div className="text-white/90 text-sm font-medium">Average Savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-trust-blue/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-pastel-green/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-soft-blue/30 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}} />
      </div>
    </section>
  );
}