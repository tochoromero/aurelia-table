"use strict";

System.register(["./au-table", "./au-table-pagination", "./au-table-select", "./au-table-sort"], function (_export, _context) {
    "use strict";

    var AureliaTableCustomAttribute, AutPaginationCustomElement, AutSelectCustomAttribute, AutSortCustomAttribute;
    function configure(config) {
        config.globalResources('./au-table', './au-table-pagination', './au-table-select', './au-table-sort');

        configureHtmlResourcePlugin(config);
    }

    _export("configure", configure);

    return {
        setters: [function (_auTable) {
            AureliaTableCustomAttribute = _auTable.AureliaTableCustomAttribute;
        }, function (_auTablePagination) {
            AutPaginationCustomElement = _auTablePagination.AutPaginationCustomElement;
        }, function (_auTableSelect) {
            AutSelectCustomAttribute = _auTableSelect.AutSelectCustomAttribute;
        }, function (_auTableSort) {
            AutSortCustomAttribute = _auTableSort.AutSortCustomAttribute;
        }],
        execute: function () {
            _export("AureliaTableCustomAttribute", AureliaTableCustomAttribute);

            _export("AutPaginationCustomElement", AutPaginationCustomElement);

            _export("AutSelectCustomAttribute", AutSelectCustomAttribute);

            _export("AutSortCustomAttribute", AutSortCustomAttribute);
        }
    };
});