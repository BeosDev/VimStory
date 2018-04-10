var http = require("http");
var EventEmitter = require('events').EventEmitter;

function SpeechToText(text) {
    var options = {
        "method": "POST",
        "hostname": "api.openfpt.vn",
        "port": null,
        "path": "/text2speech/v4",
        "headers": {
            "api_key": "71b7c7d7d2764106a3b0a3f7fe0dbc71",
            "content-type": "text/plain",
            "cache-control": "no-cache",
        }
    };
    var emitter = this;
    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            emitter.emit('data', body.toString());
        });
    });

    req.write(text);
    req.end();
}

SpeechToText.prototype = new EventEmitter();

/*
var k = new SpeechToText('Xin chào các bạn');
k.on('data', (data) => {
    console.log(data);
})*/
module.exports = {
    SpeechToText
}