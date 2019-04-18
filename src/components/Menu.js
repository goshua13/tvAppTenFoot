import React from "react";
import { View, Text } from 'react-native';

const Menu = ({ title, style, link, list }) => {
  return (
    <View className={style}>
      {title}
       {list}
    </View>
  );
};

export default Menu;

