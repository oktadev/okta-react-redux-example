import { combineReducers } from 'redux';
import { SEARCH_SHOWS, SELECT_SHOW } from './actions';

const initialShowState = {
  detail: {},
  search: {},
  selected: null,
};

const shows = (state = initialShowState, action) => {
  switch (action.type) {
    case SEARCH_SHOWS:
      const detail = { ...state.detail };
      action.results.forEach(({ show }) => {
        detail[show.id] = show;
      });

      return {
        detail,
        search: {
          ...state.search,
          [action.term]: action.results.map(({ show }) => show.id),
        },
      };
    case SELECT_SHOW:
      return {
        ...state,
        selected: action.id,
      };
    default:
      return state;
  }
};

export default combineReducers({
  shows,
});
