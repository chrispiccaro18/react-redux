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
    case 'ADD_CHIPS':
      return { ...state, chips: payload };
    case 'ADD_SAND':
      return { ...state, sandwich: payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'coconut water'
});

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'salt & vin'
});

store.dispatch({
  type: 'ADD_SAND',
  payload: 'roast beef'
});
