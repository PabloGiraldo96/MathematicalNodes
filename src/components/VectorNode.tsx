import { useMemo } from "react";
import * as THREE from "three";
import Vector from "./Vector";
import NodeList from "./NodeList";
import { useTreeState } from "../hooks/useTreeState";
import { isPrefix } from "../utils/path";
import type { TreeNode } from "../types";

const GOLD = "#e3b23c";
const TEAL = "#5fb8ad";

interface VectorNodeProps {
  node: TreeNode;
  nodePath: number[];
  origin: THREE.Vector3;
  direction: THREE.Vector3;
  depth: number;
  /** This node (or a descendant of it) is currently selected. */
  onChain: boolean;
  /** A sibling of this node is on the active chain instead — fade this one out. */
  dimmed: boolean;
  growDelay: number;
}

export default function VectorNode({
  node,
  nodePath,
  origin,
  direction,
  depth,
  onChain,
  dimmed,
  growDelay,
}: VectorNodeProps) {
  const { path, toggleNode, expandAll, locale } = useTreeState();

  // Colors alternate by depth so each level of the fan contrasts with its
  // parent: main branches default gold / selected teal, their children
  // default teal / selected gold, grandchildren back to gold, and so on.
  const defaultColor = depth % 2 === 0 ? GOLD : TEAL;
  const highlightColor = depth % 2 === 0 ? TEAL : GOLD;
  const color = onChain ? highlightColor : defaultColor;

  const tip = useMemo(
    () => origin.clone().add(direction.clone().multiplyScalar(node.length)),
    [origin, direction, node.length]
  );

  const hasChildren = !!node.children && node.children.length > 0;
  const childrenVisible = hasChildren && (expandAll || isPrefix(nodePath, path));

  return (
    <>
      <Vector
        origin={origin}
        direction={direction}
        length={node.length}
        color={color}
        radiusScale={depth === 0 ? 1 : Math.max(0.45, 0.72 - depth * 0.12)}
        active={onChain}
        dimmed={dimmed}
        label={node.name[locale]}
        grow
        growDelay={growDelay}
        onSelect={() => toggleNode(nodePath)}
      />

      {childrenVisible && (
        <NodeList
          nodes={node.children!}
          parentPath={nodePath}
          origin={tip}
          parentDirection={direction}
          depth={depth + 1}
        />
      )}
    </>
  );
}
