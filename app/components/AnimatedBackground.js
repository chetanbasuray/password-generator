"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    // Generate positions and sizes only on the client
    const generated = Array.from({ length: 12 }).map(() => ({
      size: Math.floor(Math.random() * 80) + 40,
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      color:
        Math.random() > 0.5
          ? "rgba(0,255,200,0.06)"
          : "rgba(0,150,255,0.05)",
    }));
    setCircles(generated);
  }, []);

  // Static fallback for SSR
  if (circles.length === 0) {
    return <div className="fixed inset-0 bg-[#001b24]" />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#001b24]">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            background: circle.color,
            filter: "blur(12px)",
          }}
          animate={{
            y: [0, 10, -10, 0],
            x: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
