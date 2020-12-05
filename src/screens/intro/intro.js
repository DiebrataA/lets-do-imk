import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Styles from './intro.style.js';
import IntroImage from '../../assets/Intro.png';

const Intro = ({navigation}) => {
  const onPressStartButton = () => {
    navigation.navigate('LandingPage');
  };
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>Let's Do</Text>
      </View>
      <View style={Styles.contentContainer}>
        <View style={Styles.welcomeContainer}>
          <Text style={Styles.welcome}>Hi, Welcome To</Text>
          <Text style={Styles.title2}>Let's Do</Text>
        </View>
        <View style={Styles.descriptionContainer}>
          <Text style={Styles.description}>
            Explore the app, Let’s make to do list with Let’s Do
          </Text>
        </View>
        <View style={Styles.imageContainer}>
          <Image source={IntroImage} style={Styles.introImages} />
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.buttonStart}
            onPress={onPressStartButton}>
            <Text style={Styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Intro;
