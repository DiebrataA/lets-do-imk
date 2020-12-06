import React, {Fragment, useEffect, useState} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {Input, TextLink, Loading, Button} from '../../components/common';
import axios from 'axios';
import {BASE_API} from '../../Constant';
import {saveData, getData} from '../../services';
import Styles from './auth.styles';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() => {
    getData('user_acc_token')
      .then((jwt) => console.log(jwt))
      .then((jwt) => {
        //TODO: pls help fix this, async storage not working
        jwt =
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA3MzQ1Njc5LCJqdGkiOiJmMDkzYjE4ODFmNzM0NGI2OGJkZjQ1MDEyZDEwYzM5MSIsInVzZXJfaWQiOjMxfQ.yjtI0mdU3nwp_7viwqwITZK6HXuaVVwjUFMlBXkaiy8';
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
  // const {container, form, section, errorTextStyle} = styles;

  return (
    <KeyboardAvoidingView behavior="height" style={Styles.container}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>Hello Again! Welcome back</Text>
      </View>
      <Fragment>
        <View style={Styles.form}>
          <View style={Styles.section}>
            <Input
              placeholder="Username"
              value={username}
              onChangeText={(uname) => setUsername(uname)}
            />
          </View>

          <View style={Styles.section}>
            <Input
              secureTextEntry
              placeholder="Password"
              value={password}
              onChangeText={(pass) => setPassword(pass)}
            />
          </View>

          <Text style={Styles.errorTextStyle}>{error}</Text>

          {!loading ? (
            <Button onPress={loginUser}>Login</Button>
          ) : (
            <Loading size={'large'} />
          )}
        </View>

        {/*TODO: FIX THIS BARBARIC LOGOUT*/}
      </Fragment>
      <View style={Styles.signUpContainer}>
        <Text
          style={Styles.signUp}
          onPress={() => navigation.navigate('RegistrationPage')}>
          SIGN UP
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export {LoginPage};
