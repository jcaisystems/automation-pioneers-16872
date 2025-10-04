import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-destructive/20 to-destructive/10 border border-destructive/50 rounded-lg px-4 py-3 backdrop-blur-sm">
      <Clock className="w-5 h-5 text-destructive animate-pulse" />
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-destructive-foreground">Only 7 Spots Left • Offer ends in:</span>
        <div className="flex items-center gap-1 font-mono">
          <div className="bg-destructive/30 border border-destructive/50 rounded px-2 py-1">
            <span className="text-destructive font-bold text-sm">{formatNumber(timeLeft.hours)}</span>
          </div>
          <span className="text-destructive font-bold">:</span>
          <div className="bg-destructive/30 border border-destructive/50 rounded px-2 py-1">
            <span className="text-destructive font-bold text-sm">{formatNumber(timeLeft.minutes)}</span>
          </div>
          <span className="text-destructive font-bold">:</span>
          <div className="bg-destructive/30 border border-destructive/50 rounded px-2 py-1">
            <span className="text-destructive font-bold text-sm">{formatNumber(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
