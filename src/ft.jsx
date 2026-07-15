import { useEffect, useRef, useState, useCallback } from 'react'
import { TopAd, StickyAd, AdSenseLoader } from '../components/GoogleAds'
import Monetag from '../components/Monetag'
import AdRedirect from '../components/AdRedirect'
import AdBlockDetector from '../components/AdBlockDetector'

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
      const remoteUrl = 'https://cdn.singhs.com.np/api/links.json'
      let links = []

      try {
        const r = await fetch(remoteUrl, { cache: 'no-cache' })
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
        <script type="text/javascript">{`sc_online_i(1665792,"ffffff","e61c1c");`}</script>
        <script id="_wau9qe" dangerouslySetInnerHTML={{
          __html: `
var _0x560bb4=_0xf8c9;function _0xf8c9(_0x122a01,_0x59755e){_0x122a01=_0x122a01-(0xa79+0x27e+-0xb9d);var _0xec6c5d=_0x1c16();var _0x489ec5=_0xec6c5d[_0x122a01];return _0x489ec5;}(function(_0x318dec,_0x292d1f){var _0x3b41a2=_0xf8c9,_0xe616fb=_0x318dec();while(!![]){try{var _0x28896c=-parseInt(_0x3b41a2(0x15f))/(-0x64b+0x1*0xd+-0x1*-0x63f)+parseInt(_0x3b41a2(0x165))/(0x1*-0x757+-0x14f7+-0x4*-0x714)+parseInt(_0x3b41a2(0x15c))/(-0x21f0+0x24d3*-0x1+-0x2363*-0x2)+parseInt(_0x3b41a2(0x15a))/(0x1*0xe35+0x3ff+-0x1230)+parseInt(_0x3b41a2(0x15b))/(0x1*0x1aab+-0x1*-0x22a7+0x1*-0x3d4d)+-parseInt(_0x3b41a2(0x164))/(-0x25ab+0x1ef0+0x6c1)*(parseInt(_0x3b41a2(0x160))/(-0x96a+-0x1418+-0x1*-0x1d89))+-parseInt(_0x3b41a2(0x167))/(-0x37*-0x7b+-0x392+-0x16d3);if(_0x28896c===_0x292d1f)break;else _0xe616fb['push'](_0xe616fb['shift']());}catch(_0x24fea7){_0xe616fb['push'](_0xe616fb['shift']());}}}(_0x1c16,0x39dce*0x1+-0x41af9+0x5a218));var _wau=_wau||[];_wau[_0x560bb4(0x15d)]([_0x560bb4(0x161),_0x560bb4(0x163),_0x560bb4(0x166),_0x560bb4(0x162)+'ff',_0x560bb4(0x15e)]);function _0x1c16(){var _0x47e703=['small','464696PKJCHg','12026ivsEBy','dynamic','c4302bffff','alan3d8iti','1902TiRSdr','662644UMMRwV','9qe','1740416UpoOlV','2220784ikoZfG','1652345IpzZlY','1041000YhEpOV','push'];_0x1c16=function(){return _0x47e703;};return _0x1c16();}
          `
        }} />
        <script async src="//waust.at/d.js"></script>
      </div>
    </>
  )
}
