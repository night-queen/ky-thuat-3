import { useState } from 'react'
import SectionWrapper, { EyeQuote } from './SectionWrapper'

const beardTypes = [
  {
    id: 'chom',
    label: 'Râu Ba Chòm & Râu Năm Chòm',
    subtitle: 'Với râu ba chòm và râu năm chòm:',
    techniques: [
      'Hai tay vuốt chòm bên mép, nửa chừng ngừng: ve suy nghĩ một điều thắc mắc.',
      'Vuốt thẳng tay: Ngụ ý đã suy nghĩ xong xuôi.',
    ],
    example: {
      text: 'Ví dụ, trong tuồng Phục Hoa Dung, khi nghệ Tào Tháo kéo om dài dòng, ông Quan Công lấy lắm phân vân, tay mắt vuốt chòm râu bên mép tai, nhưng vuốt đến nửa chừng thì ngừng, miệng vừa nói lời:',
      poem: 'Vạn ngôn Tào thủa tưởng\nQuan tâm bất tr an\n(Nghe Tào thủa tướng kế,\nLòng ta thấy không yên)',
      continuation: 'Kể đó, Quan Công ra dáng suy nghĩ một chút rồi mở mặt lớn ra, nhìn Tào Tháo đương quỳ dưới đất, tay vua luôn vuốt chòm râu, miệng vừa nói lời:',
      poem2: "Tào công! Nhân tiên ân (tại) đắc xá chi\n(Nay ông hỡi Tào, ta vì nghĩa trước kia cho nên ta lấy\nđặc mà tha cho đó!)",
    },
    subtechniques: [
      'Hai tay bọ trọn hàm râu quảng bộng qua một bên: là ngụ ý giận dữ và thách đố người đối thoại.',
      'Một tay bọ trọn hàm râu lặt úp đưa qua lại trên hàm râu. Như râu quần, vuốt chậm biểu thị sự vui vẻ, đắc ý, lúc giận thì vuốt mau và nhiều lần liên tiếp.',
    ],
  },
  {
    id: 'quan',
    label: 'Râu Quân',
    subtitle: 'Râu quân chỉ có một cách vuốt, là dùng ngón cái và hai ngón kế lắc ngón ra đây ts bên ngay sang bên kia,rồi lặt lại qua bên này.',
    techniques: [
      'Vuốt chậm ngụ ý sự đắc ý, vui vẻ.',
      'vuốt nhanh nhiều lần liên tiếp biểu hiện sự bất bình, giận dữ.',
    ],
  },
  {
    id: 'lien-tu',
    label: 'Râu Liên Tư',
    subtitle: 'Với râu liên tư:',
    techniques: [
      'Hai bàn tay ôm hàm râu vuốt xuống, nửa chừng ngừng: ve suy nghĩ một điều thắc mắc.',
      'Vuốt thẳng tay: Ngụ ý đã suy nghĩ xong xuôi.',
      'Lần hai bàn tay phía trong, phất hàm râu ra: ngụ ý "ta đây ai ai cũng phải kiêng nể".',
      'Lần hai bàn tay phía trong, phất hàm râu ra: tỏ ý đang giận dữ.',
    ],
  },
  {
    id: 'cat',
    label: 'Râu Cắt',
    subtitle: 'Râu cắt chỉ có một cách vuốt, là dùng trọn bàn tay lắt úp đưa qua lại trên hàm râu.',
    techniques: [
      'Như râu quần, vuốt chậm biểu thị sự vui vẻ, đắc ý, lúc giận thì vuốt mau và nhiều lần liên tiếp.',
    ],
    note: 'Râu chuột cũng có một cách vuốt, là dùng ngón cái và ngón trỏ xe mép râu rồi búng lên, bên trái hay bên mặt cũng vậy. Khi vuốt như thế, người nghệ sĩ mang râu này cho khán giả ghét con người tiêu nhân hèn hạ.',
  },
]

export default function BeardSection() {
  const [activeTab, setActiveTab] = useState(0)
  const active = beardTypes[activeTab]

  return (
    <SectionWrapper id="vuot-rau" bg="navy" label="Kĩ Thuật Biểu Diễn" title="5. Vuốt Râu" number="05">
      <div className="space-y-12">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
              Trong sân khấu hát bội, có ba màu râu chủ yếu, gồm màu đen, bạc / trắng và hung
              (đỏ). Những người dùng tuổi thường đeo râu đen, người cao tuổi thường đeo râu tráng
              trắng, hay loại râu thường có bộ tướng phân phúc, hay loại phù thủy. Râu trong sân
              khấu hát bội cũng được chọn lựa theo quy định nghiêm ngặt, không phải muốn vuốt sao
              tùy ý, mà người nghệ sĩ phải biết vuốt theo những quy ước định sẵn:
            </p>
            <EyeQuote>
              Râu trong sân khấu hát bội cũng được chọn lựa theo quy định nghiêm ngặt.
            </EyeQuote>
          </div>

          {/* Beard types overview */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(160,24,24,0.15)',
              border: '1px solid rgba(212,169,74,0.2)',
            }}
          >
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#D4A94A' }}>
              Các Loại Râu
            </p>
            <div className="space-y-3">
              {[
                { name: 'Râu ba chòm, râu năm chòm', color: '#1a1020' },
                { name: 'Râu quân', color: '#1a1020' },
                { name: 'Râu liên tư', color: '#1a1020' },
                { name: 'Râu cắt / râu chuột', color: '#1a1020' },
              ].map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg"
                  style={{ background: 'rgba(15,24,48,0.5)' }}
                >
                  <BeardIcon type={i} />
                  <span className="text-sm" style={{ color: 'rgba(245,240,232,0.88)' }}>{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabbed beard techniques */}
        <div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {beardTypes.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className="px-4 py-2 rounded-full text-xs tracking-wide transition-all duration-200"
                style={{
                  background: activeTab === i ? '#A01818' : 'rgba(15,24,48,0.6)',
                  border: `1px solid ${activeTab === i ? '#D4A94A' : 'rgba(212,169,74,0.2)'}`,
                  color: activeTab === i ? '#f5f0e8' : 'rgba(245,240,232,0.6)',
                  fontWeight: activeTab === i ? 500 : 400,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(15,24,48,0.6)',
              border: '1px solid rgba(212,169,74,0.2)',
              transition: 'all 0.3s ease',
            }}
          >
            <h3 className="font-serif text-xl mb-4" style={{ color: '#f5f0e8' }}>{active.label}</h3>
            <p className="text-sm mb-6 leading-relaxed italic" style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.8 }}>
              {active.subtitle}
            </p>

            <ul className="space-y-3 mb-6">
              {active.techniques.map((t, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.8 }}>
                  <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#D4A94A' }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {active.example && (
              <div
                className="rounded-xl p-6 mt-6"
                style={{ background: 'rgba(160,24,24,0.2)', border: '1px solid rgba(212,169,74,0.15)' }}
              >
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#D4A94A' }}>Ví Dụ</p>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(245,240,232,0.82)', lineHeight: 1.8 }}>
                  {active.example.text}
                </p>
                <pre
                  className="font-serif italic text-base mb-4 whitespace-pre-wrap"
                  style={{ color: '#E8C777', lineHeight: 1.9 }}
                >
                  {active.example.poem}
                </pre>
                {active.example.continuation && (
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(245,240,232,0.82)', lineHeight: 1.8 }}>
                    {active.example.continuation}
                  </p>
                )}
                {active.example.poem2 && (
                  <pre
                    className="font-serif italic text-base whitespace-pre-wrap"
                    style={{ color: '#E8C777', lineHeight: 1.9 }}
                  >
                    {active.example.poem2}
                  </pre>
                )}
              </div>
            )}

            {active.subtechniques && (
              <div className="mt-6 space-y-3">
                {active.subtechniques.map((t, i) => (
                  <div
                    key={i}
                    className="flex gap-3 text-sm p-4 rounded-lg"
                    style={{ background: 'rgba(212,169,74,0.08)', border: '1px solid rgba(212,169,74,0.1)', color: 'rgba(245,240,232,0.88)', lineHeight: 1.8 }}
                  >
                    <span className="mt-0.5 flex-shrink-0 font-serif" style={{ color: '#D4A94A' }}>—</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            )}

            {active.note && (
              <div className="mt-6 p-5 rounded-xl" style={{ background: 'rgba(212,169,74,0.08)', border: '1px solid rgba(212,169,74,0.2)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.8)', lineHeight: 1.9 }}>
                  {active.note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

function BeardIcon({ type }: { type: number }) {
  const icons = [
    // Three tufts
    <svg key={0} width="32" height="24" viewBox="0 0 32 24" fill="none">
      <path d="M8 4 Q8 18 8 20" stroke="#D4A94A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 2 Q16 20 16 22" stroke="#D4A94A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 4 Q24 18 24 20" stroke="#D4A94A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 6 Q8 4 12 6" stroke="#D4A94A" strokeWidth="1" fill="none" />
      <path d="M20 6 Q24 4 28 6" stroke="#D4A94A" strokeWidth="1" fill="none" />
    </svg>,
    // Soldier beard
    <svg key={1} width="32" height="24" viewBox="0 0 32 24" fill="none">
      <path d="M6 3 L6 18 Q6 22 16 22 Q26 22 26 18 L26 3" stroke="#D4A94A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M10 3 L10 20" stroke="#D4A94A" strokeWidth="0.8" />
      <path d="M14 3 L14 21" stroke="#D4A94A" strokeWidth="0.8" />
      <path d="M18 3 L18 21" stroke="#D4A94A" strokeWidth="0.8" />
      <path d="M22 3 L22 20" stroke="#D4A94A" strokeWidth="0.8" />
    </svg>,
    // Linked beard
    <svg key={2} width="32" height="24" viewBox="0 0 32 24" fill="none">
      <ellipse cx="16" cy="14" rx="12" ry="8" stroke="#D4A94A" strokeWidth="1.2" fill="none" />
      <path d="M8 14 Q16 6 24 14" stroke="#D4A94A" strokeWidth="0.8" fill="none" />
    </svg>,
    // Cut beard
    <svg key={3} width="32" height="24" viewBox="0 0 32 24" fill="none">
      <rect x="6" y="4" width="20" height="16" rx="3" stroke="#D4A94A" strokeWidth="1.2" fill="none" />
      <path d="M10 8 L22 8 M10 12 L22 12 M10 16 L22 16" stroke="#D4A94A" strokeWidth="0.8" strokeLinecap="round" />
    </svg>,
  ]
  return icons[type] || icons[0]
}
