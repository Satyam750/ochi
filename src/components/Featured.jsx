import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";

const Featured = () => {

    const [ishovering,setHovering] = useState(false)
    const [ishov,setHov] = useState(false)

    const handlehover = ( ) =>{

    }
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl neu tracking-tight"> Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)} className="cardcontainer w-1/2 h-[70vh] relative ">
            <h1 className="absolute flex z-[9] text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 top leading-none text-[8vw] founder">
            {"FYDE".split("").map((item, index) => (
                <motion.span key={index} initial={{y:"100%"}} animate={ishovering ? ({y:"0"}) : ({y:"100%"})} transition={{ease:[0.22, 1, 0.36,1], delay:index*.06, duration:0.9}}  className="inline-block">
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full  overflow-hidden">
              <img
                className="w-full h-full bg-cover rounded-2xl"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div onMouseEnter={()=> setHov(true)} onMouseLeave={()=> setHov(false)} className="cardcontainer relative rounded-2xl w-1/2 h-[70vh] ">
            <h1 className="absolute flex overflow-hidden z-[9] text-[#CDEA68] right-full translate-x-1/2  top-1/2 -translate-y-1/2 top leading-none text-[8vw] founder">
              {"VISE".split("").map((item, index) => (
                <motion.span key={index} initial={{y:"100%"}} animate={ishov ? ({y:"0"}) : ({y:"100%"})} transition={{ease:[0.22, 1, 0.36,1], delay:index*.06, duration:0.9}}  className="inline-block">
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden ">
              <img
                className="w-full h-full bg-cover rounded-2xl"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
