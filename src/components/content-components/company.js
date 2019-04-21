import React, { Component } from 'react'
import { View, Text} from 'react-native';
import { connect } from 'react-redux';

import styles from '../../styles';

class Company extends Component {
    renderCompany() {
        const { users, menuId } = this.props;
        let user = users[menuId]
        if(user)
          return (
            <View>
              <Text style={styles.list}>{user.company.name}</Text>
              <Text style={styles.list}>{user.company.catchPhrase}</Text>
              <Text style={styles.list}>{user.company.bs}</Text>
            </View>
          )
      }

  render() {
    return (
        <View>
            <Text styles={styles.title}>Company</Text>
            {this.renderCompany()}
            <Text className='bruh'>orer otances occur in which toil and pain can procure him some great pleasuuences, or one w</Text>
        </View>
    )
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

export default connect(mapStateToProps, null)(Company);