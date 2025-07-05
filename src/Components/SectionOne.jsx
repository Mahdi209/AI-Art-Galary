import React from "react";

export default function SectionOne() {
  return (
    <div
      className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto min-h-screen 
      flex flex-col justify-center items-center py-20 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 w-full">
        <h4
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
          text-center mb-16 text-white text-shadow-lg
          animate-[fadeInUp_1s_ease-out] transform hover:scale-105 transition-transform duration-300"
        >
          مواضيع المعرض
        </h4>

        <div
          className="w-full glass-morphism rounded-2xl p-8 
          shadow-2xl hover:shadow-purple-500/20 transition-all duration-500
          border border-white/20 hover:border-purple-500/30
          animate-[slideInFromLeft_1s_ease-out_0.5s] opacity-0"
          style={{animationFillMode: 'forwards'}}
        >
          <ol className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center space-y-6 text-white">
            {[
              "الاماكن المقدسه في العراق",
              "الاماكن الاثرية في العراق", 
              "قضية فلسطين ولبنان",
              "الارهاب وشهداء سبايكر",
              "اي رسومات وافكار ذات معاني هادفة",
            ].map((item, index) => (
              <li
                key={index}
                className="glass-morphism rounded-xl p-6 
                hover:bg-white/10 transform hover:scale-105 transition-all duration-300
                hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer
                border border-white/10 hover:border-purple-500/30
                animate-[fadeInUp_0.8s_ease-out] opacity-0"
                style={{
                  animationDelay: `${0.8 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-center justify-center gap-4">
                  <span className="text-purple-300 font-bold text-2xl">
                    {index + 1}
                  </span>
                  <span className="flex-1">{item}</span>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
