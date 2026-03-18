import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const photos = [
  {
    src: '/photos/IMG-20250928-WA0043.jpg',
    alt: 'Jithindas and Dr. Manasa laughing together',
    pos: 'center 20%',
    label: 'A love like no other',
  },
  {
    src: '/photos/IMG-20250928-WA0042.jpg',
    alt: 'Couple descending garden stairs',
    pos: 'center 30%',
    label: 'Written in the stars',
  },
  {
    src: '/photos/IMG-20250928-WA0033.jpg',
    alt: 'Holding hands',
    pos: 'center 40%',
    label: 'Forever begins here',
  },
]

function ParallaxPhoto({ src, alt, pos, label, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Photo moves slower than scroll → depth parallax
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  // Fade in from slight scale
  const opacity  = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const scale    = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1.04, 1, 1, 1.04])

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: 560 }}
    >
      {/* Parallax photo layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          scale,
          top: '-12%',
          bottom: '-12%',
          height: '124%',
        }}
      >
        <img
          src={src}
          alt={alt}
          loading={index === 0 ? 'eager' : 'lazy'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: pos,
            filter: 'brightness(0.82) saturate(0.88)',
            willChange: 'transform',
          }}
        />
      </motion.div>

      {/* Fog — top */}
      <div className="photo-fog-top absolute inset-x-0 top-0" style={{ height: '55%' }} />

      {/* Fog — bottom */}
      <div className="photo-fog-bottom absolute inset-x-0 bottom-0" style={{ height: '55%' }} />

      {/* Side vignette */}
      <div className="photo-vignette absolute inset-0" />

      {/* Floating label */}
      <motion.div
        className="absolute bottom-[22%] left-0 right-0 flex flex-col items-center gap-2"
        style={{ opacity }}
      >
        <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,transparent,rgba(212,118,142,0.6),transparent)' }} />
        <p className="font-serif italic text-base font-light"
          style={{ color: 'rgba(61,26,46,0.65)', letterSpacing: '0.04em' }}>
          {label}
        </p>
      </motion.div>
    </div>
  )
}

export default function CinematicGallery() {
  return (
    <section className="relative w-full">
      {photos.map((photo, i) => (
        <ParallaxPhoto key={photo.src} {...photo} index={i} />
      ))}
    </section>
  )
}
