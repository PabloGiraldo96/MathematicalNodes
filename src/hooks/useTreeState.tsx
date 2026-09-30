import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { MATH_TREE } from "../data/mathTree";
import { pathsEqual } from "../utils/path";
import type { Locale, SelectedInfo, TreeNode } from "../types";

interface TreeState {
  /** Chain of child indices from the root to the currently open node. */
  path: number[];
  /** Click on a node: opens it (and its children) if not already open, otherwise steps back up one level. */
  toggleNode: (nodePath: number[]) => void;
  /** Click on empty space: steps back up one level. No-op at the root. */
  stepBack: () => void;
  /** When true, every node in the tree is open at once (full "constellation" view). */
  expandAll: boolean;
  toggleExpandAll: () => void;
  /** Active UI + content language. */
  locale: Locale;
  toggleLocale: () => void;
  selected: SelectedInfo | null;
}

const TreeStateContext = createContext<TreeState | null>(null);

function nodesAlongPath(path: number[]): TreeNode[] {
  const trail: TreeNode[] = [];
  let nodes: TreeNode[] = MATH_TREE;
  for (const idx of path) {
    const node = nodes[idx];
    if (!node) break;
    trail.push(node);
    nodes = node.children ?? [];
  }
  return trail;
}

export function TreeStateProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<number[]>([]);
  const [expandAll, setExpandAll] = useState(false);
  const [locale, setLocale] = useState<Locale>("es");

  const toggleNode = (nodePath: number[]) => {
    setPath((current) => (pathsEqual(current, nodePath) ? nodePath.slice(0, -1) : nodePath));
  };

  const stepBack = () => {
    setPath((current) => (current.length > 0 ? current.slice(0, -1) : current));
  };

  const toggleExpandAll = () => {
    setExpandAll((current) => !current);
    // Return to the overview so the camera can pull back and frame everything.
    setPath([]);
  };

  const toggleLocale = () => {
    setLocale((current) => (current === "es" ? "en" : "es"));
  };

  const selected = useMemo<SelectedInfo | null>(() => {
    const trail = nodesAlongPath(path);
    if (trail.length === 0) return null;
    const last = trail[trail.length - 1];
    const articleTitle = last.wikipediaTitle?.[locale] ?? last.name[locale];
    const domain = locale === "es" ? "es.wikipedia.org" : "en.wikipedia.org";
    return {
      tag: last.tag,
      title: trail.map((n) => n.name[locale]).join(" — "),
      description: last.description[locale],
      wikipediaUrl: `https://${domain}/wiki/${encodeURIComponent(articleTitle.replace(/\s+/g, "_"))}`,
    };
  }, [path, locale]);

  const value: TreeState = {
    path,
    toggleNode,
    stepBack,
    expandAll,
    toggleExpandAll,
    locale,
    toggleLocale,
    selected,
  };

  return <TreeStateContext.Provider value={value}>{children}</TreeStateContext.Provider>;
}

export function useTreeState(): TreeState {
  const ctx = useContext(TreeStateContext);
  if (!ctx) throw new Error("useTreeState must be used within a TreeStateProvider");
  return ctx;
}
