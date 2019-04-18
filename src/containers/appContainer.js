import React, { Component } from "react";
import { NativeRouter, Route } from "react-router-native";
import { View, StyleSheet, ImageBackground } from 'react-native';
import { connect } from "react-redux";
import { mainMenuId, submenuAction } from "../actions";

import MainMenu from '../components/Mainmenu';
import SubMenu from '../components/Submenu';
import Content from '../components/Content';

import styles from '../styles';

class AppContainer extends Component {
  // renderTiers() {
  //   const {menuId, submenuId} = this.props;
  //   let tiers;
  //   if(menuId == null && submenuId == null) tiers = 'tier-one'
  //   if(menuId != null) tiers = 'tier-two';
  //   if(submenuId) tiers= 'tier-three'
  //   return tiers;
  // }
  

  render() {
    return (
      <View style={styles.container}>
          <ImageBackground
          style={styles.img}
          source={{uri: 'https://source.unsplash.com/user/goshua13'}}
        >
        <NativeRouter>
          <Route path="/" component={MainMenu} />
          <Route path="/:submenuId" component={SubMenu} />
          <Route path="/:submenuId/:contentId" component={Content} />
        </NativeRouter>
        </ImageBackground>
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

export default connect(
  mapStateToProps,
  { mainMenuId, submenuAction }
)(AppContainer);
