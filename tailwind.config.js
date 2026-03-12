/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon:   '#1D1F20',
        graphite: '#323638',
        steel:    '#596066',
        fog:      '#D9DDDF',
        bone:     '#F3F0EA',
        'ind-green':  '#5E7463',
        'sig-blue':   '#2F5E78',
        'safe-amber': '#B9873D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
