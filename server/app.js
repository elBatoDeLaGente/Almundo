const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/../index.html'));
});

app.get('/user', (req, res)=> {
    console.log(req.query.name);
    res.json({});
});

app.listen(3000);
console.log('Almundo app and listening on port 3000');
