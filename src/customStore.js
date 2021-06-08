// import reducer from './reducer'
import reducer from "./reducer.js";
const createStore = (reducer) => {
  let state;
  const listeners = [];

  const subscribe = (listener) => listeners.push(listener);

  const dispatch = (action) => {
    state = reducer(state, action);
    for (let index = 0; index < listeners.length; index++) {
      listeners[index]();
    }
  };

  const getState = () => state;
  return { subscribe, dispatch, getState };
};

export default createStore(reducer);
