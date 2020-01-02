import React, { Component } from "react";
import Aux from "../Auxl/Auxl";
import Modal from "../../components/UI/Modal/Modal";

const errorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    UNSAFE_componentWillMount() {
      this.intrceptReq = axios.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      });
      this.intrceptRes = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({
            error: error
          });
        }
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.intrceptReq);
      axios.interceptors.response.eject(this.intrceptRes);
    }
    closeModalHandler = () => {
      this.setState({
        error: null
      });
    };
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} closeModal={this.closeModalHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default errorHandler;
