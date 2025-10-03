import { Card } from "@/components/ui/card";
import { Target, Zap, Shield, TrendingUp } from "lucide-react";

export const WhyFree = () => {
  const reasons = [
    {
      icon: Target,
      title: "Personal, Not Generic",
      description: "This isn't a stale PDF. It's custom-engineered for your staff, workflow, and revenue goals."
    },
    {
      icon: Zap,
      title: "Immediate Actionability",
      description: "You'll get tools and instructions you can deploy tomorrow. No theory, just implementation."
    },
    {
      icon: Shield,
      title: "Risk-Free",
      description: "We never ask for contracts, credit cards, or commitments. Keep the blueprint regardless."
    },
    {
      icon: TrendingUp,
      title: "Battle-Tested",
      description: "We've reclaimed tens of thousands of hours for companies in travel, hospitality, clinics, and ecommerce."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0,191,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why We Give It Away
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            <span className="font-bold text-primary">Simple:</span> Because once you see what's possible, most of our clients ask us to build it for them.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            You keep the entire blueprint regardless — no strings, no obligations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <reason.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
