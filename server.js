/**
 * server.js — Express application entrypoint for Artifact-6.
 *
 * A minimal Node.js HTTP server built on the Express.js framework. It exposes
 * two plain-text GET endpoints:
 *
 *   - GET /              -> "Hello world"   (the baseline tutorial endpoint)
 *   - GET /good-evening  -> "Good evening"  (the additional endpoint)
 *
 * The server uses the CommonJS module system (require/module.exports), matching
 * the project's package.json which intentionally omits "type": "module".
 *
 * Runtime contract:
 *   - Requires Node.js >= 18 (Express 5 requirement; see package.json engines).
 *   - Listens on the port given by the PORT environment variable, defaulting to
 *     3000 when PORT is not set.
 *
 * Start the server with `npm start` (which runs `node server.js`) or directly
 * with `node server.js`.
 */

'use strict';

// Express is the sole dependency: it provides the routing layer (app.get),
// response helpers (res.send), and the HTTP server bootstrap (app.listen).
// Imported via CommonJS require, per the project's module system.
const express = require('express');

// Instantiate the Express application that owns the routes and the listener.
const app = express();

// Resolve the listening port. An explicit PORT environment variable takes
// precedence (useful for deployment or running multiple instances); otherwise
// the conventional development default of 3000 is used.
const PORT = process.env.PORT || 3000;

// Baseline endpoint. Returns the exact, verbatim plain-text body "Hello world".
// res.send() writes the string unmodified (no JSON wrapping, no extra whitespace).
app.get('/', (req, res) => res.send('Hello world'));

// Additional endpoint. Returns the exact, verbatim plain-text body "Good evening".
// Registered alongside the baseline route so both respond from the same server
// instance (backward compatibility is preserved).
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Start the HTTP listener. The callback confirms a successful bind by logging
// the active port, which aids local development and verification.
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
