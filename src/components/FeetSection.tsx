import SectionWrapper, { InfoCard } from './SectionWrapper'

const feetTechniques = [
  {
    name: 'Niêm',
    desc: 'Đặt chân hơi nghiêng, gót chân hơi lòng đất.',
  },
  {
    name: 'Thính',
    desc: 'Chân cong hơi đưa cao ngang gối.',
  },
  {
    name: 'Ký',
    desc: 'Đặt gót chân vuông ngặt, ngón chân hơi đưa lên.',
  },
  {
    name: 'Cấu',
    desc: 'chân hơi cong đưa lên cao.',
  },
]

export default function FeetSection() {
  return (
    <SectionWrapper id="chan" bg="navy" label="Kĩ Thuật Biểu Diễn" title="3. Chân" number="03">
      <div className="space-y-12">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-6">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
              Bên cạnh hệ thống đặc tay bộ, chân cũng là một thành tố quan trọng trong kĩ thuật
              biểu diễn của nghề Tuồng. Động tác chân không chỉ đảm nhiệm chức năng thể hiện trạng
              thái tâm lý, tính cách nhân vật và tính chất của các hành động sân khấu.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
              Trải qua quá trình quy phạm hóa, nghệ thuật Tuồng đã xây dựng hệ thống bộ pháp với
              bốn động tác cơ bản gồm niêm, thính, ký và cấu.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
              Mỗi động tác có đặc điểm kĩ thuật riêng về cách đặt bàn chân, chuyển trọng tâm cơ
              thể và hướng vận động, từ đó tạo nên những sắc thái biểu cảm khác nhau.
            </p>
          </div>

          {/* Feet techniques grid */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {feetTechniques.map((t, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col gap-2 transition-transform duration-200 hover:-translate-y-1"
                  style={{
                    background: 'rgba(160,24,24,0.2)',
                    border: '1px solid rgba(212,169,74,0.2)',
                  }}
                >
                  <span className="font-serif text-2xl" style={{ color: '#D4A94A' }}>{t.name}</span>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.75)', lineHeight: 1.7 }}>
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Character comparison */}
        <div>
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#D4A94A' }}>
            Sự Khác Biệt Giữa Các Loại Nhân Vật
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                role: 'Kép Văn',
                icon: '文',
                desc: 'đi đứng chỉ định nhẹ, nhẹ nhàng, chậm rãi.',
                color: '#16213E',
              },
              {
                role: 'Kép Võ',
                icon: '武',
                desc: 'đi đứng chỉ định khi. Tinh cấu cao, mùa vẻ mạnh dạn. Thường đội kim khôi.',
                color: '#A01818',
              },
              {
                role: 'Đào Võ',
                icon: '女',
                desc: 'đi đứng chỉ định khít. Múa oai vẻ nhưng kim đào, chân không giơ cao, bước lên.',
                color: '#7A0F10',
              },
            ].map(c => (
              <div
                key={c.role}
                className="rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${c.color}aa, rgba(15,24,48,0.8))`,
                  border: '1px solid rgba(212,169,74,0.2)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                }}
              >
                <div
                  className="font-serif text-4xl text-center py-4 rounded-xl"
                  style={{ color: '#D4A94A', background: 'rgba(0,0,0,0.2)' }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="font-serif text-lg mb-2" style={{ color: '#f5f0e8' }}>{c.role}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.78)', lineHeight: 1.8 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <InfoCard
          title="Lưu Ý Kĩ Thuật"
          items={[
            'Điệu bộ cuốn sân khấu Tuồng có có sự khác nhau giữa nhân vật, tùy theo tính cách, cảm xúc, hoàn cảnh của các nhân vật.',
            'Kép văn: đi đứng chỉ định nhẹ, nhẹ nhàng, chậm rãi.',
            'Kép võ: đi đứng chỉ định khi. Tinh cấu cao, mùa vẻ mạnh dạn. Thường đội kim khôi.',
            'Đào võ: đi đứng chỉ định khít. Múa oai vẻ nhưng kim đào, chân không giơ cao, bước lên.',
          ]}
        />
      </div>
    </SectionWrapper>
  )
}
