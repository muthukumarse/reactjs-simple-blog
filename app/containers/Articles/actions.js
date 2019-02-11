/*
 * Articles Actions
 *
*/

import {
  LOAD_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_ERROR,
} from './constants';

export function loadArticles() {
  return {
    type: LOAD_ARTICLES,
  };
}

export function articlesLoaded(articles) {
  return {
    type: LOAD_ARTICLES_SUCCESS,
    payload: { articles },
  };
}

export function articlesLoadingError(error) {
  return {
    type: LOAD_ARTICLES_ERROR,
    payload: { error },
  };
}
