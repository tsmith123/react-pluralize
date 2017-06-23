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

  isMtd: false
  text: ""

  constructor() {
    super()

    this.state = {
      text: ""
    }
  }

  componentDidMount () {
    this.isMtd = true

    // do the thing
    this.pluralize(this.props)
  }

  componentWillUnmount () {
    this.isMtd = false
  }

  pluralize(props) {
    const { singular, count } = this.props
    let { plural } = this.props

    if(!plural) {
      plural = singular + "s"
    }

    if(count === 1 ) {
      this.text = singular
    } else {
      this.text = plural
    }

    this.setState({text: this.text})
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
