import Auth from './Auth';
import React, {useState} from 'react';
import LoggedIn from './LoggedIn';
import {Text} from 'react-native-reanimated';

const AuthPages = () => {
  const [jwt, newJWT] = useState();
  console.log('auth page');
  console.log('initial state:' + jwt);
  if (jwt) {
    return <LoggedIn newJWT={jwt} />;
  } else {
    return <Auth newJWT={newJWT} />;
  }
};

export default AuthPages;
