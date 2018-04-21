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

function TextToSpeech(text) {
    var texts = StringToArray(text);
    var emitter = this;
    var promises = [];
    for (var i = 0; i < texts.length; i++) {
        promises.push(getSpeech(texts[i]));
    }
    Promise.all(promises)
        .then(result => {
            emitter.emit('result', result.join('|'));
        })
        .catch(err => emitter.emit('error'));
}
TextToSpeech.prototype = new EventEmitter();

var k = `
Trả lời câu hỏi của Tuổi Trẻ Online về việc show diễn Ký ức Hội An diễn ra ở Quảng Nam nhưng lại do Sở Văn hóa - thể thao Hà Nội cấp phép là đúng hay sai quy trình, ông Cường cho rằng như vậy "là đúng".

Ông Cường nói nghị định 79 của Chính phủ về quy định biểu diễn nghệ thuật đã quy định rõ, do doanh nghiệp sản xuất Ký ức Hội An nằm trên địa bàn TP Hà Nội nên Sở Văn hóa, thể thao Hà Nội cấp phép là hợp lý.

"Ví dụ như chúng tôi cấp cho một đơn vị diễn ở đây nhưng ra Hà Nội diễn vẫn được. Chương trình diễn ở đây, Sở Văn hóa - thể thao và du lịch Quảng Nam cũng phải tham gia duyệt nội dung" - ông Cường nói thêm.

Đúng thẩm quyền nhưng… sai quy trình

Trong khi đó, tại buổi làm việc của lãnh đạo UBND TP Hội An với các phòng ban sáng 14-4, khi đề cập về chương trình Ký ức Hội An, chủ tịch UBND TP Hội An Nguyễn Văn Dũng nói bản thân ông là chủ tịch TP nhưng không được lấy ý kiến, không được biết gì về show diễn này trên địa bàn mà chính ông đứng đầu khối chính quyền.

Ông Dũng bức xúc rằng hiện tại người dân Hội An phản ứng rất dữ dội về những chi tiết "không đúng, không thật" trong chương trình, thậm chí ông Dũng đề nghị cần xem xét… trả lại tên gọi Ký ức Hội An.
Trả lời câu hỏi của Tuổi Trẻ Online về việc show diễn Ký ức Hội An diễn ra ở Quảng Nam nhưng lại do Sở Văn hóa - thể thao Hà Nội cấp phép là đúng hay sai quy trình, ông Cường cho rằng như vậy "là đúng".

Ông Cường nói nghị định 79 của Chính phủ về quy định biểu diễn nghệ thuật đã quy định rõ, do doanh nghiệp sản xuất Ký ức Hội An nằm trên địa bàn TP Hà Nội nên Sở Văn hóa, thể thao Hà Nội cấp phép là hợp lý.

"Ví dụ như chúng tôi cấp cho một đơn vị diễn ở đây nhưng ra Hà Nội diễn vẫn được. Chương trình diễn ở đây, Sở Văn hóa - thể thao và du lịch Quảng Nam cũng phải tham gia duyệt nội dung" - ông Cường nói thêm.

Đúng thẩm quyền nhưng… sai quy trình

Trong khi đó, tại buổi làm việc của lãnh đạo UBND TP Hội An với các phòng ban sáng 14-4, khi đề cập về chương trình Ký ức Hội An, chủ tịch UBND TP Hội An Nguyễn Văn Dũng nói bản thân ông là chủ tịch TP nhưng không được lấy ý kiến, không được biết gì về show diễn này trên địa bàn mà chính ông đứng đầu khối chính quyền.

Ông Dũng bức xúc rằng hiện tại người dân Hội An phản ứng rất dữ dội về những chi tiết "không đúng, không thật" trong chương trình, thậm chí ông Dũng đề nghị cần xem xét… trả lại tên gọi Ký ức Hội An.
Trả lời câu hỏi của Tuổi Trẻ Online về việc show diễn Ký ức Hội An diễn ra ở Quảng Nam nhưng lại do Sở Văn hóa - thể thao Hà Nội cấp phép là đúng hay sai quy trình, ông Cường cho rằng như vậy "là đúng".

Ông Cường nói nghị định 79 của Chính phủ về quy định biểu diễn nghệ thuật đã quy định rõ, do doanh nghiệp sản xuất Ký ức Hội An nằm trên địa bàn TP Hà Nội nên Sở Văn hóa, thể thao Hà Nội cấp phép là hợp lý.

"Ví dụ như chúng tôi cấp cho một đơn vị diễn ở đây nhưng ra Hà Nội diễn vẫn được. Chương trình diễn ở đây, Sở Văn hóa - thể thao và du lịch Quảng Nam cũng phải tham gia duyệt nội dung" - ông Cường nói thêm.

Đúng thẩm quyền nhưng… sai quy trình

Trong khi đó, tại buổi làm việc của lãnh đạo UBND TP Hội An với các phòng ban sáng 14-4, khi đề cập về chương trình Ký ức Hội An, chủ tịch UBND TP Hội An Nguyễn Văn Dũng nói bản thân ông là chủ tịch TP nhưng không được lấy ý kiến, không được biết gì về show diễn này trên địa bàn mà chính ông đứng đầu khối chính quyền.

Ông Dũng bức xúc rằng hiện tại người dân Hội An phản ứng rất dữ dội về những chi tiết "không đúng, không thật" trong chương trình, thậm chí ông Dũng đề nghị cần xem xét… trả lại tên gọi Ký ức Hội An.

`;

var t = new TextToSpeech(k);
t.on('result',res => console.log(res));

module.exports = TextToSpeech;