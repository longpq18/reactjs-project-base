import { useState } from "react";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";

import Storage from "@/utils/storage";
import { EN_FLAG_ICON, JP_FLAG_ICON } from "@/assets/images";
import LanguageItem from "./language-item";
import { LANG } from "@/constants";
import { LanguageContainer } from "./styled";

const listLang = {
  en: EN_FLAG_ICON,
  jp: JP_FLAG_ICON,
};

const Language = () => {
  const { i18n } = useTranslation();

  const lang = Storage.get(LANG.LANGUAGE) || "en";

  const [active, setActive] = useState(lang);

  const onChangeLanguage = (lang) => () => {
    if (lang === active) return;
    i18n.changeLanguage(lang);
    Storage.set(LANG.LANGUAGE, lang);
    setActive(lang);
  };

  const items = [
    {
      key: "1",
      label: (
        <LanguageItem
          onChangeLanguage={onChangeLanguage("en")}
          name={LANG.EN}
          symbol="en"
          icon={EN_FLAG_ICON}
          className={`btn ${active === "en" ? "active-language" : ""}`}
        />
      ),
    },
    {
      key: "2",
      label: (
        <LanguageItem
          onChangeLanguage={onChangeLanguage("jp")}
          name={LANG.JP}
          symbol="jp"
          icon={JP_FLAG_ICON}
          className={`btn ${active === "jp" ? "active-language" : ""}`}
        />
      ),
    },
  ];

  return (
    <LanguageContainer>
      <div className="content">
        <Dropdown
          menu={{ items }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
          trigger={["click"]}
          className="dropdown_language"
        >
          <Button className="language_btn">
            <img src={listLang[active]} alt="language" />
          </Button>
        </Dropdown>
      </div>
    </LanguageContainer>
  );
};

export default Language;
