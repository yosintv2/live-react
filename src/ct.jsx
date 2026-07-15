import { useEffect, useRef, useState, useCallback } from 'react'
import { TopAd, StickyAd, AdSenseLoader } from './components/GoogleAds'
import Monetag from './components/Monetag'
import AdRedirect from './components/AdRedirect'
import AdBlockDetector from './components/AdBlockDetector'

export default function CT() {
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

  return (
    <>
      <AdSenseLoader />
      <Monetag />
      <AdRedirect />
      <AdBlockDetector />

      <div className="header-banner">Cr7World</div>

      <div className="jersey-container">
        <div className="jersey-info">
          <div className="jersey-icon">
            <i className="fas fa-tshirt"></i>
          </div>
          <div className="jersey-text">
            <h4>2025/26 Jerseys Available Now!</h4>
            <p>Premium quality — worldwide shipping</p>
          </div>
        </div>
        <a
          className="btn-buy-now"
          href="https://shop.seven-corp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-shopping-cart"></i> Buy Now
        </a>
      </div>

      <div className="support-note">Stream loading below — thanks for watching!</div>

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
        <span>📢 Join our community for live updates!</span>
        <div className="promo-buttons">
          <a href="https://t.me/yosintvlive" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram-plane"></i> Telegram
          </a>
          <a
            href="https://www.whatsapp.com/channel/0029Vb7ikzn9hXF5ec0uUI0H"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>

      <div className="info-card">
        <span>Share with Friends & Family</span>
        <button onClick={shareLink}>
          <i className="fas fa-share-alt"></i> Copy This Live Stream ❤️
        </button>
      </div>

      <div className="dmca-container">
        <div className="dmca-title">
          <i className="fas fa-balance-scale"></i> DMCA Notice
        </div>
        <div className="dmca-text">
          <strong>Cr7World</strong> does not host any media content on its own servers. Our site
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

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          visibility: 'hidden',
        }}
      >
        <script
          type="text/javascript"
          src="//widget.supercounters.com/ssl/online_i.js"
        ></script>
        <script type="text/javascript">{`sc_online_i(1687371,"ffffff","e61c1c");`}</script>
      </div>
    </>
  )
}
