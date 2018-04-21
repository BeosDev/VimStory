var EventEmitter = require('events').EventEmitter;
var request = require("request");

function getSpeech(text) {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'POST',
            url: 'http://api.openfpt.vn/text2speech/v4',
            headers: {
                'cache-control': 'no-cache',
                api_key: '71b7c7d7d2764106a3b0a3f7fe0dbc71'
            },
            body: text
        };
        request(options, function (error, response, body) {
            if (error) {
                reject('error');
                throw new Error(error);
            }
            resolve(body);
        });
    })
}

function StringToArray(text) {
    console.log(text.length);
    var texts = [];
    while (text.length > 2000) {
        var index = 2000;
        while (text.charAt(index) !== ' ' && index >= 0) {
            index--;
        }
        if (index > 0)
            texts.push(text.slice(0, index));
        text = text.slice(index + 1, text.length);
    }
    if (text.length > 0) {
        texts.push(text);
    }
    console.log(texts.length);
    return texts;
}

function TextToSpeech(text) {
    var texts = StringToArray(text);
    var emitter = this;
    var promises = [];
    for (var i = 0; i < texts.length; i++) {
        promises.push(getSpeech(texts[i]));
    }
    Promise.all(promises)
        .then(result => {
            if (result.length > 0) {
                var rawlink = JSON.parse(result[0]).async;
                for (var i = 1; i < result.length ; i++)
                    rawlink += '|' + JSON.parse(result[i]).async;
                emitter.emit('result', rawlink)
            } else emitter.emit('error')
        })
        .catch(err => emitter.emit('error'));
}
TextToSpeech.prototype = new EventEmitter();

module.exports = TextToSpeech;