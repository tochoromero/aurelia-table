import {inject, bindable, bindingMode, BindingEngine} from 'aurelia-framework';
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
    this.element.style.cursor = 'pointer';

    if (!this.custom) {
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
    if (window.CustomEvent) {
      selectedEvent = new CustomEvent('select', {
        detail: {row: this.row},
        bubbles: true
      });
    } else {
      selectedEvent = document.createEvent('CustomEvent');
      selectedEvent.initCustomEvent('select', true, true, {
        detail: {row: this.row}
      });
    }
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
