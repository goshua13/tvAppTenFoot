import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text} from 'react-native';

class Address extends Component {
  renderAddress() {
    const { users, menuId } = this.props;
    let user = users[menuId]
    if (user)
      return (
        <View>
            <Text>{user.address.city}</Text>
            <Text>{user.address.street}</Text>
            <Text>{user.address.zipcode}</Text>
            <Text>{user.address.suite}</Text>
        </View>
      );
  }
  render() {
    return (
      <View>
        <Text className="menus">Address</Text>
        {this.renderAddress()}
      </View>
    );
  }
}
const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { params, menuId } = id;
  return {
    menuId,
    params,
    users
  };
};

export default connect(
  mapStateToProps,
  null
)(Address);
