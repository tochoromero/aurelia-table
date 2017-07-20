'use strict';

System.register(['./au-table', './au-table-pagination', './au-table-select', './au-table-sort', './au-table-settings', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var AureliaTableCustomAttribute, AutPaginationCustomElement, AutSelectCustomAttribute, AutSortCustomAttribute, TableSettings, TableResult, PLATFORM;
  function configure(config) {
    config.globalResources(PLATFORM.moduleName('./au-table'), PLATFORM.moduleName('./au-table-pagination'), PLATFORM.moduleName('./au-table-select'), PLATFORM.moduleName('./au-table-sort'));
  }

  _export('configure', configure);

  return {
    setters: [function (_auTable) {
      AureliaTableCustomAttribute = _auTable.AureliaTableCustomAttribute;
    }, function (_auTablePagination) {
      AutPaginationCustomElement = _auTablePagination.AutPaginationCustomElement;
    }, function (_auTableSelect) {
      AutSelectCustomAttribute = _auTableSelect.AutSelectCustomAttribute;
    }, function (_auTableSort) {
      AutSortCustomAttribute = _auTableSort.AutSortCustomAttribute;
    }, function (_auTableSettings) {
      TableSettings = _auTableSettings.TableSettings;
      TableResult = _auTableSettings.TableResult;
    }, function (_aureliaFramework) {
      PLATFORM = _aureliaFramework.PLATFORM;
    }],
    execute: function () {
      _export('AureliaTableCustomAttribute', AureliaTableCustomAttribute);

      _export('AutPaginationCustomElement', AutPaginationCustomElement);

      _export('AutSelectCustomAttribute', AutSelectCustomAttribute);

      _export('AutSortCustomAttribute', AutSortCustomAttribute);

      _export('TableSettings', TableSettings);

      _export('TableResult', TableResult);
    }
  };
});