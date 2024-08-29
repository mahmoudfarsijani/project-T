/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        suns: ['SUSE','sans-serif'],
        kanit: ['Kanit','sans-serif'],
        Matemasie: ['Matemasie','sans-serif'],
        Archivo: ['Archivo Black','sans-serif']
      }
    }
  },
  // plugins: [require('daisyui')],
  daisyui: {
    theme: [
      'winter','night'
    ]
  }
}
