import { createStore } from 'redux';

const initialState = {
  drink: [],
  chips: [],
  sandwich: []
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case 'ADD_DRINK':
      return { ...state, drink: [...state.drink, payload] };
    case 'ADD_CHIPS':
      return { ...state, chips: [...state.chips, payload] };
    case 'ADD_SAND':
      return { ...state, sandwich: [...state.sandwich, payload] };
    case 'REMOVE_DRINK':
      return { ...state, drink: state.drink.filter(d => d !== payload) };
    case 'REMOVE_CHIPS':
      return { ...state, chips: state.chips.filter(c => c !== payload) };
    case 'REMOVE_SAND':
      return { ...state, sandwich: state.sandwich.filter(s => s !== payload) };
    case 'EMPTY':
      return { ...initialState };
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

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'coconut water'
});

store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'salt & vin'
});

store.dispatch({
  type: 'REMOVE_SAND',
  payload: 'roast beef'
});

