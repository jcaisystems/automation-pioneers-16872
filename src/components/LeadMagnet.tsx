import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, CheckCircle2, ArrowRight } from "lucide-react";

interface LeadMagnetProps {
  onGetStarted: () => void;
}

export const LeadMagnet = ({ onGetStarted }: LeadMagnetProps) => {
  const included = [
    "Complete automation opportunity mapping",
    "Custom AI solution blueprint for your business",
    "ROI projection and implementation timeline",
    "Priority bottleneck analysis",
    "Technology stack recommendations",
    "No sales pitch—just pure value"
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
                <span className="font-semibold text-primary">Limited Time Offer</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Get Your Free
                <span className="gradient-text"> Automation Blueprint</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                We'll analyze your business and build a complete automation plan—showing exactly how to eliminate bottlenecks, automate workflows, and scale without hiring.
              </p>
              
              <div className="text-3xl font-bold text-primary mb-2">$10,000 Value</div>
              <div className="text-lg text-muted-foreground">Yours free. No strings attached.</div>
            </div>
            
            {/* What's included */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {included.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Why free */}
            <div className="bg-secondary/50 border border-border rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold mb-3">Why Would We Do This For Free?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Simple: We're so confident in our ability to transform your operations that we're willing to prove it first. Once you see the roadmap, you'll understand why industry leaders choose JCAI. No risk on your end—just pure value.
              </p>
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={onGetStarted}
                className="group text-lg"
              >
                Claim Your Free Blueprint Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                Takes 2 minutes to complete • Delivered within 48 hours • Zero commitment
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
