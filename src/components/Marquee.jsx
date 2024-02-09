import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
    <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity,duration:6}} className='text-[25vw] leading-none font-semibold uppercase founder mt-[-1.5vw] pr-20'>We are Ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:6}} className='text-[25vw] leading-none font-semibold uppercase founder mt-[-1.5vw] pr-20'>We are Ochi</motion.h1>
        
    </div>
    </div>
  )
}

export default Marquee