var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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
import { AuTableCustomAttribute } from 'au-table/au-table';

export let AutFilterCustomAttribute = (_dec = inject(AuTableCustomAttribute), _dec(_class = (_class2 = class AutFilterCustomAttribute {

    constructor(auTable) {
        _initDefineProp(this, 'filterText', _descriptor, this);

        _initDefineProp(this, 'filterKeys', _descriptor2, this);

        this.auTable = auTable;
    }

    bind() {
        this.auTable.filterKeys = this.filterKeys;
    }

    filterTextChanged(newValue) {
        this.auTable.setFilterText(newValue);
    }

    filterKeysChanged(newValue) {
        this.auTable.setFilterKeys(newValue);
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'filterText', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'filterKeys', [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);