import React, { useRef, useState } from "react";

type Props = React.PropsWithChildren<{
  maxTilt?: number;
  scale?: number;
  className?: string;
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
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
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
      className={`relative transform-gpu will-change-transform transition-transform duration-200 ease-out rounded-2xl overflow-hidden ${className}`}
      style={style}
    >
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