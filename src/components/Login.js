import React, {Component, Fragment} from 'react';
import {View, Text} from 'react-native';
import {Input, TextLink, Loading, Button} from './common';
import axios from 'axios';
import {BASE_API} from '../constant';
import deviceStorage from '../services/deviceStorage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      loading: false,
    };

    this.loginUser = this.loginUser.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  loginUser() {
    const {username, password} = this.state;

    this.setState({error: '', loading: true});
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post(
        BASE_API + 'auth/token/',
        {username: username, password: password},
        header,
      )
      // .then((response) => {
      //   // deviceStorage.saveItem('id_token', response.data.access);
      //   // this.props.newJWT(response.data.access);
      // })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        this.onLoginFail();
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Login Failed',
      loading: false,
    });
  }

  render() {
    const {username, password, error, loading} = this.state;
    const {form, section, errorTextStyle} = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="username"
              label="Username"
              value={username}
              onChangeText={(uname) => this.setState({username: uname})}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={(password) => this.setState({password})}
            />
          </View>

          <Text style={errorTextStyle}>{error}</Text>

          {!loading ? (
            <Button onPress={this.loginUser}>Login</Button>
          ) : (
            <Loading size={'large'} />
          )}
        </View>
        <TextLink onPress={this.props.authSwitch}>
          Don't have an account? Register!
        </TextLink>
      </Fragment>
    );
  }
}

const styles = {
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red',
  },
};

export {Login};
