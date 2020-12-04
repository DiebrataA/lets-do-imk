import Auth from './Auth';
import React, {useEffect, useState} from 'react';
import CategoryPage from '../home/CategoryPage';
import {getData} from '../../services';

const AuthPages = () => {
  const [jwt, newJWT] = useState();
  //
  // useEffect(() => {
  //   getData('user_access_token')
  //     .then((token) => newJWT(token))
  //     .then((r) => console.log(r));
  // });

  if (jwt) {
    return <CategoryPage jwt={jwt} />;
  } else {
    return <Auth newJWT={newJWT} />;
  }
};

export default AuthPages;
