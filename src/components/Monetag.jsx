import { useEffect } from 'react'

const { monetagZone } = __APP_CONFIG__

export default function Monetag() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const s = document.createElement('script')
      s.src = 'https://bvtpk.com/tag.min.js'
      s.setAttribute('data-zone', monetagZone)
      document.body.appendChild(s)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
