import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/homeScreen';
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

export default App;
