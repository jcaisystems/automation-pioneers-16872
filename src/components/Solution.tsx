import { CheckCircle2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Solution = () => {
  const capabilities = [
    {
      title: "Intelligent Lead Capture & Nurture",
      description: "Never lose another lead. Our AI responds in seconds, qualifies prospects, and books meetings while you sleep.",
      results: "30% increase in conversion rates"
    },
    {
      title: "Automated Workflow Orchestration",
      description: "Connect every tool in your stack. Data flows automatically between systems—no manual entry, no errors.",
      results: "15+ hours saved weekly"
    },
    {
      title: "Custom AI Agents",
      description: "Purpose-built agents for customer service, data analysis, operations—handling tasks with superhuman consistency.",
      results: "24/7 operations"
    },
    {
      title: "Predictive Analytics & Reporting",
      description: "Real-time insights delivered to your dashboard. See what's working, what's not, and where to focus next.",
      results: "Data-driven decisions"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">The JCAI Autonomous Engine</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Business.
            <span className="gradient-text"> Running Itself.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Not generic AI tools. Not off-the-shelf software. A custom operating system engineered specifically for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{capability.description}</p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-2 inline-block">
                <span className="text-primary font-semibold text-sm">{capability.results}</span>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4 text-center">The Bottom Line</h3>
          <p className="text-lg text-center text-muted-foreground leading-relaxed">
            While others are hiring teams to manage complexity, you'll have an AI system that <span className="text-primary font-semibold">eliminates it entirely</span>. That's not optimization—that's transformation.
          </p>
        </div>
      </div>
    </section>
  );
};
