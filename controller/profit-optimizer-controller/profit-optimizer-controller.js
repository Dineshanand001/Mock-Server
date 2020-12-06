const profitOptimizerService = require('./../../services/profit-optimizer-service/profiit-optimizer-service');

exports.home = (req, res) => {
    profitOptimizerService.helloWorld(req, res);
}