import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
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
    marginVertical: 30,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  date: {
    marginTop: 8,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 0,
    marginRight: 35,
    backgroundColor: '#00BCD4',
    borderRadius: 45,
    borderWidth: 0.5,
    borderColor: '#fff',
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
    backgroundColor: 'white',
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
