import React from "react";
import list from "../AiList";
import { FaArrowAltCircleRight, FaRocket } from "react-icons/fa";

export default function SectionThree() {
  return (
    <div
      className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto 
      min-h-screen flex flex-col justify-center items-center py-20 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 left-16 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-36 h-36 bg-yellow-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <FaRocket className="text-purple-400 text-3xl animate-bounce" />
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
              text-white text-shadow-lg
              animate-[fadeInUp_1s_ease-out] transform hover:scale-105 transition-transform duration-300"
            >
              ادوات انشاء الصور
            </h2>
            <FaRocket className="text-purple-400 text-3xl animate-bounce" style={{animationDelay: '0.5s'}} />
          </div>
          <p className="text-white/70 text-lg sm:text-xl">
            مجموعة من أفضل أدوات الذكاء الاصطناعي لإنشاء الصور
          </p>
        </div>

        <div
          className="w-full glass-morphism rounded-2xl p-8 
          shadow-2xl hover:shadow-purple-500/20 transition-all duration-500
          border border-white/20 hover:border-purple-500/30
          animate-[slideInFromLeft_1s_ease-out_0.5s] opacity-0"
          style={{animationFillMode: 'forwards'}}
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            {list.map((item, index) => (
              <li
                key={index}
                className="glass-morphism rounded-xl p-6 
                hover:bg-white/10 transform hover:scale-105 transition-all duration-300
                hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer
                border border-white/10 hover:border-purple-500/30 group
                animate-[fadeInUp_0.8s_ease-out] opacity-0"
                style={{
                  animationDelay: `${0.8 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex flex-row-reverse justify-between items-center">
                  <div className="flex flex-row-reverse items-center gap-4 flex-1">
                    <div className="relative">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                          rounded-xl object-cover transform group-hover:scale-110 
                          transition-transform duration-300 border-2 border-white/20
                          group-hover:border-purple-500/50"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 
                        rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-white/90 group-hover:text-white 
                      transition-colors font-medium text-right">
                      {item.name}
                    </span>
                  </div>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link transform transition-all duration-300 
                    hover:scale-110 flex items-center gap-2 bg-gradient-to-r 
                    from-purple-500 to-pink-500 rounded-lg px-4 py-2
                    hover:from-purple-600 hover:to-pink-600 shadow-lg
                    hover:shadow-purple-500/30"
                  >
                    <span className="text-white text-sm font-medium">زيارة</span>
                    <FaArrowAltCircleRight
                      className="w-6 h-6 text-white group-hover/link:text-purple-200 
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
