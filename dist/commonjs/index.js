"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AutSortCustomAttribute = exports.AutSelectCustomAttribute = exports.AutPaginationCustomElement = exports.AureliaTableCustomAttribute = undefined;
exports.configure = configure;

var _auTable = require("./au-table");

var _auTablePagination = require("./au-table-pagination");

var _auTableSelect = require("./au-table-select");

var _auTableSort = require("./au-table-sort");

function configure(config) {
    config.globalResources('./au-table');
    config.globalResources('./au-table-pagination');
    config.globalResources('./au-table-select');
    config.globalResources('./au-table-sort');
}

exports.AureliaTableCustomAttribute = _auTable.AureliaTableCustomAttribute;
exports.AutPaginationCustomElement = _auTablePagination.AutPaginationCustomElement;
exports.AutSelectCustomAttribute = _auTableSelect.AutSelectCustomAttribute;
exports.AutSortCustomAttribute = _auTableSort.AutSortCustomAttribute;