import { useEffect, useRef, useState } from 'react'

const ADS_CLIENT = 'ca-pub-7981191925382455'
const ADS_SLOT = '3322637685'

export function TopAd() {
  const topRef = useRef(null)

  useEffect(() => {
    const topWrap = topRef.current
    if (!topWrap) return

    const ins = document.createElement('ins')
    ins.className = 'adsbygoogle'
    ins.style.display = 'block'
    ins.setAttribute('data-ad-client', ADS_CLIENT)
    ins.setAttribute('data-ad-slot', ADS_SLOT)
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

  useEffect(() => {
    const slot = slotRef.current
    if (!slot) return

    const ins = document.createElement('ins')
    ins.className = 'adsbygoogle'
    ins.style.display = 'inline-block'
    ins.style.width = '300px'
    ins.style.height = '250px'
    ins.style.minWidth = '300px'
    ins.style.maxWidth = '300px'
    ins.style.minHeight = '250px'
    ins.style.maxHeight = '250px'
    ins.setAttribute('data-ad-client', ADS_CLIENT)
    ins.setAttribute('data-ad-slot', ADS_SLOT)
    ins.setAttribute('data-ad-format', '')
    ins.setAttribute('data-full-width-responsive', 'false')
    slot.appendChild(ins)

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}

    return () => {
      slot.innerHTML = ''
    }
  }, [])

  if (!visible) return null

  return (
    <div id="stickyAd" className="sticky-ad-footer" style={{ display: 'block' }}>
      <button
        id="stickyAdClose"
        className="sticky-ad-close"
        type="button"
        aria-label="Close ad"
        onClick={() => setVisible(false)}
      >
        X
      </button>
      <div id="stickyAdSlot" ref={slotRef}></div>
    </div>
  )
}

export function AdSenseLoader() {
  useEffect(() => {
    if (document.querySelector('script[data-google-adsense="main"]')) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-google-adsense', 'main')
    document.head.appendChild(script)
  }, [])

  return null
}
