import { Card } from "@/components/ui/card";
import { Quote, TrendingUp, Clock, DollarSign } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      quote: "Working with JCAI wasn't just an improvement—it was a transformation. We reclaimed 15+ hours weekly of administrative time. Our lead conversion increased 30% in just two months.",
      author: "Anna M.",
      role: "Freelance Consultant",
      metric: "30% conversion lift"
    },
    {
      quote: "I can finally take a vacation without my phone glued to my hand. The AI handles client inquiries, schedules meetings, and keeps operations running. It's like having a COO that never sleeps.",
      author: "Marcus T.",
      role: "Agency Owner",
      metric: "24/7 coverage"
    },
    {
      quote: "We were spending $8K monthly on contractors for tasks our AI now handles automatically. ROI was positive within 6 weeks. Best investment we've made.",
      author: "Sarah K.",
      role: "E-commerce Director",
      metric: "6-week payback"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "30%", label: "Average conversion increase" },
    { icon: Clock, value: "15+ hrs", label: "Saved per week" },
    { icon: DollarSign, value: "$250K+", label: "Annual cost savings" }
  ];

  return (
    <section id="proof" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0,191,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Businesses.
            <span className="gradient-text"> Real Results.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            These aren't hypothetical case studies. These are founders who stopped managing and started scaling.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border text-center hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground mb-3">{testimonial.role}</div>
                <div className="bg-primary/10 border border-primary/30 rounded-lg px-3 py-1 inline-block">
                  <span className="text-primary font-semibold text-xs">{testimonial.metric}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
