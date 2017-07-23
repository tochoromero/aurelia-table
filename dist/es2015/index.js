import { PLATFORM } from 'aurelia-pal';
import { AureliaTableCustomAttribute } from './au-table';
import { AutPaginationCustomElement } from './au-table-pagination';
import { AutSelectCustomAttribute } from './au-table-select';
import { AutSortCustomAttribute } from './au-table-sort';

export function configure(config) {
  config.globalResources(PLATFORM.moduleName('./au-table'));
  config.globalResources(PLATFORM.moduleName('./au-table-pagination'));
  config.globalResources(PLATFORM.moduleName('./au-table-select'));
  config.globalResources(PLATFORM.moduleName('./au-table-sort'));
}

export { AureliaTableCustomAttribute, AutPaginationCustomElement, AutSelectCustomAttribute, AutSortCustomAttribute };