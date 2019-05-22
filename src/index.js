import { createStore } from 'redux';
import { addDrink, addChips, addSand, removeDrink, removeChips, removeSand, empty } from './actions/lunchActions';
import reducer from './reducers/lunchReducer';

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

store.dispatch(addDrink('coconut water'));

store.dispatch(addChips('salt & vin'));

store.dispatch(addSand('roast beef'));

store.dispatch(empty());
