import { useEffect, useRef } from "react";

type Props = {
  starCount? : number;
  meteorCount? : number;
  meteorDuration? : number;
  meteorDelayMax? : number;
}
type Star = {
  top : number;  //%
  left : number;  //%
  size : number;  //px
  dur : number;  //s
}

function StarBg({
  starCount = 80,
  meteorCount = 3, 
  meteorDuration = 2.5,
  meteorDelayMax = 2,
} : Props ) {
  //별
  const starRef = useRef<Star[]> (
    Array.from({ length: starCount }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() < 0.18 ? 3:2,
      dur : 1 + Math.random() * 2
    }))
  )

  const meteorRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(()=> {
    const place = (el: HTMLDivElement) => {
      const top = Math.random() *100;
      const left = Math.random() *100;
      el.style.top = `${top}%`;
      el.style.left = `${left}%`;
      
      const duration = meteorDuration; // 비율만큼 시간 보정
      el.style.animationDelay = `${Math.random() * meteorDelayMax}s`;
      el.style.animationDuration = `${duration}s`;
    }

    const onIter = ( e: AnimationEvent ) => {
      const el = e.currentTarget as HTMLDivElement;
      //다음 사이클 시작 직전에 새 위치/시차로 갱신(플리커 방지)
      requestAnimationFrame(() => place(el));
    };

    meteorRef.current.forEach((el) => {
      if (!el) return;
      place(el);
      el.addEventListener("animationiteration", onIter);
    });

    return () => {
      meteorRef.current.forEach((el) => {
        if (!el) return;
        el.removeEventListener("animationiteration", onIter);
      });
    }
  }, [meteorDuration, meteorDelayMax]);


  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* 별 */}
      {starRef.current.map((s, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: 0.9,
            animation: `twinkle ${s.dur}s ease-in-out infinite`,
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.7))",
          }}
        />
      ))}

      {/* 별똥별 */}
      {Array.from({length: meteorCount}).map((_, i) => (
        <div
          key={`meteor-${i}`}
          ref={(el) => (meteorRef.current[i] = el)}
          className="absolute meteor will-change-transform"
        >
          {/* 방향 고정(↙). rotate는 시각적 방향만 맞추는 용도 */}
          <div className="relative" style={{ transform: "rotate(154deg)" }}>
            {/* 꼬리 */}
            <div
              className="absolute top-1/2 -translate-y-1/2 rounded-full"
              style={{
                right: 0,
                width: "100px",
                height: "2px",
                background:
                  "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.95))",
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
              }}
            />
            {/* 머리 */}
            <div
              className="rounded-full bg-white"
              style={{ 
                width: "4px", 
                height: "4px", 
                boxShadow: "0 0 6px rgba(255,255,255,0.9)" 
              }}
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