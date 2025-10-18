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
          onClick={generatePassword}
          className="mt-6 w-full px-4 py-3 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600 transition-shadow shadow"
        >
          Generate Passwords
        </button>

        {passwords.length > 0 ? (
          <div className={`mt-5 grid gap-3`}>
            {passwords.map((pwd, index) => (
              <div
                key={index}
                onClick={() => copyPassword(pwd, index)}
                className={`cursor-pointer font-mono break-all p-3 rounded-lg transition-colors ${
                  darkMode
                    ? "bg-black/40 text-green-100 hover:bg-black/50"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
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
              </div>
            ))}
          </div>
        ) : (
          <div className={`mt-5 p-4 rounded-lg ${darkMode ? "bg-white/6 text-gray-200" : "bg-gray-50 text-gray-600"}`}>
            <p className="text-sm">Generate passwords to see them here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
