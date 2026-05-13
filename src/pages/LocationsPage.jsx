import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { MapPin, ExternalLink, Clock } from 'lucide-react'

// Slide up animation variant
const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
})

function LocationBlock({
  title,
  dateText,
  timeText,
  locationBg,
  venueName,
  venueLines,
  qrSrc,
  qrLabel,
  mapsUrl,
  extraNote,
  isFirst
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="parallax-section relative py-32 px-6 flex flex-col items-center justify-center min-h-[85vh]">
      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
          <path d={isFirst ? "M0,100 C360,0 1080,0 1440,100 L1440,0 L0,0 Z" : "M0,60 C360,0 1080,100 1440,40 L1440,0 L0,0 Z"} fill="#FFF8FA" />
        </svg>
      </div>

      <motion.div className="parallax-layer absolute inset-0 z-0 overflow-hidden" style={{ y: imgY }}>
        <img src={locationBg} alt="Venue background"
          className="w-full object-cover"
          style={{ objectPosition: 'center center', filter: 'brightness(0.55)', height: '120%', minHeight: '100%' }}
          loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </motion.div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
          <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" fill="#FFF8FA" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center">
        
        {/* Title */}
        <motion.div className="flex items-center gap-4 mb-6" {...slideUp(0)}>
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.6))' }} />
          <p className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.8)' }}>{title}</p>
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0.6),transparent)' }} />
        </motion.div>

        {/* Date and Time */}
        <motion.div className="flex flex-col items-center gap-2 mb-10" {...slideUp(0.1)}>
          <p className="font-serif text-2xl font-light text-white drop-shadow-md">{dateText}</p>
          <div className="flex items-center gap-2">
            <Clock size={16} style={{ color: '#F2B5C8' }} />
            <p className="font-sans text-sm tracking-wide text-white drop-shadow-sm">{timeText}</p>
          </div>
        </motion.div>

        {/* Venue Info */}
        <motion.div className="flex flex-col items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="flex items-center gap-3 mb-2">
            <MapPin size={18} style={{ color: '#F2B5C8' }} />
            <span className="font-sans text-sm uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.8)' }}>Where</span>
          </div>
          <p className="font-serif text-3xl font-light text-white drop-shadow-md">{venueName}</p>
          <div className="flex flex-col items-center mt-2 gap-1 px-4 drop-shadow-sm">
            {venueLines.map((l, i) => (
              <p key={i} className="font-sans text-sm tracking-wide text-white">{l}</p>
            ))}
          </div>
        </motion.div>

        {/* QR Code */}
        <motion.div className="flex flex-col items-center mb-10"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="p-2 bg-white/90 rounded-xl shadow-lg mb-4 backdrop-blur-sm">
            <img src={qrSrc} alt="Location QR Code" className="w-32 h-32 object-contain" />
          </div>
          <p className="font-sans text-xs uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.6)' }}>{qrLabel}</p>
        </motion.div>

        {/* Button */}
        <motion.button onClick={() => window.open(mapsUrl, '_blank', 'noopener,noreferrer')}
          className="flex items-center gap-2 px-8 py-3 rounded-full font-sans text-xs uppercase tracking-[0.2em] cursor-pointer"
          style={{ background: 'rgba(242,181,200,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF' }}
          whileHover={{ scale: 1.04, backgroundColor: 'rgba(242,181,200,0.25)' }}
          whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
          <MapPin size={13} />
          Get Directions
          <ExternalLink size={11} style={{ opacity: 0.8 }} />
        </motion.button>
        
        {/* Extra Note */}
        {extraNote && (
          <motion.div className="mt-10 px-6 py-4 rounded-xl text-center" {...slideUp(0.4)}
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <p className="font-serif italic text-white text-base drop-shadow-sm" dangerouslySetInnerHTML={{ __html: extraNote }} />
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default function LocationsPage() {
  return (
    <div className="relative min-h-screen bg-[#FFF8FA] font-sans">
      <Helmet>
        <title>Event Locations — Jithindas & Dr. Manasa</title>
        <meta property="og:title" content="Event Locations — Jithindas & Dr. Manasa" />
        <meta property="og:description" content="Location details and directions for the wedding and reception." />
        <meta property="og:url" content="https://wedding.jithindas.com/locations" />
      </Helmet>

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Simple Hero for Locations Page */}
        <section className="relative pt-24 pb-16 px-6 flex flex-col items-center text-center bg-[#FFF8FA]">
          <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #F2B5C8)' }} />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 0L9.3 6.7L16 8L9.3 9.3L8 16L6.7 9.3L0 8L6.7 6.7Z" fill="#F2B5C8" opacity="0.85" />
            </svg>
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #F2B5C8, transparent)' }} />
          </motion.div>
          <motion.h1 className="font-serif font-light text-4xl md:text-5xl text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Event Locations
          </motion.h1>
          <motion.p className="font-sans text-sm uppercase tracking-[0.2em] text-gray-500"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Maps &amp; Directions
          </motion.p>
        </section>

        {/* Wedding Location */}
        <LocationBlock
          title="The Wedding Ceremony"
          dateText="May 17, 2026"
          timeText="Muhurtham: 10:00 AM — 11:00 AM"
          locationBg="/photos/IMG-20250928-WA0040.jpg"
          venueName="Bride's Residence"
          venueLines={['Mannatham Poyil, Edakkad', 'Kozhikode, Kerala']}
          qrSrc="/photos/manasa home.png"
          qrLabel="Scan for Wedding Location"
          mapsUrl="https://maps.app.goo.gl/XNBHkY7ewrWkdDL46"
          isFirst={true}
        />

        {/* Reception Location */}
        <LocationBlock
          title="The Reception"
          dateText="May 17, 2026"
          timeText="4:00 PM — 8:00 PM"
          locationBg="/photos/unnamed.webp"
          venueName="N.C. Convention Centre"
          venueLines={['Pulparambu, Mukkam', 'Kozhikode, Kerala — 673602']}
          qrSrc="/photos/My_QR_Code_1-1024.png"
          qrLabel="Scan for Reception Location"
          mapsUrl="https://maps.google.com/?q=N.C.+Convention+Centre+Pulparamba"
          isFirst={false}
        />
      </main>
    </div>
  )
}
