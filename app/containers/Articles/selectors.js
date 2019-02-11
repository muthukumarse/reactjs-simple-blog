/**
 * Articles selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectArticles = state => state.get('articles', initialState);

const makeGetArticles = () =>
  createSelector(selectArticles, articlesState => articlesState.toJS());

export default makeGetArticles;
export { selectArticles, makeGetArticles };
