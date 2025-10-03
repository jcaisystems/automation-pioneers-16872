// src/pages/Index.tsx
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ValueStack } from "@/components/ValueStack";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SignupForm } from "@/components/SignupForm";
import { Footer } from "@/components/Footer";
import { RoiCalculator } from "@/components/RoiCalculator";
import { ProofAndReason } from "@/components/ProofAndReason"; // Neu importiert

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero onGetStarted={() => setShowForm(true)} />
      <ValueStack onGetStarted={() => setShowForm(true)} />
      <RoiCalculator />
      <ProofAndReason /> {/* Ersetzt die alten Komponenten */}
      <LeadMagnet onGetStarted={() => setShowForm(true)} />
      <Footer />
      
      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </main>
  );
};

export default Index;
