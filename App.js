import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import AppStack from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
