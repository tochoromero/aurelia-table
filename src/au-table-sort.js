import {inject, bindable} from "aurelia-framework";
import {AureliaTableCustomAttribute} from "./au-table";

@inject(AureliaTableCustomAttribute, Element)
export class AutSortCustomAttribute {

    @bindable key;
    @bindable default;

    order = 0;
    orderClasses = ['aut-desc', 'aut-sortable', 'aut-asc'];

    ignoreEvent = false;

    constructor(auTable, element) {
        this.auTable = auTable;
        this.element = element;

        this.rowSelectedListener = () => {
            this.handleHeaderClicked();
        };

        this.sortChangedListener = () => {
            this.handleSortChanged();
        };
    }

    handleSortChanged() {
        if (!this.ignoreEvent) {
            this.order = 0;
            this.setClass();
        } else {
            this.ignoreEvent = false;
        }
    }

    attached() {
        this.element.style.cursor = 'pointer';
        this.element.classList.add('aut-sort');

        this.element.addEventListener('click', this.rowSelectedListener);
        this.auTable.addSortChangedListener(this.sortChangedListener);

        this.handleDefault();
        this.setClass();
    }

    detached() {
        this.element.removeEventListener('click', this.rowSelectedListener);
        this.auTable.removeSortChangedListener(this.sortChangedListener);
    }

    handleDefault() {
        if (this.default) {
            this.order = this.default === 'desc' ? -1 : 1;
            this.doSort();
        }
    }

    doSort() {
        this.ignoreEvent = true;
        this.auTable.sortChanged(this.key, this.order);
    }

    setClass() {
        this.orderClasses.forEach(next => this.element.classList.remove(next));
        this.element.classList.add(this.orderClasses[this.order + 1]);
    }

    handleHeaderClicked() {
        this.order = this.order == 0 || this.order == -1 ? this.order + 1 : -1;
        this.setClass();
        this.doSort();
    }
}