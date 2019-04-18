import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { fetchUsers, mainMenuId, submenuAction } from "../actions";

import Menu from "./Menu";

class MainMenu extends Component {
  // fetching users
  componentDidMount() {
    this.props.fetchUsers();
  }

  // rendering every user here
  renderUsers() {
    const { users } = this.props;  
    return users.map(user => {
      // This is what is helping update the redux store So then i can 
      // update the styling and the url
      const handleClick = () => {
        this.props.mainMenuId(user.id)
        this.props.submenuAction(null)
        this.props.history.push(`/${user.id}`)
      }
      return (
        <Text
          onClick={() => handleClick()}
          className="main-list"
          key={user.id}
        >
          {user.name}
        </Text>
      );
    });
  }

  renderStyles() {
    const { menuId, submenuId } = this.props;
    let class_name = 'col-12';
    if(menuId == null && submenuId == null) class_name = "col-12";
    if (menuId) class_name = "col-2";
    class_name += " main-menu";
    return class_name;
  }

  // I had to update these as null so that in my styling I can
  // have easy styling in renderStyle()
  handleTitleClick() {
    this.props.mainMenuId(null)
    this.props.submenuAction(null)
  }

  renderTitle() {
    return <Text className="main-title" onClick={() => this.handleTitleClick()}>Main Menu</Text>;
  }

  render() {
    return (
      <Menu
        link="/"
        style={this.renderStyles()}
        list={this.renderUsers()}
        title={this.renderTitle()}
      />
    );
  }
}

const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const {  menuId } = id;
  return {
    menuId,
    users
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers, mainMenuId, submenuAction }
)(MainMenu);
