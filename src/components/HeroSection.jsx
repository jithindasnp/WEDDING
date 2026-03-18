import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/* ── Countdown helpers ── */
const TARGET = new Date('2026-05-17T16:00:00')
function getTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}
function pad(n) { return String(n).padStart(2, '0') }

function FlipUnit({ value, label, delay = 0 }) {
  const prev = useRef(value)
  const changed = prev.current !== value
  useEffect(() => { prev.current = value })

  return (
    <motion.div
      className="flex flex-col items-center gap-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="overflow-hidden" style={{ height: '3rem' }}>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            className="font-serif font-light block drop-shadow-md"
            style={{ fontSize: '2.8rem', color: '#FFF', lineHeight: 1 }}
            initial={changed ? { y: -30, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {pad(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="font-sans text-[9px] uppercase tracking-[0.22em] drop-shadow-sm"
        style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</span>
    </motion.div>
  )
}

/* ── Fade-up variant ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function HeroSection() {
  const [time, setTime]   = useState(getTimeLeft())
  const past              = TARGET <= new Date()
  const sectionRef        = useRef(null)

  useEffect(() => {
    if (past) return
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [past])

  /* Parallax — image scrolls slower than the page */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imgY }}
      >
        <img
          src="/photos/IMG-20250928-WA0042.jpg"
          alt="Couple descending stairs"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center', filter: 'brightness(0.78)', minHeight: '120%' }}
        />
        <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
      </motion.div>

      {/* Wave divider — bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
          <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" fill="#FFF8FA" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">

        {/* Top ornament */}
        <motion.div className="flex items-center gap-4 mb-8"
          initial="hidden" animate="show" custom={0.1} variants={fadeUp}>
          <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #F2B5C8)' }} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L9.3 6.7L16 8L9.3 9.3L8 16L6.7 9.3L0 8L6.7 6.7Z" fill="#F2B5C8" opacity="0.85" />
          </svg>
          <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #F2B5C8, transparent)' }} />
        </motion.div>

        {/* Pre-line */}
        <motion.p className="font-sans text-xs uppercase tracking-[0.35em] mb-5"
          style={{ color: 'rgba(255,255,255,0.82)' }}
          initial="hidden" animate="show" custom={0.2} variants={fadeUp}>
          Please join us to celebrate
        </motion.p>

        {/* Names */}
        <motion.div initial="hidden" animate="show" custom={0.35} variants={fadeUp}>
          <h1 className="font-serif font-light leading-none text-white drop-shadow-lg"
            style={{ fontSize: 'clamp(3rem,10vw,6.5rem)' }}>
            Jithindas
          </h1>
        </motion.div>

        <motion.div className="my-2" initial="hidden" animate="show" custom={0.5} variants={fadeUp}>
          <span className="font-serif italic font-light drop-shadow-md"
            style={{ fontSize: 'clamp(2rem,6vw,4rem)', color: '#F2B5C8' }}>
            &amp;
          </span>
        </motion.div>

        <motion.div initial="hidden" animate="show" custom={0.65} variants={fadeUp}>
          <h1 className="font-serif font-light leading-none text-white drop-shadow-lg"
            style={{ fontSize: 'clamp(3rem,10vw,6.5rem)' }}>
            Dr. Manasa
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div className="flex items-center gap-5 my-6"
          initial="hidden" animate="show" custom={0.78} variants={fadeUp}>
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.45))' }} />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="3" fill="#F2B5C8" opacity="0.8" />
          </svg>
          <div className="h-px w-20" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0.45),transparent)' }} />
        </motion.div>

        {/* Date */}
        <motion.div className="flex flex-col items-center gap-1 mb-10"
          initial="hidden" animate="show" custom={0.88} variants={fadeUp}>
          <p className="font-sans font-medium uppercase tracking-[0.3em] text-sm text-white drop-shadow-sm">
            Sunday, May 17, 2026
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Reception · 4:00 PM onwards
          </p>
        </motion.div>

        {/* ── Embedded Countdown ── */}
        <motion.div
          initial="hidden" animate="show" custom={1.05} variants={fadeUp}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.4))' }} />
            <p className="font-sans text-[10px] uppercase tracking-[0.28em]" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {past ? 'The big day is here!' : 'Counting down'}
            </p>
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0.4),transparent)' }} />
          </div>

          {past ? (
            <motion.p className="font-serif text-3xl font-light text-white drop-shadow-md"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}>
              Today is the day! 🎉
            </motion.p>
          ) : (
            <div className="flex items-end gap-2 md:gap-4">
              <FlipUnit value={time.days}    label="Days"    delay={1.1} />
              <span className="font-serif text-4xl font-light mb-6 drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>:</span>
              <FlipUnit value={time.hours}   label="Hours"   delay={1.2} />
              <span className="font-serif text-4xl font-light mb-6 drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>:</span>
              <FlipUnit value={time.minutes} label="Minutes" delay={1.3} />
              <span className="font-serif text-4xl font-light mb-6 drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>:</span>
              <FlipUnit value={time.seconds} label="Seconds" delay={1.4} />
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div className="absolute bottom-16 bounce-arrow z-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}>
        <ChevronDown size={28} style={{ color: 'rgba(255,255,255,0.65)' }} />
      </motion.div>
    </section>
  )
}
