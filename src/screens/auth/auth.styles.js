import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  form: {
    width: '90%',
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    backgroundColor: 'rgba(144, 136, 212, 0.2)',
    marginBottom: 16,
    fontSize: 16,
    padding: 10,
    borderRadius: 16,
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red',
  },
  titleContainer: {
    width: '60%',
    alignSelf: 'flex-start',
    marginHorizontal: 22,
    justifyContent: 'center',
    flex: 1,
  },
  titleContainerRegis: {
    width: '55%',
    alignSelf: 'flex-start',
    marginHorizontal: 22,
    justifyContent: 'center',
    flex: 0.4,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#252A34',
  },
  signUpContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    marginTop: 20,
    marginBottom: 30,
    paddingBottom: 30,
  },
  signUp: {
    fontSize: 14,
    color: '#706897',
    letterSpacing: 0.3,
  },
  haveAccount: {
    letterSpacing: 0.5,
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#BDBDBD',
    textAlign: 'center',
    marginTop: 16,
  },
  login: {
    justifyContent: 'flex-start',
  },
  formRegis: {
    width: '90%',
    flex: 0.7,
    marginTop: 20,
  },
});
export default main;
