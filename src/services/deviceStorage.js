import AsyncStorage from '@react-native-async-storage/async-storage';

const saveKeyValue = async (key, value) => {
  try {
    AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('async storage error:' + error.message);
  }
};
export {saveKeyValue};
