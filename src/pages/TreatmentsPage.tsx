import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, DollarSign, Clock, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";

const treatments = [
  {
    id: "cardiac-surgery",
    name: "Cardiac Surgery",
    category: "Surgery",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    usPrice: "$150,000",
    savings: "70-80%",
    duration: "7-14 days",
    recovery: "4-6 weeks",
    countries: ["India", "Thailand", "Turkey"],
    description: "Advanced cardiac procedures including bypass surgery, valve replacement, and angioplasty with world-class outcomes.",
    procedures: ["Bypass Surgery", "Valve Replacement", "Angioplasty", "Pacemaker Implantation"],
    popularity: "High"
  },
  {
    id: "dental-care",
    name: "Comprehensive Dental Care",
    category: "Dental",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
    usPrice: "$25,000",
    savings: "60-70%",
    duration: "5-10 days",
    recovery: "1-2 weeks",
    countries: ["Mexico", "Hungary", "Thailand"],
    description: "Complete dental makeovers including implants, crowns, and cosmetic procedures with same-day results.",
    procedures: ["Dental Implants", "Veneers", "Crowns & Bridges", "Teeth Whitening"],
    popularity: "Very High"
  },
  {
    id: "cosmetic-surgery",
    name: "Cosmetic Surgery",
    category: "Aesthetic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sPm_WxYABedr2YmdNkugICa82pIrFHGFiA&s",
    usPrice: "$35,000",
    savings: "50-65%",
    duration: "7-14 days",
    recovery: "2-4 weeks",
    countries: ["Brazil", "Turkey", "South Korea"],
    description: "Advanced aesthetic procedures by board-certified surgeons with natural-looking results.",
    procedures: ["Brazilian Butt Lift", "Rhinoplasty", "Breast Augmentation", "Liposuction"],
    popularity: "High"
  },
  {
    id: "orthopedic-surgery",
    name: "Orthopedic Surgery",
    category: "Surgery",
    image: "data:image/jpeg;base64,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",
    usPrice: "$80,000",
    savings: "65-75%",
    duration: "10-21 days",
    recovery: "6-12 weeks",
    countries: ["India", "Germany", "Czech Republic"],
    description: "Joint replacements and orthopedic procedures using latest minimally invasive techniques.",
    procedures: ["Knee Replacement", "Hip Replacement", "Spine Surgery", "Sports Medicine"],
    popularity: "High"
  },
  {
    id: "bariatric-surgery",
    name: "Bariatric Surgery",
    category: "Surgery",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
    usPrice: "$45,000",
    savings: "60-70%",
    duration: "5-7 days",
    recovery: "4-6 weeks",
    countries: ["Mexico", "Turkey", "India"],
    description: "Life-changing weight loss procedures with comprehensive aftercare and nutrition support.",
    procedures: ["Gastric Sleeve", "Gastric Bypass", "Lap Band", "Duodenal Switch"],
    popularity: "High"
  },
  {
    id: "fertility-treatment",
    name: "Fertility Treatment",
    category: "Reproductive",
    image: "data:image/jpeg;base64,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",
    usPrice: "$30,000",
    savings: "60-75%",
    duration: "14-21 days",
    recovery: "2-4 weeks",
    countries: ["Czech Republic", "Greece", "India"],
    description: "Advanced reproductive treatments with high success rates and personalized care.",
    procedures: ["IVF Treatment", "ICSI", "Egg Donation", "Surrogacy"],
    popularity: "Medium"
  }
];

export default function TreatmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");

  const categories = [...new Set(treatments.map(t => t.category))];
  const countries = [...new Set(treatments.flatMap(t => t.countries))];

  const filteredTreatments = treatments.filter(treatment => {
    const matchesSearch = treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.procedures.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || treatment.category === selectedCategory;
    const matchesCountry = selectedCountry === "all" || treatment.countries.includes(selectedCountry);
    return matchesSearch && matchesCategory && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue/10 to-pastel-green/10">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Medical Treatments & Procedures
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore comprehensive medical treatments available worldwide. Save 50-80% while receiving world-class care.
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
                placeholder="Search treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            <Button className="bg-trust-blue hover:bg-trust-blue/90">
              Find Treatments
            </Button>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
              <Card key={treatment.id} className="overflow-hidden shadow-card hover:shadow-trust transition-all duration-300 bg-white">
                <div className="relative h-48">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-trust-blue/90 text-white">
                      Save {treatment.savings}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-professional-navy">
                      {treatment.popularity} Demand
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-professional-navy">
                      {treatment.name}
                    </CardTitle>
                    <Badge variant="outline">{treatment.category}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-professional-navy/80">{treatment.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-pastel-green" />
                      <div>
                        <div className="font-medium">US Price: {treatment.usPrice}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-trust-blue" />
                      <div>
                        <div className="font-medium">{treatment.duration}</div>
                        <div className="text-xs text-soft-gray">Stay duration</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-professional-navy text-sm">Common Procedures:</h4>
                    <div className="flex flex-wrap gap-1">
                      {treatment.procedures.slice(0, 3).map((procedure, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {procedure}
                        </Badge>
                      ))}
                      {treatment.procedures.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{treatment.procedures.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-soft-gray" />
                    <span className="text-professional-navy/80">
                      Available in: {treatment.countries.join(", ")}
                    </span>
                  </div>

                  <Link to={`/treatments/${treatment.id}`}>
                    <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white">
                      View Treatment Details
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