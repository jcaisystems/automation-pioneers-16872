// src/components/LeadMagnet.tsx (Ausschnitt)
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Zap, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { LiveSignupNotification } from "@/components/LiveSignupNotification"; // Importieren Sie die neue Komponente

interface LeadMagnetProps {
  onGetStarted: () => void;
}

export const LeadMagnet = ({ onGetStarted }: LeadMagnetProps) => {
  const [spotsLeft, setSpotsLeft] = useState(7);

  // ... (useEffect für spotsLeft bleibt unverändert)

  const quickWins = [
    // ... (quickWins Array bleibt unverändert)
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* ... (Grid-Overlay bleibt unverändert) */}
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/50 shadow-2xl shadow-primary/30 overflow-hidden">
          <div className="p-8 md:p-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/50 rounded-full px-4 py-2 mb-6 animate-glow-pulse">
                <Target className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">Only {spotsLeft} Spots Left This Month</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Get Your
                <span className="gradient-text"> 10+ Hours Back?</span>
              </h2>
              
              <p className="text-2xl text-foreground font-semibold mb-4">
                Claim Your Automation Freedom Blueprint
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                Custom-built for your business. Delivered in 48 hours or less.
              </p>

              <div className="flex flex-col items-center gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={onGetStarted}
                  className="group text-xl px-16 h-16 animate-glow-pulse"
                >
                  Yes! Claim My Free Blueprint Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* HIER IST DIE ÄNDERUNG: Statischen Text durch die neue Komponente ersetzen */}
                <div className="h-10"> {/* Wrapper-Div, um Layout-Sprünge zu verhindern */}
                  <LiveSignupNotification />
                </div>

                <p className="text-sm text-muted-foreground">
                  No credit card • No sales calls • No commitments
                </p>
              </div>
            </div>

            {/* ... (Rest der Komponente bleibt unverändert) */}
            
          </div>
        </Card>
      </div>
    </section>
  );
};
