// src/pages/Index.tsx
import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { ValueStack } from "@/components/ValueStack";
import { LeadMagnet } from "@/components/LeadMagnet";
import { SignupForm } from "@/components/SignupForm";
import { Footer } from "@/components/Footer";
import { RoiCalculator } from "@/components/RoiCalculator";
import { ProofAndReason } from "@/components/ProofAndReason";

const cities = ["New York", "London", "Berlin", "Sydney", "Toronto", "Chicago", "Paris"];

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(20);
  const [notification, setNotification] = useState({ show: false, location: '' });

  useEffect(() => {
    const spotsKey = 'availableSpots';
    const firstVisitKey = 'hasVisitedBefore';
    const sessionKey = 'isSessionActive';
    const initialSpotsValue = 20;
    const minSpots = 5;

    const showNotification = () => {
      const location = cities[Math.floor(Math.random() * cities.length)];
      setNotification({ show: true, location });
      setTimeout(() => {
        setNotification({ show: false, location: '' });
      }, 4000);
    };

    const decrementSpots = () => {
      let currentSpots = parseInt(localStorage.getItem(spotsKey) || initialSpotsValue.toString());
      if (currentSpots > minSpots) {
        currentSpots--;
        localStorage.setItem(spotsKey, String(currentSpots));
        setSpotsLeft(currentSpots);
        showNotification();
      }
    };

    const spotsInStorage = localStorage.getItem(spotsKey);
    const hasVisitedBefore = localStorage.getItem(firstVisitKey);

    if (!hasVisitedBefore) {
      // First visit ever
      localStorage.setItem(spotsKey, String(initialSpotsValue));
      localStorage.setItem(firstVisitKey, 'true');
      setSpotsLeft(initialSpotsValue);
      sessionStorage.setItem(sessionKey, 'true');
      setTimeout(decrementSpots, 5000);
    } else {
      // Return visitor or refresh
      setSpotsLeft(parseInt(spotsInStorage || String(initialSpotsValue)));
      const isSessionActive = sessionStorage.getItem(sessionKey);

      if (!isSessionActive) {
        // New session (not a refresh)
        sessionStorage.setItem(sessionKey, 'true');
        decrementSpots();
      }
    }
  }, []);


  return (
    <main className="min-h-screen">
      <Hero onGetStarted={() => setShowForm(true)} spotsLeft={spotsLeft} />
      <ValueStack onGetStarted={() => setShowForm(true)} />
      <RoiCalculator />
      <ProofAndReason />
      <LeadMagnet onGetStarted={() => setShowForm(true)} spotsLeft={spotsLeft} />
      <Footer />
      
      {showForm && <SignupForm onClose={() => setShowForm(false)} />}

      {/* Notification element for live updates */}
      <div 
        className={`fixed bottom-5 right-5 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm rounded-lg px-4 py-3 z-50 shadow-lg transition-opacity duration-500 ${notification.show ? 'opacity-100' : 'opacity-0'}`}
      >
        Someone from <span className="font-bold">{notification.location}</span> just claimed a spot!
      </div>
    </main>
  );
};

export default Index;

