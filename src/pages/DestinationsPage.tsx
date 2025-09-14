import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Star, DollarSign, Plane, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const destinations = [
  {
    id: "india",
    name: "India",
    cities: ["New Delhi", "Mumbai", "Chennai", "Bangalore"],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    rating: 4.9,
    savings: "70-80%",
    procedures: 250,
    hospitals: 45,
    specialties: ["Cardiac Surgery", "Orthopedics", "Cancer Care", "IVF Treatment"],
    description: "World-class healthcare meets ancient wisdom. India offers cutting-edge medical technology with internationally trained doctors at fraction of Western costs.",
    flightTime: "16-20 hours",
    language: "English widely spoken"
  },
  {
    id: "mexico",
    name: "Mexico", 
    cities: ["Tijuana", "Cancun", "Puerto Vallarta", "Mexico City"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GqE60LKMs7FQ2GYajfn5M9Zi8m0-cFuhUg&s",
    rating: 4.8,
    savings: "60-70%",
    procedures: 180,
    hospitals: 35,
    specialties: ["Dental Care", "Cosmetic Surgery", "Bariatric Surgery", "Wellness"],
    description: "Just across the border, world-class healthcare meets vibrant culture. Mexico combines modern facilities with warm hospitality and stunning destinations.",
    flightTime: "2-6 hours",
    language: "Spanish, English in medical facilities"
  },
  {
    id: "vietnam",
    name: "Vietnam",
    cities: ["Ho Chi Minh City", "Hanoi", "Da Nang"],
    image: "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCity%2FGolden_bridge_2.jpg&w=3840&q=90",
    rating: 4.7,
    savings: "65-75%",
    procedures: 120,
    hospitals: 25,
    specialties: ["Wellness Programs", "Dental Care", "Cosmetic Surgery", "Rehabilitation"],
    description: "Cutting-edge medical facilities in breathtaking natural settings. Vietnam offers exceptional care while you recover in paradise.",
    flightTime: "18-22 hours",
    language: "Vietnamese, English in medical facilities"
  },
  {
    id: "south-africa",
    name: "South Africa",
    cities: ["Cape Town", "Johannesburg", "Durban"],
    image: "https://blog.dookinternational.com/wp-content/uploads/2020/12/Cape-Town.jpg",
    rating: 4.6,
    savings: "50-65%",
    procedures: 160,
    hospitals: 30,
    specialties: ["Cardiac Surgery", "Oncology", "Fertility Treatment", "Wellness"],
    description: "Premium healthcare with African adventure. Combine world-class surgery with once-in-a-lifetime wildlife experiences.",
    flightTime: "16-18 hours",
    language: "English official language"
  }
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Explore Medical Tourism Destinations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover world-class healthcare in beautiful destinations. Each country offers unique advantages for your medical journey.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden shadow-card hover:shadow-trust transition-all duration-300 bg-white">
                <div className="relative h-64">
                  <img 
                    src={destination.image} 
                    alt={`${destination.name} medical tourism`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-trust-blue/90 text-white">
                      Save {destination.savings}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-trust-blue fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-professional-navy">
                    {destination.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-soft-gray">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.cities.join(", ")}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-professional-navy/80">{destination.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-pastel-green" />
                      <span>{destination.procedures}+ Procedures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-trust-blue" />
                      <span>{destination.flightTime}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-professional-navy">Top Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to={`/destinations/${destination.id}`}>
                    <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white">
                      Explore {destination.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}