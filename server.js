const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const mockRoute = require('./router/mock-routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: false }));

//Use the defined routes
app.use('/', mockRoute);
//Use PDF files
app.use('/profitoptimizerypdf', express.static(__dirname + '/pdf/Profit-Optimizer-Y-User-Guide.pdf'));
app.use('/profitfinderypdf', express.static(__dirname + '/pdf/Profit-Finder-Y-User-Guide.pdf'));
app.use('/attritionypdf', express.static(__dirname + '/pdf/Attrition-Y-User-Guide.pdf'));
//app.use(express.static('mockdata'))

app.get('/', (req, res) => {
  //res.send('Welcome to the Mock Server');
  var port = (req.hostname == 'localhost') ? ':8080' : '';
  var baseUrl = req.protocol + '://' + req.hostname + port;
  res.render('index', { baseUrl: baseUrl });
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Example app listening at http://localhost:8080`)
})