import React from 'react';
import {View, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

const Search = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  multiline,
  numberOfLines,
}) => {
  const {inputStyle, containerStyle} = styles;

  return (
    <View style={containerStyle}>
      <Icon name="add-outline" />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="#706897"
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    color: '#706897',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3,
  },
};

export {Search};
