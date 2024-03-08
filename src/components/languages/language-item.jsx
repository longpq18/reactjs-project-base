import PropTypes from "prop-types";
import { ItemContainer } from "./styled";

const LanguageItem = ({ onChangeLanguage, name, icon, className }) => {
  return (
    <ItemContainer>
      <button className={className} onClick={onChangeLanguage}>
        <img src={icon} alt="symbol" />
        <span>{name}</span>
      </button>
    </ItemContainer>
  );
};

LanguageItem.propTypes = {
  onChangeLanguage: PropTypes.func,
  name: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default LanguageItem;
