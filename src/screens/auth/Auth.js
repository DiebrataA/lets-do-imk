import React, {useState} from 'react';
import {View} from 'react-native';
import {Login, Registration} from '../../components';

const Auth = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  const authSwitch = () => setShowLogin(!showLogin);

  const whichForm = () => {
    if (!showLogin) {
      return <Registration newJWT={props.newJWT} authSwitch={authSwitch} />;
    } else {
      return <Login newJWT={props.newJWT} authSwitch={authSwitch} />;
    }
  };

  return <View style={styles.container}>{whichForm()}</View>;
};
export default Auth;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
