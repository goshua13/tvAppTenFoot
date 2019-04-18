import React, { Component } from "react";
import { NativeRouter, Route } from "react-router-native";
import { View, StyleSheet, Text } from 'react-native';
import { connect } from "react-redux";
import { mainMenuId, submenuAction } from "../actions";

import MainMenu from '../components/Menu';
import SubMenu from '../components/Submenu';
import Menu from '../components/Menu';
import Content from "../components/Content";

import TestComponent from '../components/TestComponent';

class AppContainer extends Component {
  renderTiers() {
    const {menuId, submenuId} = this.props;
    let tiers;
    if(menuId == null && submenuId == null) tiers = 'tier-one'
    if(menuId != null) tiers = 'tier-two';
    if(submenuId) tiers= 'tier-three'
    return tiers;
  }
  

  render() {
    return (
      <View className={`row text-center ${this.renderTiers()}`}  style={styles.container}>
        <NativeRouter>
          <Route path="/" component={TestComponent} />
          <Route path="/:submenuId" component={SubMenu} />
          <Route path="/:submenuId/:contentId" component={Content} />
        </NativeRouter>

      </View>
    );
  }
}

const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { menuId, submenuId } = id;
  return {
    submenuId,
    menuId,
    users
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default connect(
  mapStateToProps,
  { mainMenuId, submenuAction }
)(AppContainer);
