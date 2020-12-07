const express = require('express')
const app = express()
const cors = require('cors')
const mockRoute = require('./router/mock-routes')

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(cors())

//Use the defined routes
app.use('/', mockRoute);
//app.use(express.static('mockdata'))

app.get('/', (req, res) => {
  res.send('Welcome to the Mock Server');
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Example app listening at http://localhost:8080`)
})