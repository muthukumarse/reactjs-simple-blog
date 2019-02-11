/**
 * Articles Saga to get Data from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { articlesLoaded, articlesLoadingError } from './actions';
import { LOAD_ARTICLES } from './constants';

export function* getArticles() {
  const requestURL = `https://jsonplaceholder.typicode.com/posts`;

  try {
    const articles = yield call(request, requestURL);
    yield put(articlesLoaded(articles));
  } catch (err) {
    yield put(articlesLoadingError(err));
  }
}

export default function* getArticlesList() {
  yield takeLatest(LOAD_ARTICLES, getArticles);
}
