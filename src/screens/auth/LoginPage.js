import React, {Fragment, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Input, TextLink, Loading, Button} from '../../components/common';
import axios from 'axios';
import {BASE_API} from '../../Constant';
import {removeData, saveData, getData} from '../../services';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() => {
    getData('user_acc_token')
      .then((jwt) => console.log(jwt))
      .then((jwt) => {
        if (jwt) {
          navigation.navigate('CategoryPage', {
            acc_token: jwt,
          });
        }
      });
  }, [navigation]);
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
        const acc = response.data.access;
        saveData('user_access_token', acc).catch((e) =>
          e ? console.log(e.response) : console.log(e),
        );
        navigation.navigate('CategoryPage', {
          acc_token: acc,
        });
      })
      .catch((e) => {
        console.log(BASE_API + 'auth/token/');
        console.log(e.status);
        setLoading(false);
        setError('Login Failed: ' + e.message);
      });
  };
  const {container, form, section, errorTextStyle} = styles;

  return (
    <View style={container}>
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
        <TextLink onPress={() => navigation.navigate('RegistrationPage')}>
          Don't have an account? Register!
        </TextLink>
        {/*TODO: FIX THIS BARBARIC LOGOUT*/}
        <TextLink
          onPress={() => {
            removeData('user_access_token');
            navigation.navigate('IntroPage');
          }}>
          Logout
        </TextLink>
      </Fragment>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export {LoginPage};
