function CurveBg() {
  return (
    <div className="relative w-full h-full pointer-events-none">
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-[8%]
          w-[200vw] h-[200vw] rounded-full
          bg-gradient-to-b from-[#1D2C4F] via-[#2b3562] to-[#3B2F89]
          shadow-[0_-40px_120px_rgba(0,0,0,0.35)_inset]
          z-0
        "
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55))]" />
    </div>
  )
}
export default CurveBg;