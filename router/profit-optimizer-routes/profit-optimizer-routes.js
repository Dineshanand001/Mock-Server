const express = require('express');
const router = express.Router();
const profitOptimizerController = require('./../../controller/profit-optimizer-controller/profit-optimizer-controller')

//Middleware
router.use(function timeLog (req, res, next) {
    console.log('The route was triggered at : ', Date.now());
    next();
})

router.get('/home', (req, res) => {
    profitOptimizerController.home(req,res);
})

module.exports = router;