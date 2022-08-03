import {NavigationContainer} from '@react-navigation/native';
// import React, {useReducer} from 'react';
import AppStack from './src/navigation';

// When using Redux
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import Store from './src/providers/reduxCode';

// When using Context API
import React, {useReducer} from 'react';
import {
  counter,
  CounterContext,
  initialState,
} from './src/providers/contextAPICode';

/**********************************************/

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppStack />
//     </NavigationContainer>
//   );
// };

// When using Redux
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

// When using Context API
const App = () => {
  const [state, dispatch] = useReducer(counter, initialState);

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </CounterContext.Provider>
  );
};

export default App;
