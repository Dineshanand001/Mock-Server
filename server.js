const express = require('express')
const app = express()
const profitOptimizerRoute = require('./router/profit-optimizer-routes/profit-optimizer-routes')

app.use(express.urlencoded({ extended: true}));
app.use(express.json())

//Use the defined routes
app.use('/profit-optimizer', profitOptimizerRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the Mock Server');
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Example app listening at http://localhost:8080`)
})