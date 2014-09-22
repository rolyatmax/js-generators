var Q = require('q');
var request = Q.denodeify(require('request'));

function get(url) {
    return request(url).then(function(val) {
        return val;
    });
}

module.exports = get;
