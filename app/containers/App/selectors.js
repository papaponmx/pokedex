/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectCurrentPokemon = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentPokemon'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectPokemonData = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['pokemonData']),
  );

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectCurrentPokemon,
  makeSelectLoading,
  makeSelectError,
  makeSelectPokemonData,
  makeSelectLocation,
};
