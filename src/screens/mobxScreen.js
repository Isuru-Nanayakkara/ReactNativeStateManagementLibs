import {observer} from 'mobx-react';
import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import styles from '../../src/styles';
import store from '../providers/mobxCode';

const MobXScreen = () => {
  function incrementCount() {
    store.increment();
  }

  function decrementCount() {
    store.decrement();
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.countLabel}>{store.count}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
      <Button title="Decrement Count" onPress={decrementCount} />
    </SafeAreaView>
  );
};

export default observer(MobXScreen);
