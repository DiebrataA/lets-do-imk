import {Fab, Icon} from 'native-base';
import React from 'react';

const AddTodoButton = ({onPress}) => (
  <Fab
    direction="up"
    containerStyle={{}}
    position="bottomRight"
    onPress={onPress}>
    <Icon name="add" />
  </Fab>
);
export default AddTodoButton;
