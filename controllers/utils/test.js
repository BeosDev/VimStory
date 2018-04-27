var t2s = require('./openfpt');
var k = new t2s('1','anh yêu em');
k.once('done',()=> console.log('done'));