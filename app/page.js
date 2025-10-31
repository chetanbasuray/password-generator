"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PasswordGenerator from "./components/PasswordGenerator";
import { Sun, Moon } from "lucide-react";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: 20 }).map(() => ({
      size: Math.floor(Math.random() * 80) + 40,
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      color:
        Math.random() > 0.5
          ? "rgba(0,255,200,0.06)"
          : "rgba(0,150,255,0.05)",
    }));
    setParticles(p);
  }, []);

  return (
    <div
      className={`relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-700 ${
        darkMode ? "bg-[#001b24] text-white" : "bg-[#a1f0e8] text-gray-900"
      }`}
    >
      {/* Animated background */}
      <AnimatedBackground />

      {/* Theme toggle */}
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 bg-white/20 backdrop-blur-lg p-2 rounded-full shadow-md hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 transition z-20"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span className="sr-only">
          {darkMode ? "Toggle to light mode" : "Toggle to dark mode"}
        </span>
        {darkMode ? (
          <Sun className="text-yellow-200" size={20} aria-hidden="true" />
        ) : (
          <Moon className="text-gray-900" size={20} aria-hidden="true" />
        )}
      </button>

      {/* Main glass card */}
      <div
        className={`z-10 backdrop-blur-xl shadow-2xl rounded-2xl p-8 max-w-md w-11/12 text-center transition-colors duration-500 ${
          darkMode
            ? "bg-slate-900/80 border border-emerald-500/40 text-emerald-50"
            : "bg-white border border-emerald-200 text-gray-900"
        }`}
      >
        <h1 className="text-3xl font-bold mb-6">Password Generator</h1>
        <PasswordGenerator darkMode={darkMode} multiplePasswords={true} />
      </div>

      {/* Info cards */}
      <div className="z-10 flex flex-wrap gap-6 mt-10 justify-center items-stretch">
        {[
          {
            title: "Privacy First 🔒",
            text: "100% client-side — your passwords never leave your browser.",
          },
          {
            title: "Customizable ⚙️",
            text: "Adjust length, symbols, numbers, and more — up to 50 characters.",
          },
          {
            title: "Lightweight & Fast ⚡",
            text: "Instant generation with zero network requests.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl w-72 text-center backdrop-blur-lg transition-all duration-300 transform ${
              darkMode
                ? "bg-slate-900/70 border border-emerald-500/30 text-emerald-100 hover:scale-105 hover:shadow-lg"
                : "bg-white border border-emerald-200 text-gray-900 hover:scale-105 hover:shadow-lg"
            }`}
          >
            <h2 className="font-semibold text-lg mb-3">{card.title}</h2>
            <p className="text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
