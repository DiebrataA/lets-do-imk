import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {getData} from '../../services';

const Home = () => {
  const [jwt, setJWT] = useState();

  getData('user_access_token').then((r) => setJWT(r));

  return (
    <View style={styles.container}>
      <Text>{jwt}</Text>
    </View>
  );
};
export default Home;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
