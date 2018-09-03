export const POKEDEX_SEARCH_HISTORY = 'POKEDEX_SEARCH_HISTORY';

const searchHistory = (initalTerms = []) => {
  let terms = initalTerms;
  if (localStorage.getItem(POKEDEX_SEARCH_HISTORY)) {
    terms = JSON.parse(localStorage.getItem(POKEDEX_SEARCH_HISTORY));
  }
  console.log(terms);
  return terms;
};

export const addToSearchHistory = nameToStore => {
  const terms = uniqArray([...searchHistory(), nameToStore]);
  console.log(terms);
  localStorage.setItem(POKEDEX_SEARCH_HISTORY, JSON.stringify(terms));
  return terms;
};

export default searchHistory;
