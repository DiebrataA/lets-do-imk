import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  const {button, text} = styles;
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress} style={button}>
        <Text style={text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonLogout = ({onPress, children}) => {
  const {buttonLogout, textLogout} = styles;
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress} style={buttonLogout}>
        <Text style={textLogout}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '200',
    paddingVertical: 18,
    textTransform: 'uppercase',
    letterSpacing: 0.24,
  },
  textLogout: {
    alignSelf: 'center',
    color: '#FF4B5C',
    fontSize: 14,
    fontWeight: '200',
    paddingVertical: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.24,
  },
  button: {
    flex: 1,
    backgroundColor: '#9088D4',
    borderRadius: 32,
    marginVertical: 5,
  },
  buttonLogout: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: '#FF4B5C',
    borderWidth: 2,
    borderRadius: 32,
    marginVertical: 5,
  },
};

export {Button, ButtonLogout};
