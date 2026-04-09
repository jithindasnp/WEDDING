import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function FamilyHosts({
  bg         = '/photos/IMG-20250928-WA0043.jpg',
  quote      = 'With love from relatives & friends',
  dateTag    = 'May 17 · 2026 &nbsp;·&nbsp; Jithindas &amp; Dr. Manasa',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="parallax-section relative py-32 px-6 flex flex-col items-center justify-center min-h-[70vh]">

      {/* Wave divider — top */}
      <div className="absolute top-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
          <path d="M0,60 C360,0 1080,100 1440,40 L1440,0 L0,0 Z" fill="#FFF8FA" />
        </svg>
      </div>

      {/* Parallax Background */}
      <motion.div className="parallax-layer absolute inset-0 z-0 overflow-hidden" style={{ y: imgY }}>
        <img src={bg} alt="Wedding background" className="w-full object-cover"
          style={{ objectPosition: 'center center', filter: 'brightness(0.48)', height: '120%', minHeight: '100%' }}
          loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-black/35 mix-blend-multiply" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full mt-10">

        {/* Animated heart */}
        <motion.div className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}>
          <div className="h-px w-14" style={{ background: 'linear-gradient(90deg,transparent,rgba(242,181,200,0.5))' }} />
          <Heart size={18} style={{ color: '#F2B5C8' }} fill="rgba(242,181,200,0.5)" />
          <div className="h-px w-14" style={{ background: 'linear-gradient(90deg,rgba(242,181,200,0.5),transparent)' }} />
        </motion.div>

        {/* Quote */}
        <motion.div className="flex flex-col items-center gap-3 mt-16"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <p className="font-serif italic font-light drop-shadow-xl"
            style={{ color: 'rgba(255,255,255,0.95)', fontSize: 'clamp(1.5rem, 5vw, 2.8rem)' }}
            dangerouslySetInnerHTML={{ __html: quote }} />
        </motion.div>

        {/* Bottom tagline */}
        <motion.p className="font-sans text-[9px] uppercase tracking-[0.25em] mt-12 mb-4"
          style={{ color: 'rgba(255,255,255,0.45)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          dangerouslySetInnerHTML={{ __html: dateTag }} />
      </div>
    </section>
  )
}
