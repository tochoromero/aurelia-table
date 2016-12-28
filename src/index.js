import {AureliaTableCustomAttribute} from './au-table';
import {AutPaginationCustomElement} from './au-table-pagination';
import {AutSelectCustomAttribute} from './au-table-select';
import {AutSortCustomAttribute} from './au-table-sort';

export function configure(config) {
  config.globalResources(
        './au-table',
        './au-table-pagination',
        './au-table-select',
        './au-table-sort'
    );
}

export {
    AureliaTableCustomAttribute,
    AutPaginationCustomElement,
    AutSelectCustomAttribute,
    AutSortCustomAttribute
};
