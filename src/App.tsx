import './App.css'
import Navbar from './components/Navbar';
import Home from './page/Home';
import About from './page/About';
import Projects from './page/Projects';
import Skills from './page/Skills';
import Contact from './page/Contact';
import StarBg from './components/StarBg';

function App() {

  return (
    <div className="relative min-h-screen bg-black text-white">
       {/* 배경  */}
      {/* <div className="pointer-events-none fixed inset-0 -z-10">
       
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "2px",
              height: "2px",
              animation: `twinkle ${1 + Math.random() * 2}s infinite ease-in-out`,
            }}
          />
        ))}
        
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              width: "4px",
              height: "4px",
              boxShadow: "0 0 6px white",
              animation: `shooting 1s ${Math.random() * 5}s infinite linear`,
            }}
          />
        ))}
        
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6))]" />
      </div> */}
      <div className='pointer-events-none fixed inset-0 z-0'>
        <StarBg />
      </div>

      
        <header className='fixed top-0 inset-x-0 h-[80px] z-[9999] bg-black/70'>
          <Navbar />
        </header>
        
        <main className='pt-[80px] relative z-10'>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      
    </div>
  )
}

export default App
