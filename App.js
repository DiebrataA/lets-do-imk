import React, {Component} from 'react';
import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import MainNavigation from './src/navigation/main-navigation';
import Auth from './src/screens/auth/Auth';
import LoggedIn from './src/screens/auth/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: '',
    };
  }

  newJWT(jwt) {
    this.setState({
      jwt: jwt,
    });
  }
  render() {
    if (!this.state.jwt) {
      return <Auth />;
    } else {
      return (
        <LoggedIn />
        //<NavigationContainer>
        //<MainNavigation />
        //</NavigationContainer>
      );
    }
  }
}
export default App;
