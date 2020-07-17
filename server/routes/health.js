const express = require('express');
const connection = require('../db/connection');
const router = express.Router();
const logger = require('knoblr');

router.get('/healthcheck', (req, res) => {
  connection.ping(function (err) {
    if (err) {
      logger.info('Server unavailable');
      return res.status(500).json({'status': 'Server unavailable'});
    }
    return res.status(200).json({'status': 'OK'});
  })
});

router.get('/version', (req, res) => {
  const version = process.env.VERSION || 'development';
  return res.status(200).json({version});
});

module.exports = app => app.use('/api/v1', router);