import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Introduction() {
  const ref = useReveal()

  return (
    <section id="introduction" className="relative py-28" style={{ background: '#A01818' }}>
      {/* Top wave ornament */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-12">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 48 L0 24 Q180 0 360 24 Q540 48 720 24 Q900 0 1080 24 Q1260 48 1440 24 L1440 48 Z" fill="#0F1830" />
        </svg>
      </div>

      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6"
        style={{ opacity: 0, transform: 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'rgba(232,199,119,0.8)' }}>
            A. Kĩ Thuật Biểu Diễn
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6" style={{ color: '#f5f0e8' }}>
            I. Tổng Quan
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24" style={{ background: '#D4A94A' }} />
            <LotusSmall />
            <div className="h-px w-24" style={{ background: '#D4A94A' }} />
          </div>
        </div>

        {/* Main intro text in editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.95)', lineHeight: 1.9, fontWeight: 300 }}>
              Không khó để nhận thấy rằng, sân khấu hát bội, bên cạnh giọng hát, lời thoại, còn
              chứa đựng các yếu tố phi ngôn ngữ. Nhờ đó khán giả chỉ cần quan sát những điều bộ
              đặc trưng thì có thể ngầm ra ý nghĩa của hành động, cảm xúc cũng như tính cách nhân
              vật.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.82)', lineHeight: 1.9, fontWeight: 300 }}>
              Trong tạp chí "Số tay thưởng thức hát bội", Nhà nghiên cứu hát Huỳnh Ngọc Trảng đã
              phân chia các kĩ thuật biểu diễn (điệu bộ) thành các khía cạnh chính, gồm:{' '}
              <span className="font-serif italic" style={{ color: '#E8C777' }}>mắt, tay, chân, vuốt râu và cưỡi ngựa.</span>
            </p>
          </div>

          <div className="md:col-span-5">
            {/* Overview card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(10,8,24,0.35)',
                border: '1px solid rgba(212,169,74,0.25)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#D4A94A' }}>
                II. Nội Dung
              </p>
              <p className="text-sm mb-6" style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.8 }}>
                Các khía cạnh chính của kĩ thuật biểu diễn (điệu bộ):
              </p>
              <div className="space-y-3">
                {[
                  { num: '1', label: 'Mắt', sub: 'Biểu cảm qua ánh mắt' },
                  { num: '2', label: 'Tay', sub: 'Ngôn ngữ của đôi tay' },
                  { num: '3', label: 'Chân', sub: 'Kĩ thuật di chuyển' },
                  { num: '4', label: 'Cưỡi Ngựa', sub: 'Phương thức cưỡi ngựa' },
                  { num: '5', label: 'Vuốt Râu', sub: 'Nghệ thuật vuốt râu' },
                ].map(item => (
                  <a
                    key={item.num}
                    href={`#${item.label === 'Mắt' ? 'mat' : item.label === 'Tay' ? 'tay' : item.label === 'Chân' ? 'chan' : item.label === 'Cưỡi Ngựa' ? 'cuoi-ngua' : 'vuot-rau'}`}
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 group"
                    style={{ background: 'rgba(160,24,24,0.2)' }}
                  >
                    <span
                      className="font-serif text-2xl w-8 text-center flex-shrink-0"
                      style={{ color: '#D4A94A' }}
                    >
                      {item.num}
                    </span>
                    <div>
                      <div className="font-serif text-base" style={{ color: '#f5f0e8' }}>{item.label}</div>
                      <div className="text-xs" style={{ color: 'rgba(245,240,232,0.5)' }}>{item.sub}</div>
                    </div>
                    <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8M9 5l3 3-3 3" stroke="#D4A94A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-12">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 0 L0 24 Q180 48 360 24 Q540 0 720 24 Q900 48 1080 24 Q1260 0 1440 24 L1440 0 Z" fill="#16213E" />
        </svg>
      </div>
    </section>
  )
}

function LotusSmall() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
      <ellipse cx="12" cy="14" rx="2.5" ry="5" stroke="#D4A94A" strokeWidth="1" fill="none" />
      <ellipse cx="6" cy="13" rx="2" ry="4.5" stroke="#D4A94A" strokeWidth="0.8" fill="none" transform="rotate(-20 6 13)" />
      <ellipse cx="18" cy="13" rx="2" ry="4.5" stroke="#D4A94A" strokeWidth="0.8" fill="none" transform="rotate(20 18 13)" />
    </svg>
  )
}
