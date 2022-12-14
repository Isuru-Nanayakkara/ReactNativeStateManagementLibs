import AsyncStorage from '@react-native-async-storage/async-storage';
import {atom, DefaultValue} from 'recoil';

// https://github.com/polemius/recoil-persist/issues/20#issuecomment-858678683
const persistAtom = key => {
  return ({setSelf, onSet}) => {
    setSelf(
      AsyncStorage.getItem(key).then(savedValue =>
        savedValue != null ? JSON.parse(savedValue) : new DefaultValue(),
      ),
    );

    onSet(newValue => {
      if (newValue instanceof DefaultValue) {
        AsyncStorage.removeItem(key);
      } else {
        AsyncStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
};

export const Counter = atom({
  key: 'count',
  default: 0,
  effects_UNSTABLE: [persistAtom('counter')],
});
