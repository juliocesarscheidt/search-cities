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

router.get('/cities', (req, res) => {
  let sql = '';
  if (!req.query || !req.query.state) {
    return res.status(401).json({'error': 'Invalid parameters'});
  }
  let { state } = req.query;
  state = state.replace(/[\W]+/, '');
  if (typeof state !== 'string' && typeof state !== 'number') {
    return res.status(401).json({'error': 'Invalid parameters'});
  }
  if (state.length > 2 || state.length <= 0) {
    return res.status(401).json({'error': 'State invalid'});
  }
  if (!state.match(/[\d]+/)) {
    state = state.toString().toUpperCase();
    sql = `select * from \`cities_stats\` where abbr = ?`;
  } else {
    state = state.replace(/[^\d]+/, '');
    sql = `select * from \`cities_stats\` where fk_id_state = ?`;
  }
  connection.query(sql, [state], function (err, response) {
    if (err) {
      return res.status(500).json({'error': 'An error has occurred'});
    }
    return res.status(200).json({'cities': response});
  });
});

module.exports = app => app.use('/api/v1', router);