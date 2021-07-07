# Redux

## Agenda

* store
* actions
* reducers
* using redux
  * `getState`
  * `dispatch`
  * `subscribe`

## Dependencies

* `npm i redux`

## Resources

* [Three Principles](https://redux.js.org/introduction/three-principles)

## Store

The store is responsible for holding our applications state. You can
think of it as a global object accessible from anywhere in your application,
like `window.location`.

## Actions

Actions are plain JavaScript objects that send data/events to your store.
Actions always have a `type` key which is the name of the event.
Additionally, an action can also have a `payload`.

```js
const myAction = {
  type: 'DO_STUFF'
}
```

## Reducers

Reducers are pure functions responsible for updating our state in response
to actions. Every action we dispatch will be sent to the reducer along with
the current state. The reducer is then responsible for handling the action
and returning a new state object based on the action.

```js
function reducer(state, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

**NOTE** don't forget to provide a default case in case your reducer
cannot handle a particular action.

We can also setup initial state with our reducer.

```js
const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

## Using Redux

We can create a new store object by using the `createStore` function
and passing it a reducer.

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
```

### `getState`

We can get our current state with `getState`.

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState()); // { stuff: 'unfinished' }
```

### `dispatch`

We can send actions to our state with `dispatch`.

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({
  type: 'DO_STUFF'
})
console.log(store.getState()); // { stuff: 'done' }
```

### `subscribe`

We can subscribe to state changes with subscribe

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  // will print every time state changes
  console.log(store.getState());
});

store.dispatch({
  type: 'DO_STUFF'
})
```

`subscribe` returns an unsubscribe function we can use to
stop listening to state changes

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  // will print every time state changes
  console.log(store.getState());
});

store.dispatch({
  type: 'DO_STUFF'
})

unsubscribe();
```

# Redux Actions

## Agenda

* action creators
* type constants
* actions directory

## Resources

* [Actions](https://redux.js.org/basics/actions)

## Actions Creators

While passing objects to `store.dispatch` is fine, its often better
to use an action creator. An action creator is a function that creates
an action object.

```js
const addDrink = drink => ({
  type: 'ADD_DRINK',
  payload: drink
});
```

Now, anytime we want to add a drink we can dispatch the result of our
action creator.

```js
store.dispatch(addDrink('water'));
```

## Type Constants

To prevent typos and improve consistency we often create a `const` for
each action type.

```js
const ADD_DRINK = 'ADD_DRINK';
const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});
```

We can then reuse this type in our reducer.

```js
function reducer(state, action) {
  switch(action.type) {
    case ADD_DRINK:
      // do stuff
    default:
      return state
  }
}
```

## Action directory

To improve usability and readability we often create a directory
for our action creators `src/actions`. Inside of that directory
we create a new file for similar actions `src/actions/lunchActions.js`

```js
export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});
```

# Redux Reducers

## Agenda

* reducers directory
* type constants
* combine reducers

## Resources

* [Reducers](https://redux.js.org/basics/reducers)

## Reducers directory

To improve usability and readability we often create a directory
for our reducers `src/reducers`. Inside of that directory
we create a new file for each reducer `src/reducer/lunchReducer.js`

```js
const initialState = {
  stuff: 'unfinished'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case: 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

## Type Constants

To prevent typos and improve consistency we often create a `const` for
each action type and import them into our reducer file.

```js
import { DO_STUFF } from '../action/doActions.js';

const initialState = {
  stuff: 'unfinished'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case: DO_STUFF:
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

## Combine Reducers

As our store gets larger and our reducer begins to handle more
state, its often best to start splitting our reducer into multiple
reducers.

```js
// src/reducers/lunchReducer.js
import {
  ADD_DRINK,
  ADD_SANDWICH,
  ADD_CHIPS,
  REMOVE_DRINK,
  REMOVE_SANDWICH,
  REMOVE_CHIPS
} from '../actions/lunchActions';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
    case REMOVE_CHIPS:
      return { ...state, chips: null };
    default:
      return state;
  }
}
```

```js
// src/reducers/doReducer.js
import {
  DO_STUFF
} from '../actions/doActions';

const initialState = {
  stuff: 'unfinished'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case: DO_STUFF:
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

We can then combine these reducers.

```js
// src/reducers/index.js
import { combineReducers } from 'redux';
import lunch from './lunchReducer';
import do from './doReducer';

export default combineReducers({
  lunch,
  do
});
```

This results in a store object with all lunch state nested in a
lunch key and all do state nested in a do key.

```js
{
  lunch: {
    drink: null,
    sandwich: null,
    chips: null
  },
  do: {
    stuff: 'unfinished'
  }
}
```
