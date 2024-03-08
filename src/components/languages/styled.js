import styled from "styled-components";

import { Colors } from '@/assets/colors';

const LanguageContainer = styled.div`
  button {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  .language_btn {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
    }

    span {
      color: ${Colors.WHITE}
    }
  }
`;

const ItemContainer = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Colors.WHITE};
    border: none;
    padding: 5px;
    cursor: pointer;

    &.active-language {
      background: ${Colors.GREEN};
    }

    &:hover {
      background: ${Colors.GREEN};
    }

    img {
      width: 15px;
      height: 15px;
    }

    span {
      color: ${Colors.BLACK};
      display: inline-block;
      padding-left: 5px;
    }
  }
`;


export {
  LanguageContainer,
  ItemContainer
}
