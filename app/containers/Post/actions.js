/*
 *
 * Post actions
 *
 */

import {
  LOAD_ARTICLE,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_ERROR,
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
} from './constants';

export function loadArticle(id) {
  return {
    type: LOAD_ARTICLE,
    payload: { id },
  };
}

export function articleLoaded(article) {
  return {
    type: LOAD_ARTICLE_SUCCESS,
    payload: { article },
  };
}

export function articleLoadingError(error) {
  return {
    type: LOAD_ARTICLE_ERROR,
    payload: { error },
  };
}

export function loadComments(postId) {
  return {
    type: LOAD_COMMENTS,
    payload: { postId },
  };
}

export function commentsLoaded(comments) {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: { comments },
  };
}

export function commentsLoadingError(error) {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: { error },
  };
}
