import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation';

/************************************************/
// Uncomment below section when testing useState, Hookstate, MobX
/************************************************/
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

/************************************************/
// Uncomment below section when testing Redux
/************************************************/
// import React from 'react';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import Store from './src/providers/reduxCode';

// const App = () => {
//   const {reduxStore, persister} = Store();

//   return (
//     <PersistGate loading={null} persistor={persister}>
//       <Provider store={reduxStore}>
//         <NavigationContainer>
//           <AppStack />
//         </NavigationContainer>
//       </Provider>
//     </PersistGate>
//   );
// };

/************************************************/
// Uncomment below section when testing Context API
/************************************************/
// import React, {useReducer} from 'react';
// import {
//   counter,
//   CounterContext,
//   initialState,
// } from './src/providers/contextAPICode';

// const App = () => {
//   const [state, dispatch] = useReducer(counter, initialState);

//   return (
//     <CounterContext.Provider value={[state, dispatch]}>
//       <NavigationContainer>
//         <AppStack />
//       </NavigationContainer>
//     </CounterContext.Provider>
//   );
// };

/************************************************/
// Uncomment below section when testing Easy Peasy
/************************************************/
// import {StoreProvider} from 'easy-peasy';
// import React from 'react';
// import store from './src/providers/easyPeasyCode';

// const App = () => {
//   return (
//     <StoreProvider store={store}>
//       <NavigationContainer>
//         <AppStack />
//       </NavigationContainer>
//     </StoreProvider>
//   );
// };

/************************************************/
// Uncomment below section when testing recoil
/************************************************/
// import React, {Suspense} from 'react';
// import {Text} from 'react-native';
// import {RecoilRoot} from 'recoil';

// const App = () => {
//   return (
//     <RecoilRoot>
//       <Suspense fallback={<Text>Loading...</Text>}>
//         <NavigationContainer>
//           <AppStack />
//         </NavigationContainer>
//       </Suspense>
//     </RecoilRoot>
//   );
// };

export default App;
