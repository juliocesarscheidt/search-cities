const express = require('express');
const port = process.env.API_PORT || 9000;

const app = express();
const registerMiddlewares = require('./utils/registerMiddlewares.js');
const registerRoutes = require('./utils/registerRoutes.js');

registerMiddlewares(app);
registerRoutes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});