'use strict';

var _utils = require('./utils');

describe('pluralize function correctly pluralizes strings', function () {
  test('a regular verb is pluralized', function () {
    var singular = 'hit';
    var result = (0, _utils.pluralize)({ singular: singular });
    expect(result).toBe('hits');
  });

  test('an irregular verb is pluralized', function () {
    var singular = 'person';
    var plural = 'people';
    var result = (0, _utils.pluralize)({ singular: singular, plural: plural });
    expect(result).toBe('people');
  });

  test('count is visible when showCount is provided', function () {
    var singular = 'cat';
    var count = 3;
    var showCount = true;
    var result = (0, _utils.pluralize)({ singular: singular, count: count, showCount: showCount });
    expect(result).toBe(count + ' cats');
  });
});