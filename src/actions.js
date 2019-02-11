export const SEARCH_SHOWS = 'SEARCH_SHOWS';
export const SELECT_SHOW = 'SELECT_SHOW';

export const searchShows = term => async dispatch => {
  const url = new URL('https://api.tvmaze.com/search/shows');
  url.searchParams.set('q', term);

  const response = await fetch(url);
  const results = await response.json();

  dispatch({ type: SEARCH_SHOWS, results, term });
};

export const selectShow = (id = null) => ({ type: SELECT_SHOW, id });
