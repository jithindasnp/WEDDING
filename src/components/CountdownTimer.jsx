import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

function FlipUnit({ value, label }) {
  const prev = useRef(value)
  const changed = prev.current !== value
  useEffect(() => { prev.current = value })

  return (
    <motion.div className="rounded-2xl flex flex-col items-center justify-center gap-2 p-3 md:p-5"
      style={{ minWidth: 72, minHeight: 100 }}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="overflow-hidden" style={{ height: '2.5rem' }}>
        <AnimatePresence mode="popLayout">
          <motion.span key={value} className="font-serif font-light block drop-shadow-md"
            style={{ fontSize: '2.5rem', color: '#FFF', lineHeight: 1 }}
            initial={changed ? { y: -28, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 28, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}>
            {pad(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="font-sans text-xs uppercase tracking-[0.2em] drop-shadow-md"
        style={{ color: '#FFFFFF', fontWeight: 500, letterSpacing: '0.2em' }}>{label}</span>
    </motion.div>
  )
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft())
  const past = TARGET <= new Date()

  useEffect(() => {
    if (past) return
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [past])

  return (
    <section className="relative py-24 px-6 flex flex-col items-center">
      {/* Wave divider — top */}
      <div className="absolute top-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
          <path d="M0,60 C360,0 1080,100 1440,40 L1440,0 L0,0 Z" fill="#FFF8FA" />
        </svg>
      </div>

      {/* Background Image: groom looking through the ring */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/photos/check1.jpg"
          alt="Groom looking through ring"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%', filter: 'brightness(0.45)' }}
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      {/* Wave divider — bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full" style={{ height: 100, display: 'block' }}>
          <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" fill="#FFF8FA" />
        </svg>
      </div>

      <div className="relative z-20 flex flex-col items-center w-full max-w-4xl">
        <motion.div className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.6))' }} />
          <p className="font-sans text-xs uppercase tracking-[0.3em] drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
            {past ? 'The Big Day' : 'Counting Down'}
          </p>
          <div className="h-px w-12" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0.6),transparent)' }} />
        </motion.div>

      {past ? (
        <motion.p className="font-serif text-3xl font-light text-center drop-shadow-md" style={{ color: '#FFF' }}
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          Today is the day!
        </motion.p>
      ) : (
        <div className="flex gap-2 md:gap-5">
          <FlipUnit value={time.days}    label="Days" />
          <div className="flex items-center pb-6">
            <span className="font-serif text-3xl font-light drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>:</span>
          </div>
          <FlipUnit value={time.hours}   label="Hours" />
          <div className="flex items-center pb-6">
            <span className="font-serif text-3xl font-light drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>:</span>
          </div>
          <FlipUnit value={time.minutes} label="Minutes" />
          <div className="flex items-center pb-6">
            <span className="font-serif text-3xl font-light drop-shadow-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>:</span>
          </div>
          <FlipUnit value={time.seconds} label="Seconds" />
        </div>
      )}

      <motion.p className="font-sans text-xs uppercase tracking-[0.2em] mt-8 drop-shadow-sm"
        style={{ color: 'rgba(255,255,255,0.6)' }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}>
        Until the celebration begins · May 17, 2026
      </motion.p>
      </div>
    </section>
  )
}
