import { useTranslation } from "react-i18next";
import AboutPageContainer from "./styled";

const AboutPage = () => {
  const { t } = useTranslation("common");

  return (
    <AboutPageContainer>
      <h3>{t("about")}</h3>
    </AboutPageContainer>
  );
};

export default AboutPage;
