import { useTreeState } from "../hooks/useTreeState";
import { UI_STRINGS } from "../i18n";

export default function BackButton() {
  const { path, stepBack, locale } = useTreeState();
  const t = UI_STRINGS[locale];
  const label = path.length > 1 ? t.upOneLevel : t.backToOrigin;

  return (
    <button className={`backBtn${path.length > 0 ? " show" : ""}`} onClick={stepBack}>
      {label}
    </button>
  );
}
