import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const TodoList = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.callback}>
      <Text style={styles.text}>
        {'is complete: ' + props.item.is_complete}
      </Text>
      <Text style={styles.text}>{'deadline: ' + props.item.deadline}</Text>
      <Text style={styles.text}>{'todo title: ' + props.item.title}</Text>
      <Text style={styles.text}>{'todo content: ' + props.item.content}</Text>
    </TouchableOpacity>
  );
};
export default TodoList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c',
  },
});
