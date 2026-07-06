import { BsJavascript } from "react-icons/bs";
import { FaReact,FaNodeJs,FaGithub,FaHtml5,FaCss} from "react-icons/fa6";
import { SiTailwindcss,SiMongodb,SiPostman,SiExpress } from "react-icons/si";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";



export default function Skills(){
   const skill = [
     { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss />, name: "CSS" },
    { icon: <BsJavascript />, name: "Java Script" },
    { icon: <FaReact />, name: "React" },
   
    { icon: <FaNodeJs />, name: "Node js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "Mongodb" },
    
  ];
  const repeated = [...skill, ...skill, ...skill]
  const [dir , setDir] = useState(-1)
  const [active , setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const X = useMotionValue(0);

useEffect(()=> { 
    const el = sectionRef.current;
    if(!el) return;
    const io = new IntersectionObserver((
        [entry]) => {
            setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
        },
        { threshold: [0.1] }
    )
    io.observe(el);
    return () => io.disconnect();
    
    
}, [])

useEffect(() => {
    if(!active) return;
    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);
    const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e) => {
        if(touchY.current == null) return;
        const delta = e.touches[0].clientY - touchY.current;
        setDir( delta > 0 ? 1 : -1);
        touchY.current = e.touches[0].clientY; 
    };
    window.addEventListener('wheel' , onWheel , {passive : true});
    window.addEventListener('touchstart' , onTouchStart , {passive : true});
    window.addEventListener('touchmove' , onTouchMove , {passive : true});
    
   

}, [active]);

useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;

    const tick = (now) => {
        const dt = (now - last) / 1000;
        last = now;
        let next = X.get() + SPEED * dir * dt;
        const loop = trackRef.current?.scrollWidth / 3 || 0;

        if (loop) {
            if (next <= -loop) next += loop;
            else if (next >= 0) next -= loop;
        }
        X.set(next);
        id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
}, [dir, X]);
    return(
        <section id = "skill" 
        ref={sectionRef}
        
        className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
        <div>
            <div className="absolute inset-0 pointer-events-none"/>
            <div className="absolute top-1/4 left-0 w-75 h-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-20 blur-[120px] animate-pulse
            "/>
            <div className="absolute bottom-1/4 right-0 w-75 h-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-20 blur-[120px] animate-pulse delay-500
            "/>
        </div >


       <motion.h2 className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10 "
       initial={{opacity:0 , y: -30}}
       whileInView={{opacity:1 , y:0}}
       transition={{duration:0.5, delay:0.1}}
       
       
       
       >My Skills</motion.h2>
       <motion.p className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
       initial = {{opacity:0 , y: -10}}
       whileInView={{opacity:1 , y:0}}
       transition={{duration:0.5 , delay:0.1}}
       
       
       >

        Modern Applications | Modern Technologies
       </motion.p>
<div className="relative w-full overflow-hidden">
    <motion.div 
    ref={trackRef}
    style={{ x: X }}
    className="flex gap-20 text-6xl text-[#1cd8d2]">
{repeated.map((s,i) => (
    <div
    key={i} className="flex flex-col items-center gap-2 min-w0[120px]" aria-label = {s.name} title={s.name}
    >
        <span className="hover:scale-125 transition-transform duration-300">
        {s.icon}



        </span>
        <p className="text-sm">{s.name}</p>
    </div>
))}




    </motion.div>


</div>
        </section>
    )
} 