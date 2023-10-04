import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation("aboutePage");

  return (
    <div>
      <h1>{t("О нас")}</h1>
    </div>
  );
};

export default AboutPage;
