"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>

      {/* Trail */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-purple-500/20 blur-xl transition-transform duration-300" />
      </div>
    </>
  );
}
