import { motion, scale } from "framer-motion";

interface RocketBtnProps {
  launched: boolean;
  onLaunch: ()=> void;
  onFlightEnd?: ()=> void;
}

function RocketBtn( { onLaunch, launched, onFlightEnd }: RocketBtnProps ) {
  return (
    <div className="pointer-events-none">
    {/* Rocket */}
      <motion.button
        aria-label="발사!"
        disabled={launched}
        onClick={onLaunch}
        className="pointer-events-auto absolute bottom-[14%] left-1/2 -translate-x-1/2 w-12 h-12 select-none z-50"
        initial={{ x: 0, y: 0, rotate: 35, opacity: 1 }}
        animate={
          launched
            ? { y: "-120vh", x: "40vw", rotate: 35, scale: 1.05, opacity: 0 }
            : { y: [0, -10, 0], x: 0, rotate: [35, 41, 30, 35], opacity: 1 }
        }
        transition={
          launched
            ? { duration: 1.2, ease: "easeIn", times: [0, 0.45, 1] }
            : { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }
        onAnimationComplete={()=> {
          if( launched ) onFlightEnd();
        }}
        style={{}}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/images/rocket.png" alt="Rocket" className="w-full h-full object-contain" draggable={false} />
      </motion.button>
    </div>
  )
}
export default RocketBtn;