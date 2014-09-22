var execute = require('./execute');
var get = require('./get');
var delay = require('./delay');


var main = function *() {
    yield delay(2000);
    console.log('delay is over!');
    var response = yield get('https://google.com');
    console.log('Response received!', response[0].statusCode);
    console.log('Response length:', response[0].body.length);
};

execute(main());


