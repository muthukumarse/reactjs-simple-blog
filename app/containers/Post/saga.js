/* istanbul ignore file */
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  articleLoaded,
  articleLoadingError,
  commentsLoaded,
  commentsLoadingError,
} from './actions';
import { LOAD_ARTICLE, LOAD_COMMENTS } from './constants';

export function* getArticle({ payload: { id } }) {
  const articleRequestURL = `https://jsonplaceholder.typicode.com/posts?id=${id}`;
  try {
    const article = yield call(request, articleRequestURL);
    yield put(articleLoaded(article[0]));
  } catch (err) {
    yield put(articleLoadingError(err));
  }
}

export function* getComments({ payload: { postId } }) {
  const articleCommentsRequestURL = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
  try {
    const comments = yield call(request, articleCommentsRequestURL);
    yield put(commentsLoaded(comments));
  } catch (err) {
    yield put(commentsLoadingError(err));
  }
}

export default function* getData() {
  yield takeLatest(LOAD_ARTICLE, getArticle);
  yield takeLatest(LOAD_COMMENTS, getComments);
}
