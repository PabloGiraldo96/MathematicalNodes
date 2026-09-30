import * as THREE from "three";
import { MATH_TREE } from "../data/mathTree";
import type { TreeNode } from "../types";

/**
 * Distributes `samples` directions evenly over a sphere, so any number of
 * top-level branches spreads out cleanly (4, 5, 9...).
 */
export function fibonacciSphere(samples: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const offset = 2 / samples;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    points.push(new THREE.Vector3(Math.cos(phi) * r, y, Math.sin(phi) * r));
  }
  return points;
}

function buildBasis(dir: THREE.Vector3): { u: THREE.Vector3; v: THREE.Vector3 } {
  const arbitrary = Math.abs(dir.y) < 0.99 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
  const u = new THREE.Vector3().crossVectors(arbitrary, dir).normalize();
  const v = new THREE.Vector3().crossVectors(dir, u).normalize();
  return { u, v };
}

export const SUB_CONE_ANGLE = 0.62; // ~35.5 degrees

function subDirection(
  parentDir: THREE.Vector3,
  index: number,
  total: number,
  coneAngle: number,
  phase: number
): THREE.Vector3 {
  const { u, v } = buildBasis(parentDir);
  const az = phase + index * ((2 * Math.PI) / total);
  const sinC = Math.sin(coneAngle);
  const cosC = Math.cos(coneAngle);
  return parentDir
    .clone()
    .multiplyScalar(cosC)
    .add(u.clone().multiplyScalar(Math.cos(az) * sinC))
    .add(v.clone().multiplyScalar(Math.sin(az) * sinC))
    .normalize();
}

/**
 * Directions for a list of siblings. At the root (no parentDirection) they
 * spread evenly over a full sphere; nested levels fan out in a cone around
 * the direction that led into their parent node, at any depth.
 *
 * `parentPath` is used only to vary the fan's rotation (`phase`) per branch,
 * so siblings under different parents don't all bloom in the same pattern.
 */
export function childDirections(
  parentPath: number[],
  count: number,
  parentDirection?: THREE.Vector3
): THREE.Vector3[] {
  if (!parentDirection) return fibonacciSphere(count);
  const phase = parentPath.reduce((sum, v) => sum + v, 0) * 0.37 + parentPath.length * 0.21;
  return Array.from({ length: count }, (_, i) =>
    subDirection(parentDirection, i, count, SUB_CONE_ANGLE, phase)
  );
}

/**
 * Walks the tree along `path` and returns the world-space position of that
 * node's tip plus its length — used by the camera to zoom to any node at
 * any depth. Mirrors the exact same direction logic used to render the
 * vectors (via `childDirections`), so the camera always lines up with what
 * is on screen.
 */
export function nodeWorldTransform(path: number[]): { position: THREE.Vector3; length: number } | null {
  let nodes: TreeNode[] = MATH_TREE;
  let origin = new THREE.Vector3(0, 0, 0);
  let parentDirection: THREE.Vector3 | undefined;
  let parentPath: number[] = [];
  let node: TreeNode | null = null;

  for (const idx of path) {
    const directions = childDirections(parentPath, nodes.length, parentDirection);
    const dir = directions[idx];
    node = nodes[idx] ?? null;
    if (!node || !dir) return null;

    origin = origin.clone().add(dir.clone().multiplyScalar(node.length));
    parentDirection = dir;
    parentPath = [...parentPath, idx];
    nodes = node.children ?? [];
  }

  if (!node) return null;
  return { position: origin, length: node.length };
}

/**
 * Farthest distance from the origin reached by any node tip in the whole
 * tree (every level fully opened). Used to place the camera so that the
 * entire "constellation" fits on screen when "expand all" is on.
 */
export function computeTreeRadius(): number {
  let max = 0;

  const walk = (
    nodes: TreeNode[],
    parentPath: number[],
    origin: THREE.Vector3,
    parentDirection?: THREE.Vector3
  ) => {
    const dirs = childDirections(parentPath, nodes.length, parentDirection);
    nodes.forEach((node, i) => {
      const tip = origin.clone().add(dirs[i].clone().multiplyScalar(node.length));
      max = Math.max(max, tip.length());
      if (node.children && node.children.length > 0) {
        walk(node.children, [...parentPath, i], tip, dirs[i]);
      }
    });
  };

  walk(MATH_TREE, [], new THREE.Vector3(0, 0, 0));
  return max;
}

export const TREE_RADIUS = computeTreeRadius();
