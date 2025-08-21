import TiltCard from "../components/TiltCard";

function Projects() {

const projects = [
  {
    id: "whacha",
    title: "WHACHA",
    tagline: "감성 큐레이션 OTT",
    desc: "부드러운 애니메이션과 카드형 UI를 활용해 감성적인 OTT 메인페이지 구현",
    cover: `${import.meta.env.BASE_URL}/images/whacha.png`,
    tech: [ 
      { name: "React", icon: `${import.meta.env.BASE_URL}/icons/react.svg` },
      { name: "SCSS", icon: `${import.meta.env.BASE_URL}icons/scss.svg` },
      { name: "Swiper", icon: `${import.meta.env.BASE_URL}/icons/swiper.svg` },
      { name: "Responsive Web", icon: `${import.meta.env.BASE_URL}/icons/mediaquery.svg` },
    ],
    links: { 
      live: "https://eunyul725.github.io/movie/", 
      repo: "https://github.com/Eunyul725/movie", 
      caseStudy: "#" 
    },
  },
  {
    id: "pet_hospital",
    title: "24시 위드힐동물메디컬센터",
    tagline: "동물병원 반응형 웹사이트",
    desc: "실제 병원 운영에 맞춘 예약•진료 안내•지도 기능을 갖춘 반응형 웹 사이트",
    cover: `${import.meta.env.BASE_URL}/images/pet_hospital.png`,
    tech: [ 
      { name: "React", icon: `${import.meta.env.BASE_URL}/icons/react.svg` },
      { name: "Swiper", icon: `${import.meta.env.BASE_URL}/icons/swiper.svg` },
      { name: "Tailwind CSS", icon: `${import.meta.env.BASE_URL}/icons/tailwindcss.svg` },
      { name: "kakao Map API", icon: `${import.meta.env.BASE_URL}/icons/kakaomap.png` },
      { name: "Responsive Web", icon: `${import.meta.env.BASE_URL}/icons/mediaquery.svg` },
    ],
    links: { 
      live: "https://eunyul725.github.io/pet_Hospital/", 
      repo: "https://github.com/Eunyul725/pet_Hospital", 
      caseStudy: "#" 
    },
  },
  {
    id: "kiosk_hospital",
    title: "의정부 성모병원 층별 안내도",
    tagline: "인터랙티브 병원 층별 안내 키오스크",
    desc: "SVG를 활용한 층별 안내 지도와 부서 클릭시 정보 제공 기능 구현",
    cover: `${import.meta.env.BASE_URL}/images/kiosk_hospital.jpg`,
    tech: [ 
      { name: "React", icon: `${import.meta.env.BASE_URL}/icons/react.svg`},
      { name: "Kiosk", icon: `${import.meta.env.BASE_URL}/icons/kiosk.svg`},
    ],
    links: { 
      live: "https://eunyul725.github.io/kiosk/", 
      repo: "https://github.com/Eunyul725/kiosk", 
      caseStudy: "#" 
    },
  },
  {
    id: "weather",
    title: "오늘의 날씨",
    tagline: "실시간 날씨 정보 제공 모바일형 웹",
    desc: "OpenWeather API를 연동해 도시별 현재 날씨와 시간대별 예보를 제공",
    cover: `${import.meta.env.BASE_URL}/images/weather.png`,
    tech: [ 
      { name: "React", icon: `${import.meta.env.BASE_URL}/icons/react.svg` },
      { name: "OpenWeather API", icon: `${import.meta.env.BASE_URL}/icons/openweathermap.png` },
      { name: "Mobile Web", icon: `${import.meta.env.BASE_URL}/icons/mobile.svg` },
    ],
    links: { 
      live: "https://eunyul725.github.io/weather/", 
      repo: "https://github.com/Eunyul725/weather", 
      caseStudy: "#" 
    },
  },
  {
    id: "pet_blog",
    title: "반려동물 건강일기",
    tagline: "Vue 기반 반려동물 기록 블로그",
    desc: "반려동물의 건강상태, 일상 기록을 블로그 형태로 반려동물 추가 및 사진 업로드 구현 ",
    cover: `${import.meta.env.BASE_URL}/images/pet_blog.png`,
    tech: [ 
      { name: "Vue", icon: `${import.meta.env.BASE_URL}/icons/vue.png` },
      { name: "Mobile Web", icon: `${import.meta.env.BASE_URL}/icons/mobile.svg` },
    ],
    links: { 
      live: "https://eunyul725.github.io/pet_Blog/", 
      repo: "https://github.com/Eunyul725/pet_Blog", 
      caseStudy: "#" 
    },
  },
  {
    id: "music",
    title: "뮤직플레이어",
    tagline: "브라우저 음악 재생 모바일형 웹",
    desc: "JavaScript를 이용해 재생/일시정지, 플레이리스트 기능 구현",
    cover: `${import.meta.env.BASE_URL}/images/music.jpg`,
    tech: [ 
      { name: "HTML", icon: `${import.meta.env.BASE_URL}/icons/html.svg` },
      { name: "CSS", icon: `${import.meta.env.BASE_URL}/icons/css.svg` },
      { name: "JavaScript", icon: `${import.meta.env.BASE_URL}/icons/javascript.svg` },
      { name: "Mobile Web", icon: `${import.meta.env.BASE_URL}/icons/mobile.svg` },
    ],
    links: { 
      live: "https://eunyul725.github.io/music/", 
      repo: "https://github.com/Eunyul725/music", 
      caseStudy: "#" 
    },
  },
  {
    id: "game",
    title: "악어와 악어새",
    tagline: "간단한 반응형 게임",
    desc: "두더지 게임을 기반으로 응용한 게임으로, 사용자가 타이밍을 맞춰 치아를 눌러야하는 HTML/JS 기반 미니 게임",
    cover: `${import.meta.env.BASE_URL}/images/game.png`,
    tech: [ 
      { name: "HTML", icon: `${import.meta.env.BASE_URL}/icons/html.svg` },
      { name: "CSS", icon: `${import.meta.env.BASE_URL}/icons/css.svg` },
      { name: "JavaScript", icon: `${import.meta.env.BASE_URL}/icons/javascript.svg` },
      { name: "Desktop Web", icon: `${import.meta.env.BASE_URL}/icons/desktop.svg` },
    ],
    links: { 
      live: "https://eunyul725.github.io/moleGame/", 
      repo: "https://github.com/Eunyul725/moleGame", 
      caseStudy: "#" 
    },
  },
  {
    id: "canvas",
    title: "그림판",
    tagline: "브라우저 그람판 모바일형 웹",
    desc: "Canvas API를 활용해 그림 그리기, 색상 변경, 지우개, 사진 업로드 저장 등 여러기능 구현",
    cover: `${import.meta.env.BASE_URL}/images/canvas.png`,
    tech: [ 
      { name: "HTML", icon: `${import.meta.env.BASE_URL}/icons/html.svg` },
      { name: "CSS", icon: `${import.meta.env.BASE_URL}/icons/css.svg` },
      { name: "JavaScript", icon: `${import.meta.env.BASE_URL}/icons/javascript.svg` },
      { name: "Desktop Web", icon: `${import.meta.env.BASE_URL}/icons/desktop.svg` },
    ],
    links: { 
      live: "https://eunyul725.github.io/canvas/", 
      repo: "https://github.com/Eunyul725/canvas", 
      caseStudy: "#" 
    },
  },
  {
    id: "jeju",
    title: "제주항공",
    tagline: "모바일 퍼스트 반응형 리뉴얼",
    desc: "jQuery 기반으로 메뉴, 슬라이드, 팝업을 구현하고 모바일 환경에 최적화",
    cover: `${import.meta.env.BASE_URL}/images/jejuair.png`,
    tech: [ 
      { name: "HTML", icon: `${import.meta.env.BASE_URL}/icons/html.svg` },
      { name: "CSS", icon: `${import.meta.env.BASE_URL}/icons/css.svg` },
      { name: "jQuery", icon: `${import.meta.env.BASE_URL}/icons/jquery.png` },
      { name: "Mobile Web", icon: `${import.meta.env.BASE_URL}/icons/mobile.svg` },
    ],
    links: { 
      live: "https://eunyul725.github.io/jejuair/", 
      repo: "https://github.com/Eunyul725/jejuair", 
      caseStudy: "#" 
    },
  },
]

  return (
    <section 
      id="projects" 
      className="min-h-screen pt-[80px] max-w-7xl mx-auto py-12"
    >
      <h2 className="font-dmserif text-center text-2xl md:text-4xl font-bold mb-12 text-shadow">Projects</h2>

      <div className="flex flex-wrap gap-8 justify-center mt-12 font-notokr px-6 md:px-0">
        { projects.map((p)=> (
          <TiltCard
            key={p.id}
            className="bg-neutral-900 shadow-lg flex flex-col md:w-[calc(33.333%-2rem)]"
            maxTilt={16}
            scale={1.04}
          >
            <div className="relative aspect-[16/10] bg-neutral-800">
              <img
                src={p.cover}
                alt={`${p.title} cover`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div>
                <h3 className="text-base md:text-xl font-bold text-shadow">{p.title}</h3>
                {p.tagline && (
                  <p className="text-xs md:text-sm text-gray-300 text-shadow-sm pt-1">{p.tagline}</p>
                )}
              </div>
              <p className="text-xs md:text-sm text-gray-200">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t) => (
                  <span
                    key={t.name}
                    className="px-2 py-1 bg-gray-700 rounded text-xs font-medium flex gap-2"
                  >
                    {t.icon && <img src={t.icon} alt="{t.name}" className="w-4 h-4" />} {t.name}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-px bg-white/10" />
              <div className="flex gap-3 items-center font-bold">
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 w-32 bg-blue-600 rounded text-xs md:text-sm text-center cursor-pointer"
                  >
                    Website
                  </a>
                )}
                {p.links.repo && (
                  <a
                    href={p.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 w-32 bg-red-600 rounded text-xs md:text-sm text-center cursor-pointer"
                  >
                    Repo
                  </a>
                )}
                {p.links.caseStudy && (
                  <a
                    href={p.links.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 w-32 bg-gray-500 rounded text-xs ms:text-sm text-center cursor-pointer"
                  >
                    MoreInfo
                  </a>
                )}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
export default Projects;