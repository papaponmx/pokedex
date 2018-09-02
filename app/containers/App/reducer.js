/*
 * AppReducer
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

import {
  LOAD_POKEMON_DATA_SUCCESS,
  LOAD_POKEMON_DATA,
  LOAD_POKEMON_DATA_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentPokemon: false,
  pokemonData: fromJS({}),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POKEMON_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['pokemonData'], false);
    case LOAD_POKEMON_DATA_SUCCESS:
      return state
        .setIn(['pokemonData'], action.repos)
        .set('loading', false)
        .set('currentPokemon', action.pokemonName);
    case LOAD_POKEMON_DATA_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
