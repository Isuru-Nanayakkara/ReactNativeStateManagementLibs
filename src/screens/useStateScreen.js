import React, {useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import styles from '../../src/styles';

const UserStateScreen = () => {
  const [count, setCount] = useState(0);

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

export default UserStateScreen;
