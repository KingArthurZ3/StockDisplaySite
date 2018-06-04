/*global document, window, alert, console, require*/
var requirejs = require('requirejs');
var stockData = require('./src/assets/stock.json');
var Pusher = require('pusher');

var pusher = new Pusher({
        appId: '536045',
        key: '5f549e8be14a34c859b2',
        secret: '1fbb36146a7c3e9ee24c',
        cluster: 'us2',
        encrypted: true
    });

var i = 0;
setInterval(function () {
    "use strict";
    var GOOG = stockData[1]['Trades'][i];
    pusher.trigger('trade', 'stock', GOOG);
    i += 1;
}, 5000);
