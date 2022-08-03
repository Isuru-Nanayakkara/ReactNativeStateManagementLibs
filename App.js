import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation';

/************************************************/
// Uncomment below section for normal behavior without libraries
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
// Uncomment below section when trying Redux
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
// Uncomment below section when trying Context API
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

export default App;
