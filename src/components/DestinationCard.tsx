import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

interface DestinationCardProps {
  name: string;
  country: string;
  savings: string;
  rating: number;
  image: string;
  specialties: string[];
  description: string;
  theme: "mexico" | "vietnam" | "india" | "south-africa";
}

const themeStyles = {
  mexico: "bg-gradient-sunset",
  vietnam: "bg-gradient-hero", 
  india: "bg-gradient-trust",
  "south-africa": "bg-gradient-hero"
};

export function DestinationCard({
  name,
  country,
  savings,
  rating,
  image,
  specialties,
  description,
  theme
}: DestinationCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-destination transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} medical tourism`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${themeStyles[theme]} mix-blend-soft-light`} />
        
        {/* Savings Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-success-green text-white px-3 py-1.5 text-sm font-semibold">
            Save Up to {savings}
          </Badge>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <Star className="h-4 w-4 fill-travel-gold text-travel-gold" />
          <span className="text-sm font-medium">{rating}</span>
        </div>

        {/* Location */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="h-5 w-5" />
            <div>
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-sm opacity-90">{country}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-foreground">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200">
          Explore {name}
        </Button>
      </div>
    </div>
  );
}