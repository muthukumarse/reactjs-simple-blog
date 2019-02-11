/*
 * Articles Messages
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Articles';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'All Articles',
  },
  articles: {
    id: `${scope}.articles`,
    defaultMessage: '{totalArticles} Articles',
  },
  pageSize: {
    id: `${scope}.pageSize`,
    defaultMessage: '{pageSize} per page',
  },
  previous: {
    id: `${scope}.previous`,
    defaultMessage: 'Previous',
  },
  next: {
    id: `${scope}.next`,
    defaultMessage: 'Next',
  },
});
