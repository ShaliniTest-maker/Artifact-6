# Artifact-6

A minimal Node.js HTTP server built with the [Express.js](https://expressjs.com/) framework. It exposes two plain-text endpoints — a `Hello world` baseline and a `Good evening` greeting — served by a single Express application.

## Prerequisites

- [Node.js](https://nodejs.org/) `>=18` — required by Express 5.
- npm — bundled with Node.js and used to install dependencies.

## Installation

Install the project dependencies. This installs the `express` (`^5.2.1`) dependency declared in `package.json`:

```bash
npm install
```

## Running the Server

Start the server with either of the following commands:

```bash
npm start
```

Alternatively, run the entrypoint directly:

```bash
node server.js
```

The server listens on port `3000` by default. Set the `PORT` environment variable to use a different port (the server reads `process.env.PORT || 3000`).

## Endpoints

| Method | Path            | Response       |
|--------|-----------------|----------------|
| GET    | `/`             | `Hello world`  |
| GET    | `/good-evening` | `Good evening` |

For example, with the server running on the default port:

```bash
curl http://localhost:3000/
```

Expected output: `Hello world`

```bash
curl http://localhost:3000/good-evening
```

Expected output: `Good evening`
