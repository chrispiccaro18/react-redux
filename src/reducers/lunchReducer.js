import { ADD_DRINK, ADD_CHIPS, ADD_SAND, REMOVE_DRINK, REMOVE_CHIPS, REMOVE_SAND, EMPTY } from '../actions/lunchActions';

const initialState = {
  drink: [],
  chips: [],
  sandwich: []
};

export default function reducer(state = initialState, action) {
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
    case EMPTY:
      return { ...initialState };
    default:
      return state;
  }
}
