import { useEffect } from 'react'

export default function Monetag() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const s = document.createElement('script')
      s.src = 'https://bvtpk.com/tag.min.js'
      s.setAttribute('data-zone', '7463304')
      document.body.appendChild(s)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
