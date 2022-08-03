import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from './homeScreen';
import ContextAPIScreen from './screens/contextAPIScreen';
import EasyPeasyScreen from './screens/easyPeasyScreen';
import HookstateScreen from './screens/hookstateScreen';
import MobXScreen from './screens/mobxScreen';
import RecoilScreen from './screens/recoilScreen';
import ReduxScreen from './screens/reduxScreen';
import UseStateScreen from './screens/useStateScreen';

const Stack = createNativeStackNavigator();

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

export default AppStack;
