import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Asu</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
