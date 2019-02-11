import {
  loadArticle,
  articleLoaded,
  articleLoadingError,
  loadComments,
  commentsLoaded,
  commentsLoadingError,
} from '../actions';
import {
  LOAD_ARTICLE,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_ERROR,
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
} from '../constants';

describe('Post actions', () => {
  describe('loadArticle', () => {
    it('should return the correct type', () => {
      const input = '1';
      const expectedResult = {
        type: LOAD_ARTICLE,
        payload: { id: input },
      };

      expect(loadArticle(input)).toEqual(expectedResult);
    });
  });

  describe('articleLoaded', () => {
    it('should return the correct type', () => {
      const input = { id: 1, body: 'testing' };
      const expectedResult = {
        type: LOAD_ARTICLE_SUCCESS,
        payload: { article: input },
      };

      expect(articleLoaded(input)).toEqual(expectedResult);
    });
  });

  describe('articleLoadingError', () => {
    it('should return the correct type', () => {
      const input = { error: 'error' };
      const expectedResult = {
        type: LOAD_ARTICLE_ERROR,
        payload: { error: input },
      };

      expect(articleLoadingError(input)).toEqual(expectedResult);
    });
  });

  describe('loadComments', () => {
    it('should return the correct type', () => {
      const input = '1';
      const expectedResult = {
        type: LOAD_COMMENTS,
        payload: { postId: input },
      };

      expect(loadComments(input)).toEqual(expectedResult);
    });
  });

  describe('commentsLoaded', () => {
    it('should return the correct type', () => {
      const input = { id: 1, body: 'testing' };
      const expectedResult = {
        type: LOAD_COMMENTS_SUCCESS,
        payload: { comments: input },
      };

      expect(commentsLoaded(input)).toEqual(expectedResult);
    });
  });

  describe('commentsLoadingError', () => {
    it('should return the correct type', () => {
      const input = { error: 'error' };
      const expectedResult = {
        type: LOAD_COMMENTS_ERROR,
        payload: { error: input },
      };

      expect(commentsLoadingError(input)).toEqual(expectedResult);
    });
  });
});
