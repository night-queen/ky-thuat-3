import SectionWrapper, { EyeQuote } from './SectionWrapper'

export default function HorseSection() {
  return (
    <SectionWrapper id="cuoi-ngua" bg="maroon" label="Kĩ Thuật Biểu Diễn" title="4. Cưỡi Ngựa" number="04">
      <div className="space-y-12">
        {/* Opening */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.92)', lineHeight: 1.9, fontWeight: 300 }}>
              Trong cuốn "Số tay thưởng thức hát bội" của Huỳnh Ngọc Trảng, kĩ thuật (điệu bộ)
              cưỡi ngựa được nhận định "thực là khéo léo". Tuy rằng cưỡi ngựa trong hát bội chỉ
              là tương trưng, người xem lại có cảm nhận rõ ràng người nghệ sĩ trên sân khấu sẽ
              dùng cưỡi ngựa. Chỉ thông qua một cái roi mà người nghệ sĩ Tuồng có thể làm cho
              người xem này đang cưỡi ngựa.
            </p>

            <EyeQuote>
              "Thực là khéo léo."
            </EyeQuote>
          </div>

          {/* Horse illustration */}
          <div className="flex items-center justify-center">
            <div
              className="rounded-2xl p-10"
              style={{
                background: 'rgba(15,24,48,0.4)',
                border: '1px solid rgba(212,169,74,0.2)',
              }}
            >
              <HorseIllustration />
            </div>
          </div>
        </div>

        {/* Technique description */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: 'rgba(15,24,48,0.5)',
            border: '1px solid rgba(212,169,74,0.2)',
          }}
        >
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#D4A94A' }}>
            Kĩ Thuật Thực Hiện
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
              Nếu muốn lên ngựa, nghệ sĩ đứng thẳng tay trái lên cao (bước lên chân đằng), tay
              trái nắm lấy cương ngựa (ngự ý năm dây cương), tay mặt giữ roi ngựa lên cao (ngự ý
              cầm roi ngựa), sau đó hai chân bước đậm thêm bốn đến lớn cao, bước lên lên.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.88)', lineHeight: 1.9, fontWeight: 300 }}>
              Khi xuống ngựa, nghệ sĩ bước qua một bên rồi ra bộ tháo dây cương cột vào gốc cây,
              quăng cái ngựa xuống đất.
            </p>
          </div>
        </div>

        {/* Additional context */}
        <p className="text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.82)', lineHeight: 1.9, fontWeight: 300 }}>
          Bên cạnh yêu cầu về ý nghĩa biểu đạt, kĩ thuật chỉ trong cuộn tuần thủ nguyên tắc
          thống nhất giữa ca và ánh nhìn. Điệu bộ này cuốn sân khấu Tuồng có có sự khác nhau
          giữa nhân vật, tùy theo tính cách, cảm xúc, hoàn cảnh của các nhân vật. Cùng một kỹ
          thuật diễn đạt, nhưng rối qua nhiều chuẩn mực lễ nghĩa, ứng xử nhân vật và vị trí thứ
          bậc không được xác định mực lễ nghĩa trực tiếp đối với cha mẹ.
        </p>
      </div>
    </SectionWrapper>
  )
}

function HorseIllustration() {
  return (
    <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
      {/* Rider */}
      <circle cx="70" cy="18" r="8" stroke="#D4A94A" strokeWidth="1.5" fill="none" />
      <path d="M70 26 L70 52 M60 38 L80 38 M70 52 L55 70 M70 52 L85 70" stroke="#D4A94A" strokeWidth="1.5" strokeLinecap="round" />
      {/* Whip */}
      <path d="M80 38 Q100 30 120 20" stroke="#E8C777" strokeWidth="1" strokeLinecap="round" />
      <circle cx="120" cy="20" r="2" fill="#E8C777" />
      {/* Horse body suggestion */}
      <ellipse cx="70" cy="75" rx="35" ry="12" stroke="#D4A94A" strokeWidth="1" fill="none" strokeDasharray="3 2" />
      <path d="M35 70 L25 90 M105 70 L115 90" stroke="#D4A94A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M45 68 L40 85" stroke="#D4A94A" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M95 68 L100 85" stroke="#D4A94A" strokeWidth="1.2" strokeLinecap="round" />
      {/* Horse head */}
      <path d="M35 67 Q20 55 18 45 Q16 35 25 33 L35 67" stroke="#D4A94A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Reins */}
      <path d="M60 34 Q40 45 25 40" stroke="#E8C777" strokeWidth="0.8" strokeDasharray="2 1" />
    </svg>
  )
}
