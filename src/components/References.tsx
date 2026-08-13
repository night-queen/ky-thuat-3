import { useEffect, useRef } from 'react'

const refs = [
  {
    author: 'Thúy Hường',
    year: '2021',
    title: 'Vũ đạo trong nghệ thuật Tuồng',
  },
  {
    author: 'Huỳnh Ngọc Trang',
    year: 'n.d.',
    title: 'Số tay thưởng thức hát bội',
    publisher: 'Nhà xuất bản Trẻ thành phố Hồ Chí Minh',
  },
  {
    author: 'Lê Văn Chiểu',
    year: 'n.d.',
    title: 'Nghệ thuật sân khấu hát Bội',
    publisher: 'Nhà xuất bản Trẻ',
  },
]

export default function References() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.style.opacity = '1'
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="references"
      className="py-24 relative"
      style={{
        background: 'linear-gradient(180deg, #0F1830 0%, #141225 100%)',
        opacity: 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      {/* Gold top rule */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4A94A 30%, #D4A94A 70%, transparent)' }} />

      <div className="max-w-4xl mx-auto px-6 pt-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16" style={{ background: '#D4A94A' }} />
            <LotusIcon />
            <div className="h-px w-16" style={{ background: '#D4A94A' }} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-3" style={{ color: '#f5f0e8' }}>
            Tài Liệu Tham Khảo
          </h2>
          <p className="text-sm tracking-widest" style={{ color: 'rgba(212,169,74,0.7)' }}>
            References
          </p>
        </div>

        {/* Reference cards */}
        <div className="space-y-4 mb-20">
          {refs.map((r, i) => (
            <div
              key={i}
              className="flex gap-6 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: 'rgba(160,24,24,0.1)',
                border: '1px solid rgba(212,169,74,0.2)',
              }}
            >
              <span
                className="font-serif text-3xl flex-shrink-0 w-10 text-center"
                style={{ color: 'rgba(212,169,74,0.4)', lineHeight: 1 }}
              >
                {i + 1}
              </span>
              <div>
                <p className="font-medium mb-1" style={{ color: '#f5f0e8' }}>
                  {r.title}
                </p>
                <p className="text-sm" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  {r.author}
                  {r.year !== 'n.d.' ? `, ${r.year}` : ''}
                  {r.publisher ? `. ${r.publisher}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer ornament */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-32" style={{ background: 'linear-gradient(90deg, transparent, #D4A94A)' }} />
            <span className="text-2xl" style={{ color: '#D4A94A' }}>✦</span>
            <div className="h-px w-32" style={{ background: 'linear-gradient(90deg, #D4A94A, transparent)' }} />
          </div>
          <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(212,169,74,0.5)' }}>
            Kĩ Thuật Biểu Diễn — Hát Bội
          </p>
        </div>
      </div>
    </section>
  )
}

function LotusIcon() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
      <ellipse cx="14" cy="15" rx="3" ry="6" stroke="#D4A94A" strokeWidth="1.2" fill="none" />
      <ellipse cx="7" cy="14" rx="2.5" ry="5.5" stroke="#D4A94A" strokeWidth="1" fill="none" transform="rotate(-20 7 14)" />
      <ellipse cx="21" cy="14" rx="2.5" ry="5.5" stroke="#D4A94A" strokeWidth="1" fill="none" transform="rotate(20 21 14)" />
      <ellipse cx="2" cy="16" rx="2" ry="4.5" stroke="#D4A94A" strokeWidth="0.8" fill="none" transform="rotate(-40 2 16)" />
      <ellipse cx="26" cy="16" rx="2" ry="4.5" stroke="#D4A94A" strokeWidth="0.8" fill="none" transform="rotate(40 26 16)" />
    </svg>
  )
}
