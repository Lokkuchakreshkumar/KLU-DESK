import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
      VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "KLED – Your College Companion",
        short_name: "KLED",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          {
            src: "/ChatGPT Image Sep 15, 2025, 11_33_52 PM.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "/ChatGPT Image Sep 15, 2025, 11_33_52 PM.png",
            type: "image/png",
            sizes: "512x512"
          }
        ]
      }
    })
  ],
})
