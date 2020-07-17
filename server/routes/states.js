const express = require('express');
const connection = require('../db/connection');
const router = express.Router();

router.get('/states', (req, res) => {
  connection.query('select * from `states`;', function (err, response) {
    if (err) {
      return res.status(500).json({'error': 'An error has occurred'});
    }
    res.status(200).json({ 'states': response })
  });
})

module.exports = app => app.use('/api/v1', router);