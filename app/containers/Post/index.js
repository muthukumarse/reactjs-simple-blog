/**
 *
 * Post
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectPost } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadArticle, loadComments } from './actions';

import LinkButton from '../../components/Header/LinkButton';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class Post extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.props.loadArticle(id);
    this.props.loadComments(id);
  }

  backToArticles = () => {
    this.props.history.go(-1);
  };

  render() {
    const {
      post: { title, body, comments },
    } = this.props;

    if (!title) return <div id="loading">Loading ...</div>;

    return (
      <React.Fragment>
        <div className="post-head-block">
          <LinkButton onClick={this.backToArticles}>
            <FormattedMessage {...messages.goback} />
          </LinkButton>
        </div>
        <div className="article">
          <h2 className="article-title">{title}</h2>
          <div className="article-body">{body}</div>
          <div className="article-comments">
            <h3>Comments</h3>
            <ul>
              {comments.map(comment => (
                <li key={`${comment.id}`}>
                  <span className="article-meta">
                    <p>
                      <span>{comment.body}</span>
                      <br />
                      By <a href={`mailto:${comment.email}`}>{comment.name}</a>
                    </p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  id: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadArticle: id => dispatch(loadArticle(id)),
    loadComments: postId => dispatch(loadComments(postId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'post', reducer });
const withSaga = injectSaga({ key: 'post', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Post);
