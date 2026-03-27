import { useState } from "react";
import { TailSpin } from "react-loading-icons";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = () => (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch(import.meta.env.VITE_FORM_API_URL, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        setFormStatus(true);
        setQuery({ name: "", surname: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const inputClass =
    "w-full bg-slate-800 text-slate-100 placeholder-slate-500 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors duration-150";
  const labelClass = "block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5";

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl text-blue"><MdOutlineEmail /></span>
          <h2 className="text-2xl font-bold text-white">{t("contact")}</h2>
        </div>

        {formStatus ? (
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center"
               style={{ borderTop: "3px solid #009FF5" }}>
            <div className="text-4xl mb-4">✓</div>
            <p className="text-lg font-semibold text-white">{t("contactPage.success")}</p>
          </div>
        ) : (
          <form
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-5"
            style={{ borderTop: "3px solid #009FF5" }}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass} htmlFor="name">
                  {t("contactPage.name")}
                </label>
                <input
                  className={inputClass}
                  id="name"
                  type="text"
                  name="name"
                  value={query.name}
                  onChange={handleChange()}
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="surname">
                  {t("contactPage.surname")}
                </label>
                <input
                  className={inputClass}
                  id="surname"
                  type="text"
                  name="surname"
                  value={query.surname}
                  onChange={handleChange()}
                  required
                />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                {t("contactPage.email")}
              </label>
              <input
                className={inputClass}
                id="email"
                type="email"
                name="email"
                value={query.email}
                onChange={handleChange()}
                required
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="message">
                {t("contactPage.message")}
              </label>
              <textarea
                className={`${inputClass} h-40 resize-none`}
                id="message"
                name="message"
                value={query.message}
                onChange={handleChange()}
                required
              />
            </div>

            <div className="pt-1">
              {loading ? (
                <div className="flex justify-center py-2">
                  <TailSpin stroke="#009FF5" />
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-blue hover:opacity-90 active:opacity-75 text-white font-semibold py-3 px-6 rounded-lg transition-opacity duration-150"
                >
                  {t("contactPage.send")}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
