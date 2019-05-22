import { createStore } from 'redux';

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case 'ADD_DRINK':
      return { ...state, drink: payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());
