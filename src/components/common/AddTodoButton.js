import {Fab} from 'native-base';
import {Icon} from 'react-native-elements';
import React from 'react';

const AddTodoButton = ({onPress}) => (
  <Fab
    direction="up"
    style={{backgroundColor: '#9088D4', elevation: 5}}
    position="bottomRight"
    onPress={onPress}>
    <Icon name="add" color="white" />
  </Fab>
);
export default AddTodoButton;
