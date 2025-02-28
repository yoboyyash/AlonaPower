import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [
    react(),
    tailwindcss(),
  ],

  base: '/AlonaPower/',
  
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure JSX is recognized
  },
});
