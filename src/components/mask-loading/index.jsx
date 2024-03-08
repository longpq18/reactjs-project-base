import { Component } from "react";

import Loading from "@/components/loading";
import StyledDiv from "./styled";

let instance;

class MaskLoading extends Component {
  state = {
    isOpen: false,
    message: null,
  };

  static setInstance = (ref) => {
    instance = ref;
  };

  static open = (...params) => {
    if (instance) {
      return instance.open(...params);
    }

    return null;
  };

  static close = () => {
    if (instance) instance.close();
  };

  open = ({ message }) => {
    this.setState({
      isOpen: true,
      message,
    });
  };

  close = () => this.setState({ isOpen: false });

  render() {
    const { isOpen, message } = this.state;

    if (!isOpen) return null;

    return (
      <StyledDiv>
        <div className="content">
          <Loading color="white" />
          {message && <p className="message">{message}</p>}
        </div>
      </StyledDiv>
    );
  }
}

export default MaskLoading;
