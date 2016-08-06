var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

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

import { inject, bindable, bindingMode, BindingEngine } from "aurelia-framework";
import { AuTableCustomAttribute } from "au-table/au-table";

export let AutSelectCustomAttribute = (_dec = inject(AuTableCustomAttribute, Element, BindingEngine), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class AutSelectCustomAttribute {

    constructor(auTable, element, bindingEngine) {
        _initDefineProp(this, "row", _descriptor, this);

        _initDefineProp(this, "mode", _descriptor2, this);

        _initDefineProp(this, "selectedClass", _descriptor3, this);

        this.auTable = auTable;
        this.element = element;
        this.bindingEngine = bindingEngine;

        this.rowSelectedListener = () => {
            this.handleRowSelected();
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
        if (this.row.$IsSelected) {
            this.element.classList.add(this.selectedClass);
        } else {
            this.element.classList.remove(this.selectedClass);
        }
    }

    handleRowSelected() {
        if (this.mode === 'single') {
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
            if (item !== this.row) {
                item.$IsSelected = false;
            }
        });
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "row", [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mode", [bindable], {
    enumerable: true,
    initializer: function () {
        return 'single';
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectedClass", [bindable], {
    enumerable: true,
    initializer: function () {
        return 'aut-row-selected';
    }
})), _class2)) || _class);