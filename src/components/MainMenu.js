import React, {Component} from 'react'
import {View, Text, Platform, TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import { fetchUsers, mainMenuId, submenuAction } from "../actions";
import styles from '../styles';
import Menu from './Menu';


var running_on_tv = Platform.isTv;
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
        this.props.mainMenuId(user.id);
        this.props.submenuAction(null);
        this.props.history.push(`/${user.id}`);
      };
      return (
          <TouchableOpacity
            onPress={() => handleClick()}
            key={user.id}
          >
            <Text style={styles.list}>{user.name}</Text>
          </TouchableOpacity>
      );
    });
  }

  handleTitleClick() {
    this.props.mainMenuId(null);
  }

  renderTitle() {
    return (
      <TouchableOpacity onPress={() => this.handleTitleClick()}>
        <Text style={styles.title}>Main Menu </Text>
      </TouchableOpacity>
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
  )(MainMenu);
