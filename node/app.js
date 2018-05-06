var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('../frontend'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../frontend/index.html');
});

app.post('/monitor', (req, res) => {
  console.log(req.body);
  io.sockets.emit('monitor_data', {
    type:'SET_SOCKET',
    data: req.body,
  });
  res.status(200).end();
});

app.post('/pumpstatus', (req, res) => {
  console.log(req.body);
  io.sockets.emit('pump_data', {
    type:'SET_SOCKET',
    data: req.body,
  });
  res.status(200).end();
});

http.listen(4000, () => {
  console.log('Listening on port 4000');
});
