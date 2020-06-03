/*
 * React Pluralize (MIT)
 * Tom Smith (https://github.com/tsmith123)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { pluralize } from './utils';

const Plural = ({ className, style, ...props }) =>
  textOnly ? (
    pluralize(props)
  ) : (
    <span className={className} style={style}>
      {pluralize(props)}
    </span>
  );

Plural.propTypes = {
  singular: PropTypes.string.isRequired,
  plural: PropTypes.string,
  count: PropTypes.number,
  showCount: PropTypes.bool,
  textOnly: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  zero: PropTypes.string
};

Plural.defaultProps = {
  count: 1,
  showCount: true,
  textOny: false,
  className: null,
  style: {},
  zero: null
};

export default Plural;
