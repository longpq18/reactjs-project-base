import styled from "styled-components";
import { Colors } from "@/assets/colors";

const MainLayoutContainer = styled.div`
  /* padding: 40px 80px; */
  .header-content {
    display: flex;
    justify-content: space-between;
    background-color: ${Colors.GREEN};
    align-items: center;
  }

  .content-container {
    padding: 0 20px;
  }
`;

export default MainLayoutContainer;