/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_POKEMON_DATA,
  LOAD_POKEMON_DATA_SUCCESS,
  LOAD_POKEMON_DATA_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_POKEMON_DATA
 */
export function loadPokemonData() {
  return {
    type: LOAD_POKEMON_DATA,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} pokemonName The current pokemonName
 *
 * @return {object}      An action object with a type of LOAD_POKEMON_DATA_SUCCESS passing the repos
 */
export function pokemonDataLoaded(data, pokemonName) {
  return {
    type: LOAD_POKEMON_DATA_SUCCESS,
    data,
    pokemonName,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_POKEMON_DATA_ERROR passing the error
 */
export function pokemonDataLoadingError(error) {
  return {
    type: LOAD_POKEMON_DATA_ERROR,
    error,
  };
}
