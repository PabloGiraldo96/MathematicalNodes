import { useTreeState } from "../hooks/useTreeState";
import { UI_STRINGS } from "../i18n";

export default function ExpandAllToggle() {
  const { expandAll, toggleExpandAll, locale } = useTreeState();
  const t = UI_STRINGS[locale];

  return (
    <button
      className={`toggle${expandAll ? " on" : ""}`}
      role="switch"
      aria-checked={expandAll}
      onClick={toggleExpandAll}
    >
      <span className="toggle-track">
        <span className="toggle-thumb" />
      </span>
      <span className="toggle-label">{t.expandAllLabel}</span>
    </button>
  );
}
