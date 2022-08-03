import {useStoreActions, useStoreState} from 'easy-peasy';
import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import styles from '../../src/styles';

const EasyPeasyScreen = () => {
  const counterState = useStoreState(state => state);
  const counterActions = useStoreActions(actions => actions);

  function incrementCount() {
    counterActions.increment();
  }

  function decrementCount() {
    counterActions.decrement();
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.countLabel}>{counterState.count}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
      <Button title="Decrement Count" onPress={decrementCount} />
    </SafeAreaView>
  );
};

export default EasyPeasyScreen;
