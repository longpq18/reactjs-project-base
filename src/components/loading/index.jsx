import { Spin } from 'antd';
import Box from './styled';

const Loading = (props) => (
  <Box>
    <Spin {...props} />
  </Box>
)

export default Loading;