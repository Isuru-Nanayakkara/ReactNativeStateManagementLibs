import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import styles from '../../src/styles';
import {useCountState} from '../providers/hookstateCode';

const HookstateScreen = () => {
  const state = useCountState();

  function incrementCount() {
    state.increment();
  }

  function decrementCount() {
    state.decrement();
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.countLabel}>{state.getCount()}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
      <Button title="Decrement Count" onPress={decrementCount} />
    </SafeAreaView>
  );
};

export default HookstateScreen;
