// src/components/PainAgitation.tsx
import { Clock, DollarSign, TrendingDown, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const PainAgitation = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "30+ Hours Wasted Weekly",
      description:
        "Your team is trapped performing repetitive tasks your AI could handle in seconds.",
    },
    {
      icon: DollarSign,
      title: "$250K+ Leaked Annually",
      description:
        "Inefficient processes and manual errors are silently draining your profits.",
    },
    {
      icon: TrendingDown,
      title: "47% Lead Loss",
      description:
        "Hot prospects go cold while your team plays catch-up. Speed-to-lead is everything.",
    },
    {
      icon: AlertTriangle,
      title: "The Founder Trap",
      description: "You can't scale a business you're stuck working in, not on.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Business Isn't Broken. It's Choking on Inefficiency.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="p-6 text-center">
              <point.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
