import PropTypes from "prop-types";

import Menu from "@/components/menu";
import MainLayoutContainer from "./styled";
import Language from "@/components/languages";

const MainLayout = ({ children }) => {
  return (
    <MainLayoutContainer>
      <div className="header-content">
        <Menu />
        <Language />
      </div>
      <div className="content-container">{children}</div>
    </MainLayoutContainer>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
