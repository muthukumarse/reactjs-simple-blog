import { fromJS } from 'immutable';

import { selectPost, makeSelectPost } from '../selectors';

describe('selectPost', () => {
  it('should select the articles state', () => {
    const postState = fromJS({
      comments: [],
    });
    const mockedState = fromJS({
      post: postState,
    });
    expect(selectPost(mockedState)).toEqual(postState);
  });
});

describe('makeSelectPost', () => {
  const postSelector = makeSelectPost();
  it('should select the post', () => {
    const mockedState = fromJS({
      post: {},
    });
    expect(postSelector(mockedState)).toEqual({});
  });
});
