import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { Post, mapDispatchToProps } from '../index';
import { loadArticle, loadComments } from '../actions';

describe('<Post />', () => {
  const props = {
    loadArticle: jest.fn(),
    loadComments: jest.fn(),
    backToArticles: jest.fn(),
    post: {
      comments: [],
    },
    match: {
      params: { id: '1' },
    },
    history: { go: () => {} },
    // this need to be set for dummy otherwise we need to write custom Intl to shallow and mount
    intl: {
      formatMessage: jest.fn(),
      formatDate: jest.fn(),
      formatTime: jest.fn(),
      formatRelative: jest.fn(),
      formatNumber: jest.fn(),
      formatPlural: jest.fn(),
      formatHTMLMessage: jest.fn(),
      now: jest.fn(),
    },
  };
  it('should render default', () => {
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <Post />
      </IntlProvider>,
    );
    expect(renderedComponent.find('Header').length).not.toBe(1);
  });

  it('should render fetch the article', () => {
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <Post {...props} />
      </IntlProvider>,
    ).shallow();
    expect(
      renderedComponent.contains(<div id="loading">Loading ...</div>),
    ).toBe(true);

    const post = {
      title: 'testing',
      body: 'testing',
      comments: [{ id: 1, body: 'testing', name: 'abc' }],
    };
    renderedComponent.setProps({ post });
    renderedComponent
      .find('LinkButton')
      .props()
      .onClick();
  });

  describe('mapDispatchToProps', () => {
    describe('loadArticle', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadArticle).toBeDefined();
        expect(result.loadComments).toBeDefined();
      });
    });

    describe('loadArticle', () => {
      it('should dispatch loadArticle when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.loadArticle();
        expect(dispatch).toHaveBeenCalledWith(loadArticle());
        result.loadComments();
        expect(dispatch).toHaveBeenCalledWith(loadComments());
      });
    });
  });
});
