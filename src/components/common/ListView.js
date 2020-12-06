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
    margin: 15,
    backgroundColor: '#9088D4',
    alignItems: 'center',
    height: 142,
    width: 142,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
