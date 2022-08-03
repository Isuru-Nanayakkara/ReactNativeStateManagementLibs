import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import styles from '../src/styles';

const HomeScreen = ({navigation}) => {
  function goTo(path) {
    navigation.navigate(path);
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <Button title="1) useState" onPress={() => goTo('UseState')} />
      <Button title="2) Redux" onPress={() => goTo('Redux')} />
      <Button title="3) Context API" onPress={() => goTo('Context API')} />
      <Button title="4) Hookstate" onPress={() => goTo('Hookstate')} />
      <Button title="5) Easy Peasy" onPress={() => goTo('Easy Peasy')} />
      <Button title="6) MobX" onPress={() => goTo('MobX')} />
      <Button title="7) Recoil" onPress={() => goTo('Recoil')} />
    </SafeAreaView>
  );
};

export default HomeScreen;
