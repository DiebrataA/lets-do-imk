import React, {Fragment, useState} from 'react';
import {View, Text, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {Input, TextLink, Loading, Button} from '../../components/common';
import axios from 'axios';
import {BASE_API} from '../../Constant';
import Styles from './auth.styles';
import {ScrollView} from 'react-native-gesture-handler';

const RegistrationPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const registerUser = () => {
    setLoading(true);
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
        // axios
        //   .then((response) => {
        //     this.props.newJWT(response.data.access);
        //   })
        //   .catch((error) => {
        //     if (error.response) {
        //       console.log(error.response.data);
        //     }
        //     this.onRegistrationFail();
        //   });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
        setError('Registration Failed');
        setLoading(false);
      });
  };
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <KeyboardAvoidingView
      style={Styles.container}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={Styles.titleContainerRegis}>
        <Text style={Styles.title}>Hello! Signup to get started</Text>
      </View>
      <Fragment>
        <ScrollView
          style={Styles.formRegis}
          showsVerticalScrollIndicator={false}>
          <View style={Styles.section}>
            <Input
              placeholder="username"
              label="Username"
              value={username}
              onChangeText={(uname) => setUsername(uname)}
            />
          </View>

          <View style={Styles.section}>
            <Input
              placeholder="First Name"
              label="First Name"
              value={first_name}
              onChangeText={(fname) => setFirstName(fname)}
            />
          </View>

          <View style={Styles.section}>
            <Input
              placeholder="Last Name"
              label="Last Name"
              value={last_name}
              onChangeText={(lname) => setLastName(lname)}
            />
          </View>

          <View style={Styles.section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={(pw) => setPassword(pw)}
            />
          </View>

          <Text style={Styles.errorTextStyle}>{error}</Text>

          {!loading ? (
            <Button onPress={registerUser}>Register</Button>
          ) : (
            <Loading size={'large'} />
          )}
          <View style={Styles.login}>
            <Text
              style={Styles.haveAccount}
              onPress={() => navigation.navigate('LoginPage')}>
              Already have an account?
              <Text style={{color: '#706897'}}> Log in</Text>
            </Text>
          </View>
        </ScrollView>
      </Fragment>
    </KeyboardAvoidingView>
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

export {RegistrationPage};
