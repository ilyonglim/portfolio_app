'use client';

interface AboutProps {
  className?: string;
}

export default function About({ className = '' }: AboutProps) {
  const downloadCV = () => {
    // 실제 CV 파일이 있다면 여기에 다운로드 로직 구현
    alert('CV 다운로드 기능은 준비 중입니다.');
  };

  return (
    <section
      id="about"
      className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 프로필 이미지 */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full flex items-center justify-center">
                    <span className="text-4xl sm:text-6xl font-bold text-white">👨‍💻</span>
                  </div>
                </div>
              </div>
              {/* 장식 요소 */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* 자기소개 */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                창의적인 웹 기획자
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                5년 이상의 웹 기획 경험을 바탕으로 사용자 중심의 웹 경험을 설계하고, 
                혁신적인 디지털 솔루션을 제공합니다. 데이터 기반의 의사결정과 
                창의적인 아이디어로 브랜드의 가치를 극대화하는 것이 저의 전문 분야입니다.
              </p>
            </div>

            {/* 핵심 경력 및 전문 분야 */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                핵심 경력 & 전문 분야
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: '웹 기획', desc: '5년+ 경험' },
                  { title: 'UX/UI 설계', desc: '사용자 중심 설계' },
                  { title: '프로젝트 관리', desc: '애자일 방법론' },
                  { title: '데이터 분석', desc: 'GA, 사용자 행동 분석' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                  >
                    <h5 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h5>
                    <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CV 다운로드 버튼 */}
            <div className="pt-3 sm:pt-4">
              <button
                onClick={downloadCV}
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                CV 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
