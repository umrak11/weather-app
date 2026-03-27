import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";
import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.svg";
import en from "../assets/gb.svg";
import sl from "../assets/si.svg";

function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  const links = [
    { to: "/", label: t("home") },
    { to: "/graphs", label: t("graphs") },
    { to: "/history", label: t("history") },
    { to: "/location", label: t("location") },
    { to: "/contact", label: t("contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.1]" style={{ backgroundColor: "#1e293b" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} className="h-6 opacity-90" />
            <span className="text-sm font-semibold text-white tracking-tight">{t("title")}</span>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-slate-500 hover:text-slate-200 px-3 py-1 transition-colors duration-150"
                  activeProps={{ className: "text-sm text-white px-3 py-1 font-medium" }}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-5 pl-5 border-l border-white/[0.08]">
              <button onClick={() => changeLanguage("en")} className="opacity-50 hover:opacity-100 transition-opacity" title="English">
                <img src={en} width={18} className="rounded-sm" />
              </button>
              <button onClick={() => changeLanguage("sl")} className="opacity-50 hover:opacity-100 transition-opacity" title="Slovenščina">
                <img src={sl} width={18} className="rounded-sm" />
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-400 hover:text-white p-1.5 transition-colors"
          >
            <span className="sr-only">Menu</span>
            {isOpen
              ? <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        {(ref: any) => (
          <div ref={ref} className="md:hidden border-t border-white/[0.06] pb-3">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block px-4 py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                activeProps={{ className: "block px-4 py-2.5 text-sm text-white font-medium" }}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-4 pt-2.5 mt-1 border-t border-white/[0.06]">
              <button onClick={() => changeLanguage("en")} className="opacity-50 hover:opacity-100 transition-opacity">
                <img src={en} width={18} className="rounded-sm" />
              </button>
              <button onClick={() => changeLanguage("sl")} className="opacity-50 hover:opacity-100 transition-opacity">
                <img src={sl} width={18} className="rounded-sm" />
              </button>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Header;
