import {combineReducers} from 'redux';
import {
  SEARCH_RESULTS,
} from "../actions";

function Search(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return action.Search;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  Search,
});

export default rootReducer;