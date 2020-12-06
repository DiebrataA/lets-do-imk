import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Styles from './intro.style.js';
import LandingImage from '../../assets/Landing.png';

const Landing = ({navigation}) => {
  const onPressStartButton = () => {
    navigation.navigate('RegistrationPage');
  };
  return (
    <SafeAreaView style={Styles.landingContainer}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.titleLanding}>Let's Do</Text>
      </View>
      <View style={Styles.contentContainer}>
        <View style={Styles.landingImageContainer}>
          <Image source={LandingImage} style={Styles.landingImages} />
        </View>
        <View style={Styles.weDoContainer}>
          <Text style={Styles.weDo}>What we do</Text>
        </View>
        <View style={Styles.descriptionContainerLanding}>
          <Text style={Styles.landingDescription}>
            Thousand of people are using Let’s Do for make To Do List for better
            productivity
          </Text>
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.buttonSignUp}
            onPress={onPressStartButton}>
            <Text style={Styles.buttonTextSignup}>SIGN UP</Text>
          </TouchableOpacity>
          <Text style={Styles.haveAccount}>
            ALready Have an Account ?{' '}
            <Text
              style={{color: '#706897'}}
              onPress={() => navigation.navigate('LoginPage')}>
              LOG IN
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Landing;
