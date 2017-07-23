'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutSortCustomAttribute = exports.AutSelectCustomAttribute = exports.AutPaginationCustomElement = exports.AureliaTableCustomAttribute = undefined;
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

var _auTable = require('./au-table');

var _auTablePagination = require('./au-table-pagination');

var _auTableSelect = require('./au-table-select');

var _auTableSort = require('./au-table-sort');

function configure(config) {
  config.globalResources(_aureliaPal.PLATFORM.moduleName('./au-table'));
  config.globalResources(_aureliaPal.PLATFORM.moduleName('./au-table-pagination'));
  config.globalResources(_aureliaPal.PLATFORM.moduleName('./au-table-select'));
  config.globalResources(_aureliaPal.PLATFORM.moduleName('./au-table-sort'));
}

exports.AureliaTableCustomAttribute = _auTable.AureliaTableCustomAttribute;
exports.AutPaginationCustomElement = _auTablePagination.AutPaginationCustomElement;
exports.AutSelectCustomAttribute = _auTableSelect.AutSelectCustomAttribute;
exports.AutSortCustomAttribute = _auTableSort.AutSortCustomAttribute;