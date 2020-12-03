import React, {Fragment, useState} from 'react';
import {View, Text} from 'react-native';
import {Input, TextLink, Loading, Button} from './common';
import axios from 'axios';
import {BASE_API} from '../constant';
import {saveData} from '../services';
import Home from '../screens/home/Home';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [jwt, setJWT] = useState('');

  const loginUser = () => {
    setLoading(true);
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
      .then((response) => {
        var acc = response.data.access;
        console.log(acc);
        saveData('user_access_token', acc).catch((e) =>
          e ? console.log(e.response.data) : console.log(e),
        );
        props.newJWT(acc);
        setJWT(acc);
      })
      .catch((e) => {
        console.log(e.response.data);
        setLoading(false);
        setError('Login Failed: ' + e.message);
      });
  };
  const {form, section, errorTextStyle} = styles;

  if (jwt) {
    return <Home />;
  } else {
    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="username"
              label="Username"
              value={username}
              onChangeText={(uname) => setUsername(uname)}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={(pass) => setPassword(pass)}
            />
          </View>

          <Text style={errorTextStyle}>{error}</Text>

          {!loading ? (
            <Button onPress={loginUser}>Login</Button>
          ) : (
            <Loading size={'large'} />
          )}
        </View>
        <TextLink onPress={props.authSwitch}>
          Don't have an account? Register!
        </TextLink>
      </Fragment>
    );
  }
};

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
