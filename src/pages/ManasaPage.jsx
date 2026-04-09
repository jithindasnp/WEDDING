import { useState } from 'react'
import { motion } from 'framer-motion'
import EnvelopeScreen   from '../components/EnvelopeScreen'
import HeroSection      from '../components/HeroSection'
import ReceptionDetails from '../components/ReceptionDetails'
import FamilyHosts      from '../components/FamilyHosts'

export default function ManasaPage() {
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
          name1="Dr. Manasa"
          name2="Jithindas"
          dateLabel="Sunday, 17 May 2026 · Medam 13, 1201"
          timeLabel="Muhurtham · 10:00 AM — 11:00 AM"
          countdownTarget={new Date('2026-05-17T10:00:00')}
          heroBg="/photos/IMG-20250928-WA0042.jpg"
          preLine="Cordially invites your esteemed presence"
        />
        <ReceptionDetails
          sectionTitle="The Wedding Ceremony"
          dateBg="/photos/IMG-20250928-WA0033.jpg"
          dateText="May 17, 2026"
          timeText="Muhurtham: 10:00 AM — 11:00 AM"
          locationBg="/photos/IMG-20250928-WA0040.jpg"
          venueName="Bride's Residence"
          venueLines={['Mannatham Poyil, Edakkad', 'Kozhikode, Kerala']}
          qrSrc="/photos/manasa home.png"
          qrLabel="Scan for Location"
          mapsUrl="https://maps.app.goo.gl/XNBHkY7ewrWkdDL46"
          extraNote={
            `Pre-wedding Ceremony on <strong>Saturday, 16th May 2026</strong><br/>
            at our residence, between <strong>3 PM &amp; 9 PM</strong>`
          }
        />
        <FamilyHosts
          bg="/photos/IMG-20250928-WA0043.jpg"
          quote="Wishes &amp; Compliments from:<br/><span style='font-size:0.65em;opacity:0.9'>Sheeja PP, Sayooj Vijayan, Vasanthi, relatives &amp; friends</span>"
          dateTag="May 17 · 2026 &nbsp;·&nbsp; Dr. Manasa &amp; Jithindas"
        />
      </motion.main>

      {/* Envelope overlay — iris-closes then calls onOpen */}
      {!envelopeOpen && (
        <EnvelopeScreen monogram="M&J" onOpen={() => setEnvelopeOpen(true)} />
      )}
    </div>
  )
}
