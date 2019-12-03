require('dotenv').config();
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);


const workouts = require('./routes/api/workouts');
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('server started on port', port));

const io = require('socket.io')(server);
//io.set('origins', 'http://localhost:3000/api/workouts');

const videoState = {
    videoStarted: false
}

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_STARTMIRROR', function (data) {
        //videoStarted = true;
        //io.emit('PLAY', data)
        io.sockets.emit('startplay', data);
    });

    // VIDEO IS AAN HET AFSPELEN
    socket.on('SEND_PLAYED', function (data) {
        //videoStarted = true;
        io.sockets.emit('playvideo', data);
    });

    // VIDEO IS GEPAUSEERD
    socket.on('SEND_PAUZED', function (data) {
        //videoStarted = true;
        io.sockets.emit('pauzevideo', data);
    });
});

// Middleware
// TODO: static folder met je client project linken
//app.use(express.static('dist'));

// const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
// app.use(staticFileMiddleware);


app.use(serveStatic(__dirname + "/dist"), serveStatic(__dirname + "/mirror"));
//app.use(serveStatic(__dirname + "/mirror"));
//app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(cors({credentials: true, origin: '*' }));
app.use('/api/workouts', workouts);

app.use('/api/workouts', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
});

// app.get('/', function (req, res) {
//     res.render(path.join(__dirname + '/dist/index.html'));
//   });

