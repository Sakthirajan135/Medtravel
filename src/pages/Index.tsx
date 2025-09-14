import { HeroSection } from "@/components/HeroSection";
import { DestinationCard } from "@/components/DestinationCard";
import { CostCalculator } from "@/components/CostCalculator";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Users, Award, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

// Import destination images
import indiaImage from "@/assets/india-medical.jpg";
import mexicoImage from "@/assets/mexico-medical.jpg";
import vietnamImage from "@/assets/vietnam-medical.jpg";
import southAfricaImage from "@/assets/south-africa-medical.jpg";

const destinations = [
  {
    name: "New Delhi",
    country: "India",
    savings: "80%",
    rating: 4.9,
    image: indiaImage,
    specialties: ["Heart Surgery", "Orthopedics", "IVF Treatment", "Cancer Care"],
    description: "World-renowned medical excellence meets rich cultural heritage. India's top hospitals combine cutting-edge technology with affordable pricing in a land of incredible diversity.",
    theme: "india" as const,
  },
  {
    name: "Tijuana", 
    country: "Mexico",
    savings: "70%",
    rating: 4.8,
    image: mexicoImage,
    specialties: ["Dental Care", "Cosmetic Surgery", "Bariatric Surgery", "Wellness"],
    description: "Just across the border, world-class healthcare meets vibrant Mexican culture. Enjoy exceptional medical care while exploring ancient ruins and stunning beaches.",
    theme: "mexico" as const,
  },
  {
    name: "Ho Chi Minh City",
    country: "Vietnam", 
    savings: "75%",
    rating: 4.7,
    image: vietnamImage,
    specialties: ["Wellness Programs", "Dental Care", "Cosmetic Surgery", "Rehabilitation"],
    description: "Cutting-edge medical facilities in stunning natural settings. Recover in luxury while experiencing the incredible landscapes and rich culture of Southeast Asia.",
    theme: "vietnam" as const,
  },
  {
    name: "Cape Town",
    country: "South Africa",
    savings: "65%",
    rating: 4.6,
    image: southAfricaImage,
    specialties: ["Cardiac Surgery", "Oncology", "Fertility Treatment", "Wellness"],
    description: "Premium healthcare with an African adventure. Combine life-changing surgery with once-in-a-lifetime wildlife experiences and breathtaking landscapes.",
    theme: "south-africa" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
            <p className="text-muted-foreground text-sm sm:text-base">Join the medical tourism revolution with confidence</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-trust-blue mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">JCI Accredited Facilities</h3>
              <p className="text-muted-foreground text-sm sm:text-base">All partner hospitals meet international standards</p>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-trust-blue mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">50 Happy Patients</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Successful treatments and amazing experiences</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <Award className="h-10 w-10 sm:h-12 sm:w-12 text-pastel-green mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Award-Winning Care</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Internationally recognized medical excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-trust-blue/10 text-trust-blue mb-4 text-xs sm:text-sm">Popular Destinations</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Choose Your Healing Destination
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              World-class healthcare in breathtaking locations. Your recovery becomes an unforgettable journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/destinations">
              <Button size="lg" className="bg-trust-blue hover:bg-trust-blue/90 text-white text-sm sm:text-base px-6 sm:px-8">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section id="calculator" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-pastel-green/20 text-trust-blue mb-4 text-xs sm:text-sm">Free Calculator</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Calculate Your Savings
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              See exactly how much you can save on your procedure plus travel costs. 
              Get instant estimates for popular treatments worldwide.
            </p>
          </div>

          <CostCalculator />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Join thousands who've discovered that the best healthcare doesn't have to break the bank. 
            Your adventure in healing awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
            <Button size="lg" className="bg-white text-trust-blue hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
              Start Planning Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-trust-blue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              onClick={() => {
                const calculatorSection = document.getElementById('calculator');
                if (calculatorSection) {
                  calculatorSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Calculate Savings
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-trust-blue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
              Speak to an Expert
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Free consultation available</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Safe & accredited partners</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="h-4 w-4" />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl sm:text-2xl font-bold mb-4">
                MediTravel<span className="text-trust-blue">Plus</span>
              </div>
              <p className="text-white/70 mb-4 text-sm sm:text-base">
                Making world-class healthcare accessible and affordable for everyone.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                <MapPin className="h-4 w-4" />
                <span>Serving patients across the USA</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Destinations</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Mexico</a></li>
                <li><a href="#" className="hover:text-white transition-colors">India</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vietnam</a></li>
                <li><a href="#" className="hover:text-white transition-colors">South Africa</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Procedures</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Dental Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cosmetic Surgery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Heart Surgery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Orthopedics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety & Accreditation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Patient Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © 2024 MediTravelPlus. For informational purposes only. Not medical advice.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;