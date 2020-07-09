const Path = require('path');
const express = require('express');

module.exports = {
    url: null,

    setup: ({ app }) => {
        var staticPath = Path.resolve(__dirname, '..', '..', 'static');
        app.use(express.static(staticPath));
    }

}