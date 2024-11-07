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
      },
      animation: {
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}