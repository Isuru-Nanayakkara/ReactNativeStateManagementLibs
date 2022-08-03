import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, makeObservable, observable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';

class CounterStore {
  count = 0;

  constructor() {
    makeObservable(
      this,
      {
        count: observable,
        increment: action,
        decrement: action,
      },
      {autoBind: true},
    );

    makePersistable(this, {
      name: 'Counter',
      properties: ['count'],
      storage: AsyncStorage,
    });
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

// eslint-disable-next-line no-undef
export default store = new CounterStore();
