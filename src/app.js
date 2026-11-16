// SPDX-License-Identifier: EUPL-1.2
// Copyright (c) 2026 Nikita K C

const express = require('express');
const hexToRgb = require('./hexToRgb');

const app = express();

/**
 * GET /api/hex-to-rgb?hex=FF0000
 * Returns an RGB object with HTTP 200, or an input error with HTTP 400.
 */
app.get('/api/hex-to-rgb', (req, res) => {
  try {
    const rgb = hexToRgb(req.query.hex);
    res.status(200).json(rgb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Export the app so integration tests can make requests to it.
module.exports = app;
