import { AlertTriangle, Clock, DollarSign, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "30+ Hours Per Week",
      description: "Wasted on repetitive tasks your AI could handle in seconds",
      stat: "Lost productivity"
    },
    {
      icon: DollarSign,
      title: "$250K+ Annually",
      description: "Leaked through inefficient processes and manual errors",
      stat: "Revenue drain"
    },
    {
      icon: TrendingDown,
      title: "47% Lead Loss",
      description: "Hot prospects going cold while your team plays catch-up",
      stat: "Industry average"
    },
    {
      icon: AlertTriangle,
      title: "You're the Bottleneck",
      description: "Can't scale, can't vacation, can't grow without you",
      stat: "Founder trap"
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
            The Real Cost of 
            <span className="gradient-text"> "Business As Usual"</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Every day without automation, your competitors are pulling ahead while you're stuck in the operational weeds.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <problem.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground mb-3">{problem.description}</p>
              <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                {problem.stat}
              </span>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            <span className="font-bold text-primary">Here's the truth:</span> Your business doesn't need more employees. It needs an operating system that never sleeps, never makes mistakes, and scales infinitely.
          </p>
        </div>
      </div>
    </section>
  );
};
