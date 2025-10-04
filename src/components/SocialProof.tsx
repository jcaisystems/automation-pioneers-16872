// src/components/SocialProof.tsx
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const SocialProof = () => {
  const testimonials = [
    {
      quote: "Working with JCAI wasn't just an improvement—it was a transformation. We reclaimed 15+ hours weekly of administrative time. Our lead conversion increased 30% in just two months.",
      author: "Anna Martinez",
      role: "Freelance Consultant",
      rating: 5,
      date: "2 weeks ago",
      initials: "AM",
      avatar: ""
    },
    {
      quote: "I can finally take a vacation without my phone glued to my hand. The AI handles client inquiries, schedules meetings, and keeps operations running. It's like having a COO that never sleeps.",
      author: "Marcus Thompson",
      role: "Agency Owner",
      rating: 5,
      date: "1 month ago",
      initials: "MT",
      avatar: ""
    },
    {
      quote: "We were spending $8K monthly on contractors for tasks our AI now handles automatically. ROI was positive within 6 weeks. Best investment we've made.",
      author: "Sarah Kim",
      role: "E-commerce Director",
      rating: 5,
      date: "3 weeks ago",
      initials: "SK",
      avatar: ""
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "30%", label: "Average conversion increase" },
    { icon: Clock, value: "15+ hrs", label: "Saved per week" },
    { icon: DollarSign, value: "$250K+", label: "Annual cost savings" }
  ];

  return (
    <section id="proof" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Businesses.
            <span className="gradient-text"> Real Results.</span>
          </h2>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
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
        
        {/* Testimonials - Google Review Style */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12 border-2 border-primary/30">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed text-sm mb-3">
                {testimonial.quote}
              </p>
              
              <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                {testimonial.role}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
