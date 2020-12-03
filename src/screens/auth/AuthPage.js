import Auth from './Auth';
import React, {useState} from 'react';
import LoggedIn from './LoggedIn';
import {getData} from '../../services';

const AuthPages = () => {
  const [jwt, newJWT] = useState();
  console.log(jwt);
  if (jwt) {
    return <LoggedIn newJWT={jwt} />;
  } else {
    return <Auth newJWT={newJWT} />;
  }
};

export default AuthPages;
