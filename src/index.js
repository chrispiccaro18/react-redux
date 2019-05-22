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

store.subscribe(() => {
  console.log(store.getState());
});

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'coconut water'
});

