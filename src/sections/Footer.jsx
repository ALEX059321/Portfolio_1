import { FaQuora , FaLinkedin , FaGithub } from "react-icons/fa"

import { motion } from "framer-motion"

const socials = [
  {Icon : FaQuora ,lable : "X" , link : "https://www.quora.com/profile/Raj-Saroj-267"},
  {Icon : FaLinkedin , lable : "LinkedIn" , link : "https://www.linkedin.com/in/raj-kumar-898007294"},
  {Icon : FaGithub , lable : "GitHub" , link : "https://github.com/ALEX059321"}
]

const glowVarients = {
  initials : {scale : 1 , y : 0 , filter : "drop-shadow(0 0 rgba(0, 0, 0, 0"},
  hover : {
    scale : 1.2 , y : -3 , 
    filter : "drop-shadow(0 0 8px rgba(13,. 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.8))",
  },
  tap : {scale : 0.95 , y: 0 , transition : {duration : 0.08}}
}

export default function Footer(){
  return(
    <footer className="relative overflow-hidden bg-black">
     <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.35),transparent_70%)]"/>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]"/>
     


   <motion.div className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-6"
   initial={{opacity:0 , y:30}}
   whileInView={{opacity:1 , y:0}}
   transition={{duration:0.8}}
   > <h1 className="font-semibold leading-none text-white text-center select-none"
   style={{fontSize: "clamp(3rem ,5vw,14rem)",
    letterSpacing:"0.02em",
    lineHeight:0.9,
    padding:"0 3vw",
    whiteSpace:"nowrap",
    textShadow:"0 2px 18px rgba(0,0,0,0.45)"
   }}
   >
    Raj Kumar
   </h1>

<div className="h-[3px] w-44 md:w-42 rounded-full mt-2 bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400"/>


<div className="flex gap-10 mt-8 text-2xl md:text-3xl">
  {socials.map(({Icon, lable, link}) => (
    <motion.a href={link}
      key={lable}
      aria-label={lable}
      target="_blank"
      rel="noopener noreferrer"
      variants={glowVarients}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className="text-gray-300 transition-colors duration-200 inline-flex items-center justify-center"
    >
      <Icon />
    </motion.a>
  ))}
</div>

<p className="text-gray-300 italic max-w-xl mt-4">Success is when preparation meets opportunity.</p>

<p className="text-gray-400 text-xs mt-4">
  &copy; {new Date().getFullYear()} Raj Kumar. All rights reserved.
</p>
   </motion.div>


    </footer>
  )
}