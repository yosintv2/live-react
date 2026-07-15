import { Routes, Route } from 'react-router-dom'
import FT from './ft'
import CT from './ct'
import About from './pages/About'
import Contact from './pages/Contact'
import Disclaimer from './pages/Disclaimer'
import DMCA from './pages/DMCA'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FT />} />
      <Route path="/ct" element={<CT />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/dmca" element={<DMCA />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  )
}
