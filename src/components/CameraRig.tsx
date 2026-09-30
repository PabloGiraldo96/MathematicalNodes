import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useTreeState } from "../hooks/useTreeState";
import { nodeWorldTransform, TREE_RADIUS } from "../utils/geometry";

const OVERVIEW_TARGET = new THREE.Vector3(0, -0.3, 0);
const OVERVIEW_DISTANCE = 11;

// Distance at which a sphere of radius TREE_RADIUS fits the view (fov 45deg),
// with a little breathing room. Derived from the data, so adding deeper
// levels or longer vectors needs no manual tuning.
const EXPANDED_DISTANCE = (TREE_RADIUS / Math.sin(THREE.MathUtils.degToRad(45 / 2))) * 1.1;

export default function CameraRig() {
  const { path, expandAll } = useTreeState();
  const controlsRef = useRef<any>(null);
  const desiredTarget = useRef(OVERVIEW_TARGET.clone());
  const desiredDistance = useRef(OVERVIEW_DISTANCE);

  useEffect(() => {
    const transform = path.length > 0 ? nodeWorldTransform(path) : null;

    if (!transform) {
      desiredTarget.current = OVERVIEW_TARGET.clone();
      desiredDistance.current = expandAll ? EXPANDED_DISTANCE : OVERVIEW_DISTANCE;
      if (controlsRef.current) {
        controlsRef.current.minDistance = 6.5;
        controlsRef.current.maxDistance = expandAll ? EXPANDED_DISTANCE * 1.6 : 20;
      }
    } else {
      desiredTarget.current = transform.position;
      // Deeper nodes are smaller, so zoom in proportionally closer each level.
      desiredDistance.current = Math.max(1.4, transform.length * 0.85);
      if (controlsRef.current) {
        controlsRef.current.minDistance = 0.8;
        controlsRef.current.maxDistance = 9;
      }
    }
  }, [path, expandAll]);

  useFrame(({ camera }) => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.target.lerp(desiredTarget.current, 0.06);

    const offset = camera.position.clone().sub(controls.target);
    const currentDistance = offset.length();
    const nextDistance = THREE.MathUtils.lerp(currentDistance, desiredDistance.current, 0.06);
    offset.normalize().multiplyScalar(nextDistance);
    camera.position.copy(controls.target).add(offset);

    controls.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.08}
      autoRotate
      autoRotateSpeed={0.4}
      minDistance={6.5}
      maxDistance={20}
      minPolarAngle={0.25}
      maxPolarAngle={Math.PI - 0.25}
    />
  );
}
