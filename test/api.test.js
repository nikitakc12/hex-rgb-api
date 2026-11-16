// SPDX-License-Identifier: EUPL-1.2
// Copyright (c) 2026 Nikita K C

const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../src/app');

/**
 * Integration tests make HTTP requests to the Express app.
 * The real conversion library is used; it is not mocked.
 */
describe('GET /api/hex-to-rgb integration tests', () => {
  const validCases = [
    ['red', 'FF0000', { r: 255, g: 0, b: 0 }],
    ['a leading #', '#00FF00', { r: 0, g: 255, b: 0 }],
    ['lowercase input', '0000ff', { r: 0, g: 0, b: 255 }],
    ['black', '000000', { r: 0, g: 0, b: 0 }],
    ['white', 'FFFFFF', { r: 255, g: 255, b: 255 }],
    ['mixed values', 'aB12Cd', { r: 171, g: 18, b: 205 }]
  ];

  validCases.forEach(([description, hex, expected]) => {
    it(`returns HTTP 200 and correct RGB for ${description}`, async () => {
      const response = await request(app)
        .get('/api/hex-to-rgb')
        .query({ hex })
        .expect('Content-Type', /json/)
        .expect(200);

      assert.deepStrictEqual(response.body, expected);
    });
  });

  const invalidCases = [
    ['invalid characters', 'GG0000'],
    ['three-digit input', '#FFF'],
    ['too many digits', '1234567'],
    ['empty input', '']
  ];

  invalidCases.forEach(([description, hex]) => {
    it(`returns HTTP 400 for ${description}`, async () => {
      const response = await request(app)
        .get('/api/hex-to-rgb')
        .query({ hex })
        .expect('Content-Type', /json/)
        .expect(400);

      assert.deepStrictEqual(response.body, {
        error: 'Use six hexadecimal digits, with an optional #.'
      });
    });
  });

  it('returns HTTP 400 when the hex parameter is missing', async () => {
    const response = await request(app)
      .get('/api/hex-to-rgb')
      .expect('Content-Type', /json/)
      .expect(400);

    assert.deepStrictEqual(response.body, {
      error: 'Use six hexadecimal digits, with an optional #.'
    });
  });
});
