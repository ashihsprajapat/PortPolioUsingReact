import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensures it listens on all network interfaces
    port: process.env.PORT || 3000, // Use the PORT environment variable (set by Render)
  }
})
