import { useEffect, useRef, type ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  bg: 'navy' | 'maroon'
  children: ReactNode
  label: string
  title: string
  number: string
}

export default function SectionWrapper({ id, bg, children, label, title, number }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const bgStyle =
    bg === 'navy'
      ? { background: 'linear-gradient(180deg, #16213E 0%, #0F1830 100%)' }
      : { background: 'linear-gradient(180deg, #A01818 0%, #7A0F10 100%)' }

  return (
    <section id={id} className="relative py-24 overflow-hidden" style={bgStyle}>
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id={`pat-${id}`} x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 10 L110 35 L110 85 L60 110 L10 85 L10 35 Z" fill="none" stroke="#D4A94A" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pat-${id})`} />
        </svg>
      </div>

      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6"
        style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
      >
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: '#D4A94A' }} />
            <span className="text-xs tracking-[0.28em] uppercase" style={{ color: '#D4A94A' }}>
              {label}
            </span>
          </div>
          <div className="flex items-baseline gap-5">
            <span
              className="font-serif leading-none select-none"
              style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', color: 'rgba(212,169,74,0.12)', lineHeight: 1 }}
            >
              {number}
            </span>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#f5f0e8', lineHeight: 1.15 }}>
              {title}
            </h2>
          </div>
          <div className="mt-4 h-px w-full max-w-xs" style={{ background: 'linear-gradient(90deg, #D4A94A, transparent)' }} />
        </div>

        {children}
      </div>
    </section>
  )
}

export function EyeQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote
      className="relative pl-8 py-2 my-8"
      style={{ borderLeft: '3px solid #D4A94A' }}
    >
      <p className="font-serif italic text-xl leading-relaxed" style={{ color: '#E8C777' }}>
        {children}
      </p>
    </blockquote>
  )
}

export function InfoCard({ title, items, bg = 'dark' }: { title?: string; items: string[]; bg?: 'dark' | 'maroon' }) {
  return (
    <div
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: bg === 'dark' ? 'rgba(15,24,48,0.7)' : 'rgba(160,24,24,0.25)',
        border: '1px solid rgba(212,169,74,0.2)',
      }}
    >
      {title && (
        <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#D4A94A' }}>
          {title}
        </p>
      )}
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.8 }}>
            <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#D4A94A' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Accordion({ items }: { items: { title: string; content: string }[] }) {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const openRef = useRef<number | null>(null)
  const stateRefs = useRef<boolean[]>(items.map(() => false))

  function toggle(i: number) {
    const el = refs.current[i]
    if (!el) return
    const isOpen = stateRefs.current[i]
    // Close all
    refs.current.forEach((r, idx) => {
      if (r) {
        r.style.maxHeight = '0px'
        r.style.opacity = '0'
        stateRefs.current[idx] = false
      }
    })
    // Open clicked if was closed
    if (!isOpen) {
      el.style.maxHeight = el.scrollHeight + 'px'
      el.style.opacity = '1'
      stateRefs.current[i] = true
      openRef.current = i
    } else {
      openRef.current = null
    }
  }

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(212,169,74,0.2)', background: 'rgba(15,24,48,0.5)' }}
        >
          <button
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 group transition-colors duration-200 hover:bg-white/5"
            onClick={() => toggle(i)}
          >
            <span className="font-serif text-base" style={{ color: '#f5f0e8' }}>
              {item.title}
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="flex-shrink-0 transition-transform duration-300"
              style={{ color: '#D4A94A' }}
            >
              <path d="M5 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <div
            ref={el => { refs.current[i] = el }}
            style={{ maxHeight: 0, opacity: 0, overflow: 'hidden', transition: 'max-height 0.35s ease, opacity 0.3s ease' }}
          >
            <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)', lineHeight: 1.9, borderTop: '1px solid rgba(212,169,74,0.1)' }}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
