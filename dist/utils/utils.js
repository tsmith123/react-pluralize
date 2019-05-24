"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pluralize = exports.pluralize = function pluralize(_ref) {
  var singular = _ref.singular,
      plural = _ref.plural,
      count = _ref.count,
      showCount = _ref.showCount,
      zero = _ref.zero;

  if (count === 0 && zero) return zero;

  var output = singular;
  if (count !== 1) {
    output = plural || singular + "s";
  }

  return showCount ? count + " " + output : output;
};