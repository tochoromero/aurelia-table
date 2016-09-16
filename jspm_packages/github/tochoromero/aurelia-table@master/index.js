/* */
define(["exports", "./au-table", "./au-table-pagination", "./au-table-select", "./au-table-sort"], function (exports, _auTable, _auTablePagination, _auTableSelect, _auTableSort) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AutSortCustomAttribute = exports.AutSelectCustomAttribute = exports.AutPaginationCustomElement = exports.AureliaTableCustomAttribute = undefined;
    exports.configure = configure;
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
});