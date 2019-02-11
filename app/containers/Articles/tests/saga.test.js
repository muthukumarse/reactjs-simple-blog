/**
 * Tests for Articles sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_ARTICLES } from 'containers/Articles/constants';
import { articlesLoadingError } from 'containers/Articles/actions';

import getArticlesList, { getArticles } from '../saga';

describe('getArticles Saga', () => {
  let getArticlesGenerator;

  beforeEach(() => {
    getArticlesGenerator = getArticles();

    const selectDescriptor = getArticlesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getArticlesGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should call the error action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getArticlesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(articlesLoadingError(response)));
  });
});

describe('getArticlesList Saga', () => {
  const getArticlesListSaga = getArticlesList();

  it('should start task to watch for LOAD_ARTICLES action', () => {
    const takeLatestDescriptor = getArticlesListSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(LOAD_ARTICLES, getArticles),
    );
  });
});
