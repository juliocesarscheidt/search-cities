const express = require('express');
const port = process.env.API_PORT || 9000;
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Bringing routes passing the instance of express
require('./routes/index')(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});