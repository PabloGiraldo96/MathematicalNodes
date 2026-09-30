import * as THREE from "three";
import { MATH_TREE } from "../data/mathTree";
import CoreNode from "./CoreNode";
import NodeList from "./NodeList";
import CameraRig from "./CameraRig";
import { useTreeState } from "../hooks/useTreeState";
import { TREE_RADIUS } from "../utils/geometry";

const ORIGIN = new THREE.Vector3(0, 0, 0);

function AxisLine({ direction, color }: { direction: THREE.Vector3; color: string }) {
  const points = [direction.clone().multiplyScalar(-6), direction.clone().multiplyScalar(6)];
  return (
    <line>
      <bufferGeometry attach="geometry" onUpdate={(g) => g.setFromPoints(points)} />
      <lineBasicMaterial attach="material" color={color} transparent opacity={0.2} />
    </line>
  );
}

export default function Scene() {
  const { expandAll } = useTreeState();

  return (
    <>
      <color attach="background" args={["#081222"]} />
      {/* Fog is pushed back in expand-all mode, otherwise the far side of the tree would vanish. */}
      <fog attach="fog" args={["#081222", expandAll ? 14 : 8, expandAll ? 48 : 24]} />

      <ambientLight intensity={0.75} color="#6a7fa0" />
      <directionalLight position={[6, 8, 5]} intensity={1} color="#fff2d0" />
      <directionalLight position={[-6, -3, -4]} intensity={0.35} color="#4fa8a0" />

      <gridHelper
        args={[expandAll ? 40 : 26, expandAll ? 40 : 26, "#2a3c5c", "#18253d"]}
        position={[0, expandAll ? -(TREE_RADIUS + 0.6) : -5.4, 0]}
      />
      <AxisLine direction={new THREE.Vector3(1, 0, 0)} color="#5fb8ad" />
      <AxisLine direction={new THREE.Vector3(0, 1, 0)} color="#e3b23c" />
      <AxisLine direction={new THREE.Vector3(0, 0, 1)} color="#9fb0c3" />

      <CoreNode />

      {/* Root of the recursive tree: adding/removing branches or nesting
          more levels under any node in mathTree.ts is all this needs. */}
      <NodeList nodes={MATH_TREE} parentPath={[]} origin={ORIGIN} depth={0} />

      <CameraRig />
    </>
  );
}
