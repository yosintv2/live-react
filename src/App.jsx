import { Routes, Route } from 'react-router-dom'
import FT from './ft'
import CT from './ct'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FT />} />
      <Route path="/ct" element={<CT />} />
    </Routes>
  )
}
