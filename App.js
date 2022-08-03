import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import AppStack from './src/navigation';
import Store from './src/providers/reduxCode';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppStack />
//     </NavigationContainer>
//   );
// };

// When using Redux
const App = () => {
  const {reduxStore} = Store();

  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
