// src/pages/Index.tsx
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ValueStack } from "@/components/ValueStack";
import { WhyFree } from "@/components/WhyFree";
import { SocialProof } from "@/components/SocialProof";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Footer } from "@/components/Footer";
import { AutomationAudit } from "@/components/AutomationAudit";
import { PainAgitation } from "@/components/PainAgitation";

const Index = () => {
  const [showAudit, setShowAudit] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero onGetStarted={() => setShowAudit(true)} />
      <PainAgitation />
      <ValueStack onGetStarted={() => setShowAudit(true)} />
      <WhyFree />
      <SocialProof />
      <LeadMagnet onGetStarted={() => setShowAudit(true)} />
      <Footer />
      
      {showAudit && <AutomationAudit onClose={() => setShowAudit(false)} />}
    </main>
  );
};

export default Index;
