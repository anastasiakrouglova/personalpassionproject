require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const sio = require('socket.io')(http);

sio.set('origins', 'http://localhost:3000');

const workouts = require('./routes/api/workouts');
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('server started on port 3000'));
const io = sio.listen(server);

// Middleware
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:8080'}));
app.use('/api/workouts', workouts);

io.on('connection', function (socket) {
    socket.emit('hello');
    console.log("connected");
});

