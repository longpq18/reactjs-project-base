import { useTranslation } from "react-i18next";
import HomePageContainer from "./styled";

const HomePage = () => {
  const { t } = useTranslation('common');

  return (
    <HomePageContainer>
      <h3>{t('home')}</h3>
    </HomePageContainer>
  )
  ;
};

export default HomePage;
