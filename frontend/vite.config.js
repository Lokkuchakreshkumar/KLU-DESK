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
            src: "/KLUDESKICON-v2.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "/KLUDESKICON.png",
            type: "image/png",
            sizes: "512x512"
          }
        ]
      }
    })
  ],
})
