var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { inject, bindable } from 'aurelia-framework';
import { AureliaTableCustomAttribute } from './au-table';

export let AutSortCustomAttribute = (_dec = inject(AureliaTableCustomAttribute, Element), _dec(_class = (_class2 = class AutSortCustomAttribute {

  constructor(auTable, element) {
    _initDefineProp(this, 'key', _descriptor, this);

    _initDefineProp(this, 'custom', _descriptor2, this);

    _initDefineProp(this, 'default', _descriptor3, this);

    this.order = 0;
    this.orderClasses = ['aut-desc', 'aut-sortable', 'aut-asc'];
    this.ignoreEvent = false;

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
    if (this.key === null && this.custom === null) {
      throw new Error('Must provide a key or a custom sort function.');
    }

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
    this.auTable.sortChanged(this.key, this.custom, this.order);
  }

  setClass() {
    this.orderClasses.forEach(next => this.element.classList.remove(next));
    this.element.classList.add(this.orderClasses[this.order + 1]);
  }

  handleHeaderClicked() {
    this.order = this.order === 0 || this.order === -1 ? this.order + 1 : -1;
    this.setClass();
    this.doSort();
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'key', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'custom', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'default', [bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class);