import {inject, bindable, bindingMode, BindingEngine, DOM} from 'aurelia-framework';
import {AureliaTableCustomAttribute} from './au-table';

@inject(AureliaTableCustomAttribute, Element, BindingEngine)
export class AutSelectCustomAttribute {

  @bindable({defaultBindingMode: bindingMode.twoWay}) row;
  @bindable mode = 'single';
  @bindable selectedClass = 'aut-row-selected';
  @bindable custom = false;

  selectedSubscription;

  constructor(auTable, element, bindingEngine) {
    this.auTable = auTable;
    this.element = element;
    this.bindingEngine = bindingEngine;

    this.rowSelectedListener = event => {
      this.handleRowSelected(event);
    };
  }

  attached() {
    if (!this.custom) {
      this.element.style.cursor = 'pointer';
      this.element.addEventListener('click', this.rowSelectedListener);
    }

    this.selectedSubscription = this.bindingEngine.propertyObserver(this.row, '$isSelected').subscribe(() => this.isSelectedChanged());

    this.setClass();
  }

  detached() {
    if (!this.custom) {
      this.element.removeEventListener('click', this.rowSelectedListener);
    }

    this.selectedSubscription.dispose();
  }

  setClass() {
    if (this.row.$isSelected) {
      this.element.classList.add(this.selectedClass);
    } else {
      this.element.classList.remove(this.selectedClass);
    }
  }

  handleRowSelected(event) {
    let source = event.target || event.srcElement;
    if (source.tagName.toLowerCase() !== 'td') {
      return;
    }
    this.row.$isSelected = this.row.$isSelected ? false : true;
  }

  dispatchSelectedEvent() {
    let selectedEvent;
    selectedEvent = DOM.createCustomEvent('select', {
      detail: {row: this.row},
      bubbles: true
    });
    this.element.dispatchEvent(selectedEvent);
  }

  isSelectedChanged() {
    this.setClass();

    if (this.row.$isSelected) {
      if (this.mode === 'single') {
        this.deselectAll();
      }

      this.dispatchSelectedEvent();
    }
  }

  deselectAll() {
    this.auTable.data.forEach(item => {
      if (item !== this.row) {
        item.$isSelected = false;
      }
    });
  }
}
