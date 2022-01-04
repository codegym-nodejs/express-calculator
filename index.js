require('dotenv').config();
const util = require('codegym-demo');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
// const http = require('http');

const app = express();
// const app = http.createServer(.....)

app.use(bodyParser.json());
app.use(cors());
// app.use(function(req, res) {
//   req.headers("Access-Control-Allow-Origin", "*")
// })

app.get('/', function(req, res) {
  var html = `<h1>This is my Home Page</h1>`;
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.end(html)
})

app.post('/add', function(req, res) {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let result = util.myUtil.math.add(parseInt(num1), parseInt(num2)); 
  res.status(200).json({"result": result});
});

app.post('/mul', function(req, res) {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let result = util.myUtil.math.mul(parseInt(num1), parseInt(num2)); 
  res.status(200).json({"result": result});
})
app.post('/sub', function(req, res) {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let result = util.myUtil.math.sub(parseInt(num1), parseInt(num2)); 
  res.status(200).json({"result": result});
})

app.post('/div', function(req, res) {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let result = util.myUtil.math.div(parseInt(num1), parseInt(num2)); 
  res.status(200).json({"result": result});
})

app.listen(process.env.PORT || 3000);
console.log(`App is running at http://localhost:${process.env.PORT || 3000}`);