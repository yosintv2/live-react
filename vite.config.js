import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'rollup-plugin-obfuscator'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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

function htmlObfuscator() {
  return {
    name: 'html-obfuscator',
    enforce: 'post',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const htmlPath = path.join(distDir, 'index.html')
      if (!fs.existsSync(htmlPath)) return

      let html = fs.readFileSync(htmlPath, 'utf-8')

      const fake = 'Xx_' + '_'.repeat(300) + '_xX'
      html = '<!-- Anti-scraper: ' + fake + fake + fake + ' -->\n' + html

      const b64 = btoa(encodeURIComponent(html).replace(/%([0-9A-F]{2})/g, (_, h) => String.fromCharCode('0x' + h)))

      const n = 5
      const sz = Math.ceil(b64.length / n)
      const chunks = []
      for (let i = 0; i < n; i++) chunks.push(b64.slice(i * sz, (i + 1) * sz))

      const esc = (s) => JSON.stringify(s)

      const loader =
`<!DOCTYPE html><script>(function(){var w=self||window;var d=w[['\\x64\\x6f\\x63','\\x75\\x6d\\x65\\x6e\\x74'].join('')];var c=${esc(chunks)};var b=c.join('');d[['\\x6f\\x70\\x65\\x6e'].join('')]();d[['wr','ite'].join('')](w[['at','ob'].join('')](b));d[['\\x63\\x6c\\x6f\\x73\\x65'].join('')]();})();</script>`

      fs.writeFileSync(htmlPath, loader)
      console.log('[html-obfuscator] index.html obfuscated (' + b64.length + ' bytes base64)')
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    obfuscator({
      global: true,
      options: {
        identifierNamesGenerator: 'hexadecimal',
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        stringArray: true,
        stringArrayEncoding: ['rc4'],
        stringArrayThreshold: 0.8,
        selfDefending: true,
        transformObjectKeys: true,
        disableConsoleOutput: false,
      },
    }),
    htmlObfuscator(),
  ],
  define: {
    __APP_CONFIG__: `(${JSON.stringify(config)})`,
  },
})
