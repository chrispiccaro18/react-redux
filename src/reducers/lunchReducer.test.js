import reducer from './lunchReducer';
import { addDrink, removeDrink, addChips, removeChips, addSand, removeSand } from '../actions/lunchActions';

describe('lunch reducer', () => {
  it('can handle adding a drink', () => {
    const initialState = {
      drink: [],
      chips: ['salt & pepper'],
      sandwich: ['jam']
    };

    expect(reducer(initialState, addDrink('coconut water'))).toEqual({
      drink: ['coconut water'],
      chips: ['salt & pepper'],
      sandwich: ['jam']
    });
  });
  
  it('can handle removing a drink', () => {
    const initialState = {
      drink: ['coconut water'],
      chips: ['salt & pepper'],
      sandwich: ['jam']
    };

    expect(reducer(initialState, removeDrink('coconut water'))).toEqual({
      drink: [],
      chips: ['salt & pepper'],
      sandwich: ['jam']
    });
  });
  
  it('can handle adding chips', () => {
    const initialState = {
      drink: ['coconut water'],
      chips: ['salt & pepper'],
      sandwich: ['jam']
    };

    expect(reducer(initialState, addChips('salt & vin'))).toEqual({
      drink: ['coconut water'],
      chips: ['salt & pepper', 'salt & vin'],
      sandwich: ['jam']
    });
  });

  it('can handle removing chips', () => {
    const initialState = {
      drink: ['coconut water'],
      chips: ['salt & pepper', 'salt & vin'],
      sandwich: ['jam']
    };

    expect(reducer(initialState, removeChips('salt & vin'))).toEqual({
      drink: ['coconut water'],
      chips: ['salt & pepper'],
      sandwich: ['jam']
    });
  });
  
  it('can handle adding a sandwich', () => {
    const initialState = {
      drink: ['coconut water'],
      chips: ['salt & pepper'],
      sandwich: ['jam']
    };

    expect(reducer(initialState, addSand('pb&j'))).toEqual({
      drink: ['coconut water'],
      chips: ['salt & pepper'],
      sandwich: ['jam', 'pb&j']
    });
  });

  it('can handle removing a sandwich', () => {
    const initialState = {
      drink: ['coconut water'],
      chips: ['salt & pepper'],
      sandwich: ['jam']
    };

    expect(reducer(initialState, removeSand('jam'))).toEqual({
      drink: ['coconut water'],
      chips: ['salt & pepper'],
      sandwich: []
    });
  });
});
