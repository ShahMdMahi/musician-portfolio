"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SmoothCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setShouldRender(window.innerWidth >= 768);
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const checkPointer = () => {
      const target = document.elementFromPoint(
        mousePosition.x,
        mousePosition.y
      );
      setIsPointer(
        window.getComputedStyle(target as Element).cursor === "pointer"
      );
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", checkPointer);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", checkPointer);
    };
  }, [mousePosition.x, mousePosition.y]);

  if (!shouldRender) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-yellow-400 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-yellow-400 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.6,
        }}
      />
    </>
  );
}
