const express = require('express');
const connection = require('../db/connection');
const router = express.Router();

const handleReqQuery = reqQuery => {
  if (!reqQuery || !reqQuery.state) {
    return {
      'status': 401,
      'error': 'Invalid parameters',
    };
  }
  let { state } = reqQuery;
  state = state.replace(/[\W]+/, '');
  if (typeof state !== 'string' && typeof state !== 'number') {
    return {
      'status': 401,
      'error': 'Invalid parameters',
    };
  }
  if (state.length > 2 || state.length <= 0) {
    return {
      'status': 401,
      'error': 'State invalid',
    };
  }
  // Valid state
  return {
    'status': 200,
    'state': state,
  };
}

const handleSql = state => {
  let sql = '';
  if (!state.match(/[\d]+/)) {
    state = state.toString().toUpperCase();
    sql = `select * from \`cities_stats\` where abbr = ?`;
  } else {
    state = state.replace(/[^\d]+/, '');
    sql = `select * from \`cities_stats\` where fk_id_state = ?`;
  }
  return sql;
}

router.get('/cities', (req, res) => {
  const reqQuery = req.query || '';
  const validation = handleReqQuery(reqQuery);

  if (validation.status !== 200 || !validation.state) {
    return res.status(validation.status).json({'error': validation.error});
  }

  // validation will return the state
  const state = validation.state;
  const sql = handleSql(state);
  
  connection.query(sql, [state], function (err, response) {
    if (err) {
      return res.status(500).json({'error': 'An error has occurred'});
    }
    return res.status(200).json({'cities': response});
  });
});

module.exports = app => app.use('/api/v1', router);