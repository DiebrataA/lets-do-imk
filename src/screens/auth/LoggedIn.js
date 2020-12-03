import React from 'react';
import {View, Text} from 'react-native';

const LoggedIn = (props) => {
  console.log('LOGGED IN PAGE');
  // console.log(props.newJWT);
  return (
    <View style={styles.container}>
      {/*<Text>This is your jwt {props.newJWT}</Text>*/}
      <Text>ASU</Text>
    </View>
  );
};
export default LoggedIn;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
