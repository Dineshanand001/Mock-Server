const getAdjustmentResponse = require("./../mockdata/GetAdjustmentResponse");
const getAttritionLiteBatchResponse = require("./../mockdata/GetAttritionLiteBatchResponse");
const getAttritionLiteDataResponse = require("./../mockdata/GetAttritionLiteDataResponse");
const getCriteriaValueByGroupDateResponse = require("./../mockdata/GetCriteriaValueByGroupDateResponse");
const getCriteriaValueResponse = require("./../mockdata/GetCriteriaValueResponse");
const getFeedProgramResponse = require("./../mockdata/GetFeedProgramResponse");
const getGrowthADFIResponse = require("./../mockdata/GetGrowthADFIResponse");
const getMasterMetadataUnitByAccountResponse = require("./../mockdata/GetMasterMetadataUnitByAccountResponse");
const getMorePaymentGridResponse = require("./../mockdata/GetMorePaymentGridResponse");
const getOMWDataResponse = require("./../mockdata/GetOMWDataResponse");
const getOMWLiteDataResponse = require("./../mockdata/GetOMWLiteDataResponse");
const getOMWLitePaymentGridDetailResponse = require("./../mockdata/GetOMWLitePaymentGridDetailResponse");
const getOMWPackerResponse = require("./../mockdata/GetOMWPackerResponse");
const getPaymentGridResponse = require("./../mockdata/GetPaymentGridResponse");
const getPerformanceParameterResponse = require("./../mockdata/GetPerformanceParameterResponse");
const getPerformanceResponse = require("./../mockdata/GetPerformanceResponse");
const getPFDataResponse = require("./../mockdata/GetPFDataResponse");
const getPFLiteBatchResponse = require("./../mockdata/GetPFLiteBatchResponse");
const getPFLiteDataResponse = require("./../mockdata/GetPFLiteDataResponse");
const getPFLiteEntryBatchResponse = require("./../mockdata/GetPFLiteEntryBatchResponse");
const getPFLitePaymentGridDetailResponse = require("./../mockdata/GetPFLitePaymentGridDetailResponse");
const getPFLitePaymentGridResponse = require("./../mockdata/GetPFLitePaymentGridResponse");
const getPFPackerResponse = require("./../mockdata/GetPFPackerResponse");
const loadClientTokenResponse = require("./../mockdata/LoadClientTokenResponse");
const saveOMWLiteOptimalCaseResponse = require("./../mockdata/SaveOMWLiteOptimalCaseResponse");
const saveOMWOptimalCaseResponse = require("./../mockdata/SaveOMWOptimalCaseResponse");
const savePerformanceParameterResponse = require("./../mockdata/SavePerformanceParameterResponse");
const getAllCompanyResponse = require("./../mockdata/GetAllCompanyResponse.json");
const loginResponse = require("./../mockdata/LoginResponse.json");
const getOMWPaymentGridResponse = require("./../mockdata/GetOMWPaymentGridResposne.json");
const getOMWPerformanceResponse = require("./../mockdata/GetOMWPerformanceResponse.json")

exports.getAdjustmentResponse = (req, res) => {
    res.json(getAdjustmentResponse)
}

exports.getAttritionLiteBatchResponse = (req, res) => {
    res.json(getAttritionLiteBatchResponse)
}

exports.getAttritionLiteDataResponse = (req, res) => {
    res.json(getAttritionLiteDataResponse)
}

exports.getCriteriaValueByGroupDateResponse = (req, res) => {
    res.json(getCriteriaValueByGroupDateResponse)
}

exports.getCriteriaValueResponse = (req, res) => {
    res.json(getCriteriaValueResponse)
}

exports.getFeedProgramResponse = (req, res) => {
    res.json(getFeedProgramResponse)
}

exports.getGrowthADFIResponse = (req, res) => {
    res.json(getGrowthADFIResponse)
}

exports.getMasterMetadataUnitByAccountResponse = (req, res) => {
    res.json(getMasterMetadataUnitByAccountResponse)
}

exports.getMorePaymentGridResponse = (req, res) => {
    res.json(getMorePaymentGridResponse)
}

exports.getOMWDataResponse = (req, res) => {
    res.json(getOMWDataResponse)
}

exports.getOMWLiteDataResponse = (req, res) => {
    res.json(getOMWLiteDataResponse)
}

exports.getOMWLitePaymentGridDetailResponse = (req, res) => {
    res.json(getOMWLitePaymentGridDetailResponse)
}

exports.getOMWPackerResponse = (req, res) => {
    res.json(getOMWPackerResponse)
}

exports.getPaymentGridResponse = (req, res) => {
    res.json(getPaymentGridResponse)
}

exports.getPerformanceParameterResponse = (req, res) => {
    res.json(getPerformanceParameterResponse)
}

exports.getPerformanceResponse = (req, res) => {
    res.json(getPerformanceResponse)
}

exports.getPFDataResponse = (req, res) => {
    res.json(getPFDataResponse)
}

exports.getPFLiteBatchResponse = (req, res) => {
    res.json(getPFLiteBatchResponse)
}

exports.getPFLiteDataResponse = (req, res) => {
    res.json(getPFLiteDataResponse)
}

exports.getPFLiteEntryBatchResponse = (req, res) => {
    res.json(getPFLiteEntryBatchResponse)
}

exports.getPFLitePaymentGridDetailResponse = (req, res) => {
    res.json(getPFLitePaymentGridDetailResponse)
}

exports.getPFLitePaymentGridResponse = (req, res) => {
    res.json(getPFLitePaymentGridResponse)
}

exports.getPFPackerResponse = (req, res) => {
    res.json(getPFPackerResponse)
}

exports.loadClientTokenResponse = (req, res) => {
    res.json(loadClientTokenResponse)
}

exports.saveOMWLiteOptimalCaseResponse = (req, res) => {
    res.json(saveOMWLiteOptimalCaseResponse)
}

exports.saveOMWOptimalCaseResponse = (req, res) => {
    res.json(saveOMWOptimalCaseResponse)
}

exports.savePerformanceParameterResponse = (req, res) => {
    res.json(savePerformanceParameterResponse)
}

exports.getAllCompanyResponse = (req, res) => {
    res.json(getAllCompanyResponse)
}

exports.loginResponse = (req, res) => {
    if(req.body.username && req.body.password) {
        res.json(loginResponse)
    }
}

exports.getOMWPaymentGridResponse = (req, res) => {
    res.json(getOMWPaymentGridResponse)
} 

exports.getOMWPerformanceResponse = (req, res) => {
    res.json(getOMWPerformanceResponse);
}