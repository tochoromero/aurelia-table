var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

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

export let AuTableCustomAttribute = (_dec = inject(BindingEngine), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class AuTableCustomAttribute {

    constructor(bindingEngine) {
        _initDefineProp(this, "data", _descriptor, this);

        _initDefineProp(this, "displayData", _descriptor2, this);

        _initDefineProp(this, "filterText", _descriptor3, this);

        _initDefineProp(this, "filterKeys", _descriptor4, this);

        _initDefineProp(this, "currentPage", _descriptor5, this);

        _initDefineProp(this, "pageSize", _descriptor6, this);

        _initDefineProp(this, "totalItems", _descriptor7, this);

        this.isAttached = false;
        this.sortChangedListeners = [];

        this.dataObserver = bindingEngine.collectionObserver(this.data).subscribe(() => this.applyPlugins());
    }

    attached() {
        this.isAttached = true;
        this.applyPlugins();
    }

    detached() {
        this.dataObserver.dispose();
    }

    filterTextChanged() {
        if (this.hasPagination()) {
            this.currentPage = 1;
        }
        this.applyPlugins();
    }

    filterKeysChanged() {
        if (this.hasPagination()) {
            this.currentPage = 1;
        }
        this.applyPlugins();
    }

    currentPageChanged() {
        this.applyPlugins();
    }

    getDataCopy() {
        return [].concat(this.data);
    }

    applyPlugins() {
        if (!this.isAttached) {
            return;
        }

        let localData = this.getDataCopy();

        if (this.hasFilter()) {
            localData = this.doFilter(localData);
        }

        if (this.sortKey && this.sortOrder !== 0) {
            this.doSort(localData, this.sortKey, this.sortOrder);
        }

        this.totalItems = localData.length;

        if (this.hasPagination()) {
            localData = this.doPaginate(localData);
        }

        this.displayData = localData;
    }

    doFilter(toFilter) {
        let filteredData = [];

        for (let next of toFilter) {
            for (let key of this.filterKeys) {
                let value = next[key].toString();

                if (value.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) {
                    filteredData.push(next);
                    break;
                }
            }
        }

        return filteredData;
    }

    doSort(toSort, sortKey, sortOrder) {
        toSort.sort((a, b) => {

            let val1;
            let val2;

            if (typeof sortKey === "function") {
                val1 = sortKey(a);
                val2 = sortKey(b);
            } else {
                val1 = a[sortKey];
                val2 = b[sortKey];
            }

            if (isNaN(val1)) {
                let str1 = val1.toString();
                let str2 = val2.toString();

                return str1.localeCompare(str2) * sortOrder;
            } else {
                return (val1 - val2) * sortOrder;
            }
        });
    }

    doPaginate(toPaginate) {
        if (toPaginate.length <= this.pageSize) {
            return toPaginate;
        }

        let start = (this.currentPage - 1) * this.pageSize;

        let end = start + this.pageSize;

        return toPaginate.slice(start, end);
    }

    hasFilter() {
        return this.filterText && (typeof this.filterText === 'string' || this.filterText instanceof String) && this.filterText.trim().length > 0 && this.filterKeys.length > 0;
    }

    hasPagination() {
        return this.currentPage > 0;
    }

    dataChanged() {
        this.applyPlugins();
    }

    sortChanged(key, order) {
        this.sortKey = key;
        this.sortOrder = order;
        this.applyPlugins();
        this.emitSortChanged();
    }

    addSortChangedListener(callback) {
        this.sortChangedListeners.push(callback);
    }

    removeSortChangedListener(callback) {
        this.removeListener(callback, this.sortChangedListeners);
    }

    emitSortChanged() {
        for (let listener of this.sortChangedListeners) {
            listener();
        }
    }

    removeListener(callback, listeners) {
        var index = listeners.indexOf(callback);

        if (index > -1) {
            listeners.splice(index, 1);
        }
    }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "data", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "displayData", [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "filterText", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "filterKeys", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "currentPage", [_dec3], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pageSize", [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "totalItems", [_dec4], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);