import React, {Component, Fragment} from 'react';
import {View, Text} from 'react-native';
import {Input, TextLink, Loading, Button} from './common';
import axios from 'axios';
import {BASE_API} from '../constant';
import {saveData} from '../services';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      error: '',
      loading: false,
    };

    this.registerUser = this.registerUser.bind(this);
    this.onRegistrationFail = this.onRegistrationFail.bind(this);
  }

  registerUser() {
    const {username, first_name, last_name, password} = this.state;

    this.setState({error: '', loading: true});
    const payload = JSON.stringify({
      password: password,
      username: username,
      first_name: first_name,
      last_name: last_name,
    });
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post(BASE_API + 'user/register/', payload, header)
      .then(() => {
        // deviceStorage.saveKey('id_token', response.data.jwt);
        axios
          .then((response) => {
            this.props.newJWT(response.data.access);
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
            }
            this.onRegistrationFail();
          });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
        this.onRegistrationFail();
      });
  }

  onRegistrationFail() {
    this.setState({
      error: 'Registration Failed',
      loading: false,
    });
  }

  render() {
    const {
      username,
      first_name,
      last_name,
      password,
      error,
      loading,
    } = this.state;
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
              placeholder="First Name"
              label="First Name"
              value={first_name}
              onChangeText={(fname) => this.setState({first_name: fname})}
            />
          </View>

          <View style={section}>
            <Input
              placeholder="Last Name"
              label="Last Name"
              value={last_name}
              onChangeText={(lname) => this.setState({last_name: lname})}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={(pass) => this.setState({password: pass})}
            />
          </View>

          <Text style={errorTextStyle}>{error}</Text>

          {!loading ? (
            <Button onPress={this.registerUser}>Register</Button>
          ) : (
            <Loading size={'large'} />
          )}
        </View>
        <TextLink onPress={this.props.authSwitch}>
          Already have an account? Log in!
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

export {Registration};
