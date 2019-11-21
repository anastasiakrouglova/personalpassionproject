const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

var pressed = {
    press: false
}

Socketio.on("connection", socket => {
    socket.emit("pressed", pressed);
    socket.on("pressedButton", data => {
        console.log("gelogd in server");
        Socketio.emit("pressed", pressed);
    })
})

Http.listen(3000, () => {
    console.log("listening at port 3000");
})