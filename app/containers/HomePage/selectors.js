/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectPokemonName = () =>
  createSelector(selectHome, homeState => homeState.get('pokemonName'));

export { selectHome, makeSelectPokemonName };
