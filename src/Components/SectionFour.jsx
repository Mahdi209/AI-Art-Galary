import React from "react";
import { editList } from "../AiList";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SectionFour() {
  return (
    <div
      className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto 
      min-h-screen flex flex-col justify-center items-center py-10"
    >
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
        text-center mb-10 text-white text-shadow-lg
        animate-[fadeIn_1s_ease-out] transform hover:scale-105 transition-transform"
      >
        ادوات رفع جودة الصور
      </h2>

      <ul
        className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl text-center space-y-4 
        bg-slate-800/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 
        text-white shadow-2xl hover:border-white/50 transition-all duration-500"
      >
        {editList.map((item, index) => (
          <li
            key={index}
            className="bg-slate-700/80 backdrop-blur-sm rounded-lg p-4 
              flex flex-row-reverse justify-between items-center
              hover:bg-slate-600/80 transform hover:scale-102 
              transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex flex-row-reverse items-center gap-4">
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
                  rounded-xl object-cover transform hover:scale-110 transition-transform"
              />
              <span className="text-white/90 hover:text-white transition-colors">
                {item.name}
              </span>
            </div>

            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group transform transition-transform hover:scale-110"
            >
              <FaArrowAltCircleRight
                className="w-8 h-8 sm:w-10 sm:h-10 
                text-purple-400 group-hover:text-purple-300 
                transition-colors duration-300"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
