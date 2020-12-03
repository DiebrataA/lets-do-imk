import React, {Component} from 'react';
import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import MainNavigation from './src/navigation/main-navigation';
import Auth from './src/screens/auth/Auth';
import LoggedIn from './src/screens/auth/Auth';
import {useState} from 'react';

function App() {
  const [jwt, newJWT] = useState('');
  if (!jwt) {
    return <Auth newJWT={newJWT} />;
  } else {
    return (
      <LoggedIn />
      //<NavigationContainer>
      //<MainNavigation />
      //</NavigationContainer>
    );
  }
}
export default App;
