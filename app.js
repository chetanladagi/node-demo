const express = require('express');
const app = express();
var port = 3000;
app.get('/', (req, res) => res.send("Hello world"));
app.get('/test', (req, res) => res.send("Hello world"));
app.listen(port, ()=>console.log('server is in 3000'))