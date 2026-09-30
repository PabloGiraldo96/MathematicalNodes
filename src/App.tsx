import { Canvas } from "@react-three/fiber";
import { TreeStateProvider, useTreeState } from "./hooks/useTreeState";
import Scene from "./components/Scene";
import InfoPanel from "./components/InfoPanel";
import BackButton from "./components/BackButton";
import ExpandAllToggle from "./components/ExpandAllToggle";
import LocaleToggle from "./components/LocaleToggle";
import { Heading, Hint } from "./components/Overlay";

function CanvasWithMissHandler() {
  const { stepBack } = useTreeState();
  return (
    <Canvas camera={{ position: [7, 6, 9], fov: 45 }} onPointerMissed={stepBack}>
      <Scene />
    </Canvas>
  );
}

export default function App() {
  return (
    <TreeStateProvider>
      <div className="stage">
        <div className="canvas-wrap">
          <CanvasWithMissHandler />
        </div>
        <Heading />
        <BackButton />
        <ExpandAllToggle />
        <LocaleToggle />
        <Hint />
        <InfoPanel />
      </div>
    </TreeStateProvider>
  );
}
