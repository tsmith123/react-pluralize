/*
React Pluralize (MIT)
*/

import React from 'react'
import PropTypes from 'prop-types';

export default class Pluralize extends React.Component {
  static displayName = 'Pluralize'
  static defaultProps = {
    count: 1,
  }

  constructor() {
    super()

    this.state = {
      text: ""
    }
  }

  componentDidMount () {
    this.pluralize(this.props)
  }

  // update text if count prop changes
  componentWillReceiveProps(nextProps) {
    if(nextProps.count !== this.props.count) {
      this.pluralize(nextProps)
    }
  }

  pluralize(data) {
    let text = "";
    let { singular, plural, count } = data

    // if not specified then use standard plural ending
    if(!plural) {
      plural = singular + "s"
    }

    // set correct ending to text
    count === 1 ? text = singular : text = plural

    // update state
    this.setState({text: text})
  }

  render() {
    const { count } = this.props
    const { text } = this.state

    return (
      <span>{count} {text}</span>
    )
  }
}

Pluralize.propTypes = {
  singular: PropTypes.string.isRequired,
  plural: PropTypes.string,
  count: PropTypes.number,
}
