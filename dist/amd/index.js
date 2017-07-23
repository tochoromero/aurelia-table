define(['exports', 'aurelia-pal', './au-table', './au-table-pagination', './au-table-select', './au-table-sort'], function (exports, _aureliaPal, _auTable, _auTablePagination, _auTableSelect, _auTableSort) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AutSortCustomAttribute = exports.AutSelectCustomAttribute = exports.AutPaginationCustomElement = exports.AureliaTableCustomAttribute = undefined;
  exports.configure = configure;
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
});