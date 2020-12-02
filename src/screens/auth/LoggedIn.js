import React, {Component} from 'react';
import {View} from 'react-native';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
