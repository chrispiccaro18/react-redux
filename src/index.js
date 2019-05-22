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

log();

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'coconut water'
});

log();

function log() {
  console.log(store.getState());
}
