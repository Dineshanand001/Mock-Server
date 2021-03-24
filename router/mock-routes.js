const express = require('express');
const router = express.Router();
const mockController = require('./../controller/mock-controller')

//Middleware
router.use(function timeLog (req, res, next) {
    console.log('The route was triggered at : ', Date.now());
    next();
})

router.get('/getadjustment', (req, res) => {
    mockController.getAdjustmentResponse(req,res);
})

router.post('/getattritionlitebatch', (req, res) => {
    mockController.getAttritionLiteBatchResponse(req,res);
})

router.post('/getattritionlitedata', (req, res) => {
    mockController.getAttritionLiteDataResponse(req,res);
})

router.get('/getcriteriavaluebygroupdate', (req, res) => {
    mockController.getCriteriaValueByGroupDateResponse(req,res);
})

router.get('/getcriteriavalue', (req, res) => {
    mockController.getCriteriaValueResponse(req,res);
})

router.get('/getfeedprogram', (req, res) => {
    mockController.getFeedProgramResponse(req,res);
})

router.get('/getgrowthadfi', (req, res) => {
    mockController.getGrowthADFIResponse(req,res);
})

router.get('/getmastermetadataunitbyaccount', (req, res) => {
    mockController.getMasterMetadataUnitByAccountResponse(req,res);
})

router.get('/getmorepaymentgriditem', (req, res) => {
    mockController.getMorePaymentGridResponse(req,res);
})

router.get('/getomwdata', (req, res) => {
    mockController.getOMWDataResponse(req,res);
})

router.get('/getomwlitedata', (req, res) => {
    mockController.getOMWLiteDataResponse(req,res);
})

router.get('/getomwlitepaymentgriddetail', (req, res) => {
    mockController.getOMWLitePaymentGridDetailResponse(req,res);
})

router.get('/getomwpacker', (req, res) => {
    mockController.getOMWPackerResponse(req,res);
})

router.get('/getpaymentgriditem', (req, res) => {
    mockController.getPaymentGridResponse(req,res);
})

router.get('/getperformanceparameter', (req, res) => {
    mockController.getPerformanceParameterResponse(req,res);
})

router.get('/getperformance', (req, res) => {
    mockController.getPerformanceResponse(req,res);
})

router.get('/getpfdata', (req, res) => {
    mockController.getPFDataResponse(req,res);
})

router.get('/getpflitebatch', (req, res) => {
    mockController.getPFLiteBatchResponse(req,res);
})

router.get('/getpflitedata', (req, res) => {
    mockController.getPFLiteDataResponse(req,res);
})

router.get('/getpfliteentrybatch', (req, res) => {
    mockController.getPFLiteEntryBatchResponse(req,res);
})

router.get('/getpflitepaymentgriddetail', (req, res) => {
    mockController.getPFLitePaymentGridDetailResponse(req,res);
})

router.get('/getpflitepaymentgrid', (req, res) => {
    mockController.getPFLitePaymentGridResponse(req,res);
})

router.get('/getpfpacker', (req, res) => {
    mockController.getPFPackerResponse(req,res);
})

router.get('/loadclienttoken', (req, res) => {
    mockController.loadClientTokenResponse(req,res);
})

router.get('/saveomwliteoptimalcase', (req, res) => {
    mockController.saveOMWLiteOptimalCaseResponse(req,res);
})

router.get('/saveomwoptimalcase', (req, res) => {
    mockController.saveOMWOptimalCaseResponse(req,res);
})

router.get('/saveperformanceparameter', (req, res) => {
    mockController.savePerformanceParameterResponse(req,res);
})

router.get('/getallcompany', (req, res) => {
    mockController.getAllCompanyResponse(req,res);
})

router.post('/login', (req, res) => {
    mockController.loginResponse(req,res);
})

router.get('/getomwpaymentgrid', (req, res) => {
    mockController.getOMWPaymentGridResponse(req,res);
})

router.get('/getomwperformance', (req, res) => {
    mockController.getOMWPerformanceResponse(req,res);
})

router.get('/getBlockedData', (req, res) => {
    mockController.getBlockedDataResponse(req,res);
})

router.get('/getTysonPaymentGrid', (req, res) => {
    mockController.getTysonPaymentGridResponse(req,res);
})

router.get('/api/generatePowerpointAsByte', (req, res) => {
    mockController.generatePowerpointAsByteResponse(req, res);
})

module.exports = router;