import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import ContextAPIScreen from './src/screens/contextAPIScreen';
import EasyPeasyScreen from './src/screens/easyPeasyScreen';
import HookstateScreen from './src/screens/hookstateScreen';
import MobXScreen from './src/screens/mobxScreen';
import RecoilScreen from './src/screens/recoilScreen';
import ReduxScreen from './src/screens/reduxScreen';
import UseStateScreen from './src/screens/useStateScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

const AppStack = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />

      <Screen name="UseState" component={UseStateScreen} />
      <Screen name="Redux" component={ReduxScreen} />
      <Screen name="Context API" component={ContextAPIScreen} />
      <Screen name="Hookstate" component={HookstateScreen} />
      <Screen name="Easy Peasy" component={EasyPeasyScreen} />
      <Screen name="MobX" component={MobXScreen} />
      <Screen name="Recoil" component={RecoilScreen} />
    </Navigator>
  );
};

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

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default App;
