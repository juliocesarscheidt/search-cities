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
  const query = req.query || '';
  let limit = '', state, sql;
  if (!query || !query.state) {
    return res.status(404).json({'error': 'Please inform the state'});
  }
  let { state } = query;
  state = state.replace(/[\W]+/, '');
  if (typeof state !== 'string' && typeof state !== 'number') {
    return res.status(404).json({'error': 'Invalid parameters'});
  }
  if (state.length > 2 || state.length <= 0) {
    return res.status(404).json({'error': 'State invalid'});
  }
  if (!state.match(/[\d]+/)) {
    state = state.toString().toUpperCase();
    sql = `select * from \`cities_stats\` where abbr = ? ${limit}`;
  } else {
    state = state.replace(/[^\d]+/, '');
    sql = `select * from \`cities_stats\` where fk_id_state = ? ${limit}`;
  }
  connection.query(sql, [state], function (err, response) {
    if (err) {
      return res.status(500).json({'error': 'An error has occurred'});
    }
    return res.status(200).json({'cities': response});
  });
});

module.exports = app => app.use('/api/v1', router);
