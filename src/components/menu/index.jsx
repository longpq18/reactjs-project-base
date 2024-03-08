import { Link, useLocation } from "react-router-dom";
import ROUTES from "@/constants/route";
import MenuContainer from "./styled";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const location = useLocation();
  const { t } = useTranslation('common');
  const pathname = location.pathname;

  const menus = [
    {
      key: 1,
      name: t('home'),
      link: ROUTES.HOME,
    },
    {
      key: 2,
      name: t('about'),
      link: ROUTES.ABOUT,
    },
  ];
  

  return (
    <MenuContainer>
      {menus.map((item) => {
        return (
          <li
            key={item.key}
            className={`${pathname === item.link ? "active" : ""}`}
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        );
      })}
    </MenuContainer>
  );
};

export default Menu;
