/**
 * Post selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPost = state => state.get('post', initialState);

const makeSelectPost = () =>
  createSelector(selectPost, articleState => articleState.toJS());

export default makeSelectPost;
export { selectPost, makeSelectPost };
