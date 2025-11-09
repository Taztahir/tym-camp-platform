import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaBolt } from "react-icons/fa";

export default function Countdown() {
  const targetDate = new Date("2025-11-30T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-white px-6 py-16">
      
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#6A0DAD] uppercase mb-4 neon-text text-center"
      >
        TYM Akoka Camp 2025
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-500 text-lg mb-10 max-w-2xl leading-relaxed"
      >
        Early Bird Offer — <span className="text-[#6A0DAD] font-bold">₦8,000</span> only!  
        Secure your place before <span className="text-[#6A0DAD] font-semibold">November 30</span> and join the elite Squad Zero Camp experience.
      </motion.p>

      {/* Countdown Boxes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="md:flex grid grid-cols-2 justify-center gap-6"
      >
        {Object.entries(timeLeft).map(([label, value]) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.1 }}
            className="relative flex flex-col items-center justify-center border-4 border-[#6A0DAD] rounded-2xl w-32 h-32 text-[#6A0DAD] transition-all duration-300 "
          >
            <span className="text-4xl font-extrabold text-">{value}</span>
            <span className="text-sm uppercase tracking-widest text-gray-400">{label}</span>
            <div className="absolute inset-0 rounded-2xl blur-xl animate-pulse-fast"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pay Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        className="relative mt-12 bg-[#6A0DAD] text-white px-10 py-4 rounded-2xl font-bold text-xl flex items-center gap-2 overflow-hidden transition-all"
      >
        <FaBolt className="text-2xl animate-spin-slow" />
        Pay ₦8,000 Now
        <span className="absolute inset-0 bg-[#6A0DAD] opacity-20 animate-shine"></span>
      </motion.a>

      {/* Timer Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10 flex items-center gap-3 text-[#6A0DAD] font-semibold text-lg"
      >
        <FaClock className="text-2xl animate-pulse" />
        <span>Countdown to Early Bird Deadline</span>
      </motion.div>
    </section>
  );
}
