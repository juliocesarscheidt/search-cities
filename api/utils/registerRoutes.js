const logger = require('knoblr');

const registerRoutes = app => {
  const routes = require('glob')
    .sync(require('path')
    .join(__dirname, '../routes/*.js'));

  routes.forEach(route => {
    require(route)(app);
    logger.info(`Route ${route.split('/').pop().split('.').shift()} registered`);
  })
}

module.exports = registerRoutes;