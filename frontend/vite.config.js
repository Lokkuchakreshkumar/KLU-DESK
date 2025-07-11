import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import iamge from "../frontend/public/"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
      VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "KLU Desk – Your College Companion",
        short_name: "KLU Desk",
        start_url: ".",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          {
            src: "../frontend/public/KLUDESKICON-v2.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "../frontend/public/KLUDESKICON.png",
            type: "image/png",
            sizes: "512x512"
          }
        ]
      }
    })
  ],
})
