import React, {useContext} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import styles from '../../src/styles';
import {
  CounterContext,
  DecrementCount,
  IncrementCount,
} from '../providers/contextAPICode';

const ContextAPIScreen = () => {
  const [state, dispatch] = useContext(CounterContext);

  function incrementCount() {
    dispatch(IncrementCount());
  }

  function decrementCount() {
    dispatch(DecrementCount());
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.countLabel}>{state.count}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
      <Button title="Decrement Count" onPress={decrementCount} />
    </SafeAreaView>
  );
};

export default ContextAPIScreen;
