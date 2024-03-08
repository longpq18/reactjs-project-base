import styled from 'styled-components';
import { Colors } from '@/assets/colors';

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  .content {
    padding: 50px;
    border-radius: 10px;
    
    .message {
      color: ${Colors.WHITE};
      background-color: transparent;
    }
  }

  .ant-spin-dot-item {
    background-color: ${Colors.WHITE};
  }
`

export default StyledDiv;