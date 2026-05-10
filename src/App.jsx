import React from 'react'
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import Home from './sections/Home'
import Skill from './sections/Skill'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import About from './sections/About'
import CustomCursor from './components/CustomCursor'
import IntroAnimations from './components/IntroAnimations'

export default function App(){ 
  const [introDone, setIntroDone] = React.useState(false);
  return (
    <> 
    {!introDone && <IntroAnimations onfinish={() => setIntroDone(true)} />}
      {introDone &&(
    <div>
    <CustomCursor />
      <ParticlesBackground />
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        
    </div>
    )} 
    </>
  )
}

