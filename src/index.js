import { createStore } from 'redux';
import { addDrink, ADD_DRINK, ADD_CHIPS, ADD_SAND, addChips, addSand, REMOVE_DRINK, REMOVE_CHIPS, REMOVE_SAND, removeDrink, removeChips, removeSand } from './actions/lunchActions';

const initialState = {
  drink: [],
  chips: [],
  sandwich: []
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case ADD_DRINK:
      return { ...state, drink: [...state.drink, payload] };
    case ADD_CHIPS:
      return { ...state, chips: [...state.chips, payload] };
    case ADD_SAND:
      return { ...state, sandwich: [...state.sandwich, payload] };
    case REMOVE_DRINK:
      return { ...state, drink: state.drink.filter(d => d !== payload) };
    case REMOVE_CHIPS:
      return { ...state, chips: state.chips.filter(c => c !== payload) };
    case REMOVE_SAND:
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

store.dispatch(addDrink('coconut water'));

store.dispatch(addChips('salt & vin'));

store.dispatch(addSand('roast beef'));

store.dispatch(removeDrink('coconut water'));

store.dispatch(removeChips('salt & vin'));

store.dispatch(removeSand('roast beef'));

