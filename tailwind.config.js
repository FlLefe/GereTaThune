/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{html,js,css}",
  "./assets/*.{html,js,css}",
  "./app/views/*.ejs",
  "./app/views/partials/*.ejs"],
  theme: {
    extend: {
      width: {
        'custom': '220px', // Remplace '200px' par la valeur que tu veux
      },
    },
  },
  plugins: [],
}

