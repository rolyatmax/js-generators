var request = require('request');

// Create some async functions that'll return promises
var delay = ms => new Promise(resolve => setTimeout(resolve, ms));
var get = url => new Promise((resolve, reject) => {
    request(url, (err, response) => err ? reject(err) : resolve(response));
});

// an executor that can take generator functions written with yield
var execute = (flow, resp) => {
    var result = flow.next(resp);
    if (result.done) return;
    result.value.then(res => execute(flow, res));
};

// the main function, written as a generator to make use of yield
var main = function *() {
    yield delay(2000);
    console.log('2000ms delay is over!');
    var response = yield get('https://google.com');
    console.log(`Response received from https://google.com with status: ${response.statusCode}`);
};

execute(main());
