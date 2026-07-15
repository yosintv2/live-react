import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import css from './index.css?inline'

var d = document
var h = d.head

var s = d.createElement('style')
s.textContent = css
h.appendChild(s)

var fa = d.createElement('link')
fa.rel = 'stylesheet'
fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
h.appendChild(fa)

var dt = d.createElement('script')
dt.setAttribute('disable-devtool-auto', '')
dt.src = 'https://cdn.jsdelivr.net/npm/disable-devtool'
h.appendChild(dt)

var c = d.createElement('div')
c.id = 'root'
d.body.appendChild(c)

;(function(){
  var w = window._wau || []
  w.push(["dynamic", "alan3d8iti", "ela", "c4302bffffff", "small"])
  window._wau = w
  var x = d.createElement('script')
  x.async = true
  x.src = '//waust.at/d.js'
  h.appendChild(x)
})()

var r = d.createElement('meta')
r.name = 'robots'
r.content = 'noindex, nofollow'
h.appendChild(r)

var _c = __APP_CONFIG__
d.title = _c.siteName + ' | Live Stream'

createRoot(c).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
