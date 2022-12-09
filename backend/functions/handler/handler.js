
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { create, add } = require('./api/chat');
const os = require('os')
const multer  = require('multer');

const upload = multer({ dest: os.tmpdir() });
const app = express();

app.use(cors());//function should be called from client


app.get('/api/test', (req, res) => {res.send("TEST")});
app.get('/api/chat/create', create);
app.post('/api/chat/add/:id', upload.array('file'), add)



app.use(bodyParser.json());

exports.app = app;