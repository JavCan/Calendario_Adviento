// postcss.config.js
export default {
  plugins: {
    // CORRECCIÓN: Usar el nuevo nombre del paquete de PostCSS
    '@tailwindcss/postcss': {}, 
    // Mantener autoprefixer, que es necesario para la compatibilidad con navegadores
    'autoprefixer': {},
  },
}