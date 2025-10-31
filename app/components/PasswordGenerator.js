"use client";
import { useState } from "react";

export default function PasswordGenerator({ darkMode = true }) {
  const [passwords, setPasswords] = useState([]);
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [count, setCount] = useState(5); // number of passwords to generate

  const generatePassword = () => {
    let chars = "";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (chars.length === 0) {
      setPasswords([]);
      return;
    }

    const newPasswords = Array.from({ length: count }).map(() => {
      let result = "";
      for (let i = 0; i < Number(length); i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    });

    setPasswords(newPasswords);
  };

  const copyPassword = (pwd, index) => {
    navigator.clipboard.writeText(pwd);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-md mx-auto">
        <div className="space-y-4 text-left">
          <label className={`flex justify-between items-center ${darkMode ? "text-white" : "text-gray-900"} font-semibold`}>
            <span>Length: {length}</span>
            <input
              type="range"
              min="8"
              max="50"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-2/3 accent-green-400"
            />
          </label>

          <label className={`flex items-center space-x-3 ${darkMode ? "text-white" : "text-gray-900"} font-medium`}>
            <input type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
            <span>Include Uppercase</span>
          </label>

          <label className={`flex items-center space-x-3 ${darkMode ? "text-white" : "text-gray-900"} font-medium`}>
            <input type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
            <span>Include Lowercase</span>
          </label>

          <label className={`flex items-center space-x-3 ${darkMode ? "text-white" : "text-gray-900"} font-medium`}>
            <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
            <span>Include Numbers</span>
          </label>

          <label className={`flex items-center space-x-3 ${darkMode ? "text-white" : "text-gray-900"} font-medium`}>
            <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
            <span>Include Symbols</span>
          </label>

          <label className={`flex justify-between items-center ${darkMode ? "text-white" : "text-gray-900"} font-semibold`}>
            <span>Number of passwords: {count}</span>
            <input
              type="range"
              min="1"
              max="20"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="w-2/3 accent-green-400"
            />
          </label>
        </div>

        <button
          type="button"
          onClick={generatePassword}
          className="mt-6 w-full px-4 py-3 rounded-lg font-semibold bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 transition-shadow shadow"
        >
          Generate Passwords
        </button>

        {passwords.length > 0 ? (
          <div className={`mt-5 grid gap-3`} aria-live="polite">
            {passwords.map((pwd, index) => (
              <button
                key={index}
                type="button"
                onClick={() => copyPassword(pwd, index)}
                className={`text-left cursor-pointer font-mono break-all p-3 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 ${
                  darkMode
                    ? "bg-slate-900/70 text-emerald-100 hover:bg-slate-900"
                    : "bg-white text-gray-900 hover:bg-emerald-50"
                }`}
                aria-label={`Copy password ${index + 1}`}
              >
                {pwd}
                {copiedIndex === index && (
                    <span
                        className={`ml-2 text-sm transition-opacity duration-500 ${
                            copiedIndex === index
                            ? darkMode
                                ? "text-green-300 opacity-100"
                                : "text-green-700 opacity-100"
                            : "opacity-0"
                        }`}
                        >
                        Copied!
                    </span>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div
            className={`mt-5 p-4 rounded-lg ${
              darkMode ? "bg-slate-900/70 text-emerald-100" : "bg-white text-gray-700"
            }`}
          >
            <p className="text-sm">Generate passwords to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
