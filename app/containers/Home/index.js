/*
 * Home
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class Home extends React.PureComponent {
  render() {
    return (
      <div style={{ padding: '1em' }}>
        <h3>
          <FormattedMessage {...messages.header} />
        </h3>
        <ul>
          <li>Render results to page with pagination</li>
          <li>No of articles per page configurable</li>
          <li>Click through article to see comments</li>
        </ul>
        <h3>
          <FormattedMessage {...messages.requirements} />
        </h3>
        <ul>
          <li>E6+</li>
          <li>React 16+</li>
          <li>React Reouter</li>
          <li>Redux State management</li>
          <li>100% Test Coverage</li>
          <li>Rest as per development practice</li>
        </ul>
      </div>
    );
  }
}
