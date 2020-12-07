import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 80,
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
    textAlign: 'left',
  },
  textSave: {
    marginVertical: 15,
    fontSize: 18,
    marginLeft: 20,
    textAlign: 'left',
  },
  textTitle: {
    marginVertical: 15,
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  date: {
    padding: 5,
    backgroundColor: '#9088D4',
    borderRadius: 45,
    color: '#fff',
    fontSize: 10,
    marginLeft: 45,
    width: '35%',
    textAlign: 'center',
  },

  textInput: {
    width: '100%',
    marginBottom: 30,
    fontSize: 16,
    padding: 15,
    backgroundColor: 'rgba(144, 136, 212, 0.2)',
    borderRadius: 16,
  },
  modalView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 30,
  },
  touchableHighlight: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
});
export default styles;
