import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ListView = (props) => {
  return (
    <TouchableOpacity
      key={props.item.id}
      style={styles.container}
      onPress={props.callback}>
      <Text style={styles.text}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};
export default ListView;

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
