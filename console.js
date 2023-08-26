(function(){
  console._console = {};

  let _c = console._console;

  console.record = [];

  _c.log = console.log;
  _c.warn = console.warn;
  _c.error = console.error;
  _c.info = console.info;
  _c.debug = console.debug;

  let makeFunc = (fx = x => {}, type) => {
    return args => {
      let stack;
      try { throw Error(); } catch (error) {
        stack = String(error.stack).split('\n').slice(2).map(x => x.slice(7));
      }
      console.record.push({
        type: type,
        time: Date.now(),
        stack: stack,
        value: args
      });
      fx(args);
    };
  }

  console.log = makeFunc(_c.log, 'log');
  console.warn = makeFunc(_c.warn, 'warn');
  console.error = makeFunc(_c.error, 'error');
  console.info = makeFunc(_c.info, 'error');
  console.debug = makeFunc(_c.debug, 'error');
})();