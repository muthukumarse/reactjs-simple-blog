/*
 * Articles
 */

import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Pagination from 'react-js-pagination';

import messages from './messages';
import { makeGetArticles } from './selectors';
import { loadArticles } from './actions';
import reducer from './reducer';
import saga from './saga';
import './styles.css';

export class Articles extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activePage: 1,
      pageSize: 10,
      articleStartIndex: 0,
      articleEndIndex: 9,
    };
  }

  componentDidMount() {
    this.props.loadArticles();
  }

  onPageChange = activePage => {
    const { pageSize } = this.state;
    const articleStartIndex = pageSize * (activePage - 1);
    const articleEndIndex = pageSize * activePage - 1;
    this.setState({
      activePage,
      articleStartIndex,
      articleEndIndex,
    });
    // console.log('activePage', activePage);
  };

  onPageSizeChange = evnt => {
    const { activePage } = this.state;
    const pageSize = evnt.target.value;
    const articleStartIndex = 0;
    const articleEndIndex = pageSize * activePage - 1;
    this.setState({
      pageSize,
      activePage: 1,
      articleStartIndex,
      articleEndIndex,
    });
    // console.log('pageSize', evnt.target.value);
  };

  render() {
    // console.log(this.props.articlesState.articles.length)
    const {
      articlesState: { articles, totalArticles },
      intl: { formatMessage },
    } = this.props;
    const {
      activePage,
      pageSize,
      articleStartIndex,
      articleEndIndex,
    } = this.state;

    if (totalArticles === 0) return <div id="loading">Loading ...</div>;

    const articleList = articles.slice(articleStartIndex, articleEndIndex + 1);
    // console.log(articleStartIndex, articleEndIndex);

    return (
      <div style={{ padding: '1em' }}>
        <div className="articles-section">
          <div className="article-head-block">
            <div className="article-head-block-section">
              <FormattedMessage {...messages.header} /> ({totalArticles})
            </div>
            <div className="article-head-block-section article-head-block-section-right">
              <select id="pageSize" onChange={this.onPageSizeChange}>
                <option value="10">
                  {formatMessage(messages.pageSize, { pageSize: 10 })}
                </option>
                <option value="25">
                  {formatMessage(messages.pageSize, { pageSize: 25 })}
                </option>
                <option value="50">
                  {formatMessage(messages.pageSize, { pageSize: 50 })}
                </option>
                <option value="100">
                  {formatMessage(messages.pageSize, { pageSize: 100 })}
                </option>
              </select>
            </div>
          </div>
          <div className="post-list">
            <ul>
              {articleList.map(article => (
                <li
                  key={`article-${article.id}`}
                  id={`post-${article.id}`}
                  className="post"
                >
                  <a
                    href={`/articles/post/${article.id}`}
                    className="post-link"
                  >
                    <span className="h2 post-title">{article.title}</span>
                    <span className="post-meta">
                      <p>{article.body.substr(0, 60)} ...</p>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="pagination-section">
            <Pagination
              hideFirstLastPages
              pageRangeDisplayed={10}
              activePage={activePage}
              itemsCountPerPage={pageSize}
              totalItemsCount={totalArticles}
              onChange={this.onPageChange}
              prevPageText="Previous Page"
              nextPageText="Next Page"
            />
          </div>
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  intl: intlShape,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadArticles: () => dispatch(loadArticles()),
  };
}

const mapStateToProps = createStructuredSelector({
  articlesState: makeGetArticles(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'articles', reducer });
const withSaga = injectSaga({ key: 'articles', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(injectIntl(Articles));
