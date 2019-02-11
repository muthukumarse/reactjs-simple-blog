/*
 * Articles Reducer
 */
import { fromJS } from 'immutable';

import {
  LOAD_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  articles: {},
  totalArticles: 0,
  error: false,
  errorDesc: '',
});

function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES:
      return initialState;
    case LOAD_ARTICLES_SUCCESS: {
      const {
        payload: { articles },
      } = action;
      const totalArticles = articles.length;
      return state.merge({ articles, totalArticles, error: false });
    }
    case LOAD_ARTICLES_ERROR: {
      const {
        payload: { error },
      } = action;
      return state.merge({
        articles: {},
        totalArticles: 0,
        error: true,
        errorDesc: error,
      });
    }
    default:
      return state;
  }
}

export default articlesReducer;
