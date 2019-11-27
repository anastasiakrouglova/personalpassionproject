require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);

const workouts = require('./routes/api/workouts');
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('server started on port 3000'));

const io = require('socket.io')(server);
//io.set('origins', 'http://localhost:3000/api/workouts');


const videoState = {
    videoStarted: false
}

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_STARTMIRROR', function (data) {
        //videoStarted = true;
        io.emit('PLAY', data)
        io.sockets.emit('startplay', data);
    });
    // socket.on('PLAY_TEST', data => {
    //     io.emit('PLAY', data)
    //   });
    //socket.emit("videoState", videoStarted);
});

// Middleware
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: Array('http://localhost:8080','http://localhost:8081') }));
app.use('/api/workouts', workouts);

app.use('/api/workouts', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
});




// io.on('connection', function (data) {
//     //data.emit('hello');
//     console.log("connected");
// });

