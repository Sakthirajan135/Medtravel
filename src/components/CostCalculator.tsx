import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign, Plane, Building2 } from "lucide-react";

const procedures = {
  "dental-implant": { name: "Dental Implant", usPrice: 4500, savings: { mexico: 70, india: 75, vietnam: 80, "south-africa": 65 } },
  "cosmetic-surgery": { name: "Cosmetic Surgery", usPrice: 8500, savings: { mexico: 60, india: 70, vietnam: 75, "south-africa": 55 } },
  "knee-replacement": { name: "Knee Replacement", usPrice: 35000, savings: { mexico: 65, india: 80, vietnam: 85, "south-africa": 70 } },
  "heart-surgery": { name: "Heart Surgery", usPrice: 75000, savings: { mexico: 70, india: 85, vietnam: 80, "south-africa": 75 } },
};

const destinations = {
  mexico: { name: "Mexico", flight: 450, hotel: 85 },
  india: { name: "India", flight: 850, hotel: 45 },
  vietnam: { name: "Vietnam", flight: 950, hotel: 55 },
  "south-africa": { name: "South Africa", flight: 1200, hotel: 70 },
};

export function CostCalculator() {
  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [days, setDays] = useState("7");

  const calculateSavings = () => {
    if (!selectedProcedure || !selectedDestination) return null;

    const procedure = procedures[selectedProcedure as keyof typeof procedures];
    const destination = destinations[selectedDestination as keyof typeof destinations];
    const stayDays = parseInt(days);

    const savingPercentage = procedure.savings[selectedDestination as keyof typeof procedure.savings];
    const procedureCost = procedure.usPrice * ((100 - savingPercentage) / 100);
    const flightCost = destination.flight;
    const hotelCost = destination.hotel * stayDays;
    const totalCost = procedureCost + flightCost + hotelCost;
    const totalSavings = procedure.usPrice - totalCost;

    return {
      usCost: procedure.usPrice,
      procedureCost,
      flightCost,
      hotelCost,
      totalCost,
      totalSavings,
      savingPercentage: Math.round((totalSavings / procedure.usPrice) * 100)
    };
  };

  const results = calculateSavings();

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-card">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Calculator className="h-6 w-6 text-primary" />
          Cost Calculator
        </CardTitle>
        <p className="text-muted-foreground">
          Calculate your potential savings with medical tourism
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Procedure</label>
            <Select value={selectedProcedure} onValueChange={setSelectedProcedure}>
              <SelectTrigger>
                <SelectValue placeholder="Select procedure" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(procedures).map(([key, procedure]) => (
                  <SelectItem key={key} value={key}>
                    {procedure.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Destination</label>
            <Select value={selectedDestination} onValueChange={setSelectedDestination}>
              <SelectTrigger>
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(destinations).map(([key, destination]) => (
                  <SelectItem key={key} value={key}>
                    {destination.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Stay Duration</label>
            <Select value={days} onValueChange={setDays}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 days</SelectItem>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="10">10 days</SelectItem>
                <SelectItem value="14">14 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {results && (
          <div className="bg-gradient-hero rounded-xl p-6 text-white animate-slide-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <DollarSign className="h-8 w-8 mx-auto mb-2 opacity-90" />
                <div className="text-2xl font-bold">${results.procedureCost.toLocaleString()}</div>
                <div className="text-sm opacity-90">Procedure Cost</div>
              </div>
              <div className="text-center">
                <Plane className="h-8 w-8 mx-auto mb-2 opacity-90" />
                <div className="text-2xl font-bold">${results.flightCost}</div>
                <div className="text-sm opacity-90">Flight</div>
              </div>
              <div className="text-center">
                <Building2 className="h-8 w-8 mx-auto mb-2 opacity-90" />
                <div className="text-2xl font-bold">${results.hotelCost}</div>
                <div className="text-sm opacity-90">Accommodation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-green">${results.totalSavings.toLocaleString()}</div>
                <div className="text-sm opacity-90">Total Savings</div>
              </div>
            </div>

            <div className="text-center border-t border-white/20 pt-4">
              <div className="text-sm opacity-90 mb-1">Total Cost: ${results.totalCost.toLocaleString()}</div>
              <div className="text-sm opacity-90">US Cost: ${results.usCost.toLocaleString()}</div>
              <div className="text-2xl font-bold mt-2">You Save {results.savingPercentage}%!</div>
            </div>
          </div>
        )}

        {!results && (
          <div className="text-center py-8 text-muted-foreground">
            Select a procedure and destination to see your potential savings
          </div>
        )}
      </CardContent>
    </Card>
  );
}