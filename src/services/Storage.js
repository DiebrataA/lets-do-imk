import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key, value) => {
  try {
    AsyncStorage.setItem(key, value);
    console.log('data saved' + JSON.stringify(value));
  } catch (error) {
    console.log('saveData async storage error:' + error.message);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.stringify(jsonValue) : null;
  } catch (e) {
    console.log('getData async storage error:' + e.message);
  }
};

const removeData = async (key) => {
  AsyncStorage.removeItem(key).catch((e) =>
    console.log('removeData async storage error:' + e.message),
  );
};
export {saveData, getData, removeData};
