define(['exports', './au-table', './au-table-pagination', './au-table-select', './au-table-sort', './au-table-settings', 'aurelia-framework'], function (exports, _auTable, _auTablePagination, _auTableSelect, _auTableSort, _auTableSettings, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TableResult = exports.TableSettings = exports.AutSortCustomAttribute = exports.AutSelectCustomAttribute = exports.AutPaginationCustomElement = exports.AureliaTableCustomAttribute = undefined;
  exports.configure = configure;
  function configure(config) {
    config.globalResources(_aureliaFramework.PLATFORM.moduleName('./au-table'), _aureliaFramework.PLATFORM.moduleName('./au-table-pagination'), _aureliaFramework.PLATFORM.moduleName('./au-table-select'), _aureliaFramework.PLATFORM.moduleName('./au-table-sort'));
  }

  exports.AureliaTableCustomAttribute = _auTable.AureliaTableCustomAttribute;
  exports.AutPaginationCustomElement = _auTablePagination.AutPaginationCustomElement;
  exports.AutSelectCustomAttribute = _auTableSelect.AutSelectCustomAttribute;
  exports.AutSortCustomAttribute = _auTableSort.AutSortCustomAttribute;
  exports.TableSettings = _auTableSettings.TableSettings;
  exports.TableResult = _auTableSettings.TableResult;
});