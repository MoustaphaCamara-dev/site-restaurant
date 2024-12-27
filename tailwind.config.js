/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#2C3E50',    // Bleu nuit profond et moderne
        'pearl': '#F5F0E1',       // Blanc cassé chaleureux
        'copper': '#B87D4B',      // Cuivre élégant
        'moss': '#6B8E23',        // Vert mousse naturel
        'slate': '#708090',       // Gris ardoise sophistiqué
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
