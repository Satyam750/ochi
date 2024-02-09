import { delay, motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import Spline from '@splinetool/react-spline';
import { useState } from "react";


const LandingPage = () => {
  
  const [ishover, setHover] = useState(false)

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 text-white pt-1 ">
      <div className="textstructure mt-40 px-20 relative">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div className="masker " key={index}>
            <div className="w-fit flex items-end overflow-hidden">
            {index === 1 && (
               <motion.img initial={{width:0}} whileInView={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}}  className="w-[8vw] mr-[1vw] rounded-md h-[5.5vw] relative -top-[0.28vw]" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
            
              )}
            <h1 className="founder flex items-center uppercase leading-[7vw] h-full font-semibold text-[9vw]">
              {item}
            </h1>
           
            </div>
          </div>
        ))}
        <Spline className="absolute -top-16 left-[60vw]" style={{height:"30vw",width:"30vw"}} scene="https://prod.spline.design/r5AS0z4GH64FPfjj/scene.splinecode" />
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-16 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            className="text-md font-light tracking-tight leading-none"
            key={index}
          >
            {item}
          </p>
        ))}
        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="start flex items-center gap-2">
          <div  className= {`px-5 py-2 border-[2px] font-light text-md uppercase border-zinc-500 rounded-full ho ${ishover && 'bg-white cursor-pointer text-black ho '}` }>
            Start the Project
          </div>
          <div className={`w-8 h-8 rounded-full border-[2px] border-zinc-500 flex justify-center items-center ho ${ishover && 'bg-white text-black cursor-pointer ho'}`}><MdOutlineArrowOutward/></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
