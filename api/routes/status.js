const express = require('express');
const connection = require('../db/connection');
const router = express.Router();
const logger = require('knoblr');

router.get('/status', (req, res) => {
  connection.ping(function (err) {
    if (err) {
      logger.info('Server unavailable');
      return res.status(500).json({'status': 'Server unavailable'});
    }
    logger.info('Server running');
    const uptime = process.uptime();
    return res.status(200).json({'status': 'Server running', 'uptime': uptime});
  })
});

router.get('/version', (req, res) => {
  const version = process.env.SHA || 'dev';
  return res.status(200).json({version});
});

module.exports = app => app.use('/api/v1', router);