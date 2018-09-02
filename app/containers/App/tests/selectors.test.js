import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectCurrentPokemon,
  makeSelectLoading,
  makeSelectError,
  makeSelectPokemonData,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectCurrentPokemon', () => {
  const currentPokemonSelector = makeSelectCurrentPokemon();
  it('should select the current pokemon', () => {
    const pokemonName = 'Pikachu';
    const mockedState = fromJS({
      global: {
        currentPokemon: pokemonName,
      },
    });
    expect(currentPokemonSelector(mockedState)).toEqual(pokemonName);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectPokemonData', () => {
  const dataSelector = makeSelectPokemonData();
  it('should select the data', () => {
    const pokemonData = fromJS({});
    const mockedState = fromJS({
      global: {
        pokemonData,
      },
    });
    expect(dataSelector(mockedState)).toEqual(pokemonData);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const route = fromJS({
      location: { pathname: '/foo' },
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(
      route.get('location').toJS(),
    );
  });
});
