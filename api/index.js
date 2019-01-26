const express = require('express');
const port = 9000;
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'db_vue_select'
});

connection.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', router);

router.get('/states', (req, res) => {
  connection.query('select * from `states`;', function (err, response) {
    if (err) {
      return res.status(500).json({'error': 'An error has occurred'});
    };
    res.status(200).json({ 'states': response })
  });
})

router.get('/cities', (req, res) => {
  const query = req.query || '';
  // let limit = ' limit 0, 100';
  let limit = '', state, sql;

  if (!query || !query.state) {
    return res.status(404).json({'error': 'Please inform the state'});
  }

  if (query.state.length > 2 || query.state.length <= 0) {
    return res.status(404).json({'error': 'State invalid'});
  }

  if (!query.state.match(/[\d]+/)) {
    state = query.state.toString().toUpperCase();
    sql = `select * from \`cities_stats\` where abbr = ? ${limit}`;
  } else {
    state = query.state.replace(/[^\d]+/, '');
    sql = `select * from \`cities_stats\` where fk_id_state = ? ${limit}`;
  }
  connection.query(sql, [state], function (err, response) {
    if (err) {
      return res.status(500).json({'error': 'An error has occurred'});
    };
    return res.status(200).json({'cities': response});
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
