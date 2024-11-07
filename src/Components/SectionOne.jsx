import React from "react";

export default function SectionOne() {
  return (
    <div
      className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto min-h-screen 
      flex flex-col justify-center items-center py-10"
    >
      <h4
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
        text-center mb-10 text-white text-shadow-lg
        animate-[fadeIn_1s_ease-out] transform hover:scale-105 transition-transform"
      >
        مواضيع المعرض
      </h4>

      <ol
        className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl text-center space-y-4 
        bg-slate-800/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 
        text-white shadow-2xl hover:border-white/50 transition-all duration-500"
      >
        {[
          "الاماكن المقدسه في العراق",
          "الاماكن الاثرية في العراق",
          "قضية فلستطين ولبنان",
          "الارهاب وشهداء سبايكر",
          "اي رسومات وافكار ذات معاني هادفة",
        ].map((item, index) => (
          <li
            key={index}
            className="bg-slate-700/80 backdrop-blur-sm rounded-lg p-5 
            hover:bg-slate-600/80 transform hover:scale-102 transition-all duration-300
            hover:shadow-lg hover:shadow-purple-500/20"
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}
