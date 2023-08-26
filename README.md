# console record

similar to console history, this tool helps you to track console's record.

## Example

```js
/* code of console.js */
// < true
console.log("Hello!");
// < Hello!
console.record
// < [{
// <   stack: ['<anonymous>:1:1'],
// <   time: 1693054332260,
// <   type: "log",
// <   value: "Hello!"
// < }]
```

### access original `console`
```js
console._console.log("Hello!");
console._console.warn("warn!");
console._console.error("error!");
console._console.info("info!");
console._console.debug("debug!");
```
## How to use

In most cases, copy the code of `./console.min.js` since it is not that big.
Then, you can use `console` and `console.record`.
