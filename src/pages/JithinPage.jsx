import { useState } from 'react'
import { motion } from 'framer-motion'
import EnvelopeScreen   from '../components/EnvelopeScreen'
import HeroSection      from '../components/HeroSection'
import ReceptionDetails from '../components/ReceptionDetails'
import FamilyHosts      from '../components/FamilyHosts'

export default function JithinPage() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-mesh font-sans">

      {/* Main content — always mounted behind the envelope */}
      <motion.main
        style={{ position: 'relative', zIndex: 1 }}
        animate={{ opacity: envelopeOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection
          name1="Jithindas"
          name2="Dr. Manasa"
          dateLabel="Sunday, May 17, 2026"
          timeLabel="Reception · 4:00 PM onwards"
          countdownTarget={new Date('2026-05-17T16:00:00')}
          heroBg="/photos/IMG-20250928-WA0042.jpg"
          preLine="Please join us to celebrate"
        />
        <ReceptionDetails
          sectionTitle="The Reception"
          dateBg="/photos/IMG-20250928-WA0033.jpg"
          dateText="May 17, 2026"
          timeText="4:00 PM — 8:00 PM"
          locationBg="/photos/unnamed.webp"
          venueName="N.C. Convention Centre"
          venueLines={['Pulparambu, Mukkam', 'Kozhikode, Kerala — 673602']}
          qrSrc="/photos/My_QR_Code_1-1024.png"
          qrLabel="Scan for Location"
          mapsUrl="https://maps.google.com/?q=N.C.+Convention+Centre+Pulparamba"
        />
        <FamilyHosts
          bg="/photos/IMG-20250928-WA0043.jpg"
          quote="With love from relatives &amp; friends"
          dateTag="May 17 · 2026 &nbsp;·&nbsp; Jithindas &amp; Dr. Manasa"
        />
      </motion.main>

      {/* Envelope overlay — iris-closes then calls onOpen */}
      {!envelopeOpen && (
        <EnvelopeScreen monogram="J&M" onOpen={() => setEnvelopeOpen(true)} />
      )}
    </div>
  )
}
