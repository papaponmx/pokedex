/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_POKEMON_DATA } from 'containers/App/constants';
import {
  pokemonDataLoaded,
  pokemonDataLoadingError,
} from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectPokemonName } from 'containers/HomePage/selectors';
import { addToSearchHistory } from '../../utils/searchHistory';

export function* getPokemonData() {
  // Select username from store
  const pokemonName = yield select(makeSelectPokemonName());
  addToSearchHistory(pokemonName);
  const requestURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  // const requestURL = `https://pokeapi.co/api/v1/pokemon/${pokemonName}`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(pokemonDataLoaded(data, pokemonName));
  } catch (err) {
    yield put(pokemonDataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* pokemonData() {
  yield takeLatest(LOAD_POKEMON_DATA, getPokemonData);
}
