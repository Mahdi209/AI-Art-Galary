export default function ApplicationForm() {
  return (
    <div
      className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto 
      min-h-screen flex flex-col justify-center items-center"
    >
      <div
        className="relative w-full text-center mb-12
        animate-[fadeIn_1s_ease-out]"
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold 
          bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 
          text-transparent bg-clip-text"
        >
          استمارة التقديم
        </h2>
      </div>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://docs.google.com/forms/d/e/1FAIpQLScZPvvN9si3U-Rs2He8GKtkK0hnSNWtYCpnPm4nQX6u7zLHDQ/viewform?usp=sf_link"
        className="group relative overflow-hidden
          w-full py-10 sm:py-12 md:py-14
          bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
          backdrop-blur-md rounded-2xl
          border border-purple-500/20 hover:border-purple-500/40
          flex flex-col justify-center items-center gap-4
          transform hover:scale-[1.02] transition-all duration-500
          shadow-[0_0_30px_rgba(139,92,246,0.1)]
          hover:shadow-[0_0_50px_rgba(139,92,246,0.2)]"
      >
        {/* Animated gradient border */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20
          transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        ></div>

        {/* Icon */}
        <div
          className="relative bg-gradient-to-br from-purple-500 to-pink-500
          p-4 rounded-2xl transform group-hover:scale-110 transition-transform duration-300"
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-white"
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

        {/* Text Content */}
        <div className="relative flex flex-col items-center gap-3">
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
            className="text-sm sm:text-base md:text-lg 
            text-slate-400 group-hover:text-slate-300
            transition-colors duration-300"
          >
            اضغط هنا للتقديم على المعرض
          </span>
        </div>

        {/* Hover indicator */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2
          flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-1 h-1 rounded-full bg-purple-500/50"></div>
          <div className="w-1 h-1 rounded-full bg-purple-500/50"></div>
          <div className="w-1 h-1 rounded-full bg-purple-500/50"></div>
        </div>
      </a>
    </div>
  );
}
