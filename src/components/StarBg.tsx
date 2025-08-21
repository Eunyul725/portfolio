import { useMemo } from "react";

const METEOR_DURATION = 1.6; // s  ← 느리게 하고 싶으면 2.2 같은 값으로만 바꿔
const METEOR_COUNT = 3;

function StarBg() {
  // ★ 별: 위치/깜빡임만 1회 생성
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() < 0.18 ? 3 : 2,
        dur: 1 + Math.random() * 2, // 1~3s
      })),
    []
  );

  // ★ 별똥별: 슬롯 개수만 고정. 각 엘리먼트는 자기 사이클마다 시작점만 랜덤으로 갱신
  const meteorSlots = Array.from({ length: METEOR_COUNT }, (_, i) => i);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* 별 */}
      {stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: 0.9,
            animation: `twinkle ${s.dur}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* 별똥별 */}
      {meteorSlots.map((id) => (
        <div
          key={`meteor-${id}`}
          ref={(el) => {
            if (!el) return;

            // 시작점을 안전하게 랜덤 배치 (양끝 여유)
            const place = () => {
              const top = Math.random() * 80;       // 0~80%
              const left = 15 + Math.random() * 70; // 15~85%
              // 딜레이 랜덤은 시각적으로 "갑툭튀"처럼 보이기도 해서 기본 0으로 둠
              el.style.top = `${top}%`;
              el.style.left = `${left}%`;
              el.style.animationDelay = `0s`;
              // duration 고정 (속도 고정)
              el.style.animationDuration = `${METEOR_DURATION}s`;
            };

            // 초기 1회
            place();

            // 매 사이클마다 새 위치 배치
            el.onanimationiteration = () => {
              // 프레임 경계에서 갱신(플리커 방지)
              requestAnimationFrame(place);
            };
          }}
          className="absolute will-change-transform"
          // shorthand 금지: 분해해서 설정해야 위에서 넣은 duration/ delay가 유지됨
          style={{
            animationName: "meteorFall",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {/* 방향 고정(↙). rotate는 시각적 방향만 맞추는 용도 */}
          <div className="relative" style={{ transform: "rotate(140deg)" }}>
            {/* 꼬리(고정 길이: 안정적인 시각) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 rounded-full"
              style={{
                right: 0,
                width: "70px",
                height: "2px",
                background:
                  "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.95))",
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
              }}
            />
            {/* 머리 */}
            <div
              className="rounded-full bg-white"
              style={{ width: 4, height: 4, boxShadow: "0 0 6px rgba(255,255,255,0.9)" }}
            />
          </div>
        </div>
      ))}

      {/* 비네트(은은) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55))]" />
    </div>
  );
}
export default StarBg;