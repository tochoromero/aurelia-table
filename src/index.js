import {AureliaTableCustomAttribute} from "./au-table";
import {AutPaginationCustomElement} from "./au-table-pagination";
import {AutSelectCustomAttribute} from "./au-table-select";
import {AutSortCustomAttribute} from "./au-table-sort";

export function configure(config) {
    config.globalResources('./au-table');
    config.globalResources('./au-table-pagination');
    config.globalResources('./au-table-select');
    config.globalResources('./au-table-sort');
}

export {
    AureliaTableCustomAttribute,
    AutPaginationCustomElement,
    AutSelectCustomAttribute,
    AutSortCustomAttribute
}