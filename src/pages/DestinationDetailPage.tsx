import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Star, DollarSign, Clock, Users, Award, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";

// Sample treatments data for each destination
const treatmentsByDestination = {
  india: [
    {
      id: "cardiac-surgery-india",
      name: "Cardiac Surgery",
      category: "Surgery",
      usPrice: "$150,000",
      indiaPrice: "$15,000",
      savings: "90%",
      duration: "7-14 days",
      recovery: "4-6 weeks",
      description: "Advanced cardiac procedures including bypass surgery, valve replacement, and angioplasty using state-of-the-art technology.",
      procedures: ["CABG", "Valve Replacement", "Angioplasty", "Heart Transplant"],
      hospitals: ["Apollo Hospital Delhi", "Fortis Healthcare", "Max Healthcare"],
      rating: 4.9,
      successRate: "98%"
    },
    {
      id: "orthopedic-surgery-india",
      name: "Orthopedic Surgery",
      category: "Surgery",
      usPrice: "$50,000",
      indiaPrice: "$8,000",
      savings: "84%",
      duration: "5-10 days",
      recovery: "6-12 weeks",
      description: "Comprehensive orthopedic care including joint replacements, spine surgery, and sports medicine.",
      procedures: ["Hip Replacement", "Knee Replacement", "Spine Surgery", "Arthroscopy"],
      hospitals: ["Apollo Hospital Delhi", "Fortis Healthcare", "Max Healthcare"],
      rating: 4.8,
      successRate: "96%"
    },
    {
      id: "cancer-treatment-india",
      name: "Cancer Treatment",
      category: "Oncology",
      usPrice: "$200,000",
      indiaPrice: "$25,000",
      savings: "87.5%",
      duration: "2-8 weeks",
      recovery: "3-6 months",
      description: "Advanced cancer treatment including chemotherapy, radiation therapy, and surgical oncology.",
      procedures: ["Chemotherapy", "Radiation Therapy", "Surgical Oncology", "Immunotherapy"],
      hospitals: ["Apollo Hospital Delhi", "Fortis Healthcare", "Max Healthcare"],
      rating: 4.7,
      successRate: "85%"
    }
  ],
  thailand: [
    {
      id: "cosmetic-surgery-thailand",
      name: "Cosmetic Surgery",
      category: "Plastic Surgery",
      usPrice: "$15,000",
      thailandPrice: "$3,000",
      savings: "80%",
      duration: "3-7 days",
      recovery: "2-4 weeks",
      description: "World-class cosmetic and plastic surgery procedures with internationally trained surgeons.",
      procedures: ["Breast Augmentation", "Rhinoplasty", "Liposuction", "Facelift"],
      hospitals: ["Bumrungrad Hospital", "Bangkok Hospital", "Samitivej Hospital"],
      rating: 4.8,
      successRate: "95%"
    },
    {
      id: "dental-treatment-thailand",
      name: "Dental Treatment",
      category: "Dentistry",
      usPrice: "$8,000",
      thailandPrice: "$1,500",
      savings: "81%",
      duration: "3-10 days",
      recovery: "1-2 weeks",
      description: "Comprehensive dental care including implants, veneers, and cosmetic dentistry.",
      procedures: ["Dental Implants", "Veneers", "Crowns", "Teeth Whitening"],
      hospitals: ["Bumrungrad Hospital", "Bangkok Hospital", "Samitivej Hospital"],
      rating: 4.9,
      successRate: "98%"
    }
  ],
  turkey: [
    {
      id: "hair-transplant-turkey",
      name: "Hair Transplant",
      category: "Plastic Surgery",
      usPrice: "$12,000",
      turkeyPrice: "$2,500",
      savings: "79%",
      duration: "2-3 days",
      recovery: "2-3 weeks",
      description: "Advanced hair transplant procedures using FUE and DHI techniques with natural-looking results.",
      procedures: ["FUE Hair Transplant", "DHI Hair Transplant", "Beard Transplant", "Eyebrow Transplant"],
      hospitals: ["Anadolu Medical Center", "Acibadem Hospital", "Memorial Hospital"],
      rating: 4.9,
      successRate: "97%"
    },
    {
      id: "bariatric-surgery-turkey",
      name: "Bariatric Surgery",
      category: "Surgery",
      usPrice: "$25,000",
      turkeyPrice: "$6,000",
      savings: "76%",
      duration: "3-5 days",
      recovery: "4-6 weeks",
      description: "Weight loss surgery procedures including gastric bypass, sleeve gastrectomy, and gastric banding.",
      procedures: ["Gastric Bypass", "Sleeve Gastrectomy", "Gastric Banding", "Duodenal Switch"],
      hospitals: ["Anadolu Medical Center", "Acibadem Hospital", "Memorial Hospital"],
      rating: 4.7,
      successRate: "92%"
    }
  ]
};

const destinations = [
  {
    id: "india",
    name: "India",
    cities: ["New Delhi", "Mumbai", "Chennai", "Bangalore"],
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
    id: "thailand",
    name: "Thailand",
    cities: ["Bangkok", "Phuket", "Chiang Mai"],
    rating: 4.8,
    savings: "60-75%",
    procedures: 180,
    hospitals: 35,
    specialties: ["Cosmetic Surgery", "Dentistry", "Wellness", "Fertility Treatment"],
    description: "Luxury medical tourism destination combining world-class healthcare with tropical paradise. Perfect for recovery and relaxation.",
    flightTime: "12-16 hours",
    language: "English widely spoken"
  },
  {
    id: "turkey",
    name: "Turkey",
    cities: ["Istanbul", "Ankara", "Antalya"],
    rating: 4.7,
    savings: "65-80%",
    procedures: 120,
    hospitals: 25,
    specialties: ["Hair Transplant", "Bariatric Surgery", "Dentistry", "Ophthalmology"],
    description: "Bridge between Europe and Asia offering premium healthcare with European standards at Middle Eastern prices.",
    flightTime: "8-12 hours",
    language: "English widely spoken"
  }
];

const DestinationDetailPage = () => {
  const { destinationId } = useParams();
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  
  const destination = destinations.find(d => d.id === destinationId);
  const treatments = treatmentsByDestination[destinationId] || [];

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
            <Link to="/destinations">
              <Button>Back to Destinations</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/destinations" className="inline-flex items-center text-trust-blue hover:text-trust-blue/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Destinations
          </Link>
        </div>
      </div>

      {/* Destination Hero */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Medical Tourism in {destination.name}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">{destination.description}</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>Rating: {destination.rating}/5</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span>Save {destination.savings}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{destination.procedures}+ Procedures</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{destination.flightTime} flight time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-professional-navy mb-4">
              Popular Treatments in {destination.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the most sought-after medical procedures with significant cost savings
            </p>
          </div>

          <div className="space-y-4">
            {treatments.map((treatment) => (
              <Card 
                key={treatment.id} 
                className="shadow-card hover:shadow-trust transition-all duration-300 bg-white cursor-pointer"
                onClick={() => setSelectedTreatment(treatment)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-professional-navy">
                          {treatment.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {treatment.category}
                        </Badge>
                        <Badge className="bg-trust-blue/90 text-white text-xs">
                          Save {treatment.savings}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm">
                        {treatment.description}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">US Price:</span>
                          <div className="font-semibold text-red-600 line-through">{treatment.usPrice}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">{destination.name} Price:</span>
                          <div className="font-semibold text-green-600">{treatment.indiaPrice || treatment.thailandPrice || treatment.turkeyPrice}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-trust-blue" />
                          <span>Duration: {treatment.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-pastel-green" />
                          <span>Success: {treatment.successRate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-trust-blue fill-current" />
                        <span className="text-sm font-medium">{treatment.rating}/5</span>
                      </div>
                      <Button className="bg-trust-blue hover:bg-trust-blue/90 text-white">
                        View Details
                        <ArrowLeft className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Detail Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-professional-navy">
                  {selectedTreatment.name} - {destination.name}
                </h3>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedTreatment(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-professional-navy mb-2">Description</h4>
                    <p className="text-muted-foreground">{selectedTreatment.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-professional-navy mb-2">Procedures Included</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTreatment.procedures.map((procedure, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {procedure}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-professional-navy mb-2">Recommended Hospitals</h4>
                    <ul className="space-y-1">
                      {selectedTreatment.hospitals.map((hospital, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Award className="h-3 w-3 text-trust-blue" />
                          {hospital}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Pricing Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">US Price:</span>
                        <span className="text-xl font-bold text-red-600 line-through">{selectedTreatment.usPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{destination.name} Price:</span>
                        <span className="text-xl font-bold text-green-600">{selectedTreatment.indiaPrice || selectedTreatment.thailandPrice || selectedTreatment.turkeyPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">You Save:</span>
                        <span className="text-xl font-bold text-trust-blue">{selectedTreatment.savings}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Treatment Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{selectedTreatment.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Recovery Time:</span>
                        <span className="font-medium">{selectedTreatment.recovery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Success Rate:</span>
                        <span className="font-medium text-green-600">{selectedTreatment.successRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-trust-blue fill-current" />
                          <span className="font-medium">{selectedTreatment.rating}/5</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-3">
                    <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Hospital
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Request Information
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetailPage;
