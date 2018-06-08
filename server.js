/*global document, window, alert, console, require, config*/
var requirejs = require('requirejs');
var stockData = require('./src/assets/stock.json');
var Pusher = require('pusher');
var av = require('alphavantage')({key: '89RBTI0KIUM8F1JV'});

var pusher = new Pusher({
        appId: '536045',
        key: '5f549e8be14a34c859b2',
        secret: '1fbb36146a7c3e9ee24c',
        cluster: 'us2',
        encrypted: true
    });

var comp_dict = ['GOOG', 'AAPL', 'MSFT', 'AMZN', 'INTC', 'TSLA'];

// formats strings similarly to python
String.prototype.format = function () {
    'use strict';
    var args = arguments;
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (curlyBrack, index) {
        return ((curlyBrack === "{{") ? "{" : ((curlyBrack === "}}") ? "}" : args[index]));
    });
};

setInterval(function () {
    "use strict";
    av.data.batch({symbols: comp_dict, datatype: 'json', outputsize: 'compact'}).then( 
        data => {
            console.log(data)
            pusher.trigger('trade', 'stock', data['Stock Quotes']);
        }).catch((err) => {
            // Handle error here
            console.log('a problem happened')
        })
//    var GOOG = stockData[1]['Trades'][i];
//    pusher.trigger('trade', 'stock', GOOG);
//    i += 1;
}, 2000);
