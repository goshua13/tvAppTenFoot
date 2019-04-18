import React, {Component} from 'react'
import {View, Text} from 'react-native';
import { connect } from "react-redux";
import { fetchUsers, mainMenuId, submenuAction } from "../actions";
// import console = require('console');

import Menu from './Menu';
class TestComponent extends Component {
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
        this.props.mainMenuId(user.id);
        this.props.submenuAction(null);
        this.props.history.push(`/${user.id}`);
      };
      return (
          <Text
            onPress={() => handleClick()}
            className="main-list"
            key={user.id}
          >
            {user.name}
          </Text>
      );
    });
  }

  handleTitleClick() {
    this.props.mainMenuId(null);
    this.props.submenuAction(null);
  }

  renderTitle() {
    return (
      <Text className="main-title" onPress={() => this.handleTitleClick()}>
        Main Menu
      </Text>
    );
  }
  
  render() {
    return (
      <View>
        <Menu
          link="/"
          list={this.renderUsers()}
          title={this.renderTitle()}
        />
      </View>
    )
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
  )(TestComponent);
  