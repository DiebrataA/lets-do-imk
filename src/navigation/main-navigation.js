import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroPage from '../screens/intro/intro';
import LandingPage from '../screens/intro/landing';
import AuthPage from '../screens/auth/AuthPage';
import TodoPage from '../screens/home/Todo';
import CategoryPage from '../screens/home/CategoryPage';

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
      name="LoginPage"
      component={AuthPage}
      options={{
        title: '',
        headerTransparent: true,
        headerStyle: {borderBottomWidth: 0},
      }}
    />
    <Stack.Screen
      name="CategoryPage"
      component={CategoryPage}
      options={{
        title: '',
        headerTransparent: true,
        headerStyle: {borderBottomWidth: 0},
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
