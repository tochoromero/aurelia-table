'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;
function configure(config) {
    config.globalResources('./au-table');
    config.globalResources('./au-table-pagination');
    config.globalResources('./au-table-select');
    config.globalResources('./au-table-sort');
}