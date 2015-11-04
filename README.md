# async/await-style code with js generators

Experimenting with JS generators to create async/await-style code.

Write your main function as a generator using `yield` where you want and pass
it to `execute`.

For this simple version, you should only `yield` promises. The value passed to
the promise's callback becomes the value of the `yield` expression.

E.g.:

```javascript
execute(function *(){
    var response = yield getRequest('http://google.com');
    console.log(response.body);
}());
```

Run the example:

```shell
npm install
node index.js
```

For a full-featured, usable library, check out [Co](https://github.com/visionmedia/co).
