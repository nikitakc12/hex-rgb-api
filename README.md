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

## Licence

Hex-to-RGB REST API
Copyright (c) 2026 Nikita K C

Licensed under the EUPL, Version 1.2 or – as soon they will be approved by the European Commission – subsequent versions of the EUPL (the "Licence"). You may not use this work except in compliance with the Licence. You may obtain a copy of the Licence at: https://interoperable-europe.ec.europa.eu/collection/eupl/eupl-text-eupl-12

Unless required by applicable law or agreed to in writing, software distributed under the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the Licence for the specific language governing permissions and limitations under the Licence.
