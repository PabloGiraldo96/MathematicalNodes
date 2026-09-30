import { useTreeState } from "../hooks/useTreeState";
import { UI_STRINGS } from "../i18n";

export function Heading() {
  const { locale } = useTreeState();
  const t = UI_STRINGS[locale];

  return (
    <div className="heading">
      <div className="line1">{t.headingLine1}</div>
      <div>{t.headingLine2}</div>
    </div>
  );
}

export function Hint() {
  const { path, locale } = useTreeState();
  const t = UI_STRINGS[locale];

  return (
    <div className="hint">
      {path.length === 0 ? (
        <>
          {t.hintOverview1}
          <br />
          {t.hintOverview2}
        </>
      ) : (
        <>
          {t.hintExpanded1}
          <br />
          {t.hintExpanded2}
        </>
      )}
    </div>
  );
}
