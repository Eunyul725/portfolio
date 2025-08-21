import CurveBg from "../components/CurveBg";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-[80px] overflow-hidden font-notokr"
    >
      <div className="absolute inset-x-0 z-0 pointer-events-none">
        <CurveBg />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-16 z-8">
        <h2 className="font-nanum font-bold text-center text-xl text-gray-300 text-shadow-sm tracking-wide">
          “무대 위의 표현력과, 기획의 디테일을, 웹에 담고 싶은”
        </h2>

        <div className="flex justify-between items-center gap-10 mt-12">
          <div className="relative basis-[400px] shrink-0 h-[392px]">
            <div className="w-[210px] h-[280px] rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}/images/ballerina.png`}
                alt="발레 현역 사진"
                className="block w-full h-full object-cover object-center" 
              />
            </div>
            <div className="absolute top-[180px] left-[126px] w-[265px] h-[265px] rounded-full overflow-hidden"
            >
              <img 
                src={`${import.meta.env.BASE_URL}/images/jey.jpg`}
                alt="프로필 사진" 
                className="block w-full h-full object-cover object-center"
              />
            </div>
          </div>        

          <div className="flex-1 min-w-0">
            <h3 className="font-dmserif mt-12 text-xl md:text-3xl font-bold text-shadow">
              Why ? <span className="font-nanum text-sm font-normal text-gray-400 text-shadow-sm">- 왜 프론트엔드인가</span>
            </h3>
            <p className="mt-4 ml-4 text-white/80 leading-relaxed text-shadow-sm">
              발레 전공으로 사람의 감정을 움직이는 표현의 힘을 배웠습니다.
              스타트업과 행사 기획 경험을 통해 무대 밖에서도 감동을 줄 수 있는
              서비스에 매료되었고, 그 과정에서 웹 개발과 UI/UX에 깊이 빠져
              프론트엔드로 확장하게 되었습니다.
            </p>

            <h3 className="font-dmserif mt-12 text-xl md:text-3xl font-bold text-shadow">
              What ? <span className="font-nanum text-sm font-normal text-gray-400 text-shadow-sm">- 무엇을 해왔나</span>
            </h3>
            <ul className="mt-4 ml-4 space-y-2 text-white/80 leading-relaxed text-shadow-sm">
              <li className="tracking-tight">
                <span className="font-semibold">[ 스타트업 ]</span> 브랜드 기획·구축,의류 제작 총괄, 자체 디자인 개발·등록, 촬영/배너 기획·편집, 상세페이지 제작
              </li>
              <li className="tracking-tight">
                <span className="font-semibold">[ 대행사 ]</span> 브랜드 행사 기획·운영,
                제작물 디자인·제작, 운영 매뉴얼/시나리오 작성, 기업 홈페이지 제작
              </li>
              <li  className="tracking-tight">
                <span className="font-semibold">[ 웹개발 ]</span> 신규·반응형 웹 리뉴얼,
                키오스크, 포트폴리오 프로젝트 다수
              </li>
            </ul>

            <h3 className="font-dmserif mt-12 text-xl md:text-3xl font-bold text-shadow">
              How ? <span className="font-nanum text-sm font-normal text-gray-400 text-shadow-sm">- 어떻게 일하나</span>
              </h3>
            <p className="mt-4 ml-4 text-white/80 leading-relaxed tracking-tight text-shadow-sm">
              기획 → 디자인 → 개발 전 과정을 경험하며, 사용자 경험 중심의
              협업을 추구합니다. React, Vue, JavaScript를 활용해 제품을 완성하고,
              성능·접근성·반응형을 기본 원칙으로 삼습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
