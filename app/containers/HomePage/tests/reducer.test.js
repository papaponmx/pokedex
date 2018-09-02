import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { changePokemonName } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      pokemonName: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changePokemonName action correctly', () => {
    const fixture = 'Pikachu';
    const expectedResult = state.set('pokemonName', fixture);

    expect(homeReducer(state, changePokemonName(fixture))).toEqual(
      expectedResult,
    );
  });
});
