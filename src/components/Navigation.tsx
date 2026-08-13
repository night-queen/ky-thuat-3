import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Tổng Quan', href: '#introduction' },
  { label: 'Mắt', href: '#mat' },
  { label: 'Tay', href: '#tay' },
  { label: 'Chân', href: '#chan' },
  { label: 'Cưỡi Ngựa', href: '#cuoi-ngua' },
  { label: 'Vuốt Râu', href: '#vuot-rau' },
  { label: 'Tài Liệu', href: '#references' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(20,18,37,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,169,74,0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LotusIcon />
          <span className="font-serif text-sm tracking-widest uppercase" style={{ color: '#D4A94A', letterSpacing: '0.18em' }}>
            Hát Bội
          </span>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-widest uppercase transition-colors duration-200 hover:text-amber-400"
              style={{ color: 'rgba(245,240,232,0.7)', letterSpacing: '0.12em', fontWeight: 500 }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(v => !v)}
          style={{ color: '#D4A94A' }}
          aria-label="Menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(20,18,37,0.98)' }}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase"
              style={{ color: 'rgba(245,240,232,0.8)' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function LotusIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="18" rx="3" ry="6" stroke="#D4A94A" strokeWidth="1.2" fill="none" />
      <ellipse cx="8" cy="17" rx="2.5" ry="5.5" stroke="#D4A94A" strokeWidth="1" fill="none" transform="rotate(-20 8 17)" />
      <ellipse cx="20" cy="17" rx="2.5" ry="5.5" stroke="#D4A94A" strokeWidth="1" fill="none" transform="rotate(20 20 17)" />
      <ellipse cx="4" cy="18" rx="2" ry="4.5" stroke="#D4A94A" strokeWidth="0.8" fill="none" transform="rotate(-40 4 18)" />
      <ellipse cx="24" cy="18" rx="2" ry="4.5" stroke="#D4A94A" strokeWidth="0.8" fill="none" transform="rotate(40 24 18)" />
      <line x1="14" y1="22" x2="14" y2="26" stroke="#D4A94A" strokeWidth="1.2" />
      <line x1="10" y1="25" x2="18" y2="25" stroke="#D4A94A" strokeWidth="1" />
    </svg>
  )
}
