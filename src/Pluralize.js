/*
 * React Pluralize (MIT)
 * Author: Tom Smith (https://github.com/tsmith123)
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pluralize extends Component {
  pluralize(singular, plural, count, showCount) {
    let output = singular;

    if(count !== 1) {
      output = plural || `${singular}s`;
    }

    return showCount ? `${count} ${output}` : output
  }

  render() {
    const {
      singular,
      plural,
      count,
      showCount,
      className,
      style,
    } = this.props;

    const output = this.pluralize(singular, plural, count, showCount);

    return (
      <span className={className} style={style}>
        {output}
      </span>
    );
  }
}

Pluralize.propTypes = {
  singular: PropTypes.string.isRequired,
  plural: PropTypes.string,
  count: PropTypes.number,
  showCount: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

Pluralize.defaultProps = {
  count: 1,
  showCount: true,
  className: null,
  style: {},
}

export default Pluralize;