import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
    textStyle: {
      fontSize: 20,
    },
    viewStyle: {
      backgroundColor: '#f8f8f8',
      height: 60,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 5,
      shadowColor: '#111',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      elevation: 2,
      position: 'relative'
    }
};

export default Header;
