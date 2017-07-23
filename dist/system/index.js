'use strict';

System.register(['aurelia-pal', './au-table', './au-table-pagination', './au-table-select', './au-table-sort'], function (_export, _context) {
  "use strict";

  var PLATFORM, AureliaTableCustomAttribute, AutPaginationCustomElement, AutSelectCustomAttribute, AutSortCustomAttribute;
  function configure(config) {
    config.globalResources(PLATFORM.moduleName('./au-table'));
    config.globalResources(PLATFORM.moduleName('./au-table-pagination'));
    config.globalResources(PLATFORM.moduleName('./au-table-select'));
    config.globalResources(PLATFORM.moduleName('./au-table-sort'));
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_auTable) {
      AureliaTableCustomAttribute = _auTable.AureliaTableCustomAttribute;
    }, function (_auTablePagination) {
      AutPaginationCustomElement = _auTablePagination.AutPaginationCustomElement;
    }, function (_auTableSelect) {
      AutSelectCustomAttribute = _auTableSelect.AutSelectCustomAttribute;
    }, function (_auTableSort) {
      AutSortCustomAttribute = _auTableSort.AutSortCustomAttribute;
    }],
    execute: function () {
      _export('AureliaTableCustomAttribute', AureliaTableCustomAttribute);

      _export('AutPaginationCustomElement', AutPaginationCustomElement);

      _export('AutSelectCustomAttribute', AutSelectCustomAttribute);

      _export('AutSortCustomAttribute', AutSortCustomAttribute);
    }
  };
});