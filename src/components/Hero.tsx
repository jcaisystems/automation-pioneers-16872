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
            Stop Managing.
            <br />
            <span className="gradient-text">Start Scaling.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            While your competitors drown in operational chaos, you'll have a custom AI operating system running your entire business autonomously.
          </p>
          
          {/* Value prop */}
          <p className="text-lg md:text-xl text-primary font-semibold mb-12">
            Get your complete automation blueprint—$10,000 value—absolutely free.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={onGetStarted}
              className="group"
            >
              Get Your Free Automation Plan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => {
                document.getElementById('proof')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Real Results
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>No Sales Call Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Ready in 48 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
