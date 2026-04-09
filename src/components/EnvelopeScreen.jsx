import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EnvelopeScreen({ onOpen }) {
  const [clicked, setClicked] = useState(false)

  const handleOpen = () => {
    if (clicked) return
    setClicked(true)
    setTimeout(onOpen, 900)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10"
      style={{ background: 'radial-gradient(ellipse at center, #4a1530 0%, #220a15 100%)' }}
      animate={clicked ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(22)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2,
              background: i % 2 === 0 ? '#F2B5C8' : '#D4768E',
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{ opacity: [0.1, 0.55, 0.1], scale: [1, 1.6, 1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Label */}
      <motion.p
        className="font-sans text-xs uppercase tracking-[0.32em]"
        style={{ color: 'rgba(242,181,200,0.65)' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.65, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Wedding Invitation
      </motion.p>

      {/* Envelope  */}
      <motion.div
        className="relative cursor-pointer select-none"
        style={{ width: 300, height: 210 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        onClick={handleOpen}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Body */}
        <div className="absolute inset-0 rounded-xl" style={{
          background: 'linear-gradient(155deg, #6b2445 0%, #4e1a35 55%, #3a1028 100%)',
          border: '1px solid rgba(242,181,200,0.22)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(242,181,200,0.12)',
        }} />
        <div className="absolute inset-0 rounded-xl" style={{
          background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.28) 100%)',
        }} />

        {/* Bottom V creases */}
        <div className="absolute bottom-0 left-0 w-0 h-0" style={{
          borderStyle: 'solid', borderWidth: '0 0 105px 150px',
          borderColor: 'transparent transparent rgba(28,6,18,0.75) transparent',
          borderRadius: '0 0 0 12px',
        }} />
        <div className="absolute bottom-0 right-0 w-0 h-0" style={{
          borderStyle: 'solid', borderWidth: '0 150px 105px 0',
          borderColor: 'transparent rgba(28,6,18,0.75) transparent transparent',
          borderRadius: '0 0 12px 0',
        }} />

        {/* Top flap (static, closed) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '50%', zIndex: 10 }}>
          <div style={{
            width: '100%', height: '200%',
            background: 'linear-gradient(180deg, #7b2e52 0%, #5e2242 100%)',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            borderBottom: '1px solid rgba(242,181,200,0.18)',
          }} />
        </div>

        {/* Inner glow */}
        <div className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(242,181,200,0.08)' }} />

        {/* Wax Seal */}
        <div className="absolute left-1/2 z-20" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: '0 0 30px 12px rgba(212,118,142,0.38)' }}
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          {[0, 0.9].map((delay, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{ inset: -10, border: '1.5px solid rgba(212,118,142,0.55)' }}
              animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay }}
            />
          ))}
          <div className="relative flex items-center justify-center rounded-full" style={{
            width: 80, height: 80,
            background: 'radial-gradient(circle at 35% 32%, #f0a0be, #c45a7a 55%, #943050)',
            boxShadow: '0 5px 20px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.22)',
            border: '2px solid rgba(242,181,200,0.45)',
          }}>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
              <circle cx="27" cy="27" r="23" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
              <circle cx="27" cy="27" r="20" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" fill="none" strokeDasharray="3 3" />
              <text x="27" y="23" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="10" fontWeight="600" fill="rgba(0,0,0,0.65)" letterSpacing="2">J&amp;M</text>
              <line x1="15" y1="29" x2="39" y2="29" stroke="rgba(0,0,0,0.28)" strokeWidth="0.75" />
              <text x="27" y="38" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="5" fontWeight="700" fill="rgba(0,0,0,0.52)" letterSpacing="1.5">TAP TO OPEN</text>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Hint text */}
      <motion.p
        className="font-sans text-xs uppercase tracking-[0.28em]"
        style={{ color: 'rgba(242,181,200,0.42)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: clicked ? 0 : 0.42 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Tap the seal to open
      </motion.p>
    </motion.div>
  )
}
