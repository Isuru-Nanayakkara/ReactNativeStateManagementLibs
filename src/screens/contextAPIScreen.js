import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import styles from '../../src/styles';

const ContextAPIScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.countLabel}>1</Text>
      <Button title="Increment Count" />
      <Button title="Decrement Count" />
    </SafeAreaView>
  );
};

export default ContextAPIScreen;
