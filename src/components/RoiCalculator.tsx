// src/components/RoiCalculator.tsx
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const RoiCalculator = () => {
  const [employees, setEmployees] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursSaved, setHoursSaved] = useState(10);
  const [yearlySavings, setYearlySavings] = useState(0);

  const calculateSavings = () => {
    const weeklySavings = employees * hourlyRate * hoursSaved;
    const savings = weeklySavings * 52;
    setYearlySavings(savings);
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Calculate Your Potential Savings
          </h2>
        </div>
        <Card className="p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <Label htmlFor="employees">Number of Employees</Label>
              <Input
                id="employees"
                type="number"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="hourlyRate">Average Hourly Rate</Label>
              <Input
                id="hourlyRate"
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="hoursSaved">Hours Saved Per Week Per Employee</Label>
              <Input
                id="hoursSaved"
                type="number"
                value={hoursSaved}
                onChange={(e) => setHoursSaved(parseInt(e.target.value))}
              />
            </div>
            <Button onClick={calculateSavings} className="w-full">
              Calculate Yearly Savings
            </Button>
            {yearlySavings > 0 && (
              <div className="text-center pt-6">
                <p className="text-2xl font-bold">
                  Estimated Yearly Savings:
                </p>
                <p className="text-4xl font-bold text-primary">
                  ${yearlySavings.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
