/*
 * Home Messages
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Home';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage:
      'React powered app show articles and the fitting comments like on a blog!',
  },
  requirements: {
    id: `${scope}.requirements`,
    defaultMessage: 'Requirements',
  },
});
