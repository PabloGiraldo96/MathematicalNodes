import { useTreeState } from "../hooks/useTreeState";
import { UI_STRINGS } from "../i18n";

export default function InfoPanel() {
  const { selected, stepBack, locale } = useTreeState();
  const t = UI_STRINGS[locale];

  return (
    <div className={`popup${selected ? " show" : ""}`}>
      {selected && (
        <>
          <button className="popup-close" onClick={stepBack} aria-label={t.closeLabel}>
            ✕
          </button>
          <div className="tag">{selected.tag.toUpperCase()}</div>
          <div className="name">{selected.title}</div>
          <div className="desc">{selected.description}</div>
          <a
            className="wiki-link"
            href={selected.wikipediaUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.wikiLink}
          </a>
        </>
      )}
    </div>
  );
}
