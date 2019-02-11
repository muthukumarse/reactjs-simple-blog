/*
 *
 * Post reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ARTICLE,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_ERROR,
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
} from './constants';

export const initialState = fromJS({
  comments: [],
});

function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLE:
      return initialState;
    case LOAD_ARTICLE_SUCCESS: {
      const {
        payload: { article },
      } = action;
      return state.merge({ ...article });
    }
    case LOAD_ARTICLE_ERROR: {
      const {
        payload: { error },
      } = action;
      return initialState.merge({
        error: true,
        errorDesc: error,
      });
    }
    case LOAD_COMMENTS: {
      return state.merge({ comments: [] });
    }
    case LOAD_COMMENTS_SUCCESS: {
      const {
        payload: { comments },
      } = action;
      return state.merge({ comments });
    }
    case LOAD_COMMENTS_ERROR: {
      return state.merge({
        comments: [
          { body: 'Error on pulling comments... please check later.' },
        ],
      });
    }
    default:
      return state;
  }
}

export default postReducer;
