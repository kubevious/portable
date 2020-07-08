/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../kubevious/src/index.js                                                                    ***/

process.stdin.resume();
process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Control-D to exit.');
  process.exit(0);
});

const logger = require('./logger');
logger.info("init");

const Context = require("./lib/context");
const context = new Context(logger);

context.setupServer();

context.run();

