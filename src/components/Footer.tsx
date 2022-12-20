import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-row justify-center text-sm p-8">
            Coypright &copy; {t('title')} 2022
        </div>
    );
}

export default Footer;