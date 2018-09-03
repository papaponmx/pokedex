import uniqArray from 'utils/uniqArray';

export const POKEDEX_SEARCH_HISTORY = 'POKEDEX_SEARCH_HISTORY';

const searchHistory = (initalTerms = []) => {
  let terms = initalTerms;
  if (localStorage.getItem(POKEDEX_SEARCH_HISTORY)) {
    terms = JSON.parse(localStorage.getItem(POKEDEX_SEARCH_HISTORY));
  }
  return terms;
};

export const addToSearchHistory = nameToStore => {
  const terms = uniqArray([...searchHistory(), nameToStore]);
  localStorage.setItem(POKEDEX_SEARCH_HISTORY, JSON.stringify(terms));
  return terms;
};

export default searchHistory;
