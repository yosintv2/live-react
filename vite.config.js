import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'rollup-plugin-obfuscator'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function postBuild() {
  return {
    name: 'post-build',
    enforce: 'post',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const htmlPath = path.join(distDir, 'index.html')
      const assetsDir = path.join(distDir, 'assets')
      if (!fs.existsSync(htmlPath)) return

      const html = fs.readFileSync(htmlPath, 'utf-8')
      const m = html.match(/src="\/assets\/(index-[^"]+\.js)"/)
      if (!m) return

      const oldPath = path.join(assetsDir, m[1])
      const newPath = path.join(assetsDir, 'loader-player3.js')
      if (fs.existsSync(oldPath)) fs.renameSync(oldPath, newPath)

      const out = '<!DOCTYPE html>\n<script src="/assets/loader-player3.js"></script>\n'
      fs.writeFileSync(htmlPath, out)
      console.log('[post-build] HTML stripped, bundle -> loader-player3.js')
    },
  }
}

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
  plugins: [
    react(),
    obfuscator({
      global: false,
      include: ['src/**/*.{js,jsx}'],
      exclude: ['node_modules/**'],
      options: {
        identifierNamesGenerator: 'hexadecimal',
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.7,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.3,
        stringArray: true,
        stringArrayEncoding: ['rc4'],
        stringArrayThreshold: 0.7,
        selfDefending: true,
        transformObjectKeys: true,
        disableConsoleOutput: false,
      },
    }),
    postBuild(),
  ],
  define: {
    __APP_CONFIG__: `(${JSON.stringify(config)})`,
  },
})
