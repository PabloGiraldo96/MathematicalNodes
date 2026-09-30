import { useMemo } from "react";
import * as THREE from "three";
import VectorNode from "./VectorNode";
import { useTreeState } from "../hooks/useTreeState";
import { childDirections } from "../utils/geometry";
import { isPrefix } from "../utils/path";
import type { TreeNode } from "../types";

interface NodeListProps {
  nodes: TreeNode[];
  /** Path to the parent whose children these are (empty array at the root). */
  parentPath: number[];
  origin: THREE.Vector3;
  /** Undefined at the root: directions there come from a full sphere spread instead of a cone. */
  parentDirection?: THREE.Vector3;
  depth: number;
}

export default function NodeList({ nodes, parentPath, origin, parentDirection, depth }: NodeListProps) {
  const { path, expandAll } = useTreeState();

  const selectedIndex =
    path.length > parentPath.length && isPrefix(parentPath, path) ? path[parentPath.length] : null;

  const directions = useMemo(
    () => childDirections(parentPath, nodes.length, parentDirection),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nodes.length, parentDirection, parentPath.join(",")]
  );

  return (
    <>
      {nodes.map((node, i) => {
        const nodePath = [...parentPath, i];
        const onChain = selectedIndex === i;
        // With everything open, siblings stay fully visible instead of fading out.
        const dimmed = !expandAll && selectedIndex !== null && !onChain;
        // In expand-all mode all levels mount at once, so stagger each depth so
        // children never start growing from a parent tip that hasn't arrived yet.
        const depthDelay = expandAll ? depth * 450 : 0;
        const growDelay = (depth === 0 ? 400 + i * 170 : 200 + i * 110) + depthDelay;
        return (
          <VectorNode
            key={node.id}
            node={node}
            nodePath={nodePath}
            origin={origin}
            direction={directions[i]}
            depth={depth}
            onChain={onChain}
            dimmed={dimmed}
            growDelay={growDelay}
          />
        );
      })}
    </>
  );
}
