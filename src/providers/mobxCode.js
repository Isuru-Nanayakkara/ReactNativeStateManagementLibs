import {action, makeObservable, observable} from 'mobx';

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
