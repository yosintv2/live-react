import { useEffect } from 'react'

export default function AdRedirect() {
  useEffect(() => {
    const REDIRECT_KEY = 'lastRedirectTime'
    const REDIRECT_URL = 'https://yosintv-api.pages.dev/api/ads'
    const COOLDOWN = 5 * 60 * 60 * 1000
    const lastTime = localStorage.getItem(REDIRECT_KEY)

    if (!lastTime || (Date.now() - parseInt(lastTime, 10)) >= COOLDOWN) {
      const redirectTimer = setTimeout(() => {
        localStorage.setItem(REDIRECT_KEY, Date.now().toString())
        window.location.href = REDIRECT_URL
      }, 70000)

      return () => clearTimeout(redirectTimer)
    }
  }, [])

  return null
}
