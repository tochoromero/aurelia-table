'use strict';

System.register([], function (_export, _context) {
    "use strict";

    function configure(config) {
        config.globalResources('./au-table');
        config.globalResources('./au-table-filter');
        config.globalResources('./au-table-pagination');
        config.globalResources('./au-table-select');
        config.globalResources('./au-table-sort');
    }

    _export('configure', configure);

    return {
        setters: [],
        execute: function () {}
    };
});