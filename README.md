## 🌌 Eunyul's Portfolio

**Design × Code × Story**  
우주 콘셉트의 인터랙션(로켓 버튼, 별·궤도 곡선 배경)으로 나의 작업과 성장 여정을 탐험하듯 살펴볼 수 있는 포트폴리오입니다.  
소개, 10개의 대표 프로젝트, 스킬, 연락처 섹션으로 구성되어 있으며 접근성과 성능을 함께 고려했습니다.

[🔗 Live Site](https://eunyul725.github.io/portfolio/)

---

### ✨ 주요 특징 (Features)

- **우주 인터랙션 UI**: 로켓 버튼(로켓 발사 후 About 페이지로 전환), 반짝이는 별과 별똥별 애니메이션, 궤도형 곡선 레이아웃  
- **다양한 화면 대응**: 모바일·태블릿·데스크탑에서 자연스럽게 동작  
- **프로젝트 갤러리(10선)**: 썸네일·상세·기술스택·에피소드 정리  
- **접근성 고려**: 시맨틱 마크업, 키보드 포커스, 색 대비 체크  
- **성능 최적화**: 코드 스플리팅, 이미지 최적화, 라이트하우스 점검  

---

### 🧰 기술 스택 (Tech Stack)

- **Frontend**: React (Vite) · TypeScript  
- **Styling**: Tailwind CSS · Framer Motion  
- **Routing**: React Router  
- **UI/UX**: Swiper(슬라이더), Custom SVG 아이콘  
- **배포**: GitHub Pages (main branch)  
- **Fonts**: Noto Sans KR (본문), DM Serif Text (타이틀), Nanum Myeongjo (포인트)  

---

### 📂 Folder Structure

    portfolio/
    ├─ public/
    │  ├─ icons/
    │  ├─ images/
    │  ├─ favicon.ico
    │  └─ vite.svg
    ├─ src/
    │  ├─ assets/
    │  │  └─ react.svg
    │  ├─ components/
    │  │  ├─ CurveBg.tsx
    │  │  ├─ Navbar.tsx
    │  │  ├─ RocketBtn.tsx
    │  │  ├─ StarBg.tsx
    │  │  └─ TiltCard.tsx
    │  ├─ page/
    │  │  ├─ _about.tsx
    │  │  ├─ _Projects.tsx
    │  │  ├─ _skills.tsx
    │  │  ├─ About.tsx
    │  │  ├─ Contact.tsx
    │  │  ├─ Home.tsx
    │  │  ├─ Projects.tsx
    │  │  ├─ Skills.tsx
    │  │  └─ _App.tsx
    │  ├─ App.tsx
    │  ├─ App.css
    │  ├─ index.css
    │  ├─ main.tsx
    │  └─ vite-env.d.ts
    ├─ index.html
    ├─ vite.config.ts
    ├─ package.json
    └─ README.md

---

### 📑 Projects (10선)

1. **알롱발롱 (Allonballon)** – 액티브웨어 기업 웹사이트  
2. **그리다360 (Grida360)** – 기업 포트폴리오 웹사이트  
3. **제주항공** – 항공사 모바일 전용 웹사이트  
4. **WHACHA** – 감성 큐레이션 OTT 웹사이트  
5. **위드힐동물메디컬센터** – 동물병원 반응형 웹사이트  
6. **악어의 입단속** – JavaScript 인터랙션 게임  
7. **반려동물 건강일기** – Vue 모바일형 블로그 웹앱  
8. **오늘의 날씨** – React OpenWeather API 앱  
9. **그림판** – Vanilla JS 데스크탑형 드로잉 웹앱  
10. **Eunyul’s Portfolio** – 개인 포트폴리오 웹사이트  

---

### 🚀 Getting Started

    git clone https://github.com/eunyul725/portfolio.git
    cd portfolio
    npm install
    npm run dev
