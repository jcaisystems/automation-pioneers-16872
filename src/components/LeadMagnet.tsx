import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, CheckCircle2, ArrowRight } from "lucide-react";

interface LeadMagnetProps {
  onGetStarted: () => void;
}

export const LeadMagnet = ({ onGetStarted }: LeadMagnetProps) => {
  const included = [
    "A fully custom automation roadmap built for your business",
    "The top 3 high-impact automations you can implement in the next 30 days (with plug-and-play templates)",
    "A crystal-clear step-by-step execution plan — no guesswork, no overwhelm",
    "A side-by-side Time ROI calculator showing exactly how many hours and dollars you'll save",
    "A live audit session (30 min) where we diagnose your one biggest bottleneck"
  ];

  const whatMakesItUnrivalled = [
    { title: "Personal, not generic", desc: "This isn't a stale PDF. It's custom-engineered for your staff, workflow, and revenue goals." },
    { title: "Immediate actionability", desc: "You'll get tools and instructions you can deploy tomorrow." },
    { title: "Risk-free", desc: "We never ask for contracts, credit cards, or commitments." },
    { title: "Battle-tested", desc: "We've already reclaimed tens of thousands of hours for companies in travel, hospitality, clinics, ecommerce, and more." }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="p-12 md:p-16 bg-gradient-to-br from-card via-card to-primary/5 border-primary/30 shadow-2xl shadow-primary/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-6 py-3 mb-6 animate-glow-pulse">
                <Gift className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Yours 100% Free (Yes, free)</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                The "Automation Freedom Blueprint"
              </h2>
              
              <p className="text-2xl text-foreground mb-6 font-semibold">
                Unlock 10+ hours of your life. Zero fluff. Zero risk.
              </p>
              
              <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Here's what you're actually getting:
              </p>
            </div>
            
            {/* What's included */}
            <div className="space-y-4 mb-12">
              {included.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in bg-secondary/30 border border-border rounded-lg p-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Why We Give It Away */}
            <div className="bg-secondary/50 border border-primary/30 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Why We Give It Away</h3>
              <p className="text-foreground leading-relaxed text-lg">
                Because once you see what's possible, most of our clients ask us to build it for them.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You keep the entire blueprint regardless — no strings, no obligations.
              </p>
            </div>
            
            {/* What Makes It Unrivalled */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">What Makes It Unrivalled</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {whatMakesItUnrivalled.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-secondary/30 border border-border rounded-lg p-6 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Emotional Hook */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Imagine:</h3>
              <div className="space-y-3 text-foreground">
                <p className="leading-relaxed flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  No more patchwork automations that break
                </p>
                <p className="leading-relaxed flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  Your team doing higher-leverage work instead of grunt tasks
                </p>
                <p className="leading-relaxed flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  You having room to breathe — to strategize, focus on growth, live life
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={onGetStarted}
                className="group text-xl px-16 h-16 mb-4"
              >
                Claim Your Free Blueprint Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-base text-primary font-semibold mb-2">
                Spaces are limited — because we can't deliver custom roadmaps to everyone
              </p>
              
              <p className="text-sm text-muted-foreground">
                Takes 2 minutes to complete • Delivered within 48 hours • Zero commitment
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
