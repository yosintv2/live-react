import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

var d = document

;(function(){
  var w = window._wau || []
  w.push(["dynamic", "alan3d8iti", "ela", "c4302bffffff", "small"])
  window._wau = w
  var x = d.createElement('script')
  x.async = true
  x.src = '//waust.at/d.js'
  d.head.appendChild(x)
})()

var _c = __APP_CONFIG__
d.title = _c.siteName + ' | Live Stream'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
