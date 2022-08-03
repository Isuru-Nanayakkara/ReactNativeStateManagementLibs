import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import appStyles from '../../src/styles';

const EasyPeasyScreen = () => {
  return (
    <SafeAreaView style={appStyles.appContainer}>
      <Text style={appStyles.countLabel}>1</Text>
      <Button title="Increment Count" />
      <Button title="Decrement Count" />
    </SafeAreaView>
  );
};

export default EasyPeasyScreen;
