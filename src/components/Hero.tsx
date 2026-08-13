import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = () => {
      const y = window.scrollY
      if (el) el.style.transform = `translateY(${y * 0.3}px)`
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #141225 0%, #1a0d0d 50%, #A01818 100%)' }}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" ref={ref}>
        <GeometricPattern />
      </div>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4A94A, transparent)' }} />

      {/* Corner flourishes */}
      <CornerFlourish position="top-left" />
      <CornerFlourish position="top-right" />
      <CornerFlourish position="bottom-left" />
      <CornerFlourish position="bottom-right" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Classification label */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16" style={{ background: '#D4A94A' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: '#D4A94A', fontWeight: 500 }}>
            Nghiên Cứu Nghệ Thuật
          </span>
          <div className="h-px w-16" style={{ background: '#D4A94A' }} />
        </div>

        {/* Main title */}
        <h1
          className="font-serif mb-6 leading-tight"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: '#f5f0e8',
            textShadow: '0 4px 40px rgba(160,24,24,0.4)',
            letterSpacing: '-0.01em',
          }}
        >
          Kĩ Thuật
          <br />
          <span style={{ color: '#D4A94A', fontStyle: 'italic' }}>Biểu Diễn</span>
        </h1>

        {/* Subtitle ornament */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <CloudOrnament />
          <div className="h-px w-12" style={{ background: 'rgba(212,169,74,0.4)' }} />
          <CloudOrnament />
        </div>

        {/* Opening paragraph */}
        <p
          className="text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'rgba(245,240,232,0.82)', fontWeight: 300, lineHeight: 1.9 }}
        >
          Không khó để nhận thấy rằng, sân khấu hát bội, bên cạnh giọng hát, lời thoại, còn chứa
          đựng các yếu tố phi ngôn ngữ. Nhờ đó khán giả chỉ cần quan sát những điều bộ đặc trưng
          thì có thể ngầm ra ý nghĩa của hành động, cảm xúc cũng như tính cách nhân vật.
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce" style={{ color: 'rgba(212,169,74,0.6)' }}>
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#D4A94A' }}>Khám Phá</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to bottom, transparent, #0F1830)' }} />
    </section>
  )
}

function GeometricPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect x="10" y="10" width="60" height="60" fill="none" stroke="#D4A94A" strokeWidth="0.5" />
          <rect x="20" y="20" width="40" height="40" fill="none" stroke="#D4A94A" strokeWidth="0.3" transform="rotate(45 40 40)" />
          <circle cx="40" cy="40" r="4" fill="none" stroke="#D4A94A" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#geo)" />
    </svg>
  )
}

function CloudOrnament() {
  return (
    <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
      <path d="M1 12 Q4 2 8 8 Q12 2 16 8 Q20 2 24 8 Q28 2 31 12" stroke="#D4A94A" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function CornerFlourish({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const pos: Record<string, string> = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
  }
  const rot: Record<string, string> = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-[-1]',
  }
  return (
    <div className={`absolute ${pos[position]} ${rot[position]} opacity-40`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M4 44 L4 4 L44 4" stroke="#D4A94A" strokeWidth="1.5" fill="none" strokeLinecap="square" />
        <path d="M4 4 L14 14" stroke="#D4A94A" strokeWidth="0.8" />
        <circle cx="4" cy="4" r="3" fill="none" stroke="#D4A94A" strokeWidth="1" />
      </svg>
    </div>
  )
}
