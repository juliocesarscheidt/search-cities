const logger = require('knoblr');
const cors = require('cors');
const bodyParser = require('body-parser');

const registerMiddlewares = app => {
  app.use(cors());
  logger.info(`Middleware cors registered`);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  logger.info(`Middleware bodyParser registered`);
}

module.exports = registerMiddlewares;