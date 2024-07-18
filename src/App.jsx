import { Scroll, ScrollControls } from "@react-three/drei";
import Avatar from "./components/pages/Avatar";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";


const App = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />

      <ScrollControls pages={6} damping={0.1}>
       <Avatar />
        <Scroll html>
         <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
