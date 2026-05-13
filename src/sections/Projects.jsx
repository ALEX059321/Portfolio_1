import { useEffect, useMemo, useRef, useState } from "react"
import img1 from "../assets/img1.JPG"
import img2 from "../assets/img2.JPG"
import img3 from "../assets/img3.JPG"
import photo1 from "../assets/photo1.JPG"
import photo2 from "../assets/photo2.PNG"
import photo3 from "../assets/photo3.png"
import { useScroll } from "framer-motion"



const useIsMobile = (query = "(max-width : 639px") => {
  const [isMobile , setIsMobile] = useState (
    typeof window !== "undefined" && window.matchMedia(query).matches
  )
  useEffect(() => {
    if(typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);


  mql.addEventListener("change" , handler)
  setIsMobile(mql.matches);
  return () => mql.removeEventListener("change" , handler);

  }, [query])
  return isMobile;
}



export default function Projects () {
  const isMobile = useIsMobile()
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "nk studio",
        link: "https://www.nk.studio/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1, // use mobile or desktop image
      },
      {
        title: "Gamily",
        link: "https://gamilyapp.com/",
        bgColor: "#3884d3",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Hungry Tiger",
        link: "https://www.eathungrytiger.com/",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]  //re-Run the isMobile when the screen size changes
  );
  const {scrollYProgress} = useScroll({
   target:sceneRef,
   offset : ["start start " , "end end"]

  })
  return( 
  <section id="projects" 
  ref={sceneRef}
  className="relative text-white"></section>
)}