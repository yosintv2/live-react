import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = {
  siteName: 'Cr7World',
  supportNote: 'Stream loading below — thanks for watching!',
  promoText: 'Join our community for live updates!',
  shareText: 'Share with Friends & Family',
  copyText: 'Copy This Live Stream',
  telegramUrl: 'https://t.me/yosintvlive',
  whatsappUrl: 'https://www.whatsapp.com/channel/0029Vb7ikzn9hXF5ec0uUI0H',
  linksApiUrl: 'https://cdn.singhs.com.np/api/links.json',
  adsenseClient: 'ca-pub-7981191925382455',
  adsenseSlot: '3322637685',
  monetagZone: '7463304',
  redirectUrl: 'https://yosintv-api.pages.dev/api/ads',
  email: 'contact@yonotv.net',
  ftSupercounterId: '1665792',
  ctSupercounterId: '1687371',
}

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_CONFIG__: `(${JSON.stringify(config)})`,
  },
})
