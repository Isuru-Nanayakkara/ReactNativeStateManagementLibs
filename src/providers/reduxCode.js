import {combineReducers, createStore} from 'redux';

// State
const initialState = {
  count: 0,
};

// Actions
export const IncrementCount = () => {
  return {
    type: 'INCREMENT_COUNT',
  };
};

export const DecrementCount = () => {
  return {
    type: 'DECREMENT_COUNT',
  };
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'DECREMENT_COUNT':
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({counter});

// Redux store
export default () => {
  let reduxStore = createStore(rootReducer);
  return reduxStore;
};
