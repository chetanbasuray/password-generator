"use client";

import { useState } from "react";
import Image from "next/image";
import PasswordGenerator from "./components/PasswordGenerator";
import { Sun, Moon } from "lucide-react";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`relative min-h-screen w-full flex flex-col overflow-hidden transition-colors duration-700 ${
        darkMode ? "bg-[#001b24] text-white" : "bg-[#a1f0e8] text-gray-900"
      }`}
    >
      <AnimatedBackground />

      <header
        className={`z-10 w-full px-6 py-5 flex items-center justify-between gap-4 backdrop-blur-lg border-b transition-colors duration-500 ${
          darkMode
            ? "bg-slate-950/60 border-emerald-500/30 text-emerald-50"
            : "bg-white/70 border-emerald-200/60 text-gray-900"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`grid h-12 w-12 place-items-center rounded-xl shadow-inner transition-colors ${
              darkMode ? "bg-emerald-400/20" : "bg-emerald-100"
            }`}
          >
            <Image
              src="/logo.svg"
              alt="AuroraPass logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <div>
            <p className="text-lg font-semibold">AuroraPass</p>
            <p
              className={`text-sm transition-colors ${
                darkMode ? "text-emerald-100/80" : "text-slate-600"
              }`}
            >
              Privacy-first password generator
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            darkMode
              ? "bg-emerald-500/20 text-emerald-100 hover:bg-emerald-500/30 focus-visible:outline-emerald-200"
              : "bg-white text-gray-900 hover:bg-emerald-50 focus-visible:outline-emerald-400"
          }`}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="sr-only">
            {darkMode ? "Toggle to light mode" : "Toggle to dark mode"}
          </span>
          {darkMode ? (
            <Sun className="text-yellow-200" size={18} aria-hidden="true" />
          ) : (
            <Moon className="text-slate-700" size={18} aria-hidden="true" />
          )}
          <span aria-hidden="true" className="hidden sm:inline">
            {darkMode ? "Light mode" : "Dark mode"}
          </span>
        </button>
      </header>

      <main className="relative z-10 flex-1 w-full flex flex-col items-center justify-center px-6 py-12 gap-10">
        <div
          className={`backdrop-blur-xl shadow-2xl rounded-2xl p-8 max-w-md w-11/12 text-center transition-colors duration-500 ${
            darkMode
              ? "bg-slate-900/80 border border-emerald-500/40 text-emerald-50"
              : "bg-white border border-emerald-200 text-gray-900"
          }`}
        >
          <h1 className="text-3xl font-bold mb-6">Password Generator</h1>
          <PasswordGenerator darkMode={darkMode} multiplePasswords={true} />
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-stretch">
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
      </main>

      <footer
        className={`z-10 w-full px-6 py-6 text-center text-sm backdrop-blur-lg border-t transition-colors duration-500 ${
          darkMode
            ? "bg-slate-950/60 border-emerald-500/30 text-emerald-100/80"
            : "bg-white/70 border-emerald-200/60 text-gray-700"
        }`}
      >
        <p className="font-medium">No tracking, ever.</p>
        <p>
          Passwords are generated locally in your browser — we never collect or
          store user data.
        </p>
      </footer>
    </div>
  );
}
