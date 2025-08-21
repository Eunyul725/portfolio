import React, { useRef, useState } from "react";

type Props = React.PropsWithChildren<{
  maxTilt?: number;   // 최대 기울기(deg)
  scale?: number;     // 호버 시 스케일
  className?: string; // 카드 자체 클래스 (폭/배경/둥근모서리 등)
}>;

export default function TiltCard({
  children,
  maxTilt = 16,
  scale = 1.04,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px)",
  });

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;

    const el = ref.current!;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0~1
    const py = (e.clientY - rect.top) / rect.height;  // 0~1
    const rx = (py - 0.5) * (maxTilt * 2);
    const ry = (px - 0.5) * -(maxTilt * 2);

    setStyle({
      transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`,
    });
  }

  function onLeave() {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      // ★ transform을 먹는 애가 곧 "카드 본체"여야 함
      className={`relative transform-gpu will-change-transform transition-transform duration-200 ease-out rounded-2xl overflow-hidden ${className}`}
      style={style}
    >
      {/* 은은한 하이라이트 (카드 내부, 경계 안 넘침) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-150 hover:opacity-15"
        style={{
          background:
            "radial-gradient(200px 160px at 60% 0%, rgba(255,255,255,0.25), rgba(255,255,255,0))",
          mixBlendMode: "screen",
        }}
      />
      {children}
    </div>
  );
}