/*
React Pluralize (MIT)
*/

import React from 'react';
import PropTypes from 'prop-types';

export default class Pluralize extends React.Component {
  static displayName = 'Pluralize';
  static defaultProps = {
    count: 1,
    showCount: true,
    className: "",
    style: {}
  }

  constructor() {
    super();

    this.state = {
      output: ""
    }
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
  
  pluralize(data) {
    let text = "";
    let { singular, plural, count, showCount } = data;

    // if not specified then use standard plural ending
    if (!plural) {
      plural = singular + "s";
    }

    // set correct ending to text
    count === 1 ? text = singular : text = plural
    if(showCount) {
      text = String(count) + " " + text;
    }

    // update state
    this.setState({text: text})
  }

  render() {
    const { text } = this.state

    return (
      <span className={ this.props.className } style={ this.props.style }>{text}</span>
    )
  }
}

Pluralize.propTypes = {
  singular: PropTypes.string.isRequired,
  plural: PropTypes.string,
  count: PropTypes.number,
  showCount: PropTypes.bool,
  className: PropsTypes.string,
  style: PropTypes.object,
}
