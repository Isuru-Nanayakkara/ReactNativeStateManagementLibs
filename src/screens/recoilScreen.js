import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import styles from '../../src/styles';
import {Counter} from '../providers/recoilCode';

const RecoilScreen = () => {
  const [count, setCount] = useRecoilState(Counter);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.countLabel}>{count}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
      <Button title="Decrement Count" onPress={decrementCount} />
    </SafeAreaView>
  );
};

export default RecoilScreen;
