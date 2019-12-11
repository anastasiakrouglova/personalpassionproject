require('dotenv').config();
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);


const workouts = require('./routes/api/workouts');
const stats = require('./routes/api/stats');
const heartRates = require('./routes/api/heartRates');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('server started on port', port));

const io = require('socket.io')(server);
//io.set('origins', 'http://localhost:3000/api/workouts');
// const videoState = {
//     videoStarted: false
// }

io.on('connection', function(socket) {
    console.log(socket.id)
    console.log('lalalal');

    // MIRROR VOLGENDE PAGINA
    socket.on('SEND_STARTMIRROR', function (data) {
        io.sockets.emit('startplay', data);
    });

    // BLUETOOTH DATA VERZENDEN
    socket.on('SEND_BLUETOOTH', function (data) {
        //console.log('lalala')
        io.sockets.emit('sendbluetooth', data);
    });

    // VIDEO IS AAN HET AFSPELEN
    socket.on('SEND_PLAYED', function (data) {
        io.sockets.emit('playvideo', data);
    });

    // VIDEO IS GEPAUSEERD
    socket.on('SEND_PAUZED', function (data) {
        io.sockets.emit('pauzevideo', data);
    });

    // VIDEO IS GEPAUSEERD
    socket.on('SEND_STOP', function (data) {
        io.sockets.emit('stopvideo', data);
    });

    
});

// Middleware
app.use(serveStatic(__dirname + "/dist"), serveStatic(__dirname + "/mirror"));

app.use(bodyParser.json());
app.use(cors({credentials: true, origin: '*' }));
app.use('/api/workouts', workouts);
app.use('/api/stats', stats);
app.use('/api/heartRates', heartRates);

app.use('/api/workouts', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
});
app.use('/api/stats', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
});
app.use('/api/heartRates', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
});