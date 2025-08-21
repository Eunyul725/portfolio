import { useEffect, useState } from "react";

const IDS = ["home", "about", "projects", "skills", "contact"] as const;

function Navbar() {
  const [active, setActive] = useState<(typeof IDS)[number]>("home");

  useEffect(() => {
    const sections = IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const visibleMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          // intersectionRatio를 누적이 아니라 "현재 비율"로 기록
          visibleMap.set(id, entry.intersectionRatio);
        });

        // 가장 비율 높은 섹션을 active로
        let maxId = active;
        let maxRatio = -1;
        for (const [id, ratio] of visibleMap) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id as (typeof IDS)[number];
          }
        }
        if (maxId !== active) setActive(maxId);
      },
      {
        // 헤더가 가리는 영역 보정: 위/아래 여백을 살짝 줄여서 더 관대하게
        // 예: 위 20%/아래 40% 잘라내고 중앙에 들어오면 감지
        root: null,
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0, 0.25, 0.5], // 0.5만 쓰지 말고 단계적으로
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [active]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed right-0 top-6 z-50 text-white mr-4 md:mr-12">
      <ul className="flex gap-4 md:gap-8 text-base md:text-xl font-dmserif font-bold">
        {IDS.map((link) => (
          <li key={link}>
            <button
              onClick={() => go(link)}
              className={`transition ${
                active === link
                  ? "text-white underline underline-offset-4 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                  : "hover:text-gray-300"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;