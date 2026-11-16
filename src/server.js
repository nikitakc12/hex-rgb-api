// SPDX-License-Identifier: EUPL-1.2
// Copyright (c) 2026 Nikita K C

const app = require('./app');

const PORT = 3000;

// Start the HTTP server for manual REST-client testing.
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
