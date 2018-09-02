/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_POKEMON_NAME } from './constants';
// The initial state of the App
export const initialState = fromJS({
  pokemonName: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_POKEMON_NAME:
      return state.set('pokemonName', action.name);
    default:
      return state;
  }
}

export default homeReducer;
