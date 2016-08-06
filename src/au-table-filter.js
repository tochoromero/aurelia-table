import {inject, bindable} from 'aurelia-framework'
import {AuTableCustomAttribute} from './au-table'

@inject(AuTableCustomAttribute)
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