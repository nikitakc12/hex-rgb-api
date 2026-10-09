# Hex-to-RGB REST API

A small JavaScript library and Express REST API that convert
six-digit hexadecimal colours into RGB values.

## Requirements

- Node.js 20 or newer
- npm

## Installation

```bash
npm ci
```

## Start the API

```bash
npm start
```

The API runs at http://localhost:3000.

## API

GET /api/hex-to-rgb?hex=FF0000

Accepted input: six hexadecimal digits, with an optional leading #.
Uppercase and lowercase letters are supported.
Encode a leading # as %23 when entering it directly in a URL.

Successful response: HTTP 200

```json
{"r":255,"g":0,"b":0}
```

Invalid or missing input: HTTP 400

```json
{"error":"Use six hexadecimal digits, with an optional #."}
```

## Tests

```bash
npm test
npm run test:unit
npm run test:integration
```

The suite contains 14 unit tests and 11 integration tests.

## Manual API test

```bash
curl -i "http://localhost:3000/api/hex-to-rgb?hex=FF0000"
```

On Windows PowerShell, use curl.exe.

## Maintainer

Nikita K C