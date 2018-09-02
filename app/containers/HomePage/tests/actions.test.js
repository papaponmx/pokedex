import { CHANGE_POKEMON_NAME } from '../constants';

import { changePokemonName } from '../actions';

describe('Home Actions', () => {
  describe('changePokemonName', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_POKEMON_NAME,
        name: fixture,
      };

      expect(changePokemonName(fixture)).toEqual(expectedResult);
    });
  });
});
