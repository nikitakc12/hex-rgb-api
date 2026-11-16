// SPDX-License-Identifier: EUPL-1.2
// Copyright (c) 2026 Nikita K C

const assert = require('node:assert/strict');
const hexToRgb = require('../src/hexToRgb');

/**
 * Unit tests call the conversion function directly.
 * They check valid conversions and input validation.
 */
describe('hexToRgb unit tests', () => {
  const validCases = [
    ['red with #', '#FF0000', { r: 255, g: 0, b: 0 }],
    ['green without #', '00FF00', { r: 0, g: 255, b: 0 }],
    ['lowercase blue', '#0000ff', { r: 0, g: 0, b: 255 }],
    ['black: minimum values', '#000000', { r: 0, g: 0, b: 0 }],
    ['white: maximum values', '#FFFFFF', { r: 255, g: 255, b: 255 }],
    ['mixed case and values', '#aB12Cd', { r: 171, g: 18, b: 205 }]
  ];

  validCases.forEach(([description, input, expected]) => {
    it(`converts ${description}`, () => {
      assert.deepStrictEqual(hexToRgb(input), expected);
    });
  });

  const invalidCases = [
    ['invalid characters', '#GG0000'],
    ['three-digit format', '#FFF'],
    ['too many digits', '#1234567'],
    ['empty string', ''],
    ['surrounding spaces', ' FF0000 '],
    ['number', 123456],
    ['null', null],
    ['undefined', undefined]
  ];

  invalidCases.forEach(([description, input]) => {
    it(`rejects ${description}`, () => {
      assert.throws(
        () => hexToRgb(input),
        /Use six hexadecimal digits/
      );
    });
  });
});
