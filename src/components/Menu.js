import React from "react";
import { View, Text } from 'react-native';
// import { Link} from 'react-router-native';

const Menu = ({ title, style, link, list }) => {
  return (
    <View className={style}>
      <View to={link} style={{color: 'red'}} ><Text>{title}</Text></View>
      <Text className='list-unstyled'>{list}</Text>
    </View>
  );
};

export default Menu;

