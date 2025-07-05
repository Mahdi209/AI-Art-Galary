/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'translate(-50%, -50%) scale(2)',
            opacity: '0',
          },
        },
        spin: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(90deg)' },
        },
        fadeInRotate: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px) rotate(-2deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(-20px) rotate(0deg)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInFromLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInFromRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 80px rgba(168, 85, 247, 0.5)',
            transform: 'scale(1.05)',
          },
        },
      },
      animation: {
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'floatSlow': 'floatSlow 8s ease-in-out infinite',
        'fadeInRotate': 'fadeInRotate 2s ease-in-out',
        'fadeInUp': 'fadeInUp 1s ease-out',
        'slideInFromLeft': 'slideInFromLeft 1s ease-out',
        'slideInFromRight': 'slideInFromRight 1s ease-out',
        'pulseGlow': 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}