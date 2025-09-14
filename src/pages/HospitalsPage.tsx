import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, MapPin, Star, Award, Users, Shield, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";

const hospitals = [
  {
    id: "apollo-delhi",
    name: "Apollo Hospital Delhi",
    country: "India",
    city: "New Delhi",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    rating: 4.9,
    accreditation: ["JCI", "NABH"],
    specialties: ["Cardiac Surgery", "Oncology", "Orthopedics", "Neurosurgery"],
    beds: 695,
    established: 1996,
    description: "Leading multi-specialty hospital with state-of-the-art technology and internationally trained medical staff.",
    languages: ["English", "Hindi", "Arabic"],
    pricing: "Premium"
  },
  {
    id: "hospital-angeles-tijuana",
    name: "Hospital Angeles Tijuana",
    country: "Mexico", 
    city: "Tijuana",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop",
    rating: 4.8,
    accreditation: ["JCI", "CANACEM"],
    specialties: ["Cosmetic Surgery", "Bariatric Surgery", "Dental Care", "Cardiology"],
    beds: 180,
    established: 1988,
    description: "Modern facility just minutes from the US border, offering world-class care with American standards.",
    languages: ["Spanish", "English"],
    pricing: "Moderate"
  },
  {
    id: "fv-hospital-vietnam", 
    name: "FV Hospital",
    country: "Vietnam",
    city: "Ho Chi Minh City",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
    rating: 4.7,
    accreditation: ["JCI", "ISO"],
    specialties: ["Wellness Programs", "Rehabilitation", "General Surgery", "Pediatrics"],
    beds: 220,
    established: 2003,
    description: "Franco-Vietnamese hospital offering European standards of care in a modern, comfortable environment.",
    languages: ["Vietnamese", "English", "French"],
    pricing: "Affordable"
  },
  {
    id: "mediclinic-cape-town",
    name: "Mediclinic Cape Town",
    country: "South Africa",
    city: "Cape Town", 
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
    rating: 4.8,
    accreditation: ["JCI", "COHSASA"],
    specialties: ["Cardiac Surgery", "Fertility Treatment", "Oncology", "Orthopedics"],
    beds: 270,
    established: 1983,
    description: "Premier private hospital with world-class facilities and breathtaking mountain views.",
    languages: ["English", "Afrikaans"],
    pricing: "Moderate"
  },
  {
    id: "bumrungrad-bangkok",
    name: "Bumrungrad International Hospital",
    country: "Thailand",
    city: "Bangkok",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
    rating: 4.9,
    accreditation: ["JCI", "ISO", "OSHA"],
    specialties: ["Cosmetic Surgery", "Cardiology", "Oncology", "Wellness"],
    beds: 580,
    established: 1980,
    description: "Asia's premier international hospital with patients from over 190 countries.",
    languages: ["Thai", "English", "Arabic", "Japanese"],
    pricing: "Premium"
  },
  {
    id: "anadolu-medical-center",
    name: "Anadolu Medical Center",
    country: "Turkey",
    city: "Istanbul",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&h=600&fit=crop",
    rating: 4.8,
    accreditation: ["JCI", "ISO"],
    specialties: ["Oncology", "Organ Transplant", "Cardiology", "Orthopedics"],
    beds: 254,
    established: 2005,
    description: "Johns Hopkins Medicine International affiliated hospital offering world-class oncology care.",
    languages: ["Turkish", "English", "Arabic", "Russian"],
    pricing: "Moderate"
  }
];

export default function HospitalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const countries = [...new Set(hospitals.map(h => h.country))];
  const specialties = [...new Set(hospitals.flatMap(h => h.specialties))];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "all" || hospital.country === selectedCountry;
    const matchesSpecialty = selectedSpecialty === "all" || hospital.specialties.includes(selectedSpecialty);
    return matchesSearch && matchesCountry && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            World-Class Hospitals & Medical Centers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover JCI-accredited hospitals and internationally recognized medical centers offering premium care at affordable prices.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-soft-gray h-4 w-4" />
              <Input
                placeholder="Search hospitals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="All Specialties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                {specialties.map(specialty => (
                  <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="bg-trust-blue hover:bg-trust-blue/90">
              Find Hospitals
            </Button>
          </div>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHospitals.map((hospital) => (
              <Card key={hospital.id} className="overflow-hidden shadow-card hover:shadow-trust transition-all duration-300 bg-white">
                <div className="relative h-48">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-trust-blue/90 text-white">
                      {hospital.pricing}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-trust-blue fill-current" />
                    <span className="text-sm font-medium">{hospital.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-professional-navy">
                    {hospital.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-soft-gray">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{hospital.city}, {hospital.country}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-professional-navy/80">{hospital.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-trust-blue" />
                      <span>{hospital.beds} beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-pastel-green" />
                      <span>Est. {hospital.established}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-trust-blue" />
                      <div className="flex gap-1">
                        {hospital.accreditation.map((acc, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {acc}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {hospital.specialties.slice(0, 3).map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {hospital.specialties.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{hospital.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Link to={`/hospitals/${hospital.id}`}>
                    <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white">
                      View Hospital Details
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