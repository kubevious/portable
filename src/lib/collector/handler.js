class Handler {
    constructor(context) {
        this._context = context;
        this._logger = context.logger.sublogger("Handler");

        this.logger.info("[Handler constructed] ");

        this._snapshots = {};
        this._diffs = {};

        this._iteration = 0;
    }
}

module.exports = Handler;
