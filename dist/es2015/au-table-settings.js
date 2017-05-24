var _desc, _value, _class, _descriptor, _descriptor2;

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

import { observable } from "aurelia-framework";

export let TableSettings = (_class = class TableSettings {

    get start() {
        return (this.currentPage - 1) * this.pageSize;
    }

    constructor(getItems) {
        _initDefineProp(this, "pageSize", _descriptor, this);

        _initDefineProp(this, "currentPage", _descriptor2, this);

        this.totalItems = 0;
        this.draw = 0;
    }

    pageSizeChanged(newValue, oldValue) {
        if (oldValue === undefined) {
            return;
        }
        this.loadItems();
    }

    currentPageChanged(newValue, oldValue) {
        if (oldValue === undefined) {
            return;
        }
        this.loadItems();
    }

    loadItems() {
        let query = this.buildQuery();
        return this.getItems(query).then(result => {
            this.items = result.items;
            this.totalItems = result.totalItems;
        });
    }

    buildQuery() {
        return {
            draw: this.draw++,
            start: this.start,
            pageSize: this.pageSize,
            filter: this.filter
        };
    }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "pageSize", [observable], {
    enumerable: true,
    initializer: function () {
        return 10;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "currentPage", [observable], {
    enumerable: true,
    initializer: function () {
        return 1;
    }
})), _class);

export let TableResult = class TableResult {
    constructor(result) {
        this.draw = result.draw;
        this.totalItems = result.totalItems;
        this.items = result.items;
    }
};