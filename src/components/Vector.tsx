import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export interface VectorProps {
  /** World-space origin the vector grows out from. */
  origin: THREE.Vector3;
  /** Unit direction the vector points in. */
  direction: THREE.Vector3;
  /** Length of the vector, in scene units. */
  length: number;
  /** Base color (hex string) for shaft/cone/node. */
  color: string;
  /** Scales shaft/cone/node thickness — used to make sub-vectors slightly thinner. */
  radiusScale?: number;
  label: string;
  /** Highlighted / selected state. */
  active?: boolean;
  /** Faded-out state (another branch is focused instead). */
  dimmed?: boolean;
  /** Whether this vector should be grown-in and visible. */
  grow: boolean;
  /** Delay, in ms, before the grow-in animation starts. */
  growDelay?: number;
  onSelect?: () => void;
}

const UP = new THREE.Vector3(0, 1, 0);

export default function Vector({
  origin,
  direction,
  length,
  color,
  radiusScale = 1,
  label,
  active = false,
  dimmed = false,
  grow,
  growDelay = 0,
  onSelect,
}: VectorProps) {
  const groupRef = useRef<THREE.Group>(null);
  const scaleValue = useRef(0.001);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!grow) {
      setStarted(false);
      return;
    }
    const timer = setTimeout(() => setStarted(true), growDelay);
    return () => clearTimeout(timer);
  }, [grow, growDelay]);

  useFrame(() => {
    if (!groupRef.current) return;
    const target = started ? 1 : 0.001;
    scaleValue.current += (target - scaleValue.current) * 0.12;
    groupRef.current.scale.setScalar(scaleValue.current);
  });

  const quaternion = useMemo(
    () => new THREE.Quaternion().setFromUnitVectors(UP, direction),
    [direction]
  );

  const rs = radiusScale;
  const shaftLength = length - 0.5 * rs;
  const emissiveIntensity = active ? 0.6 : dimmed ? 0.06 : 0.25;

  const select = (event: any) => {
    event.stopPropagation();
    onSelect?.();
  };

  return (
    <group ref={groupRef} position={origin} quaternion={quaternion}>
      <mesh position={[0, shaftLength / 2, 0]} onClick={select}>
        <cylinderGeometry args={[0.035 * rs, 0.035 * rs, shaftLength, 10]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          metalness={0.35}
          roughness={0.4}
        />
      </mesh>

      <mesh position={[0, shaftLength + 0.19 * rs, 0]} onClick={select}>
        <coneGeometry args={[0.11 * rs, 0.38 * rs, 14]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          metalness={0.35}
          roughness={0.4}
        />
      </mesh>

      <mesh position={[0, length, 0]} onClick={select}>
        <sphereGeometry args={[0.09 * rs, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          metalness={0.35}
          roughness={0.4}
        />
      </mesh>

      <Html position={[0, length + 0.32, 0]} center distanceFactor={8} occlude={false}>
        <div
          onClick={select}
          className={`label3d${active ? " active" : ""}${dimmed ? " dimmed" : ""}`}
          style={{ opacity: started ? 1 : 0 }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}
