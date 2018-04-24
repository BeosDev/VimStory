var EventEmitter = require('events').EventEmitter,
    request = require("request"),
    fs = require('fs'),
    pathDownload = '../../public/mp3/download/',
    pathFinal = '../../public/mp3/final/',
    CombinedStream = require('combined-stream');

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
            resolve(JSON.parse(body).async);
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

function ApiTextToSpeech(text) {
    var texts = StringToArray(text);
    var emitter = this;
    var promises = [];
    for (var i = 0; i < texts.length; i++) {
        promises.push(getSpeech(texts[i]));
    }
    Promise.all(promises)
        .then(result => {
            emitter.emit('result', result);
        })
        .catch(err => emitter.emit('error'));
}
ApiTextToSpeech.prototype = new EventEmitter();


function CombineAudio(id, links, emitter) {
    if (fs.existsSync(pathDownload + id + '/')) {
        var files = fs.readdirSync(pathDownload + id + '/');
        files.forEach(file => {
            fs.unlinkSync(pathDownload + id + '/' + file);
        })
    } else
        fs.mkdirSync(pathDownload + id);
    var count = 0;
    for (var i = 0; i < links.length; i++) {
        request.get(links[i])
            .pipe(fs.createWriteStream(`../../public/mp3/download/${id}/audio${i}.mp3`))
            .on('finish', function () {
                count++;
                if (count === links.length) {
                    ConcatAudio(id,emitter);
                }
            })
    }
}

function ConcatAudio(id,emitter) {
    var files = fs.readdirSync(pathDownload + id + '/');
    if (fs.existsSync(pathFinal + `audio${id}`))
        fs.rmdirSync(pathFinal + `audio${id}`);
    var combinedStream = CombinedStream.create();
    files.forEach(file => {
        combinedStream.append(fs.createReadStream(pathDownload + id + '/' + file));
    });
    combinedStream
        .pipe(fs.createWriteStream(pathFinal + `audio${id}.mp3`))
        .on('finish',() => {
            emitter.emit('done');
        });
}

function TextToSpeech(id,text) {
    var Speech = new ApiTextToSpeech(text);
    Speech.on('result', links => {
        CombineAudio(id, links,this);
    })
}

/*
TextToSpeech.prototype = new EventEmitter();

var k = new TextToSpeech(1,`
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
Có rất nhiều KPIs khác nhau, nhưng tóm gọn thì nó thường chia làm 2 loại KPI. Vậy 2 loại KPI đó là gì? Chúng ta cùng tham khảo bài chia sẻ của anh Bùi Quang Tinh Tú, Marketing Director của Ringier AG Vietnam - Classified Division, nhé!
`);
k.on('done',()=> console.log('exported'));
*/
module.exports = TextToSpeech;