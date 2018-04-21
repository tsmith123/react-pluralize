/*
 * React Pluralize (MIT)
 * Tom Smith (https://github.com/tsmith123)
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pluralize extends Component {
  pluralize(singular, plural, count, showCount, zero) {
    if(count === 0 && zero) {
      return zero;
    }

    let output = singular;

    if(count !== 1) {
      output = plural || `${singular}s`;
    }

    return showCount ? `${count} ${output}` : output;
  }

  render() {
    const {
      singular,
      plural,
      count,
      showCount,
      className,
      style,
      zero
    } = this.props;
    
    const output = this.pluralize(singular, plural, count, showCount, zero);

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
  zero: PropTypes.string
}

Pluralize.defaultProps = {
  count: 1,
  showCount: true,
  className: null,
  style: {},
  zero: null
}

export default Pluralize;