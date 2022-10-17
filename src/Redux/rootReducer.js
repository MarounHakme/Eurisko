import {
  ACEESSTOKEN,
  ARTICLES,
  ISLOGGEDIN,
  LOADMOREARTICLES,
  SEARCH,
} from './actionTypes';
import {AccessToken, Articles, isloggedin, moreArticles, search} from './auth';
import {initialState} from './states';
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ISLOGGEDIN:
      return isloggedin(state, action);
    case ACEESSTOKEN:
      return AccessToken(state, action);
    case ARTICLES:
      return Articles(state, action);
    case LOADMOREARTICLES:
      return moreArticles(state, action);
    case SEARCH:
      return search(state, action);
    default:
      return state;
  }
};
export default rootReducer;
