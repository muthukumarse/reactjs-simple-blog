import { fromJS } from 'immutable';

import { selectArticles, makeGetArticles } from '../selectors';

describe('selectArticles', () => {
  it('should select the articles state', () => {
    const articlesState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      articles: articlesState,
    });
    expect(selectArticles(mockedState)).toEqual(articlesState);
  });
});

describe('makeGetArticles', () => {
  const articlesSelector = makeGetArticles();
  it('should select the article', () => {
    const mockedState = fromJS({
      articles: {},
    });
    expect(articlesSelector(mockedState)).toEqual({});
  });
});
