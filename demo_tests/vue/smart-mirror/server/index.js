const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const workouts = require('./routes/api/workouts');

app.use('/api/workouts', workouts);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('server started on port 3000'));

