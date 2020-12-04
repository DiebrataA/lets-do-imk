import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9088D4',
    paddingTop: 10,
  },
  titleContainer: {
    height: '5%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 60,
  },

  title: {
    fontSize: 18,
    fontFamily: 'SeoulHangang',
    letterSpacing: 0.24,
    color: 'white',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    color: 'white',
  },
  title2: {
    fontSize: 24,
    fontFamily: 'Rubik',
    color: 'white',
  },
  descriptionContainer: {
    width: '60%',
    alignSelf: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: 'white',
    marginVertical: 5,
    textAlign: 'center',
    paddingVertical: 10,
    letterSpacing: 0.24,
    lineHeight: 24,
  },
  imageContainer: {
    flex: 1,
    width,
    marginVertical: 28,
  },
  introImages: {
    width: '100%',
    height: undefined,
    aspectRatio: 4 / 3,
  },
  buttonContainer: {
    flex: 1,
    width: 315,
    alignSelf: 'center',
    marginTop: 70,
  },
  buttonStart: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: 263,
    alignSelf: 'center',
    borderRadius: 32,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    letterSpacing: 1.6,
    color: '#706897',
  },

  //Landing Page
  landingContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
  },
  titleLanding: {
    fontSize: 18,
    fontFamily: 'SeoulHangang',
    letterSpacing: 0.24,
    color: '#9088D4',
  },
  landingImageContainer: {
    flex: 1.5,
    width,
  },
  landingImages: {
    width: '100%',
    aspectRatio: 1,
  },
  weDoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  weDo: {
    fontSize: 24,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    color: '#706897',
    letterSpacing: 24,
  },
  landingDescription: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#BDBDBD',
    marginVertical: 5,
    textAlign: 'center',
    paddingVertical: 10,
    letterSpacing: 0.24,
    lineHeight: 24,
  },
});
export default main;
