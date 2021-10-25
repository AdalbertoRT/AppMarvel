import AsyncStorage from '@react-native-async-storage/async-storage';
import {duplicatedRemove} from './duplicatedRemove';

export const storeData = async obj => {
  const newObj = duplicatedRemove(obj);
  try {
    const json = JSON.stringify(newObj);
    await AsyncStorage.setItem('@myHeroes', json);
  } catch (e) {
    console.log(e.message);
  }
};

export const getData = async () => {
  try {
    const json = await AsyncStorage.getItem('@myHeroes');
    return json !== null ? JSON.parse(json) : null;
  } catch (e) {
    console.log(e.message);
  }
};
