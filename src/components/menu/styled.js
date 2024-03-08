import styled from "styled-components";
import { Colors } from "@/assets/colors";

const MenuContainer = styled.div`
  display: flex;

  li {
    list-style-type: none;
    

    cursor: pointer;

    &:hover {

      a {
        color: ${Colors.WHITE};
      }
    }

    &.active {

      a {
        color: ${Colors.WHITE};
      }
    }

    a {
      text-decoration: none;
      color: ${Colors.BLACK};
      padding: 20px 10px;
      width: 100%;
      display: inline-block;
    }
  }
`;

export default MenuContainer;