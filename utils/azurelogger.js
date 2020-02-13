var request = require('request');
var crypto = require('crypto');

var postLogger = function( json) {
    var workspaceId = "e176ca6c-cb86-4c16-8ef1-906fa1a975ef";//worksapce id azure logspace
    var sharedKey = "m4BnNvUADXy/aq4/r1UEnvR4qbOlZEH3LbDj0oXT+ys93JVoubV5xH7stavKKnZWKM2QRYESER5Uwd2J0J1Ykg==";//primary key azure logspace
    var apiVersion = '2016-04-01';
    var processingDate = new Date().toUTCString();
    var body = JSON.stringify(json);
    var contentLength = Buffer.byteLength(body, 'utf8');
    var stringToSign = 'POST\n' + contentLength + '\napplication/json\nx-ms-date:' + processingDate + '\n/api/logs';
    var signature = crypto.createHmac('sha256', new Buffer(sharedKey, 'base64')).update(stringToSign, 'utf-8').digest('base64');
    var authorization = 'SharedKey ' + workspaceId + ':' + signature;
    var headers = {
        "content-type": "application/json", 
        "Authorization": authorization,
        "Log-Type": "Info",
        "x-ms-date": processingDate
    };
    var url = 'https://' + workspaceId + '.ods.opinsights.azure.com/api/logs?api-version=' + apiVersion;

    request.post({url: url, headers: headers, body: body}, function (error, response, body) {
        //logging info of post activity here
    });
}

exports.azureLogger = function(json) {
    return new postLogger(json);
}