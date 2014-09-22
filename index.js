var execute = require('./execute');
var Q = require('q');

function delay(ms) {
    var deferred = Q.defer();
    var response = 'finally!';
    setTimeout(deferred.resolve.bind(deferred, response), ms);
    return deferred.promise;
}

execute(function *() {
    var response = yield delay(2000);
    console.log('delay is over!', response);
    yield delay(4000);
    console.log('delay #2 is over!');
});


