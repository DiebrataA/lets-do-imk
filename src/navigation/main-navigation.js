import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroPage from '../screens/intro/intro';
import LandingPage from '../screens/intro/landing';
import TodoPage from '../screens/home/Todo';
import CategoryPage from '../screens/home/CategoryPage';
import {RegistrationPage} from '../screens/auth/RegistrationPage';
import {LoginPage} from '../screens/auth/LoginPage';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Intro Page">
    <Stack.Screen
      name="IntroPage"
      component={IntroPage}
      options={{
        title: '',
        headerTransparent: true,
        headerStyle: {borderBottomWidth: 0},
      }}
    />
    <Stack.Screen
      name="LandingPage"
      component={LandingPage}
      options={{
        title: '',
        headerTransparent: true,
        headerStyle: {borderBottomWidth: 0},
      }}
    />
    <Stack.Screen
      name="RegistrationPage"
      component={RegistrationPage}
      options={{
        title: '',
        headerTransparent: true,
        headerStyle: {borderBottomWidth: 0},
      }}
    />
    <Stack.Screen
      name="LoginPage"
      component={LoginPage}
      options={{
        title: '',
        headerTransparent: true,
        headerStyle: {
          borderBottomWidth: 0,
        },
      }}
    />
    <Stack.Screen
      name="CategoryPage"
      component={CategoryPage}
      options={{
        title: 'Home',
        headerStyle: {
          borderBottomWidth: 0,
          height: 120,
          backgroundColor: 'transparent',
          elevation: 0,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 24},
      }}
    />
    <Stack.Screen
      name="TodoPage"
      component={TodoPage}
      options={{
        title: '',
        headerTransparent: true,
        headerStyle: {borderBottomWidth: 0},
      }}
    />
  </Stack.Navigator>
);
