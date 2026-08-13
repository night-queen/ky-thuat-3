import SectionWrapper, { Accordion, InfoCard } from './SectionWrapper'

const handTypes = [
  {
    title: 'Chỉ bằng hai ngón úp, thẳng trước ngực',
    content: 'Chi người / vật ở gần, của kép võ hay đào võ.',
  },
  {
    title: 'Chỉ bằng hai ngón tay nghiêng, thẳng xéo hướng',
    content: 'Chi người / vật ở xa, của kép võ hay đào võ.',
  },
  {
    title: 'Chỉ một ngón úp, thẳng trước ngực',
    content: 'Chỉ người hay hiện vật, của kép văn hay đào văn.',
  },
  {
    title: 'Chỉ bằng hai ngón úp thẳng xéo hướng',
    content: 'Là cái chỉ cảnh buổi hay vui, hay trống tin, của kép văn hay đào văn.',
  },
  {
    title: 'Chỉ bằng hai ngón, quay tròn lên, cả hai tay',
    content: 'Là chỉ đuổi hay chặn không cho người ta chạy theo.',
  },
  {
    title: 'Chỉ một ngón, điểm trước mặt người',
    content: 'Là chỉ để đẩy đổ người đó ay.',
  },
  {
    title: 'Chỉ một ngón, điểm bên cạnh tai',
    content: 'Là đường lặng tà người nào.',
  },
  {
    title: 'Chỉ một ngón, đặt lên gò má',
    content: 'Là nói đến nhân sắc của mình.',
  },
  {
    title: 'Chỉ một ngón đặt giữa miệng và cằm',
    content: 'Là ra lệnh mắc cở, hổ then.',
  },
  {
    title: 'Chỉ một ngón rồi lấy chỉ vào miệng',
    content: 'Là tỏ ý chưng gheo người đối với mình (ví dụ Lưu Kim Đính chỉ gheo Cao Quán Bảo, Phàn Lê Huê gheo Tiết Đình Sơn v.v …)',
  },
  {
    title: 'Chỉ một ngón, liêu liêu trước mặt người',
    content: 'Là ngao ngữ người, chỉ người.',
  },
]

export default function HandsSection() {
  return (
    <SectionWrapper id="tay" bg="maroon" label="Kĩ Thuật Biểu Diễn" title="2. Tay" number="02">
      <div className="space-y-12">
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,232,0.92)', lineHeight: 1.9, fontWeight: 300 }}>
              Trong sân khấu hát bội, mỗi thế tay đều có ý nghĩa của riêng nó. Đôi khi chỉ
              một ngón, khi thì 2 ngón, ngón tay chỉ có lúc nghiêng, có lúc úp. Mỗi thế chỉ
              đều có lí do và ý nghĩa riêng biệt.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.92)', lineHeight: 1.9, fontWeight: 300 }}>
              Một số ví dụ tiêu biểu như sau:
            </p>

            {/* Hand illustration */}
            <div className="mt-8 flex justify-center">
              <div
                className="rounded-2xl p-8 flex items-center justify-center"
                style={{
                  background: 'rgba(15,24,48,0.4)',
                  border: '1px solid rgba(212,169,74,0.2)',
                  width: 'fit-content',
                }}
              >
                <HandIllustration />
              </div>
            </div>
          </div>

          {/* Accordion of hand techniques */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#E8C777' }}>
              Các Kĩ Thuật Chỉ Tay
            </p>
            <Accordion items={handTypes.slice(0, 6)} />
          </div>
        </div>

        {/* Second set of accordion */}
        <div>
          <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#E8C777' }}>
            Tiếp Theo
          </p>
          <Accordion items={handTypes.slice(6)} />
        </div>

        {/* Tướng description */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: 'rgba(15,24,48,0.5)',
            border: '1px solid rgba(212,169,74,0.2)',
          }}
        >
          <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#D4A94A' }}>
            Bối Cảnh Hoạt Động Trong Nhân Vật Tướng
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
              Bên cạnh các động tác chi, tay trong sân khấu hát bội thì chức năng quan trọng
              nhất trong đó là Khi. Trong đó, thông qua nhất vẫn là bộ Khi: mưu nghĩ, thính,
              kỹ và cấu. Mỗi động tác có đặc điểm kĩ thuật riêng về cách đặt bàn chân, chuyển
              trọng tâm có thể và hướng vận động, từ đó tạo nên những sắc thái biểu cảm khác nhau:
            </p>
            <InfoCard
              items={[
                'Niêm: Đặt chân hơi nghiêng, gót chân hơi lòng đất.',
                'Thính: Chân cong hơi đưa cao ngang gối.',
                'Ký: Đặt gót chân vuông ngặt, ngón chân hơi đưa lên.',
                'Cấu: chân hơi cong đưa lên cao.',
              ]}
            />
          </div>
        </div>

        {/* Final paragraph */}
        <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.82)', lineHeight: 1.9, fontWeight: 300 }}>
          Điệu bộ cuốn sân khấu Tuồng có có sự khác nhau giữa nhân vật, tùy theo tính
          cách, cảm xúc, hoàn cảnh của các nhân vật:
        </p>
        <InfoCard
          items={[
            'Kép văn: đi đứng chỉ định nhẹ, nhẹ nhàng, chậm rãi.',
            'Kép võ: đi đứng chỉ định khi. Tinh cấu cao, mùa vẻ mạnh dạn. Thường đội kim khôi.',
            'Đào võ: đi đứng chỉ định khít. Múa oai vẻ nhưng kim đào, chân không giơ cao, bước lên.',
          ]}
          bg="maroon"
        />
      </div>
    </SectionWrapper>
  )
}

function HandIllustration() {
  return (
    <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
      <path d="M30 90 L30 40 Q30 30 38 30 Q46 30 46 40 L46 60" stroke="#D4A94A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M46 60 L46 32 Q46 22 54 22 Q62 22 62 32 L62 60" stroke="#D4A94A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M62 60 L62 36 Q62 26 70 26 Q78 26 78 36 L78 60" stroke="#D4A94A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M78 60 L78 44 Q78 36 84 36 Q90 36 90 44 L90 70" stroke="#D4A94A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M30 90 Q28 105 50 110 Q72 115 90 100 L90 70 Q70 80 46 78 L46 60" stroke="#D4A94A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 60 Q10 55 10 70 Q10 80 20 82 L30 85" stroke="#D4A94A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="30" r="2" fill="#D4A94A" fillOpacity="0.5" />
    </svg>
  )
}
