var request = require('request');

// Create some async functions that'll return promises
var delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
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
    var wait = 2000;
    yield delay(wait);
    console.log(`${wait}ms delay is over!`);
    var url = 'https://google.com';
    var response = yield get(url);
    console.log(`Response received from ${url} with status: ${response.statusCode}`);
};

execute(main());
