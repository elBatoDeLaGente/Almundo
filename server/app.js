const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const serveStatic = require('serve-static');
// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(serveStatic('public', {'index': ['default.html', 'default.htm']}))

app.set('view engine', 'pug');

app.get('/', (req, res)=> {
    res.render(path.join(__dirname + '/../index'));
});

app.get("/users", (req, res)=> {
  res.render(path.join(__dirname + '/../users'));
});
app.post("/users/create", (req, res)=>{
  //console.log(req.query.name);
  console.log(req.body);
  res.json(req.body);
  console.log("hola");
});

app.get('/user', (req, res)=> {

    console.log(req.query.name);
    res.json({});
});

app.listen(3000);
console.log('Almundo app and listening on port 3000');
