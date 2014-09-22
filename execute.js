function execute(flow, resp) {
    var result = flow.next(resp);
    if (result.done) return;
    result.value.then(function(res) {
        execute(flow, res);
    });
}

module.exports = execute;
