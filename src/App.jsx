import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import EnvelopeScreen   from './components/EnvelopeScreen'
import HeroSection      from './components/HeroSection'
import ReceptionDetails from './components/ReceptionDetails'
import FamilyHosts      from './components/FamilyHosts'

export default function App() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-mesh font-sans">

      {/* Envelope intro */}
      <AnimatePresence>
        {!envelopeOpen && <EnvelopeScreen onOpen={() => setEnvelopeOpen(true)} />}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {envelopeOpen && (
          <motion.main
            style={{ position: 'relative', zIndex: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <HeroSection />
            <ReceptionDetails />
            <FamilyHosts />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
