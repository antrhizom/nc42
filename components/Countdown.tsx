"use client";

import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-07-03T08:00:00+02:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-4 justify-center">
        {["Tage", "Std.", "Min.", "Sek."].map((label) => (
          <div key={label} className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl w-20 h-20 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">--</span>
            </div>
            <span className="text-xs text-blue-200 mt-1 block">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Tage" },
    { value: timeLeft.hours, label: "Std." },
    { value: timeLeft.minutes, label: "Min." },
    { value: timeLeft.seconds, label: "Sek." },
  ];

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {units.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-white/20">
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-blue-200 mt-1 block">{label}</span>
        </div>
      ))}
    </div>
  );
}
