import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroPage from '../screens/intro/intro';
import LandingPage from '../screens/intro/landing';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Intro Page">
    <Stack.Screen
      name="Intro Page"
      component={IntroPage}
      options={{
        title: '',
        headerTransparent: true,
        headerStyle: {borderBottomWidth: 0},
      }}
    />
    <Stack.Screen
      name="Landing Page"
      component={LandingPage}
      options={{
        title: '',
        headerTransparent: true,
        headerStyle: {borderBottomWidth: 0},
      }}
    />
  </Stack.Navigator>
);
