const ADD_DRINK = 'ADD_DRINK';

const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

export {
  ADD_DRINK,
  addDrink
};
