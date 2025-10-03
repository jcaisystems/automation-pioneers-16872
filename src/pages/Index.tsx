import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { SocialProof } from "@/components/SocialProof";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SignupForm } from "@/components/SignupForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero onGetStarted={() => setShowForm(true)} />
      <Problem />
      <Solution />
      <SocialProof />
      <LeadMagnet onGetStarted={() => setShowForm(true)} />
      <Footer />
      
      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </main>
  );
};

export default Index;
