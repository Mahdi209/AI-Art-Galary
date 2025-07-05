import React from "react";
import { FaFileAlt, FaArrowLeft, FaStar } from "react-icons/fa";

export default function ApplicationForm() {
  return (
    <div
      className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto 
      min-h-screen flex flex-col justify-center items-center py-20 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-12 w-20 h-20 bg-pink-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <FaFileAlt className="text-purple-400 text-3xl animate-bounce" />
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
              bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 
              text-transparent bg-clip-text
              animate-[fadeInUp_1s_ease-out] transform hover:scale-105 transition-transform duration-300"
            >
              استمارة التقديم
            </h2>
            <FaFileAlt className="text-purple-400 text-3xl animate-bounce" style={{animationDelay: '0.5s'}} />
          </div>
          <p className="text-white/70 text-lg sm:text-xl">
            قدم أعمالك الفنية وشارك في المعرض
          </p>
        </div>

        <div
          className="w-full glass-morphism rounded-2xl p-8 
          shadow-2xl hover:shadow-pink-500/20 transition-all duration-500
          border border-white/20 hover:border-pink-500/30
          animate-[fadeInUp_1s_ease-out_0.5s] opacity-0"
          style={{animationFillMode: 'forwards'}}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLScZPvvN9si3U-Rs2He8GKtkK0hnSNWtYCpnPm4nQX6u7zLHDQ/viewform?usp=sf_link"
            className="group relative overflow-hidden
              w-full py-12 sm:py-16 md:py-20
              glass-morphism rounded-2xl
              border border-white/20 hover:border-pink-500/50
              flex flex-col justify-center items-center gap-6
              transform hover:scale-[1.02] transition-all duration-500
              shadow-[0_0_30px_rgba(236,72,153,0.1)]
              hover:shadow-[0_0_50px_rgba(236,72,153,0.2)]
              cursor-pointer"
          >
            {/* Animated gradient border */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20
              transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            ></div>

            {/* Icon with stars */}
            <div className="relative">
              <div
                className="relative bg-gradient-to-br from-purple-500 to-pink-500
                p-6 rounded-2xl transform group-hover:scale-110 transition-transform duration-300
                shadow-lg group-hover:shadow-pink-500/30"
              >
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              
              {/* Floating stars */}
              <FaStar className="absolute -top-2 -left-2 text-yellow-400 text-sm animate-pulse" />
              <FaStar className="absolute -bottom-2 -right-2 text-yellow-400 text-xs animate-pulse" style={{animationDelay: '0.5s'}} />
              <FaStar className="absolute -top-2 -right-2 text-yellow-400 text-xs animate-pulse" style={{animationDelay: '1s'}} />
            </div>

            {/* Text Content */}
            <div className="relative flex flex-col items-center gap-4 text-center">
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-bold
                bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200
                text-transparent bg-clip-text
                group-hover:from-purple-100 group-hover:via-pink-100 group-hover:to-purple-100
                transition-all duration-300"
              >
                Application Form Link
              </span>

              <span
                className="text-lg sm:text-xl md:text-2xl font-medium
                text-white/80 group-hover:text-white
                transition-colors duration-300"
              >
                اضغط هنا للتقديم على المعرض
              </span>

              <div className="flex items-center gap-2 mt-4">
                <span className="text-purple-300 text-sm">ابدأ رحلتك الآن</span>
                <FaArrowLeft className="text-purple-300 text-sm animate-bounce" />
              </div>
            </div>

            {/* Hover indicator */}
            <div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2
              flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-pink-500/50 animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
