import { useState, useRef, useEffect } from "react";
import { SupportedLanguages } from "../common/i18n/SupportedLanguages";
import { useTranslationContext } from "../common/i18n/context/TranslationContext";

const languages = [
  { code: SupportedLanguages.en, label: "English", flag: "🇬🇧" },
  { code: SupportedLanguages.de, label: "Deutsch", flag: "🇩🇪" },
  { code: SupportedLanguages.hu, label: "Magyar", flag: "🇭🇺" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { langState, updateLangState } = useTranslationContext();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: SupportedLanguages) => {
    setOpen(false);
    updateLangState(code);
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-3 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all shadow"
      >
        <span>{languages.find((l) => l.code === langState)?.flag}</span>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10">
          <ul className="py-1 text-sm">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleSelect(lang.code)}
                  className={`flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl ${
                    langState === lang.code ? "font-semibold" : ""
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                  {langState === lang.code && (
                    <svg
                      className="ml-auto w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
