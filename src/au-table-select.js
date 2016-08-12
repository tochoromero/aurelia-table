import {inject, bindable, bindingMode, BindingEngine} from "aurelia-framework";
import {AureliaTableCustomAttribute} from "./au-table";

@inject(AureliaTableCustomAttribute, Element, BindingEngine)
export class AutSelectCustomAttribute {

    @bindable({defaultBindingMode: bindingMode.twoWay}) row;
    @bindable mode = 'single';
    @bindable selectedClass = 'aut-row-selected';

    selectedSubscription;

    constructor(auTable, element, bindingEngine) {
        this.auTable = auTable;
        this.element = element;
        this.bindingEngine = bindingEngine;

        this.rowSelectedListener = e => {
            this.handleRowSelected(e);
        };
    }

    attached() {
        this.element.style.cursor = 'pointer';
        this.element.addEventListener('click', this.rowSelectedListener);

        this.selectedSubscription = this.bindingEngine.propertyObserver(this.row, '$IsSelected').subscribe(() => this.isSelectedChanged());

        this.setClass();
    }

    detached() {
        this.element.removeEventListener('click', this.rowSelectedListener);
        this.selectedSubscription.dispose();
    }

    setClass() {
        if(this.row.$IsSelected){
            this.element.classList.add(this.selectedClass);
        }else{
            this.element.classList.remove(this.selectedClass);
        }
    }

    handleRowSelected(e) {
        let source = event.target || event.srcElement;
        if (source.tagName.toLowerCase() !== 'td') {
            return;
        }

        if(this.mode === 'single'){
            this.deselectAll();
        }
        
        this.row.$IsSelected = this.row.$IsSelected ? false : true;
        this.setClass();
    }

    isSelectedChanged() {
        this.setClass();
    }

    deselectAll() {
        this.auTable.data.forEach(item => {
            if(item !== this.row){
                item.$IsSelected = false
            }
        });
    }
}