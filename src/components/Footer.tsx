import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-white/[0.04] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <span className="text-xs text-slate-600">© {new Date().getFullYear()} {t("title")}</span>
        <span className="text-xs text-slate-700">Koritnica, Slovenia</span>
      </div>
    </footer>
  );
}
