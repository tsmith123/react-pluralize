/*
 * React Pluralize (MIT)
 * Tom Smith (https://github.com/tsmith123)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { pluralize } from './utils';


const Plural = ({ className, style, tag: Tag, ...props }) =>
  Tag ? (
    <Tag className={className} style={style}>
      {pluralize(props)}
    </Tag>
  ) : (
    pluralize(props)
  );

Plural.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  plural: PropTypes.string,
  showCount: PropTypes.bool,
  singular: PropTypes.string.isRequired,
  style: PropTypes.object,
  tag: PropTypes.string,
  zero: PropTypes.string
};

Plural.defaultProps = {
  className: null,
  count: 1,
  showCount: true,
  style: null,
  tag: 'span',
  zero: null
};

export default Plural;
