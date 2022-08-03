import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DecrementCount, IncrementCount} from '../providers/reduxCode';
import styles from '../styles';

const ReduxScreen = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  function incrementCount() {
    dispatch(IncrementCount());
  }

  function decrementCount() {
    dispatch(DecrementCount());
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.countLabel}>{counter.count}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
      <Button title="Decrement Count" onPress={decrementCount} />
    </SafeAreaView>
  );
};

export default ReduxScreen;
