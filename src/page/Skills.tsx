function Skills() {
  const skills = {
    frontendBasics: [
      { name: "HTML", icon: `${import.meta.env.BASE_URL}/icons/html.svg` },
      { name: "CSS", icon: `${import.meta.env.BASE_URL}/icons/css.svg` },
      { name: "JavaScript", icon: `${import.meta.env.BASE_URL}/icons/javascript.svg` },
      { name: "TypeScript", icon: `${import.meta.env.BASE_URL}/icons/typescript.svg` },
    ],
    frameworks: [
      { name: "React", icon: `${import.meta.env.BASE_URL}/icons/react.svg` },
      { name: "React Router", icon: `${import.meta.env.BASE_URL}/icons/react-router.svg` },
      { name: "Redux", icon: `${import.meta.env.BASE_URL}/icons/redux.svg` },
      { name: "Vue", icon: `${import.meta.env.BASE_URL}/icons/vue.svg` },
      { name: "jQuery", icon: `${import.meta.env.BASE_URL}/icons/jquery.svg` },
    ],
    styling: [
      { name: "SCSS", icon: `${import.meta.env.BASE_URL}/icons/scss.svg` },
      { name: "Tailwind", icon: `${import.meta.env.BASE_URL}/icons/tailwindcss.svg` },
      { name: "Swiper", icon: `${import.meta.env.BASE_URL}/icons/swiper.svg` },
    ],
    tools: [
      { name: "vite", icon: `${import.meta.env.BASE_URL}/icons/vite.svg` },
    ],
    design: [
      { name: "miri canvas", icon: `${import.meta.env.BASE_URL}/icons/miricanvas.svg` },
      { name: "Canva", icon: `${import.meta.env.BASE_URL}/icons/canva.svg` },
      { name: "Figma", icon: `${import.meta.env.BASE_URL}/icons/figma.svg` },
      { name: "Adobe Illustrator", icon: `${import.meta.env.BASE_URL}/icons/illustrator.svg` },
      { name: "Adobe Photoshop", icon: `${import.meta.env.BASE_URL}/icons/photoshop.svg` },
      { name: "Adobe Premiere Pro", icon: `${import.meta.env.BASE_URL}/icons/premierepro.svg` },
      { name: "Adobe After Effects", icon: `${import.meta.env.BASE_URL}/icons/aftereffects.svg` },
    ],
    collaboration: [
      { name: "Microsoft PowerPoint", icon: `${import.meta.env.BASE_URL}/icons/powerpoint.svg` },
      { name: "Notion", icon: `${import.meta.env.BASE_URL}/icons/notion.svg` },
      { name: "Discord", icon: `${import.meta.env.BASE_URL}/icons/discord.svg` },
    ],
  } as const;

  const SKILL_LABELS = {
    frontendBasics: "Frontend 기본기 ⚙️",
    frameworks: "프레임워크 & 라이브러리 ⚛️",
    styling: "스타일링 & UI 🎨",
    tools: "개발 환경 & 빌드 🛠",
    design: "디자인 툴 ✏️",
    collaboration: "협업 & 기타 🤝",
  };

  return (
    <section id="skills" className="min-h-screen pt-[80px] max-w-7xl mx-auto px-6">
      <h2 className="font-dmserif text-center text-2xl md:text-4xl font-bold mb-12 text-shadow">Skills</h2>

      <div className="space-y-16">
        {Object.entries(skills).map(([key, items]) => (
          <div key={key}>
            {/* 카테고리 타이틀 */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-1.5 h-6 bg-sky-400 rounded" />
              <h3 className="text-sm md:text-base font-semibold text-shadow">
                {SKILL_LABELS[key as keyof typeof SKILL_LABELS]}
              </h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* 아이콘 리스트 */}
            <div className="flex flex-wrap gap-16 ml-6">
              {items.map((s) => (
                <div key={s.name} className="flex flex-col items-center gap-2 w-20 md:w-18">
                  <img
                    src={s.icon}
                    alt={`${s.name} icon`}
                    className="w-14 h-14 object-contain drop-shadow"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <span className="font-notokr text-base font-medium text-shadow">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;