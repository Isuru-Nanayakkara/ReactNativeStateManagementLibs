import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
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
  const {reduxStore, persister} = Store();

  return (
    <PersistGate loading={null} persistor={persister}>
      <Provider store={reduxStore}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export default App;
