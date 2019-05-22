const ADD_DRINK = 'ADD_DRINK';
const ADD_CHIPS = 'ADD_CHIPS';
const ADD_SAND = 'ADD_SAND';
const REMOVE_DRINK = 'REMOVE_DRINK';
const REMOVE_CHIPS = 'REMOVE_CHIPS';
const REMOVE_SAND = 'REMOVE_SAND';

const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});

const addSand = sandwich => ({
  type: ADD_SAND,
  payload: sandwich
});

const removeDrink = drink => ({
  type: REMOVE_DRINK,
  payload: drink
});

const removeChips = chips => ({
  type: REMOVE_CHIPS,
  payload: chips
});

const removeSand = sandwich => ({
  type: REMOVE_SAND,
  payload: sandwich
});

export {
  ADD_DRINK,
  ADD_CHIPS,
  ADD_SAND,
  REMOVE_DRINK,
  REMOVE_CHIPS,
  REMOVE_SAND,
  addDrink,
  addChips,
  addSand,
  removeDrink,
  removeChips,
  removeSand
};
