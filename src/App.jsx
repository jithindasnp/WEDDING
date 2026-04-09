import { Routes, Route } from 'react-router-dom'
import JithinPage   from './pages/JithinPage'
import ManasaPage   from './pages/ManasaPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/jithin" element={<JithinPage />} />
      <Route path="/manasa" element={<ManasaPage />} />
      <Route path="*"       element={<NotFoundPage />} />
    </Routes>
  )
}
