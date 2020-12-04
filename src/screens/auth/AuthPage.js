import Auth from './Auth';
import React, {useState} from 'react';
import Home from '../home/Home';
import {getData} from '../../services';

const AuthPages = () => {
  // const [jwt, newJWT] = useState();
  const [jwt, newJWT] = useState(getData('user_access_token'));

  if (jwt) {
    return <Home />;
  } else {
    return <Auth newJWT={newJWT} />;
  }
};

export default AuthPages;
