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
    console.log('LOGGED IN PAGE');
    console.log(this.props.newJWT);
    return (
      <View style={styles.container}>
        <Text>This is your jwt {this.props.newJWT}</Text>
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
