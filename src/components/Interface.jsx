import { motion } from "framer-motion";


// Creating Section Component 
// for Interface whth children as props
// and is cant be use multiple times
export const Section = (props) => {
    const {children} = props;
    return (
    <motion.section className={`
        w-full h-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center`
    }
    initial={{
        opacity: 0,
        y: 50,
    }}
    whileInView={{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.6,
        },
    }}
    
    >
    {children}
    </motion.section>
    )
}

// Importing Pages
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Interface Component which contein all 
// the sections and its children
// and can be use multiple times in the app is renderd once
const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
    <About />
    <Navbar />
    <Hero/>
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}

export default Interface;