
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());//function should be called from client


app.get('/api/test', (req, res) => {res.send("TEST")});
app.get('/api/chat/create', );


app.use(bodyParser.json());

exports.app = app;