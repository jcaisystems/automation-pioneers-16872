// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,191,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-glow-pulse">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Trusted by Industry Leaders</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            The Agency Founder's Bottleneck Eliminator: Get Your Custom 3-Step Automation Plan in Under 60 Seconds.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop wasting 30+ hours a week on manual tasks. Our free AI audit instantly pinpoints your most expensive inefficiency and shows you exactly how to fix it.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={onGetStarted}
              className="group text-xl px-16 h-16 animate-glow-pulse"
            >
              Start My Free Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Trusted by leaders at [Client Logo 1] [Client Logo 2] [Client Logo 3]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
