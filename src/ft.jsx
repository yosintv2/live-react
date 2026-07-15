import { useEffect, useRef, useState, useCallback } from 'react'
import { TopAd, StickyAd, AdSenseLoader } from './components/GoogleAds'
import Monetag from './components/Monetag'
import AdBlockDetector from './components/AdBlockDetector'

const {
  siteName, supportNote, promoText, shareText, copyText,
  telegramUrl, whatsappUrl, linksApiUrl,
} = __APP_CONFIG__

export default function FT() {
  const iframeRef = useRef(null)
  const loaderRef = useRef(null)
  const [error, setError] = useState(false)
  const [toast, setToast] = useState('')
  const adbRef = useRef(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sourceUrl = params.get('src')
    const iframe = iframeRef.current

    if (sourceUrl && iframe) {
      iframe.src = sourceUrl
      iframe.onload = () => {
        if (loaderRef.current) loaderRef.current.style.display = 'none'
      }
    } else {
      if (iframe) iframe.classList.add('hidden')
      if (loaderRef.current) loaderRef.current.style.display = 'none'
      setError(true)
    }
  }, [])

  const shareLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setToast('Link Copied Successfully!')
      setTimeout(() => setToast(''), 3000)
    })
  }, [])

  useEffect(() => {
    async function loadRandomLink() {
      let links = []

      try {
        const r = await fetch(linksApiUrl, { cache: 'no-cache' })
        if (r.ok) {
          const data = await r.json()
          const arr = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : [])
          if (arr.length) links = arr
        }
      } catch (e) {
        console.warn('remote links fetch failed', e)
      }

      if (!links.length) {
        try {
          const res = await fetch('./links.json')
          if (res.ok) {
            const local = await res.json()
            const larr = Array.isArray(local) ? local : (Array.isArray(local.data) ? local.data : [])
            if (larr.length) links = larr
          }
        } catch (e) {
          console.warn('local links fetch failed', e)
        }
      }

      if (!links.length) return

      const item = links[Math.floor(Math.random() * links.length)]
      const href = item.href || item.url || item.link || item.target || '#'
      const text = item.text || item.title || item.name || item.label || 'America vs Africa - Match Highlights'

      const a = document.createElement('a')
      a.href = href
      a.innerText = text
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      a.className = 'random-link'

      const preAd = document.getElementById('prePlayerAd')
      if (preAd) {
        const wrapper = document.createElement('div')
        wrapper.className = 'random-link-wrapper'
        wrapper.appendChild(a)
        preAd.insertAdjacentElement('afterend', wrapper)
      }
    }

    window.addEventListener('load', loadRandomLink)
    return () => window.removeEventListener('load', loadRandomLink)
  }, [])

  return (
    <>
      <AdSenseLoader />
      <Monetag />
      <AdBlockDetector />

      <div className="header-banner">{siteName}</div>

      <div className="support-note">{supportNote}</div>

      <TopAd />

      <div className="player-wrapper">
        <div className="loader" ref={loaderRef}></div>
        <iframe
          id="iframePlayer"
          ref={iframeRef}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className={"error-overlay" + (error ? ' show' : '')}>
          <p style={{ fontSize: '20px', marginBottom: '10px' }}>No Stream Source Provided</p>
          <button
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              background: '#007bff',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => window.location.reload()}
          >
            Retry Connection
          </button>
        </div>
      </div>

      <StickyAd />

      <div className="promo-card">
        <span>{promoText}</span>
        <div className="promo-buttons">
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram-plane"></i> Telegram
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>

      <div className="info-card">
        <span>{shareText}</span>
        <button onClick={shareLink}>
          <i className="fas fa-share-alt"></i> {copyText} ❤️
        </button>
      </div>

      <div className="dmca-container">
        <div className="dmca-title">
          <i className="fas fa-balance-scale"></i> DMCA Notice
        </div>
        <div className="dmca-text">
          <strong>{siteName}</strong> does not host any media content on its own servers. Our site
          visitors might use external or third parties services to show content (Example: Embedding
          media from sites like <strong>Bet365, Dailymotion, Streamable</strong>, etc.)
        </div>
      </div>

      <div id="adb-wrapper" ref={adbRef}>
        <div className="adb-card">
          <div style={{ fontSize: '50px', marginBottom: '15px' }}>🚫</div>
          <h2 style={{ color: '#1e293b', marginBottom: '10px' }}>Ad-blocker Detected</h2>
          <p style={{ color: '#64748b', marginBottom: '20px' }}>
            Please disable your Ad-blocker to support our free live streaming service.
          </p>
          <button onClick={() => window.location.reload()} className="adb-btn">
            I've disabled it, refresh
          </button>
        </div>
      </div>

      <div className={"toast" + (toast ? ' show' : '')}>{toast}</div>

    </>
  )
}
