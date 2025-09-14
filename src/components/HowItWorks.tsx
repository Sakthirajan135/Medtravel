import { Search, Calendar, Plane, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research & Compare",
    description: "Explore procedures and destinations. Compare costs, read patient stories, and find accredited facilities.",
  },
  {
    icon: Calendar,
    title: "Plan Your Journey", 
    description: "Connect with medical coordinators, schedule consultations, and plan your travel itinerary.",
  },
  {
    icon: Plane,
    title: "Travel & Treat",
    description: "Fly to your destination, receive world-class medical care, and start your recovery vacation.",
  },
  {
    icon: Heart,
    title: "Recover & Explore",
    description: "Follow-up care, explore local culture, and return home healthy with amazing memories.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Medical Tourism Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your journey to affordable, world-class healthcare is simpler than you think. 
            Here's how we make it safe, easy, and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-trust-blue rounded-full text-white font-bold text-xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <step.icon className="h-12 w-12 text-trust-blue transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-trust-blue/50 to-trust-blue/20 transform translate-x-4" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-pastel-green/20 text-professional-navy px-6 py-3 rounded-full">
            <Heart className="h-5 w-5" />
            <span className="font-medium">Safe • Affordable • Life-Changing</span>
          </div>
        </div>
      </div>
    </section>
  );
}