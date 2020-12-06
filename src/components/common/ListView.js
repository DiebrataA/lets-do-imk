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
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
    height: 142,
    width: 142,
  },
  text: {
    color: '#4f603c',
  },
});
