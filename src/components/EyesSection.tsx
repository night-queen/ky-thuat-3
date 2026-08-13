import SectionWrapper, { EyeQuote, InfoCard } from './SectionWrapper'

const eyeMovements = [
  { name: 'Ngó nghiêng xuống', desc: 'mưu tính kế gì rồi, giải nguy.' },
  { name: 'Ngó mơ nhìn', desc: 'Thể hiện sự yêu đương, ái tình.' },
  { name: 'Dao lộn không ngừng', desc: 'Bị tà ma nhập, loạn trí, điên :)))' },
  { name: 'Trợn to: nói lên sự giận dữ.' },
  { name: 'Liếc qua liếc lại', desc: 'Thể hiện sự oai vệ, anh dũng của các kép võ / đào võ.' },
  { name: 'Ngó đăm, liếc đăm', desc: 'Thể hiện sự hiền từ.' },
]

export default function EyesSection() {
  return (
    <SectionWrapper id="mat" bg="navy" label="Kĩ Thuật Biểu Diễn" title="1. Mắt" number="01">
      <div className="space-y-12">
        {/* Intro paragraph */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
              Đối với các diễn viên hát bội, đôi mắt chính là nguyên tác diễn xuất hàng đầu. Những
              suy tư đều được thể hiện qua đôi mắt, hay mỗi cách nhìn, cách ngó đều phản nào đó,
              tính cảm của nhân vật. Mỗi trạng thái thể hiện một loại tâm lí, tình cảm của nhân
              vật. Một số ví dụ tiêu biểu có thể kể đến:
            </p>
            <EyeQuote>
              Đôi mắt chính là nguyên tắc diễn xuất hàng đầu.
            </EyeQuote>
          </div>

          {/* Eye movement showcase */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(160,24,24,0.15)',
              border: '1px solid rgba(212,169,74,0.2)',
            }}
          >
            <div className="px-6 pt-6 pb-2">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#D4A94A' }}>
                Các Loại Điệu Bộ Mắt
              </p>
            </div>
            <div className="divide-y" style={{ borderColor: 'rgba(212,169,74,0.1)' }}>
              {eyeMovements.map((item, i) => (
                <div key={i} className="px-6 py-4 hover:bg-white/5 transition-colors duration-200 group">
                  <div className="flex gap-3 items-start">
                    <span className="font-serif text-sm mt-0.5 flex-shrink-0" style={{ color: '#D4A94A' }}>—</span>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.8 }}>
                      <span className="font-medium" style={{ color: '#f5f0e8' }}>{item.name}:</span>
                      {item.desc ? ` ${item.desc}` : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tướng section */}
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'linear-gradient(135deg, rgba(160,24,24,0.2), rgba(15,24,48,0.8))',
            border: '1px solid rgba(212,169,74,0.2)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#D4A94A' }}>Nhân Vật Tướng</p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
                Trong nhân vật Tướng, điệu bộ này tay được quy phạm hóa rất cao và đòi hỏi linh
                hoạt đa loại, tính cách nhân vật cũng như hoàn cảnh sân khấu. Cùng một kỹ thuật
                diễn đạt nhà khẩu sắc thái sự kiện xung quanh như sự từ sự lặng đầu, sự vui, sự
                hình hung, phấn nộ, cũng có thoáng rất mực tinh vi.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
                Không chỉ mang chức năng thể hiện tâm lý và di chuyển vị trí thân xác trên sân khấu,
                việc sử dụng điệu bộ mắt bội cũng còn là phương tiện biểu diễn tinh lý và vị trí xã
                hội của các nhân vật. Vi vậy, việc sử dụng phép chỉ hướng gắn liền với các chuẩn mực
                lễ nghĩa sân khấu, ứng xử nhân vật và vị trí thể thứ bậc không được xác định mực lễ
                nghĩa sân khấu hát bội, chẳng hạn chuyện hướng vị trí về quan xét đến thị tuyến trực
                tiếp đối với cha mẹ.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, rgba(160,24,24,0.4), rgba(15,24,48,0.8))',
                  border: '2px solid rgba(212,169,74,0.3)',
                  boxShadow: '0 0 60px rgba(160,24,24,0.2)',
                }}
              >
                <EyeIllustration />
              </div>
            </div>
          </div>
        </div>

        {/* Yêu cầu nghề */}
        <InfoCard
          title="Yêu Cầu Nghề"
          items={[
            'Bên cạnh yêu cầu về ý nghĩa biểu đạt, kĩ thuật chỉ trong cuộn tuần thủ nguyên tắc thống nhất giữa ca và ảnh nhìn.',
            'Then đó, khi thực hiện động tác chi về mọi đối tượng mục phương hướng định, ảnh nhìn thường theo hướng thị được chỉ định.',
            'Sự phối hợp động tác bộ giữa tay và ánh mắt không chỉ mang lại góp phần tạo nên tính chính xác về hình thể, đồng thời tăng cường khả năng truyền đạt tải thông điệp đến khán giả.',
          ]}
          bg="dark"
        />
      </div>
    </SectionWrapper>
  )
}

function EyeIllustration() {
  return (
    <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
      <path d="M5 25 Q20 8 40 8 Q60 8 75 25 Q60 42 40 42 Q20 42 5 25 Z" stroke="#D4A94A" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="25" r="10" stroke="#D4A94A" strokeWidth="1.2" fill="none" />
      <circle cx="40" cy="25" r="5" fill="#D4A94A" fillOpacity="0.3" />
      <circle cx="43" cy="22" r="2" fill="#D4A94A" />
    </svg>
  )
}
