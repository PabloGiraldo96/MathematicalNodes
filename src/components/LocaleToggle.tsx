import { useTreeState } from "../hooks/useTreeState";

export default function LocaleToggle() {
  const { locale, toggleLocale } = useTreeState();

  return (
    <button className="localeToggle" onClick={toggleLocale} aria-label="Switch language / Cambiar idioma">
      <span className={locale === "es" ? "active" : ""}>ES</span>
      <span className="sep">/</span>
      <span className={locale === "en" ? "active" : ""}>EN</span>
    </button>
  );
}
