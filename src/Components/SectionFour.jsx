import React from "react";
import { editList } from "../AiList";
import { FaArrowAltCircleRight, FaImage } from "react-icons/fa";

export default function SectionFour() {
  return (
    <div
      className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto 
      min-h-screen flex flex-col justify-center items-center py-20 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-28 right-20 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-28 left-20 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <FaImage className="text-blue-400 text-3xl animate-pulse" />
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
              text-white text-shadow-lg
              animate-[fadeInUp_1s_ease-out] transform hover:scale-105 transition-transform duration-300"
            >
              ادوات رفع جودة الصور
            </h2>
            <FaImage className="text-blue-400 text-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
          <p className="text-white/70 text-lg sm:text-xl">
            أدوات متقدمة لتحسين جودة وتعديل الصور
          </p>
        </div>

        <div
          className="w-full glass-morphism rounded-2xl p-8 
          shadow-2xl hover:shadow-blue-500/20 transition-all duration-500
          border border-white/20 hover:border-blue-500/30
          animate-[slideInFromRight_1s_ease-out_0.5s] opacity-0"
          style={{animationFillMode: 'forwards'}}
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            {editList.map((item, index) => (
              <li
                key={index}
                className="glass-morphism rounded-xl p-6 
                hover:bg-white/10 transform hover:scale-105 transition-all duration-300
                hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer
                border border-white/10 hover:border-blue-500/30 group
                animate-[fadeInUp_0.8s_ease-out] opacity-0"
                style={{
                  animationDelay: `${0.8 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 
                        rounded-xl object-cover transform group-hover:scale-110 
                        transition-transform duration-300 border-2 border-white/20
                        group-hover:border-blue-500/50 shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 
                      rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  
                  <span className="text-white/90 group-hover:text-white 
                    transition-colors font-medium">
                    {item.name}
                  </span>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link transform transition-all duration-300 
                    hover:scale-110 flex items-center gap-2 bg-gradient-to-r 
                    from-blue-500 to-cyan-500 rounded-lg px-4 py-2
                    hover:from-blue-600 hover:to-cyan-600 shadow-lg
                    hover:shadow-blue-500/30 w-full justify-center"
                  >
                    <span className="text-white text-sm font-medium">استخدام</span>
                    <FaArrowAltCircleRight
                      className="w-5 h-5 text-white group-hover/link:text-blue-200 
                      transition-colors duration-300"
                    />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
