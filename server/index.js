const express = require('express');
const host = process.env.API_HOST || '0.0.0.0';
const port = process.env.API_PORT || 9000;

const app = express();
const registerMiddlewares = require('./utils/registerMiddlewares.js');
const registerRoutes = require('./utils/registerRoutes.js');

registerMiddlewares(app);
registerRoutes(app);

app.listen(port, host, () => {
  console.info(`[INFO] Listening on port ${port}`);
});