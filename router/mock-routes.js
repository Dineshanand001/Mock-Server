const express = require('express');
const router = express.Router();
const mockController = require('./../controller/mock-controller')

//Middleware
router.use(function timeLog (req, res, next) {
    console.log('The route was triggered at : ', Date.now());
    next();
})

router.get('/getAdjustment', (req, res) => {
    mockController.getAdjustmentResponse(req,res);
})

router.get('/getAttritionLiteBatch', (req, res) => {
    mockController.getAttritionLiteBatchResponse(req,res);
})

router.get('/getAttritionLiteData', (req, res) => {
    mockController.getAttritionLiteDataResponse(req,res);
})

router.get('/getCriteriaValueByGroupDate', (req, res) => {
    mockController.getCriteriaValueByGroupDateResponse(req,res);
})

router.get('/getCriteriaValue', (req, res) => {
    mockController.getCriteriaValueResponse(req,res);
})

router.get('/getFeedProgram', (req, res) => {
    mockController.getFeedProgramResponse(req,res);
})

router.get('/getGrowthADFI', (req, res) => {
    mockController.getGrowthADFIResponse(req,res);
})

router.get('/getMasterMetadataUnitByAccount', (req, res) => {
    mockController.getMasterMetadataUnitByAccountResponse(req,res);
})

router.get('/getMorePaymentGrid', (req, res) => {
    mockController.getMorePaymentGridResponse(req,res);
})

router.get('/getOMWData', (req, res) => {
    mockController.getOMWDataResponse(req,res);
})

router.get('/getOMWLiteData', (req, res) => {
    mockController.getOMWLiteDataResponse(req,res);
})

router.get('/getOMWLitePaymentGridDetail', (req, res) => {
    mockController.getOMWLitePaymentGridDetailResponse(req,res);
})

router.get('/getOMWPacker', (req, res) => {
    mockController.getOMWPackerResponse(req,res);
})

router.get('/getPaymentGrid', (req, res) => {
    mockController.getPaymentGridResponse(req,res);
})

router.get('/getPerformanceParameter', (req, res) => {
    mockController.getPerformanceParameterResponse(req,res);
})

router.get('/getPerformance', (req, res) => {
    mockController.getPerformanceResponse(req,res);
})

router.get('/getPFData', (req, res) => {
    mockController.getPFDataResponse(req,res);
})

router.get('/getPFLiteBatch', (req, res) => {
    mockController.getPFLiteBatchResponse(req,res);
})

router.get('/getPFLiteData', (req, res) => {
    mockController.getPFLiteDataResponse(req,res);
})

router.get('/getPFLiteEntryBatch', (req, res) => {
    mockController.getPFLiteEntryBatchResponse(req,res);
})

router.get('/getPFLitePaymentGridDetail', (req, res) => {
    mockController.getPFLitePaymentGridDetailResponse(req,res);
})

router.get('/getPFLitePaymentGrid', (req, res) => {
    mockController.getPFLitePaymentGridResponse(req,res);
})

router.get('/getPFPacker', (req, res) => {
    mockController.getPFPackerResponse(req,res);
})

router.get('/loadClientToken', (req, res) => {
    mockController.loadClientTokenResponse(req,res);
})

router.get('/saveOMWLiteOptimalCase', (req, res) => {
    mockController.saveOMWLiteOptimalCaseResponse(req,res);
})

router.get('/saveOMWOptimalCase', (req, res) => {
    mockController.saveOMWOptimalCaseResponse(req,res);
})

router.get('/savePerformanceParameter', (req, res) => {
    mockController.savePerformanceParameterResponse(req,res);
})

router.get('/getAllCompany', (req, res) => {
    mockController.getAllCompanyResponse(req,res);
})

module.exports = router;