import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key, value) => {
  try {
    console.log('saving data');
    console.log(key);
    console.log(value);
    AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('saveData async storage error:' + error.message);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log('getData async storage error:' + e.message);
  }
};
export {saveData, getData};
