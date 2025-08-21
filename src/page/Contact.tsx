function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto relative pt-[80px] py-12 font-notokr">
      <div className="px-6 mt-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-shadow">
          감사합니다.
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/85 leading-loose">
          프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고,<br />
          항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고 싶습니다.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:unaflor725@gmail.com"
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:shadow-lg
                       transition hover:-translate-y-0.5"
          >
            이메일 보내기
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40
                       bg-white/5 hover:bg-white/10 backdrop-blur
                       transition hover:-translate-y-0.5"
          >
            이력서 보기 (PDF)
          </a>
        </div>

        <div
          className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 
                     rounded-2xl p-6 md:p-8
                     bg-white/5 backdrop-blur-md
                     border border-white/10
                     shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
        >
          <div className="group rounded-xl p-4 bg-white/0 hover:bg-white/5 transition">
            <p className="text-sm uppercase tracking-widest text-white/60">전화번호</p>
            <a
            href="tel:+821058023179"
            className="mt-2 text-xl font-semibold tracking-wide">
              010 · 5802 · 3179
            </a>
          </div>

          {/* 이메일 */}
          <div className="group rounded-xl p-4 bg-white/0 hover:bg-white/5 transition">
            <p className="text-sm uppercase tracking-widest text-white/60">이메일</p>
            <a
              href="mailto:unaflor725@gmail.com"
              className="mt-2 inline-block text-xl font-semibold underline decoration-white/30 hover:decoration-white"
            >
              unaflor725@gmail.com
            </a>
          </div>

          <div className="group rounded-xl p-4 bg-white/0 hover:bg-white/5 transition">
            <p className="text-sm uppercase tracking-widest text-white/60">GitHub</p>
            <a
              href="https://github.com/Eunyul725"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-xl font-semibold underline decoration-white/30 hover:decoration-white"
            >
              <img src={`${import.meta.env.BASE_URL}/icons/github.svg`} className="w-6 h-6" alt="" />
              @Eunyul725
            </a>
          </div>

          <div className="group rounded-xl p-4 bg-white/0 hover:bg-white/5 transition">
            <p className="text-sm uppercase tracking-widest text-white/60">상태</p>
            <div className="mt-2 text-xl font-semibold">Open to Frontend Role</div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <a href="https://github.com/Eunyul725" target="_blank" rel="noopener" className="opacity-80 hover:opacity-100 transition">
            <img src={`${import.meta.env.BASE_URL}/icons/github.svg`} className="w-6 h-6" alt="GitHub" />
          </a>
          <a href="https://www.notion.so/25407c6b30e38030ba81ef378dbd18e7?source=copy_link" target="_blank" rel="noopener" className="opacity-80 hover:opacity-100 transition">
            <img src={`${import.meta.env.BASE_URL}/icons/notion.svg`} className="w-6 h-6" alt="Notion" />
          </a>
        </div>

        <div className="mt-12 h-px bg-white/10" />
        <p className="mt-4 text-sm text-white/60">© {new Date().getFullYear()} Eunyul. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Contact;