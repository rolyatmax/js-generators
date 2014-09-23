js-generators
=============

Experimenting with JS generators to create coroutine-style code... i think

Write your main function as a generator using yield where you want and pass it to `execute`.

For this simple version, you should only `yield` promises. The value passed to promise's callback becomes the value of the `yield` expression.

E.g.

    var response = yield getRequest('http://google.com');

For a full-featured, usable library, check out [Co](https://github.com/visionmedia/co).
