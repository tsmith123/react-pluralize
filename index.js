/*
React Pluralize (MIT)
*/

import React from 'react';
import PropTypes from 'prop-types';

let pluralize ;
try {
  pluralize = require('pluralize');
} catch (e) {
  pluralize = (word, count, inclusive) => {
    const pluralized = count === 1 ? word : `${word}s`;
    return inclusive ? `${count} ${pluralized}` : pluralized;
  };
}

export default class Pluralize extends React.Component {
  static displayName = 'Pluralize';

  static propTypes = {
    singular: PropTypes.string.isRequired,
    plural: PropTypes.string,
    count: PropTypes.number,
    showCount: PropTypes.bool,
  };

  static defaultProps = {
    count: 1,
    showCount: true,
  };

  constructor() {
    super();

    this.state = { text: '' };
  }

  componentDidMount () {
    this.pluralize(this.props);
  }

  // update text if count prop changes
  componentWillReceiveProps(nextProps) {
    if(nextProps.count !== this.props.count) {
      this.pluralize(nextProps);
    }
  }

  pluralize(props) {
    const { singular, plural, count, showCount } = props;
    const useCustomPlural = plural && count !== 1;
    let text;

    if (useCustomPlural && showCount) {
      text = `${count} ${plural}`;
    } else if (useCustomPlural && !showCount) {
      text = plural;
    } else {
      text = pluralize(singular, count, showCount);
    }

    this.setState({ text })
  }

  render() {
    const { text } = this.state;

    return (
      <span>{text}</span>
    )
  }
}
