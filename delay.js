var Q = require('q');

function delay(ms) {
    var deferred = Q.defer();
    setTimeout(deferred.resolve.bind(deferred), ms);
    return deferred.promise;
}

module.exports = delay;
