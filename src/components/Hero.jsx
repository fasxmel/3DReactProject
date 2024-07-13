import { motion } from "framer-motion";
import { styles } from "../styles";
import { Canvas } from "@react-three/fiber";
import Ball from "./canvas/Ball";
import Stars from "./canvas/Stars";
import { OrbitControls } from "@react-three/drei";





const Hero = () => {
  return (
   <section className="relative w-full h-screen mx-auto">  
     <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
       <div className="flex flex-col justify-center items-center mt-5">
         <div className="w-5 h-5 rounded-full bg-[#2F80ED]"/>
         <div className="w-1 sm:h-80 h-40 blue-gradient"/>
       </div>

       <div>
         <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#2F80ED]">Hristoz Ognyanov</span></h1>
         <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop 3D visuals, user <br className="sm:block hidden"/> interfaces and web applications.</p>
       </div>
     </div>
   
    <Canvas>
      <directionalLight position={[0, 0, 5]} intensity={1.5}/>
      <ambientLight intensity={0.5}/>
       //TODO: add all in a grup of objects
       {/* <mesh position={[2, -1, 2]}>
        <boxGeometry />
        <meshStandardMaterial color={"#2F80ED"}/>
       </mesh>
     */}
     <OrbitControls/>
     <Stars position={[1, -1.5, 0]} size={[1, 15, 1]} color={"#2F80ED"}/>
     <Ball position={[-1.5, -1.5, 0]} color={"#2F80ED"} size={[1, 30, 30]} />
     
    </Canvas>
  
   </section>
  );
};

export default Hero;