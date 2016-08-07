import {inject, bindable} from 'aurelia-framework'
import {AureliaTableCustomAttribute} from './au-table'

@inject(AureliaTableCustomAttribute)
export class AutFilterCustomAttribute {
    
    @bindable filterText;
    @bindable filterKeys;

    constructor(auTable){
        this.auTable = auTable;
    }

    bind(){
        this.auTable.filterKeys = this.filterKeys;
    }
    
    filterTextChanged(newValue){
        this.auTable.setFilterText(newValue);
    }
    
    filterKeysChanged(newValue){
        this.auTable.setFilterKeys(newValue);
    }
}