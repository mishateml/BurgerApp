import React, { Component } from "react";
import Aux from "../Auxl/Auxl";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Nav/Toolbar/Toolbar";
import SideDrawer from "../../components/Nav/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideBar: false
  };

  closeSideBar = () => {
    this.setState({
      showSideBar: false
    });
  };
  openSideBar = () => {
    this.setState({
      showSideBar: true
    });
  };
  drawerToggleHendrer = () => {
    this.setState(prevState => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <Aux>
        <SideDrawer clicked={this.closeSideBar} show={this.state.showSideBar} />
        <Toolbar drawerToggleClicked={this.drawerToggleHendrer} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
