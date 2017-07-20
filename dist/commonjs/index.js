'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableResult = exports.TableSettings = exports.AutSortCustomAttribute = exports.AutSelectCustomAttribute = exports.AutPaginationCustomElement = exports.AureliaTableCustomAttribute = undefined;
exports.configure = configure;

var _auTable = require('./au-table');

var _auTablePagination = require('./au-table-pagination');

var _auTableSelect = require('./au-table-select');

var _auTableSort = require('./au-table-sort');

var _auTableSettings = require('./au-table-settings');

var _aureliaFramework = require('aurelia-framework');

function configure(config) {
  config.globalResources(_aureliaFramework.PLATFORM.moduleName('./au-table'), _aureliaFramework.PLATFORM.moduleName('./au-table-pagination'), _aureliaFramework.PLATFORM.moduleName('./au-table-select'), _aureliaFramework.PLATFORM.moduleName('./au-table-sort'));
}

exports.AureliaTableCustomAttribute = _auTable.AureliaTableCustomAttribute;
exports.AutPaginationCustomElement = _auTablePagination.AutPaginationCustomElement;
exports.AutSelectCustomAttribute = _auTableSelect.AutSelectCustomAttribute;
exports.AutSortCustomAttribute = _auTableSort.AutSortCustomAttribute;
exports.TableSettings = _auTableSettings.TableSettings;
exports.TableResult = _auTableSettings.TableResult;