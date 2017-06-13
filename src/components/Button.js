import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

const Button = (props) => {
  return (
    <TouchableHighlight style={style.buttonStyles}>
      <Text>{props.children}</Text>
    </TouchableHighlight>
  )
}

const style = {
  buttonStyles: {
    backgroundColor: 'yellow'
  }
}

export default Button;
