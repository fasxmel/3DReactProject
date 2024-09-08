import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import { useEffect, useState } from "react";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import Avatar from "./components/pages/Avatar";


const App = () => {
     //chek wich section is active
    const [section , setSection] = useState(0);
    const [menuOpened , setMenuOpened] = useState(false);




    useEffect(() => {
      setMenuOpened(false);
    }, [section])



  // Main App Component
  return (
    <>

    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={6} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection}/>
       <Avatar />
        <Scroll html>
         <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>

    <Menu 
    onSectionChange={setSection} 
    menuOpened={menuOpened} 
    setMenuOpened={setMenuOpened}
    />
    </>
  );
};

export default App;
