import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react'

// Reusable stagger child animation
const slideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
})

export default function ReceptionDetails() {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=N.C.+Convention+Centre+Pulparamba', '_blank', 'noopener,noreferrer')
  }

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const { scrollYProgress: sp1 } = useScroll({ target: ref1, offset: ['start end', 'end start'] })
  const { scrollYProgress: sp2 } = useScroll({ target: ref2, offset: ['start end', 'end start'] })
  const imgY1 = useTransform(sp1, [0, 1], ['-10%', '10%'])
  const imgY2 = useTransform(sp2, [0, 1], ['-10%', '10%'])

  return (
    <>
      {/* Date & Time Section with Hand Holding background */}
      <section ref={ref1} className="relative py-32 px-6 flex flex-col items-center justify-center min-h-[65vh]">
        {/* Wave divider — top */}
        <div className="absolute top-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
            <path d="M0,60 C360,0 1080,100 1440,40 L1440,0 L0,0 Z" fill="#FFF8FA" />
          </svg>
        </div>

        <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: imgY1 }}>
          <img
            src="/photos/IMG-20250928-WA0033.jpg"
            alt="Hand holding"
            className="w-full object-cover"
            style={{ objectPosition: 'center center', filter: 'brightness(0.6)', height: '120%', minHeight: '100%' }}
          />
          <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
        </motion.div>

        {/* Wave divider — bottom */}
        <div className="absolute bottom-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
            <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" fill="#FFF8FA" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
          <motion.div className="flex items-center gap-4 mb-6" {...slideUp(0)}>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.6))' }} />
            <p className="font-sans text-xs uppercase tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.8)' }}>The Celebration</p>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0.6),transparent)' }} />
          </motion.div>

          <motion.h2 className="font-serif font-light mb-3 drop-shadow-lg text-white"
            style={{ fontSize: 'clamp(2.5rem,6vw,4rem)' }} {...slideUp(0.12)}>
            The Reception
          </motion.h2>

          <motion.div className="flex justify-center mb-6" {...slideUp(0.2)}>
            <div className="h-px w-32" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)' }} />
          </motion.div>

          <motion.div className="flex flex-col items-center gap-3" {...slideUp(0.3)}>
            <div className="flex items-center gap-3 mb-1">
              <Calendar size={18} style={{ color: '#F2B5C8' }} />
              <span className="font-sans text-sm uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.8)' }}>When</span>
            </div>
            <p className="font-serif text-4xl font-light text-white drop-shadow-lg">May 17, 2026</p>
            <div className="flex items-center gap-2 mt-1">
              <Clock size={16} style={{ color: '#F2B5C8' }} />
              <p className="font-sans text-sm tracking-wide text-white drop-shadow-sm">4:00 PM — 8:00 PM</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & QR Code Section with new attached background */}
      <section ref={ref2} className="relative py-32 px-6 flex flex-col items-center justify-center min-h-[65vh]">
        {/* Wave divider — top */}
        <div className="absolute top-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
            <path d="M0,40 C360,100 1080,0 1440,60 L1440,0 L0,0 Z" fill="#FFF8FA" />
          </svg>
        </div>

        <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y: imgY2 }}>
          <img
            src="/photos/unnamed.webp"
            alt="Location address background"
            className="w-full object-cover"
            style={{ objectPosition: 'center center', filter: 'brightness(0.55)', height: '120%', minHeight: '100%' }}
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        </motion.div>

        {/* Wave divider — bottom */}
        <div className="absolute bottom-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
            <path d="M0,60 C360,0 1080,100 1440,40 L1440,100 L0,100 Z" fill="#FFF8FA" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center">
          <motion.div className="flex flex-col items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={18} style={{ color: '#F2B5C8' }} />
              <span className="font-sans text-sm uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.8)' }}>Where</span>
            </div>
            <p className="font-serif text-3xl font-light text-white drop-shadow-md">N.C. Convention Centre</p>
            <div className="flex flex-col items-center mt-2 gap-1 px-4 drop-shadow-sm">
              <p className="font-sans text-sm tracking-wide text-white">Pulparambu, Mukkam</p>
              <p className="font-sans text-sm tracking-wide text-white">Kozhikode, Kerala — 673602</p>
            </div>
          </motion.div>

          <motion.div className="flex flex-col items-center mb-10"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="p-2 bg-white/90 rounded-xl shadow-lg mb-4 backdrop-blur-sm">
              <img 
                src="/photos/My_QR_Code_1-1024.png" 
                alt="Location QR Code" 
                className="w-32 h-32 object-contain"
              />
            </div>
            <p className="font-sans text-xs uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.6)' }}>Scan for Location</p>
          </motion.div>

          <motion.button onClick={handleDirections}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-sans text-xs uppercase tracking-[0.2em] cursor-pointer"
            style={{ background: 'rgba(242, 181, 200, 0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFF' }}
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(242, 181, 200, 0.25)' }}
            whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            <MapPin size={13} />
            Get Directions
            <ExternalLink size={11} style={{ opacity: 0.8 }} />
          </motion.button>
        </div>
      </section>
    </>
  )
}
