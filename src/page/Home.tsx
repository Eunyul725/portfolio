import { useState } from "react";
import RocketBtn from "../components/RocketBtn";

function Home() {
  const [ launched, setLaunched ] = useState(false);

  return (
    <section id="home" className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-32 md:py-60 flex items-center">
        <div className="w-full">
          <h1 className="font-dmserif text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-wide select-none text-shadow">
            <span className="text-white/90">“</span> Design x Code x Story <span className="text-white/90">”</span>
          </h1>
          <p className="font-notokr mt-14 ml-4 text-base sm:text-lg md:text-xl text-white/90 font-semibold md:tracking-wide">
            감각과 경험을 담아,<br />
            별처럼 빛나는 웹을 만들겠습니다.
          </p>
        </div>
      </div>

      <RocketBtn
        key={launched ? "flying" : "idle"}
        launched={launched} 
        onLaunch={()=> setLaunched(true)}
        onFlightEnd={()=> {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
          setLaunched(false);
        }}
      />
    </section>
  );
}


export default Home;
