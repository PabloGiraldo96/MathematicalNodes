import type { Locale } from "./types";

interface UiStrings {
  headingLine1: string;
  headingLine2: string;
  hintOverview1: string;
  hintOverview2: string;
  hintExpanded1: string;
  hintExpanded2: string;
  backToOrigin: string;
  upOneLevel: string;
  expandAllLabel: string;
  wikiLink: string;
  closeLabel: string;
}

export const UI_STRINGS: Record<Locale, UiStrings> = {
  es: {
    headingLine1: "UN ESPACIO VECTORIAL DE",
    headingLine2: "MATEMÁTICAS",
    hintOverview1: "arrastra para rotar · scroll para zoom",
    hintOverview2: "clic en un nodo para expandir",
    hintExpanded1: "clic en un subtema para seguir profundizando",
    hintExpanded2: "clic afuera o ← volver para regresar",
    backToOrigin: "← volver al origen",
    upOneLevel: "← subir un nivel",
    expandAllLabel: "Abrir todos los nodos",
    wikiLink: "Ver en Wikipedia ↗",
    closeLabel: "Cerrar",
  },
  en: {
    headingLine1: "A VECTOR SPACE OF",
    headingLine2: "MATHEMATICS",
    hintOverview1: "drag to rotate · scroll to zoom",
    hintOverview2: "click a node to expand",
    hintExpanded1: "click a subtopic to go deeper",
    hintExpanded2: "click outside or ← back to return",
    backToOrigin: "← back to origin",
    upOneLevel: "← up one level",
    expandAllLabel: "Open all nodes",
    wikiLink: "View on Wikipedia ↗",
    closeLabel: "Close",
  },
};
