'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                              * React Pluralize (MIT)
                                                                                                                                                                                                                              * Tom Smith (https://github.com/tsmith123)
                                                                                                                                                                                                                              */

var Plural = function Plural(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['className', 'style']);

  return _react2.default.createElement(
    'span',
    { className: className, style: style },
    (0, _utils.pluralize)(props)
  );
};

Plural.propTypes = {
  singular: _propTypes2.default.string.isRequired,
  plural: _propTypes2.default.string,
  count: _propTypes2.default.number,
  showCount: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  zero: _propTypes2.default.string
};

Plural.defaultProps = {
  count: 1,
  showCount: true,
  className: null,
  style: {},
  zero: null
};

exports.default = Plural;