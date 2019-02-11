import { fromJS } from 'immutable';
import postReducer from '../reducer';
import {
  loadArticle,
  articleLoaded,
  articleLoadingError,
  loadComments,
  commentsLoaded,
  commentsLoadingError,
} from '../actions';

describe('postReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      comments: [],
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(postReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadArticle action correctly', () => {
    const expectedResult = state;
    expect(postReducer(state, loadArticle())).toEqual(expectedResult);
  });

  it('should handle the articleLoaded action correctly', () => {
    const article = [
      {
        id: 1,
        body: 'testing',
      },
    ];
    const expectedResult = state.merge({
      ...article,
    });

    expect(postReducer(state, articleLoaded(article))).toEqual(expectedResult);
  });

  it('should handle the Error action correctly', () => {
    const error = {};
    const expectedResult = state.merge({
      comments: [],
      error: true,
      errorDesc: {},
    });

    expect(postReducer(state, articleLoadingError(error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadComments action correctly', () => {
    const expectedResult = state;
    expect(postReducer(state, loadComments())).toEqual(expectedResult);
  });

  it('should handle the commentsLoaded action correctly', () => {
    const comments = [
      {
        id: 1,
        body: 'testing',
        comments: [{ id: 1, title: 'test', body: 'testing' }],
      },
    ];
    const expectedResult = state.merge({
      comments,
    });

    expect(postReducer(state, commentsLoaded(comments))).toEqual(
      expectedResult,
    );
  });

  it('should handle the Error action correctly', () => {
    const error = [
      {
        body: 'Error on pulling comments... please check later.',
      },
    ];
    const expectedResult = state.merge({
      comments: error,
    });

    expect(postReducer(state, commentsLoadingError(error))).toEqual(
      expectedResult,
    );
  });
});
