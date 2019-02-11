/**
 * Test the Articles
 */

import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import { Articles, mapDispatchToProps } from '../index';
import { loadArticles } from '../actions';

describe('<Articles />', () => {
  const props = {
    loadArticles: jest.fn(),
    articlesState: {
      articles: {},
      totalArticles: 0,
      error: false,
      errorDesc: '',
    },
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
        <Articles />
      </IntlProvider>,
    );
    expect(renderedComponent.find('Header').length).not.toBe(1);
  });

  it('should render fetch the articles', () => {
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <Articles {...props} />
      </IntlProvider>,
    ).shallow();
    expect(
      renderedComponent.contains(<div id="loading">Loading ...</div>),
    ).toBe(true);

    const articlesState = {
      articles: [
        {
          id: 1,
          body:
            'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
      ],
      totalArticles: 1,
      error: false,
      errorDesc: '',
    };
    renderedComponent.setProps({ articlesState });

    renderedComponent
      .find('.pagination-section a')
      .props()
      .onChange();
    renderedComponent
      .find('#pageSize')
      .props()
      .onChange({
        target: { value: 10 },
      });
  });

  describe('mapDispatchToProps', () => {
    describe('loadArticles', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadArticles).toBeDefined();
      });
    });

    describe('loadArticles', () => {
      it('should dispatch loadArticles when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.loadArticles();
        expect(dispatch).toHaveBeenCalledWith(loadArticles());
      });
    });
  });
});
