import { useEffect, useRef, useState } from 'react'

const { adsenseClient, adsenseSlot } = __APP_CONFIG__

export function TopAd() {
  const topRef = useRef(null)

  useEffect(() => {
    const topWrap = topRef.current
    if (!topWrap) return

    const ins = document.createElement('ins')
    ins.className = 'adsbygoogle'
    ins.style.display = 'block'
    ins.setAttribute('data-ad-client', adsenseClient)
    ins.setAttribute('data-ad-slot', adsenseSlot)
    ins.setAttribute('data-ad-format', 'auto')
    ins.setAttribute('data-full-width-responsive', 'true')
    topWrap.appendChild(ins)

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}

    return () => {
      topWrap.innerHTML = ''
    }
  }, [])

  return <div id="prePlayerAd" className="ads-top-wrap" ref={topRef}></div>
}

export function StickyAd() {
  const [visible, setVisible] = useState(true)
  const slotRef = useRef(null)
  const adRef = useRef(null)
  const touchStart = useRef(0)

  useEffect(() => {
    const slot = slotRef.current
    if (!slot) return

    const ins = document.createElement('ins')
    ins.className = 'adsbygoogle'
    ins.style.display = 'block'
    ins.style.width = '100%'
    ins.style.height = '150px'
    ins.setAttribute('data-ad-client', adsenseClient)
    ins.setAttribute('data-ad-slot', adsenseSlot)
    ins.setAttribute('data-ad-format', 'auto')
    ins.setAttribute('data-full-width-responsive', 'true')
    slot.appendChild(ins)

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}

    return () => {
      slot.innerHTML = ''
    }
  }, [])

  useEffect(() => {
    var el = adRef.current
    if (!el) return

    var h = function(e) {
      var y = e.changedTouches ? e.changedTouches[0].screenY : 0
      if (e.type === 'touchstart') { touchStart.current = y; return }
      if (e.type === 'touchend' && touchStart.current - y > 50) setVisible(false)
    }

    el.addEventListener('touchstart', h)
    el.addEventListener('touchend', h)
    return function() {
      el.removeEventListener('touchstart', h)
      el.removeEventListener('touchend', h)
    }
  }, [])

  if (!visible) return null

  return (
    <div id="stickyAd" ref={adRef} className="sticky-ad-footer">
      <button
        id="stickyAdClose"
        className="sticky-ad-close"
        type="button"
        aria-label="Close ad"
        onClick={() => setVisible(false)}
      >
        X
      </button>
      <div className="swipe-bar"></div>
      <div id="stickyAdSlot" ref={slotRef}></div>
    </div>
  )
}

export function AdSenseLoader() {
  useEffect(() => {
    if (document.querySelector('script[data-google-adsense="main"]')) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-google-adsense', 'main')
    document.head.appendChild(script)
  }, [])

  return null
}
