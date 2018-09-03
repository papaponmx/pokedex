import searchHistory, {
  addToSearchHistory,
  POKEDEX_SEARCH_HISTORY,
} from '../searchHistory';
import LocalStorageMock from './localstorageMock';

global.localStorage = new LocalStorageMock;

describe('Search History', () => {
  it('Should return an array of terms', () => {
    expect(searchHistory()).toEqual([]);
  });

  it('Should return an array when items exit on localStorage', () => {
    const fixture = ['Bulbasur', 'Pikachu'];
    localStorage.setItem(POKEDEX_SEARCH_HISTORY, JSON.stringify(fixture));
    expect(searchHistory()).toEqual(fixture);
  });

  it('Should not return a string', () => {
    const fixture = ['Bulbasur', 'Pikachu'];
    localStorage.setItem(POKEDEX_SEARCH_HISTORY, JSON.stringify(fixture));
    expect(typeof searchHistory() === 'string').toBeFalsy();
  });

  it('addToSearchHistory Should return an array', () => {
    const fixture = 'Bulbasaur';
    localStorage.removeItem(POKEDEX_SEARCH_HISTORY);
    expect(addToSearchHistory(fixture)).toEqual([fixture]);
    expect(localStorage.getItem(POKEDEX_SEARCH_HISTORY)).toBeDefined();
  });
});
