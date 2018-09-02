import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadPokemonData,
  pokemonDataLoaded,
  pokemonDataLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentPokemon: false,
      pokemonData: fromJS({}),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadPokemonData action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['pokemonData'], false);

    expect(appReducer(state, loadPokemonData())).toEqual(expectedResult);
  });

  it('should handle the pokemonDataLoaded action correctly', () => {
    const fixture = {
      name: 'test',
    };
    const pokemonName = 'test';
    const expectedResult = state
      .setIn(['pokemonData'], fixture)
      .set('loading', false)
      .set('currentPokemon', pokemonName);

    expect(appReducer(state, pokemonDataLoaded(fixture, pokemonName))).toEqual(
      expectedResult,
    );
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, pokemonDataLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
