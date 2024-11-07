import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const initCursor = () => {
      setIsVisible(true);
      setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    };

    const updateCursor = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const updateCursorType = (e) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      setIsPointer(
        hoveredElement &&
          window.getComputedStyle(hoveredElement).cursor === "pointer"
      );
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setPosition({ x: -100, y: -100 });
    };

    const handleMouseMove = (e) => {
      updateCursor(e);
      updateCursorType(e);
    };

    initCursor();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer circle */}
      <div
        className={`fixed pointer-events-none z-[9999]
          w-5 h-5 border-2 border-purple-400 rounded-full
          transition-all duration-300 ease-out
          ${isPointer ? "scale-150" : "scale-100"}
          ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />

      {/* Inner dot */}
      <div
        className={`fixed pointer-events-none z-[9999]
          w-1.5 h-1.5 bg-purple-400 rounded-full
          transition-all duration-200 ease-out
          ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
