import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text} from 'react-native';
import styles from "../../styles";

class Address extends Component {
  renderAddress() {
    const { users, menuId } = this.props;
    let user = users[menuId]
    if (user)
      return (
        <View>
            <Text style={styles.list}>{user.address.city}</Text>
            <Text style={styles.list}>{user.address.street}</Text>
            <Text style={styles.list}>{user.address.zipcode}</Text>
            <Text style={styles.list}>{user.address.suite}</Text>
        </View>
      );
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>Address</Text>
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
