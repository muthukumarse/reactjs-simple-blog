import {
  LOAD_ARTICLES,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_ERROR,
} from '../constants';

import { loadArticles, articlesLoaded, articlesLoadingError } from '../actions';

describe('Article Actions', () => {
  describe('loadArticles', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_ARTICLES,
      };

      expect(loadArticles({})).toEqual(expectedResult);
    });
  });

  describe('articlesLoaded', () => {
    it('should return the correct type and the passed articles', () => {
      const articles = [
        {
          id: 1,
          price: '$87.68',
          article_name: 'Amitriptyline Hydrochloride',
          description: 'synergize efficient metrics',
          article_image: 'http://dummyimage.com/307x328.bmp/ff4444/ffffff',
        },
      ];
      const expectedResult = {
        type: LOAD_ARTICLES_SUCCESS,
        payload: { articles },
      };

      expect(articlesLoaded(articles)).toEqual(expectedResult);
    });
  });

  describe('articlesLoadingError', () => {
    it('should return the correct type and the error', () => {
      const error = {};
      const expectedResult = {
        type: LOAD_ARTICLES_ERROR,
        payload: { error },
      };

      expect(articlesLoadingError(error)).toEqual(expectedResult);
    });
  });
});
