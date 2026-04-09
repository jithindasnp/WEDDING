import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const particles = [...Array(28)].map((_, i) => ({
  id: i,
  size: i % 3 === 0 ? 3 : 2,
  color: i % 2 === 0 ? '#F2B5C8' : '#D4768E',
  left: `${5 + (i * 37 + 11) % 90}%`,
  top:  `${5 + (i * 53 + 7)  % 90}%`,
  dur:  2 + (i % 4),
  delay: (i % 5) * 0.6,
}))

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center text-center px-6"
      style={{ background: 'radial-gradient(ellipse at 40% 40%, #4a1530 0%, #220a15 70%, #0d0208 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <motion.div key={p.id} className="absolute rounded-full"
            style={{ width: p.size, height: p.size, background: p.color, left: p.left, top: p.top }}
            animate={{ opacity: [0.08, 0.5, 0.08], scale: [1, 1.7, 1] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      {/* Decorative ring */}
      <motion.div className="relative mb-10"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
      >
        {/* Pulsing glow rings */}
        {[0, 0.7, 1.4].map((delay, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ inset: -16 - i * 10, border: '1px solid rgba(212,118,142,0.4)' }}
            animate={{ scale: [1, 1.15], opacity: [0.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay }}
          />
        ))}

        {/* Seal circle */}
        <div className="relative flex items-center justify-center rounded-full"
          style={{
            width: 140, height: 140,
            background: 'radial-gradient(circle at 38% 35%, #f0a0be, #c45a7a 50%, #7a2040)',
            boxShadow: '0 10px 60px rgba(196,90,122,0.5), inset 0 2px 4px rgba(255,255,255,0.2)',
            border: '2px solid rgba(242,181,200,0.5)',
          }}>
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
            <circle cx="55" cy="55" r="48" stroke="rgba(0,0,0,0.18)" strokeWidth="1" fill="none" />
            <circle cx="55" cy="55" r="42" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="none" strokeDasharray="4 4" />
            {/* 404 */}
            <text x="55" y="62" textAnchor="middle"
              fontFamily="Cormorant Garamond, serif"
              fontSize="32" fontWeight="700"
              fill="rgba(0,0,0,0.55)" letterSpacing="1">
              404
            </text>
          </svg>
        </div>
      </motion.div>

      {/* Ornament line */}
      <motion.div className="flex items-center gap-4 mb-7"
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}>
        <div className="h-px w-14" style={{ background: 'linear-gradient(90deg, transparent, #F2B5C8)' }} />
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z" fill="#F2B5C8" opacity="0.9" />
        </svg>
        <div className="h-px w-14" style={{ background: 'linear-gradient(90deg, #F2B5C8, transparent)' }} />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="font-serif font-light text-white mb-3 drop-shadow-lg"
        style={{ fontSize: 'clamp(2rem,7vw,3.5rem)', letterSpacing: '0.02em' }}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        Page Not Found
      </motion.h1>

      <motion.p
        className="font-sans text-sm mb-10 max-w-xs leading-relaxed"
        style={{ color: 'rgba(242,181,200,0.7)', letterSpacing: '0.04em' }}
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.72 }}
      >
        This invitation link doesn't exist.<br />Please use the correct link shared with you.
      </motion.p>

      {/* Buttons */}
      <motion.div className="flex flex-col sm:flex-row gap-3"
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85 }}>
        <motion.button
          onClick={() => navigate('/jithin')}
          className="px-7 py-3 rounded-full font-sans text-xs uppercase tracking-[0.2em] cursor-pointer"
          style={{
            background: 'rgba(242,181,200,0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(242,181,200,0.35)',
            color: '#F2B5C8',
          }}
          whileHover={{ scale: 1.05, background: 'rgba(242,181,200,0.25)' }}
          whileTap={{ scale: 0.96 }}
        >
          J &amp; M Invitation
        </motion.button>

        <motion.button
          onClick={() => navigate('/manasa')}
          className="px-7 py-3 rounded-full font-sans text-xs uppercase tracking-[0.2em] cursor-pointer"
          style={{
            background: 'rgba(242,181,200,0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(242,181,200,0.35)',
            color: '#F2B5C8',
          }}
          whileHover={{ scale: 1.05, background: 'rgba(242,181,200,0.25)' }}
          whileTap={{ scale: 0.96 }}
        >
          M &amp; J Invitation
        </motion.button>
      </motion.div>

      {/* Bottom tag */}
      <motion.p
        className="absolute bottom-8 font-sans text-[10px] uppercase tracking-[0.28em]"
        style={{ color: 'rgba(242,181,200,0.3)' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Jithindas &amp; Dr. Manasa · May 17, 2026
      </motion.p>
    </motion.div>
  )
}
