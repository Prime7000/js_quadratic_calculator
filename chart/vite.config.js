import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Allows access from local network
    port: 5000,      // Runs Vite on port 5000
    strictPort: true, // Ensures Vite fails if port 5000 is unavailable
    // open: true,      // Automatically opens in the browser
    cors: true       // Enables Cross-Origin Resource Sharing (CORS)
  }
});
