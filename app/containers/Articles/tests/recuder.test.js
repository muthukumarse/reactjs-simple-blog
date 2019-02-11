import { fromJS } from 'immutable';

import articleReducer from '../reducer';
import { loadArticles, articlesLoaded, articlesLoadingError } from '../actions';

describe('articleReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      articles: {},
      totalArticles: 0,
      error: false,
      errorDesc: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(articleReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadArticles action correctly', () => {
    const expectedResult = state;
    expect(articleReducer(state, loadArticles())).toEqual(expectedResult);
  });

  it('should handle the articlesLoaded action correctly', () => {
    const articles = [
      {
        id: 1,
        price: '$87.68',
        article_name: 'Amitriptyline Hydrochloride',
        description: 'synergize efficient metrics',
        article_image: 'http://dummyimage.com/307x328.bmp/ff4444/ffffff',
      },
    ];
    const expectedResult = state.merge({
      articles,
      totalArticles: 1,
      error: false,
    });

    expect(articleReducer(state, articlesLoaded(articles))).toEqual(
      expectedResult,
    );
  });

  it('should handle the Error action correctly', () => {
    const error = {};
    const expectedResult = state.merge({
      articles: {},
      totalArticles: 0,
      error: true,
      errorDesc: error,
    });

    expect(articleReducer(state, articlesLoadingError(error))).toEqual(
      expectedResult,
    );
  });
});
