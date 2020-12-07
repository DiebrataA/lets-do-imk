import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#252A34',
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 100,
  },
  item: {},
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: 5,
  },
  menu: {
    width: 30,
    height: 2,
    backgroundColor: '#111',
    margin: 2,
    borderRadius: 3,
  },
  text: {
    marginVertical: 15,
    fontSize: 14,
    marginLeft: 20,
  },
  date: {
    padding: 5,
    backgroundColor: '#9088D4',
    borderRadius: 45,
    borderWidth: 0.5,
    color: '#fff',
    fontSize: 10,
    marginLeft: 45,
    width: '35%',
    textAlign: 'center',
  },

  textInput: {
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    borderColor: 'gray',
    borderBottomWidth: 2,
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableHighlight: {
    backgroundColor: 'white',
    marginVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});
export default styles;
