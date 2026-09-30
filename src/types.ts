export type Locale = "es" | "en";
export type LocalizedText = Record<Locale, string>;

export interface TreeNode {
  id: string;
  tag: string;
  name: LocalizedText;
  description: LocalizedText;
  /** Length of this node's vector, in scene units. */
  length: number;
  /**
   * Exact Wikipedia article title to link to, per language. Falls back to
   * `name[locale]` for whichever language is missing.
   */
  wikipediaTitle?: Partial<Record<Locale, string>>;
  /**
   * Child nodes. If present and non-empty, clicking this node reveals
   * them as a fan of vectors growing out of its tip — at any depth.
   */
  children?: TreeNode[];
}

export interface CoreNodeData {
  name: LocalizedText;
  tag: LocalizedText;
}

export interface SelectedInfo {
  tag: string;
  /** Breadcrumb-style title, in the active locale. */
  title: string;
  description: string;
  wikipediaUrl: string;
}
