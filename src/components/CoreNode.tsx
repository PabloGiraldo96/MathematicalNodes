import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { CORE_NODE } from "../data/mathTree";
import { useTreeState } from "../hooks/useTreeState";

export default function CoreNode() {
  const { locale } = useTreeState();
  const groupRef = useRef<THREE.Group>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const scaleValue = useRef(0.001);
  const [labelVisible, setLabelVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLabelVisible(true), 500);
    return () => clearTimeout(t);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      scaleValue.current += (1 - scaleValue.current) * 0.08;
      groupRef.current.scale.setScalar(scaleValue.current);
    }
    if (wireRef.current) {
      wireRef.current.rotation.y += 0.0025;
      wireRef.current.rotation.x += 0.0012;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshStandardMaterial
          color="#0c1a2e"
          emissive="#e3b23c"
          emissiveIntensity={0.18}
          metalness={0.3}
          roughness={0.55}
        />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color="#e3b23c" wireframe transparent opacity={0.55} />
      </mesh>
      <Html center distanceFactor={8} occlude={false}>
        <div className="coreLabel" style={{ opacity: labelVisible ? 1 : 0 }}>
          {CORE_NODE.name[locale]}
          <span className="sub-tag">{CORE_NODE.tag[locale]}</span>
        </div>
      </Html>
    </group>
  );
}
