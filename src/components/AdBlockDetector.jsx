import { useEffect } from 'react'

export default function AdBlockDetector() {
  useEffect(() => {
    const timer = setTimeout(async () => {
      let isBlocked = false
      try {
        await fetch(
          new Request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'),
          { method: 'HEAD', mode: 'no-cors' }
        )
      } catch (e) {
        isBlocked = true
      }

      if (isBlocked) {
        const wrapper = document.getElementById('adb-wrapper')
        if (wrapper) {
          wrapper.style.display = 'flex'
          document.body.style.overflow = 'hidden'
        }
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return null
}
