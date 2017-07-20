import {AureliaTableCustomAttribute} from './au-table';
import {AutPaginationCustomElement} from './au-table-pagination';
import {AutSelectCustomAttribute} from './au-table-select';
import {AutSortCustomAttribute} from './au-table-sort';
import {TableSettings, TableResult} from './au-table-settings';
import {PLATFORM} from 'aurelia-framework';

export function configure(config) {
  config.globalResources(PLATFORM.moduleName('./au-table'), PLATFORM.moduleName('./au-table-pagination'), PLATFORM.moduleName('./au-table-select'), PLATFORM.moduleName('./au-table-sort'));
}

export {
  AureliaTableCustomAttribute,
  AutPaginationCustomElement,
  AutSelectCustomAttribute,
  AutSortCustomAttribute,
  TableSettings,
  TableResult
};
