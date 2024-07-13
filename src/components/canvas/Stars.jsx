import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"


const Stars = ({position, size, color}) => {

    return (
      <mesh position={position}>
        <sphereGeometry args={size}/>
        <meshStandardMaterial color={color} />
      </mesh>
    )
  }

export default Stars