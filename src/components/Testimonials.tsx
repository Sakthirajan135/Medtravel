import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    age: 28,
    procedure: "Dental Implants in Mexico",
    content: "I saved over $8,000 and got to explore beautiful Cancun! The dental clinic was more modern than my dentist back home, and the staff spoke perfect English. Best decision ever!",
    rating: 5,
    savings: "$8,200",
  },
  {
    name: "Mike Chen", 
    age: 35,
    procedure: "Knee Replacement in India",
    content: "The orthopedic surgeon in Mumbai was trained at Johns Hopkins. The hospital was spotless, the care was exceptional, and I spent two weeks exploring incredible India. My knee feels amazing!",
    rating: 5,
    savings: "$28,000",
  },
  {
    name: "Lisa Rodriguez",
    age: 31,
    procedure: "Cosmetic Surgery in Vietnam",
    content: "Vietnam exceeded all my expectations! The plastic surgeon was internationally trained, the recovery facility was like a luxury resort, and Hanoi is absolutely gorgeous. I feel like a new person!",
    rating: 5,
    savings: "$12,500",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Stories, Real Savings
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of Americans who've discovered the life-changing benefits 
            of combining healthcare with travel adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-2">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-travel-gold text-travel-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}, {testimonial.age}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.procedure}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-success-green">
                        Saved {testimonial.savings}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-col items-center gap-2 text-white">
            <div className="text-4xl font-bold">4.9/5</div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-travel-gold text-travel-gold" />
              ))}
            </div>
            <div className="text-white/80">Based on 2,847+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}